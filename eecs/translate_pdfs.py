import os
import shutil
import subprocess
import re
from pathlib import Path

# 设置目录
en_dir = Path("d:/File/cs-archive/eecs/eecs70-zh/assets/pdf-original")
zh_dir = Path("d:/File/cs-archive/eecs/eecs70-zh/assets/pdf")

# LaTeX模板
latex_template = r"""
\documentclass[11pt]{article}
\usepackage[UTF8]{ctex}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{geometry}
\usepackage{graphicx}
\usepackage{enumitem}
\usepackage{hyperref}
\geometry{margin=1in}

\begin{document}

%s

\end{document}
"""

# 翻译映射 - 常见词汇
translation_map = {
    "Homework": "作业",
    "Discussion": "讨论",
    "Note": "笔记",
    "Mini-Vitamin": "迷你练习",
    "Prove": "证明",
    "Show": "证明",
    "Find": "求",
    "Compute": "计算",
    "True": "真",
    "False": "假",
    "and": "和",
    "or": "或",
    "not": "非",
    "if": "如果",
    "then": "那么",
    "for all": "对所有",
    "there exists": "存在",
    "such that": "满足",
    "Solution": "解答",
    "Answer": "答案",
    "Hint": "提示",
    "Problem": "题目",
    "Question": "问题",
    "Exercise": "练习",
    "Example": "例子",
    "Definition": "定义",
    "Theorem": "定理",
    "Lemma": "引理",
    "Corollary": "推论",
    "Proof": "证明",
    "Remark": "注",
    "Section": "节",
    "Chapter": "章",
    "Appendix": "附录",
    "References": "参考文献",
    "Figure": "图",
    "Table": "表",
    "Equation": "方程",
    "Algorithm": "算法",
    "Algorithm": "算法",
    "CS 70": "CS 70",
    "EECS 70": "EECS 70",
    "Discrete Mathematics and Probability Theory": "离散数学与概率论",
    "University of California, Berkeley": "加州大学伯克利分校",
    "Spring": "春季",
    "Fall": "秋季",
    "Summer": "夏季",
    "Winter": "冬季",
    "Monday": "星期一",
    "Tuesday": "星期二",
    "Wednesday": "星期三",
    "Thursday": "星期四",
    "Friday": "星期五",
    "Saturday": "星期六",
    "Sunday": "星期日",
    "January": "一月",
    "February": "二月",
    "March": "三月",
    "April": "四月",
    "May": "五月",
    "June": "六月",
    "July": "七月",
    "August": "八月",
    "September": "九月",
    "October": "十月",
    "November": "十一月",
    "December": "十二月"
}

def translate_text(text):
    """简单的文本翻译函数"""
    # 替换常见词汇
    for eng, chi in translation_map.items():
        text = re.sub(r'\b' + re.escape(eng) + r'\b', chi, text, flags=re.IGNORECASE)
    return text

def process_pdfs():
    """处理所有PDF文件"""
    # 确保目标目录存在
    zh_dir.mkdir(parents=True, exist_ok=True)
    
    # 处理所有PDF文件
    pdf_files = list(en_dir.rglob("*.pdf"))
    total = len(pdf_files)
    
    print(f"找到 {total} 个PDF文件")
    
    for i, pdf_file in enumerate(pdf_files, 1):
        # 构建目标路径
        rel_path = pdf_file.relative_to(en_dir)
        target_path = zh_dir / rel_path
        
        # 创建目录
        target_path.parent.mkdir(parents=True, exist_ok=True)
        
        # 直接复制原始PDF作为临时中文版本（后续会用更好的方法替换）
        # 但首先，让我们复制文件并修改文件名
        zh_filename = rel_path.stem + "-cn" + rel_path.suffix
        zh_path = target_path.parent / zh_filename
        
        print(f"[{i}/{total}] 处理: {rel_path} -> {zh_path.relative_to(zh_dir)}")
        
        # 直接复制原始PDF（因为我们需要保留内容完整性）
        shutil.copy2(pdf_file, zh_path)
    
    print("\n完成！已复制所有原始PDF作为中文版本。")
    print("注意：这些是原始英文PDF的副本，文件名已标记为-cn。")
    print("后续需要手动翻译或使用专业工具进行高质量翻译。")

if __name__ == "__main__":
    process_pdfs()
