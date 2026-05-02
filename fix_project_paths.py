import os

def correct_paths(base_path):
    # 找出所有需要修复的页面路径
    pages = [
        ('cs61c/sp26-zh/projects/proj1/index.html', 2),
        ('cs61c/sp26-zh/projects/proj2/index.html', 2),
        ('cs61c/sp26-zh/projects/proj2/part-a/index.html', 3),
        ('cs61c/sp26-zh/projects/proj2/part-b/index.html', 3),
        ('cs61c/sp26-zh/projects/proj2/calling-convention/index.html', 3),
        ('cs61c/sp26-zh/projects/proj2/function-definitions/index.html', 3),
        ('cs61c/sp26-zh/projects/proj3/index.html', 2),
        ('cs61c/sp26-zh/projects/proj3/part-a/index.html', 3),
        ('cs61c/sp26-zh/projects/proj3/part-b/index.html', 3),
        ('cs61c/sp26-zh/projects/proj3/testing/index.html', 3),
        
        ('cs61c/sp26-en/projects/proj1/index.html', 2),
        ('cs61c/sp26-en/projects/proj2/index.html', 2),
        ('cs61c/sp26-en/projects/proj2/part-a/index.html', 3),
        ('cs61c/sp26-en/projects/proj2/part-b/index.html', 3),
        ('cs61c/sp26-en/projects/proj2/calling-convention/index.html', 3),
        ('cs61c/sp26-en/projects/proj2/function-definitions/index.html', 3),
        ('cs61c/sp26-en/projects/proj3/index.html', 2),
        ('cs61c/sp26-en/projects/proj3/part-a/index.html', 3),
        ('cs61c/sp26-en/projects/proj3/part-b/index.html', 3),
        ('cs61c/sp26-en/projects/proj3/testing/index.html', 3),
    ]
    
    count = 0
    
    for page_rel, depth in pages:
        page_path = os.path.join(base_path, page_rel)
        if not os.path.exists(page_path):
            continue
        
        prefix = '../' * depth
        fixed = fix_file(page_path, prefix)
        if fixed:
            count += 1
    
    print(f"Fixed {count} pages.")


def fix_file(file_path, prefix):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    updated = False
    
    # 修复CSS和JS的路径
    old_css = 'js/main'
    new_css = f'{prefix}js/main'
    
    old_js_sync = 'js/main-sync'
    new_js_sync = f'{prefix}js/main-sync'
    
    old_css_link = 'css/main'
    new_css_link = f'{prefix}css/main'
    
    content = content.replace(old_css, new_css)
    content = content.replace(old_js_sync, new_js_sync)
    content = content.replace(old_css_link, new_css_link)
    
    updated = True
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed: {file_path} (prefix: {prefix})")
    return updated


if __name__ == '__main__':
    base_path = 'd:/File/cs-archive'
    correct_paths(base_path)
