import os
import glob

base = r'd:\File\cs-archive\cs61c'

# Find all HTML files that still have cs61c.org links
html_files = glob.glob(os.path.join(base, '**', '*.html'), recursive=True)

fixed_count = 0
for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Skip if no cs61c.org links
    if 'cs61c.org/sp26/' not in content:
        continue
    
    # Determine depth from projects/ root
    rel_path = os.path.relpath(filepath, base)
    parts = rel_path.replace('\\', '/').split('/')
    
    # Find where 'sp26-en' or 'sp26-zh' is in the path
    sp26_idx = None
    for i, p in enumerate(parts):
        if p.startswith('sp26-'):
            sp26_idx = i
            break
    
    if sp26_idx is None:
        continue
    
    # Calculate relative path back to sp26 root
    depth_from_sp26 = len(parts) - sp26_idx - 2  # -2 for sp26-xx/ and filename
    prefix = '../' * depth_from_sp26 if depth_from_sp26 > 0 else ''
    
    # Fix navigation links (both quoted and unquoted)
    replacements = [
        (f'href=https://cs61c.org/sp26/calendar/>', f'href={prefix}calendar/index.html>'),
        (f'href="https://cs61c.org/sp26/calendar/"', f'href="{prefix}calendar/index.html"'),
        (f'href=https://cs61c.org/sp26/exam/>', f'href={prefix}exam/index.html>'),
        (f'href="https://cs61c.org/sp26/exam/"', f'href="{prefix}exam/index.html"'),
        (f'href=https://cs61c.org/sp26/policies/>', f'href={prefix}policies/index.html>'),
        (f'href="https://cs61c.org/sp26/policies/"', f'href="{prefix}policies/index.html"'),
        (f'href=https://cs61c.org/sp26/staff/>', f'href={prefix}staff/index.html>'),
        (f'href="https://cs61c.org/sp26/staff/"', f'href="{prefix}staff/index.html"'),
        (f'href=https://cs61c.org/sp26/>', f'href={prefix}index.html>'),
        (f'href="https://cs61c.org/sp26/"', f'href="{prefix}index.html"'),
        (f'href=https://cs61c.org/sp26/resources/>', f'href={prefix}resources/index.html>'),
        (f'href="https://cs61c.org/sp26/resources/"', f'href="{prefix}resources/index.html"'),
    ]
    
    # Fix lab links
    for lab_num in range(0, 15):
        lab_name = f'lab{lab_num:02d}'
        replacements.append((f'href=https://cs61c.org/sp26/labs/{lab_name}/>', f'href={prefix}labs/{lab_name}/index.html>'))
        replacements.append((f'href="https://cs61c.org/sp26/labs/{lab_name}/"', f'href="{prefix}labs/{lab_name}/index.html"'))
    
    # Fix project links
    for proj_name in ['proj0', 'proj1', 'proj2', 'proj3']:
        replacements.append((f'href=https://cs61c.org/sp26/projects/{proj_name}/>', f'href={prefix}projects/{proj_name}/index.html>'))
        replacements.append((f'href="https://cs61c.org/sp26/projects/{proj_name}/"', f'href="{prefix}projects/{proj_name}/index.html"'))
    
    # Fix discussion links
    for disc_num in range(1, 15):
        disc_name = f'disc{disc_num:02d}'
        replacements.append((f'href=https://cs61c.org/sp26/discussions/{disc_name}/>', f'href={prefix}discussions/{disc_name}/index.html>'))
        replacements.append((f'href="https://cs61c.org/sp26/discussions/{disc_name}/"', f'href="{prefix}discussions/{disc_name}/index.html"'))
    
    # Fix homework links
    for hw_num in range(1, 10):
        hw_name = f'hw{hw_num:02d}'
        replacements.append((f'href=https://cs61c.org/sp26/homework/{hw_name}/>', f'href={prefix}homework/{hw_name}/index.html>'))
        replacements.append((f'href="https://cs61c.org/sp26/homework/{hw_name}/"', f'href="{prefix}homework/{hw_name}/index.html"'))
    
    # Fix lecture links
    for lec_num in range(1, 40):
        lec_name = f'lec{lec_num:02d}'
        replacements.append((f'href=https://cs61c.org/sp26/lectures/{lec_name}/>', f'href={prefix}lectures/{lec_name}/index.html>'))
        replacements.append((f'href="https://cs61c.org/sp26/lectures/{lec_name}/"', f'href="{prefix}lectures/{lec_name}/index.html"'))
    
    # Fix resources sub-pages
    for res_sub in ['common-errors', 'exams', 'extensions']:
        replacements.append((f'href=https://cs61c.org/sp26/resources/{res_sub}/>', f'href={prefix}resources/{res_sub}/index.html>'))
        replacements.append((f'href="https://cs61c.org/sp26/resources/{res_sub}/"', f'href="{prefix}resources/{res_sub}/index.html"'))
    
    for old, new in replacements:
        content = content.replace(old, new)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_count += 1
        print(f'Fixed: {os.path.relpath(filepath, base)}')

print(f'\nTotal files fixed: {fixed_count}')
