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
                    if fix_single_page(file_path):
                        count += 1
    
    print(f"Fixed {count} pages.")


def fix_single_page(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 检查是否已经有完整的引用
    if 'main-sync' in content and 'main' in content and 'initDarkToggle' in content:
        return False
    
    # 计算深度
    depth = calculate_depth(file_path)
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
    if 'main﹖h=f8bd781ba155b1b368c870416f8523be84e7ec2bcec8d335573a0c95c849e327.css' not in content and 'href="css/main' not in content:
        # 在 <title> 后面添加 CSS 链接
        pos = content.find('</title>')
        if pos != -1:
            content = content[:pos+8] + '\n' + css_link + content[pos+8:]
            updated = True
    
    # 检查脚本是否缺失
    if 'main-sync' not in content or 'main' not in content or 'initDarkToggle' not in content:
        # 在 </footer> 后面添加脚本
        pos = content.find('</footer>')
        if pos != -1:
            content = content[:pos+9] + '\n' + scripts + content[pos+9:]
            updated = True
    
    if updated:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {file_path}")
        return True
    
    return False


def calculate_depth(file_path):
    # 从项目目录开始计算深度到 cs61c/sp26-zh/ 或 sp26-en/
    rel_path = file_path.split('cs61c')[-1]
    return rel_path.count(os.sep) - 3


if __name__ == '__main__':
    base_path = 'd:/File/cs-archive'
    fix_project_pages(base_path)
