import os

def fix_scripts(base_path):
    # 所有需要修复的页面
    pages = [
        'cs61c/sp26-zh/projects/proj2/part-a/index.html',
        'cs61c/sp26-zh/projects/proj2/part-b/index.html',
        'cs61c/sp26-zh/projects/proj2/calling-convention/index.html',
        'cs61c/sp26-zh/projects/proj2/function-definitions/index.html',
        'cs61c/sp26-zh/projects/proj3/part-a/index.html',
        'cs61c/sp26-zh/projects/proj3/part-b/index.html',
        'cs61c/sp26-zh/projects/proj3/testing/index.html',
        
        'cs61c/sp26-en/projects/proj2/part-a/index.html',
        'cs61c/sp26-en/projects/proj2/part-b/index.html',
        'cs61c/sp26-en/projects/proj2/calling-convention/index.html',
        'cs61c/sp26-en/projects/proj2/function-definitions/index.html',
        'cs61c/sp26-en/projects/proj3/part-a/index.html',
        'cs61c/sp26-en/projects/proj3/part-b/index.html',
        'cs61c/sp26-en/projects/proj3/testing/index.html',
    ]
    
    for page_rel in pages:
        page_path = os.path.join(base_path, page_rel)
        if not os.path.exists(page_path):
            continue
        
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 修复错误的 script 标签结构
        # 将 <script>initDarkToggle();\n  <script>initToC();</script></script>
        # 改为两个独立的 script 标签
        bad_pattern = '<script>initDarkToggle();\n  <script>initToC();</script></script>'
        good_pattern = '<script>initDarkToggle();</script>\n  <script>initToC();</script>'
        
        if bad_pattern in content:
            content = content.replace(bad_pattern, good_pattern)
            
            with open(page_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed: {page_path}")


if __name__ == '__main__':
    base_path = 'd:/File/cs-archive'
    fix_scripts(base_path)
    print("\nAll script tags fixed!")
