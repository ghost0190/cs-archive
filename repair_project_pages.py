import os

def repair_all(base_path):
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
        fixed = repair_single_file(page_path, prefix)
        if fixed:
            count += 1
    
    print(f"Fixed {count} pages.")


def repair_single_file(file_path, prefix):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 先找到之前添加的脚本部分，完全重写它
    # 首先查找是否有我们添加的脚本内容
    start_marker = '<script defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js" referrerpolicy="no-referrer"></script>'
    end_marker = '<script>initDarkToggle();</script>'
    
    start_pos = content.find(start_marker)
    end_pos = content.find(end_marker)
    
    if start_pos != -1 and end_pos != -1:
        # 删除旧的脚本内容
        content = content[:start_pos] + content[end_pos + len(end_marker):]
        
        # 添加正确的脚本内容
        correct_scripts = f'''
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js" referrerpolicy="no-referrer"></script>
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/instant.page/5.1.0/instantpage.min.js"></script>
  <script defer type="text/javascript" src="{prefix}js/main﹖h=ad997e2a23022756f6ea00b8b4e23a4ee1a56495d9f493dcb7b75cae0dc3465f.js"></script>
  <script type="text/javascript" src="{prefix}js/main-sync﹖h=a5a9607bf30db01764e4c92a4d4832318d20ec7d3ec29af4ddf72b7ddcb13817.js"></script>
  <script>initDarkToggle();</script>'''
        
        # 在 </footer> 后面插入
        footer_pos = content.find('</footer>')
        if footer_pos != -1:
            content = content[:footer_pos + 9] + correct_scripts + content[footer_pos + 9:]
    
    # 现在处理 CSS 链接
    # 检查是否有 CSS 链接需要修复
    css_link = f'<link rel="stylesheet" href="{prefix}css/main﹖h=f8bd781ba155b1b368c870416f8523be84e7ec2bcec8d335573a0c95c849e327.css">'
    
    # 查找是否已经有 CSS 链接
    if 'main﹖h=f8bd781ba155b1b368c870416f8523be84e7ec2bcec8d335573a0c95c849e327.css' not in content:
        # 在 </title> 后添加
        title_pos = content.find('</title>')
        if title_pos != -1:
            content = content[:title_pos + 8] + '\n' + css_link + content[title_pos + 8:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed: {file_path} (prefix: {prefix})")
    return True


if __name__ == '__main__':
    base_path = 'd:/File/cs-archive'
    repair_all(base_path)
