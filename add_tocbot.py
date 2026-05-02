import os

def add_tocbot_to_pages(base_path):
    # 所有需要修复的页面及其深度
    pages = [
        ('cs61c/sp26-zh/projects/proj2/part-a/index.html', 3),
        ('cs61c/sp26-zh/projects/proj2/part-b/index.html', 3),
        ('cs61c/sp26-zh/projects/proj2/calling-convention/index.html', 3),
        ('cs61c/sp26-zh/projects/proj2/function-definitions/index.html', 3),
        ('cs61c/sp26-zh/projects/proj3/part-a/index.html', 3),
        ('cs61c/sp26-zh/projects/proj3/part-b/index.html', 3),
        ('cs61c/sp26-zh/projects/proj3/testing/index.html', 3),
        
        ('cs61c/sp26-en/projects/proj2/part-a/index.html', 3),
        ('cs61c/sp26-en/projects/proj2/part-b/index.html', 3),
        ('cs61c/sp26-en/projects/proj2/calling-convention/index.html', 3),
        ('cs61c/sp26-en/projects/proj2/function-definitions/index.html', 3),
        ('cs61c/sp26-en/projects/proj3/part-a/index.html', 3),
        ('cs61c/sp26-en/projects/proj3/part-b/index.html', 3),
        ('cs61c/sp26-en/projects/proj3/testing/index.html', 3),
    ]
    
    for page_rel, depth in pages:
        page_path = os.path.join(base_path, page_rel)
        if not os.path.exists(page_path):
            continue
        
        prefix = '../' * depth
        
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 检查是否已经有 tocbot
        if 'tocbot' not in content:
            # 在 bootstrap 脚本后添加 tocbot
            bootstrap_marker = 'twitter-bootstrap/5.1.3/js/bootstrap.min.js'
            pos = content.find(bootstrap_marker)
            if pos != -1:
                # 找到这个脚本标签的结束位置
                end_pos = content.find('</script>', pos) + 9
                
                # 添加 tocbot 脚本
                tocbot_script = f'\n  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.17.0/tocbot.min.js" referrerpolicy="no-referrer"></script>'
                content = content[:end_pos] + tocbot_script + content[end_pos:]
        
        # 检查是否已经有 initToC() 调用
        if 'initToC()' not in content:
            # 在 initDarkToggle(); 后添加 initToC();
            dark_toggle_marker = 'initDarkToggle();'
            pos = content.find(dark_toggle_marker)
            if pos != -1:
                end_pos = pos + len(dark_toggle_marker)
                # 在 initDarkToggle(); 后添加 initToC();
                content = content[:end_pos] + '\n  <script>initToC();</script>' + content[end_pos:]
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {page_path}")


if __name__ == '__main__':
    base_path = 'd:/File/cs-archive'
    add_tocbot_to_pages(base_path)
    print("\nAll pages fixed!")
