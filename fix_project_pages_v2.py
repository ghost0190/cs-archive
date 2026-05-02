import os

def fix_project_pages(base_path):
    # 找出所有项目页面
    projects = [
        'cs61c/sp26-zh/projects/proj1/',
        'cs61c/sp26-zh/projects/proj2/',
        'cs61c/sp26-zh/projects/proj3/',
        'cs61c/sp26-en/projects/proj1/',
        'cs61c/sp26-en/projects/proj2/',
        'cs61c/sp26-en/projects/proj3/',
    ]
    
    count = 0
    
    for project in projects:
        full_path = os.path.join(base_path, project)
        if not os.path.exists(full_path):
            continue
        
        for root, dirs, files in os.walk(full_path):
            for filename in files:
                if filename == 'index.html':
                    file_path = os.path.join(root, filename)
                    if fix_single_page(file_path, base_path):
                        count += 1
    
    print(f"Fixed {count} pages.")


def fix_single_page(file_path, base_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 检查是否已经有正确的引用（先撤销之前可能的错误修复）
    if 'js/main' in content and 'js/main-sync' in content and 'initDarkToggle' in content:
        # 需要先移除之前可能添加的错误内容
        pos = content.find('<script defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js" referrerpolicy="no-referrer"></script>')
        if pos != -1:
            end = content.find('</script>', pos + 100) + 10
            content = content[:pos] + content[end:]
    
    # 计算正确的路径深度
    # 例如，从 cs61c/sp26-zh/projects/proj2/part-a/index.html 到 cs61c/sp26-zh/ 需要 ../../
    depth = calculate_depth(file_path, base_path)
    prefix = '../' * depth if depth > 0 else ''
    
    # 定义正确的内容
    css_link = f'<link rel="stylesheet" href="{prefix}css/main﹖h=f8bd781ba155b1b368c870416f8523be84e7ec2bcec8d335573a0c95c849e327.css">'
    
    scripts = f'''
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js" referrerpolicy="no-referrer"></script>
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/instant.page/5.1.0/instantpage.min.js"></script>
  <script defer type="text/javascript" src="{prefix}js/main﹖h=ad997e2a23022756f6ea00b8b4e23a4ee1a56495d9f493dcb7b75cae0dc3465f.js"></script>
  <script type="text/javascript" src="{prefix}js/main-sync﹖h=a5a9607bf30db01764e4c92a4d4832318d20ec7d3ec29af4ddf72b7ddcb13817.js"></script>
  <script>initDarkToggle();</script>'''
    
    updated = False
    
    # 检查 CSS 是否缺失
    if 'main﹖h=f8bd781ba155b1b368c870416f8523be84e7ec2bcec8d335573a0c95c849e327.css' not in content and f'{prefix}css/main' not in content:
        # 在 <title> 后面添加 CSS 链接
        pos = content.find('</title>')
        if pos != -1:
            content = content[:pos+8] + '\n' + css_link + content[pos+8:]
            updated = True
    
    # 检查脚本是否缺失
    if f'{prefix}js/main-sync' not in content or f'{prefix}js/main' not in content or 'initDarkToggle' not in content:
        # 在 </footer> 后面添加脚本
        pos = content.find('</footer>')
        if pos != -1:
            content = content[:pos+9] + '\n' + scripts + content[pos+9:]
            updated = True
    
    if updated:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {file_path} (prefix: {prefix})")
        return True
    
    return False


def calculate_depth(file_path, base_path):
    # 找到 cs61c/ 目录的位置
    rel_path = file_path.split('cs61c')[-1]
    # 统计路径深度（去掉文件名 index.html）
    parts = rel_path.split(os.sep)
    # 例如 sp26-zh/projects/proj2/part-a/ -> 深度 3
    return len(parts) - 3


if __name__ == '__main__':
    base_path = 'd:/File/cs-archive'
    fix_project_pages(base_path)
