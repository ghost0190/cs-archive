import os

"""Fix remaining English in weeks/ og:description meta tags"""

weeks = {
    '0': {
        'Computer Science. 计算思维. 问题解决: Inputs, Outputs. Representation: Unary, Binary, Decimal, ASCII, Unicode, RGB. 抽象....':
        '计算机科学。计算思维。问题解决：输入、输出。表示：一元、二进制、十进制、ASCII、Unicode、RGB。抽象...',
    },
    '1': {
        'C. 源代码. Machine Code. Compiler. Correctness, Design, Style. Visual Studio Code. Syntax Highlighting. Escape Sequences. Header Files. Libraries....':
        'C。源代码。机器码。编译器。正确性、设计、风格。Visual Studio Code。语法高亮。转义序列。头文件。库...',
    },
    '2': {
        'Lecture Audio 注意s 幻灯片 Google 幻灯片': '讲座音频 笔记 幻灯片 Google 幻灯片',
        'Preprocessing. Compiling. Assembling. Linking. Debugging. 数组. Strings. Command-Line Arguments. 密码学. Lecture Audio 注意s 幻灯片 Google 幻灯片':
        '预处理。编译。汇编。链接。调试。数组。字符串。命令行参数。密码学。讲座音频 笔记 幻灯片 Google 幻灯片',
    },
    '3': {
        'Searching: Linear Search, Binary Search. Sorting: Bubble Sort, Selection Sort, Merge Sort. Asymptotic Notation: \\(O\\), \\(\\Omega\\), \\(\\Theta\\). Recursion....':
        '搜索：线性搜索、二分搜索。排序：冒泡排序、选择排序、归并排序。渐近符号：\\(O\\)、\\(\\Omega\\)、\\(\\Theta\\)。递归...',
    },
    '4': {
        'Pointers. Segmentation Faults. Dynamic 内存 Allocation. Stack. Heap. Buffer Overflow. File I/O. Images. Lecture Audio 注意s 幻灯片 Google 幻灯片 PDF...':
        '指针。段错误。动态内存分配。栈。堆。缓冲区溢出。文件输入输出。图像。讲座音频 笔记 幻灯片 Google 幻灯片 PDF...',
        'Lecture Audio 注意s 幻灯片 Google 幻灯片 PDF': '讲座音频 笔记 幻灯片 Google 幻灯片 PDF',
    },
    '5': {
        'Abstract Data Types. 队列, 栈. 链表. 树, Binary Search 树. 哈希表. 字典树. Lecture Audio 注意s 幻灯片 Google 幻灯片 PDF 源代码...':
        '抽象数据类型。队列、栈。链表。树、二叉搜索树。哈希表。字典树。讲座音频 笔记 幻灯片 Google 幻灯片 PDF 源代码...',
        'Lecture Audio 注意s 幻灯片 Google 幻灯片 PDF 源代码': '讲座音频 笔记 幻灯片 Google 幻灯片 PDF 源代码',
    },
    '6': {
        'Python: Functions, Arguments, Return Values; Variables; Boolean Expressions, Conditionals; Loops. Modules, Packages. Lecture Audio 注意s 幻灯片 Google...':
        'Python：函数、参数、返回值；变量；布尔表达式、条件语句；循环。模块、包。讲座音频 笔记 幻灯片 Google...',
        'Lecture Audio 注意s 幻灯片 Google': '讲座音频 笔记 幻灯片 Google',
    },
    '7': {
        'SQL: Tables; Types; Statements; 约束条件; 索引es; Keywords, Functions; Transactions. Race Conditions. SQL Injection Attacks. Lecture Audio 注意s 幻灯片...':
        'SQL：表；类型；语句；约束条件；索引；关键字、函数；事务。竞态条件。SQL 注入攻击。讲座音频 笔记 幻灯片...',
        'Lecture Audio 注意s 幻灯片': '讲座音频 笔记 幻灯片',
    },
    '8': {
        'Internet: Routers; TCP/IP; DNS. HTTP: URLs, GET, POST. HTML: Tags; Attributes. Servers. Regular Expressions. CSS: Properties; Selectors. Frameworks....':
        '互联网：路由器；TCP/IP；DNS。HTTP：URL、GET、POST。HTML：标签；属性。服务器。正则表达式。CSS：属性；选择器。框架...',
    },
    '9': {
        'Lecture Audio 注意s 幻灯片 Google 幻灯片 PDF 源代码 索引 PDF Zip 字幕': '讲座音频 笔记 幻灯片 Google 幻灯片 PDF 源代码 索引 PDF Zip 字幕',
    },
    '10': {
        '趣味。游戏。 Lecture Audio 注意s 幻灯片 Google 幻灯片 PDF 字幕 文字稿 Video CS50 Video Player MP4 HDR 360p 720p 1080p 4K SDR 360p 720p 1080p 4K...':
        '趣味。游戏。讲座音频 笔记 幻灯片 Google 幻灯片 PDF 字幕 文字稿 视频 CS50 视频播放器 MP4 HDR 360p 720p 1080p 4K SDR 360p 720p 1080p 4K...',
        'Lecture Audio 注意s 幻灯片 Google 幻灯片 PDF 字幕 文字稿 Video CS50 Video Player MP4 HDR 360p 720p 1080p 4K SDR 360p 720p 1080p 4K':
        '讲座音频 笔记 幻灯片 Google 幻灯片 PDF 字幕 文字稿 视频 CS50 视频播放器 MP4 HDR 360p 720p 1080p 4K SDR 360p 720p 1080p 4K',
    },
    'ai': {
        'Prompt Engineering. System Prompt. User Prompt. Generative 人工智能. 人工智能. 决策树s. 极小化极大. 机器学习....':
        '提示工程。系统提示。用户提示。生成式人工智能。人工智能。决策树。极小化极大。机器学习...',
        'Prompt Engineering. System Prompt. User Prompt. Generative 人工智能. 人工智能. 决策树s. 极小化极大. 机器学习. 强化学习. Explore vs. Exploit. 深度学习. 神经网络s. 大语言模型s. Transformer Architecture. Hallucinations. Lecture Audio 注意s 幻灯片...':
        '提示工程。系统提示。用户提示。生成式人工智能。人工智能。决策树。极小化极大。机器学习。强化学习。探索与利用。深度学习。神经网络。大语言模型。Transformer 架构。幻觉。讲座音频 笔记 幻灯片...',
    },
}

for n, reps in weeks.items():
    fp = f'cs50/cs50-zh/x/weeks/{n}/index.html'
    try:
        with open(fp, 'r', encoding='utf-8') as f:
            content = f.read()
        orig = content
        for old, new in reps.items():
            if old in content:
                content = content.replace(old, new)
            else:
                print(f"  NOT FOUND in weeks/{n}: {old[:40]}...")
        if content != orig:
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed weeks/{n}")
    except Exception as e:
        print(f"Error weeks/{n}: {e}")

print("Done!")
