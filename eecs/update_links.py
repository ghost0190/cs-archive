import os
import re
from pathlib import Path

# 设置目录
zh_dir = Path("d:/File/cs-archive/eecs/eecs70-zh")

# 查找所有HTML文件
html_files = list(zh_dir.rglob("*.html"))

print(f"找到 {len(html_files)} 个HTML文件")

for html_file in html_files:
    rel_path = html_file.relative_to(zh_dir)
    print(f"处理: {rel_path}")
    
    # 跳过备份和外部网站目录
    if 'bcourses.berkeley.edu' in str(rel_path) or 'edstem.org' in str(rel_path) or 'oh.eecs70.org' in str(rel_path):
        print(f"  跳过: 外部网站")
        continue
    
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 更新PDF链接
        # 匹配: assets/pdf/xxx.pdf -> assets/pdf/xxx-cn.pdf
        # 但跳过已经是 -cn.pdf 的链接
        def replace_pdf(match):
            link = match.group(0)
            if '-cn.pdf' in link:
                return link  # 已经是中文链接，跳过
            # 添加 -cn 后缀
            return link.replace('.pdf', '-cn.pdf')
        
        # 更新pdf链接
        content = re.sub(r'assets/pdf/[a-zA-Z0-9\-_\./]+\.pdf', replace_pdf, content)
        
        # 保存
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"  错误: {e}")
        continue

print("\n完成！所有PDF链接已更新")
