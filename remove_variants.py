import os, re, shutil

"""
Remove all variant course directories and their entry points.
Keeps only CS50x.
"""

variants = ['games', 'ai', 'business', 'cybersecurity', 'law', 'python', 'r', 'scratch', 'sql', 'web', 'mobile', 'technology']
extra_dirs = ['ap', 'college', 'extension', 'summer', 'workshop']

def remove_variant_sidebar_links(content):
    """
    Remove variant course <li> entries from the Courses sidebar section.
    Preserves the CS50x link only.
    """
    result = []
    i = 0
    lines = content.split('\n')
    while i < len(lines):
        line = lines[i]
        if line.strip() == '<!-- Courses -->':
            block_start = i
            block_end = -1
            for j in range(i, min(i+25, len(lines))):
                if lines[j].strip() == '</ul>':
                    block_end = j
                    break
            if block_end > 0:
                block_text = '\n'.join(lines[i:block_end+1])
                has_variant = any(v in block_text for v in variants)
                if has_variant and 'cS50 2D' in block_text or 'CS50 AI' in block_text or 'CS50 Python' in block_text:
                    prefix_match = re.search(r'<a href="((?:\.\./)+)', block_text)
                    if prefix_match:
                        prefix = prefix_match.group(1)
                        new_block = f'<!-- Courses -->\n<hr>\n\n<ul>\n  <li data-marker="*"><a href="{prefix}courses/index.html"><strong>课程</strong></a></li>\n  <li data-marker="*" class="small"><a href="{prefix}index.html">CS50x</a></li>\n</ul>'
                        result.append(new_block)
                        i = block_end + 1
                        continue
        result.append(line)
        i += 1
    return '\n'.join(result)


# ==================== Step 1: Fix sidebar in all x/ HTML files ====================
count = 0
for root, dirs, files in os.walk('cs50/cs50-zh/x'):
    for fn in files:
        if not fn.endswith('.html'):
            continue
        fp = os.path.join(root, fn)
        try:
            with open(fp, 'r', encoding='utf-8') as fh:
                content = fh.read()
        except:
            continue
        orig = content
        content = remove_variant_sidebar_links(content)
        if content != orig:
            with open(fp, 'w', encoding='utf-8') as fh:
                fh.write(content)
            count += 1
print(f"Step 1: Fixed {count} x/ files - removed variant sidebar links")

# ==================== Step 2: Clean up x/faqs AP reference ====================
faqs_fp = 'cs50/cs50-zh/x/faqs/index.html'
try:
    with open(faqs_fp, 'r', encoding='utf-8') as fh:
        content = fh.read()
    if '../../ap/index.html' in content:
        content = content.replace(
            '<p>如果你是一名寻求学分的高中生，最好向你的老师或学术顾问展示<a href="../../ap/index.html">CS50 AP</a>。你需要获得他们的授权才能获得官方学分。欢迎你选修这门或我们的任何课程。但是，只有你学校的官方代表才能为完成我们的任何课程提供学分。</p>',
            ''
        )
        with open(faqs_fp, 'w', encoding='utf-8') as fh:
            fh.write(content)
        print("Step 2: Removed AP reference from x/faqs")
except Exception as e:
    print(f"Step 2 Error: {e}")

# ==================== Step 3: Clean up x/2024/faqs and x/2025/faqs AP references ====================
for yr in ['2024', '2025']:
    fp = f'cs50/cs50-zh/x/{yr}/faqs/index.html'
    try:
        with open(fp, 'r', encoding='utf-8') as fh:
            content = fh.read()
        if '../../../ap/index.html' in content:
            content = content.replace(
                '<p>如果你是一名寻求学分的高中生，最好向你的老师或学术顾问展示 <a href="../../../ap/index.html">CS50 AP</a>。你需要获得他们的授权才能获得官方学分。欢迎你选修这门或我们的任何课程。但是，只有你学校的官方代表才能为完成我们的任何课程提供学分。</p>',
                ''
            )
            with open(fp, 'w', encoding='utf-8') as fh:
                fh.write(content)
            print(f"Step 2: Removed AP reference from x/{yr}/faqs")
    except Exception as e:
        print(f"Step 2 Error ({yr}): {e}")

# ==================== Step 4: Clean up courses page main content ====================
courses_fp = 'cs50/cs50-zh/x/courses/index.html'
try:
    with open(courses_fp, 'r', encoding='utf-8') as fh:
        content = fh.read()
    orig = content

    # Remove variant course description sections from the main content
    # Pattern: everything after the CS50x intro paragraph until </main>
    # Find the start of variant sections (after the CS50x list item)
    sections_to_remove = [
        # "延续课程" section
        (r'<li data-marker="\*">以下可被认为是"延续课程"。这些课程以.*?(?=</ul>\s*</li>)', 'removed 延续课程 section'),
        # "正交编程课程" section
        (r'<li data-marker="\*">以下编程课程与 CS50x 的关系更为正交。它们可以在.*?(?=</ul>\s*</li>)', 'removed 正交编程课程 section'),
        # "特定领域专业人士" section
        (r'<li data-marker="\*">这些课程面向特定领域的专业人士.*?(?=</ul>\s*</li>)', 'removed 专业人士 section'),
        # "已停开课程" section
        (r'<li data-marker="\*">以下课程已停开.*?(?=</ul>\s*</li>)', 'removed 已停开课程 section'),
    ]

    for pattern, desc in sections_to_remove:
        m = re.search(pattern, content, re.DOTALL)
        if m:
            content = content[:m.start()] + content[m.end():]
            print(f"Step 3: {desc}")

    if content != orig:
        with open(courses_fp, 'w', encoding='utf-8') as fh:
            fh.write(content)
except Exception as e:
    print(f"Step 3 Error: {e}")

# ==================== Step 5: Remove variant directories ====================
all_to_delete = variants + extra_dirs
deleted = 0
for v in all_to_delete:
    d = f'cs50/cs50-zh/{v}'
    if os.path.exists(d):
        file_count = sum(len(files) for _, _, files in os.walk(d))
        shutil.rmtree(d)
        print(f"Step 4: Deleted {d}/ ({file_count} files)")
        deleted += 1
print(f"Step 4: Removed {deleted} variant directories total")

# ==================== Step 6: Remove cs50-en variant entries (if they mirror cs50-zh variants) ====================
# Only remove variant directories under cs50/cs50-en that match
for v in variants + extra_dirs:
    d = f'cs50/cs50-en/{v}'
    if os.path.exists(d):
        file_count = sum(len(files) for _, _, files in os.walk(d))
        shutil.rmtree(d)
        print(f"Step 4: Deleted {d}/ ({file_count} files)")

print("\nDone! All variant courses removed.")
