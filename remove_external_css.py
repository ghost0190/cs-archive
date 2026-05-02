import os

def remove_external_css(base_path):
    # 所有需要修复的页面
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
        
        # 移除可能错误添加的外部CSS链接（因为页面已有内联样式）
        bad_css_patterns = [
            f'<link rel="stylesheet" href="{prefix}css/main',
            '<link rel="stylesheet" href="../../../css/main',
            '<link rel="stylesheet" href="../../css/main',
            '<link rel="stylesheet" href="../css/main',
        ]
        
        for pattern in bad_css_patterns:
            while pattern in content:
                start = content.find(pattern)
                if start == -1:
                    break
                end = content.find('>', start) + 1
                # 也删除换行符
                if content[end:end+1] == '\n':
                    end += 1
                content = content[:start] + content[end:]
                print(f"Removed CSS link from: {page_path}")
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)


if __name__ == '__main__':
    base_path = 'd:/File/cs-archive'
    remove_external_css(base_path)
    print("\nExternal CSS links removed!")
