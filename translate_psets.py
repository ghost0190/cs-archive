import os, re, sys

# Comprehensive psets content translations
t = {
    # Problem description templates
    'Toward the end of世界': '在世界',
    'Toward the beginning of世界': '在世界',
    'of世界 1-1': '1-1 的末尾',
    'must ascend right-aligned pyramid of bricks, as in the below':
        '必须攀爬一个右对齐的砖块金字塔，如下图所示',
    'must ascend left-aligned pyramid of bricks, as in the below':
        '必须攀爬一个左对齐的砖块金字塔，如下图所示',
    'In a file called': '在一个名为',
    'in a folder called': '的文件夹中的一个名为',
    'implement a program in C that recreates that pyramid, using hashes':
        '用 C 语言实现一个程序，使用井号（#）作为砖块来重建那个金字塔',
    'implement a program in C that recreates that pyramid, using hashes (#) for bricks, as in the below':
        '用 C 语言实现一个程序，使用井号（#）作为砖块来重建那个金字塔，如下图所示',
    'implement a program in C that recreates that':
        '用 C 语言实现一个程序来重建',
    'implement a program in': '用',
    '语言实现一个程序',

    'But prompt the user for an': '但是提示用户输入一个',
    '的 pyramid\'s actual height, so that the program can also output shorter pyramids like the below':
        '作为金字塔的实际高度，这样程序也可以输出如下所示的较矮的金字塔',
    'so that the program can also output':
        '这样程序也可以输出',
    'shorter pyramids like the below':
        '如下所示的较矮的金字塔',

    'Re-prompt the user, again and again as needed, if their input is not greater than 0 or not an':
        '如果用户的输入不大于 0 或不是整数，则根据需要反复提示用户',
    'Re-prompt the user, again and again as needed, if their input is not':
        '如果用户的输入不是，则根据需要反复提示用户',
    'Re-prompt the user, again and again as needed':
        '根据需要反复提示用户',
    'if their input is not greater than 0':
        '如果他们的输入不大于 0',
    'or not an int altogether': '或完全不是整数',
    'or not an': '或不是',
    'altogether': '完全',

    # Hints common patterns
    'Recall that you can get an': '记住你可以通过',
    'from a user with': '从用户那里获取',
    'which is declared in': '该函数声明在',
    'Recall that you can print a': '记住你可以打印一个',
    'Recall that you can': '记住你可以',
    'Recall that': '记住',
    'which is declared': '该函数声明在',

    # How to Test patterns
    'How to Test': '如何测试',
    'Your program should behave per the examples below':
        '你的程序应该按照以下示例运行',
    'Your program should behave per the examples':
        '你的程序应该按照示例运行',

    # Common psets verbs
    'Write a program': '编写一个程序',
    'write a program': '编写一个程序',
    'that determines': '来确定',
    'that calculates': '来计算',
    'that prints': '来打印',
    'that reads': '来读取',
    'that asks': '来询问',
    'that prompts': '来提示',
    'that checks': '来检查',
    'that validates': '来验证',
    'that returns': '来返回',
    'that outputs': '来输出',

    'Determine how': '确定如何',
    'Calculate the': '计算',
    'Print the': '打印',
    'Output the': '输出',
    'Read the': '读取',
    'Check if': '检查是否',
    'Validate that': '验证',
    'Ensure that': '确保',
    'Make sure that': '确保',
    'Confirm that': '确认',

    # Common instructions
    'Assume that': '假设',
    'You may assume that': '你可以假设',
    'You may assume': '你可以假设',
    'You may not': '你不可以',
    'You must': '你必须',
    'You should': '你应该',
    'You need to': '你需要',
    'Be sure to': '请务必',
    'Be careful to': '请小心',
    'Make sure': '确保',
    'Note that': '请注意',
    'Notice that': '注意',
    'Keep in mind that': '请记住',
    'Remember that': '请记住',

    'The program should': '程序应该',
    'The program must': '程序必须',
    'The program will': '程序将',
    'Your program should': '你的程序应该',
    'Your program must': '你的程序必须',
    'Your program will': '你的程序将',

    # Common inputs/outputs
    'prompt the user for': '提示用户输入',
    'prompt the user': '提示用户',
    'ask the user for': '询问用户',
    'ask the user': '询问用户',
    'accept a single command-line argument': '接受单个命令行参数',
    'accept command-line arguments': '接受命令行参数',
    'the command-line argument': '命令行参数',
    'command-line argument': '命令行参数',
    'command-line arguments': '命令行参数',

    'standard input': '标准输入',
    'standard output': '标准输出',
    'standard error': '标准错误',

    # Testing sections
    'Try running your program with the following inputs':
        '尝试使用以下输入运行你的程序',
    'Test your program with':
        '使用以下内容测试你的程序',
    'Run your program as':
        '按以下方式运行你的程序',
    'Your program should output':
        '你的程序应该输出',
    'The output should be':
        '输出应该是',
    'Expected output':
        '预期输出',
    'Actual output':
        '实际输出',

    # Walkthrough sections
    'Walkthrough': '演练',
    'Watch a walkthrough': '观看演练',
    'Video Walkthrough': '视频演练',

    # Common psets header sections
    'Problem to Solve': '要解决的问题',
    'Background': '背景',
    'Specification': '规范说明',
    'Getting Started': '入门',
    'Step by Step': '逐步指南',
    'Testing': '测试',
    'Grading': '评分',
    'Submission': '提交',
    'Instructions': '说明',
    'Requirements': '要求',
    'Constraints': '约束条件',
    'Tips': '提示',
    'Tricks': '技巧',
    'FAQ': '常见问题',

    # More patterns
    'for this problem': '对于这个问题',
    'for this pset': '对于这个问题集',
    'in this problem': '在这个问题中',
    'in this pset': '在这个问题集中',
    'to complete this problem': '要完成这个问题',
    'to solve this problem': '要解决这个问题',

    'as described in': '如',
    'as shown in': '如',
    'as demonstrated in': '如',
    'as illustrated in': '如',
    'as specified in': '如',
    'described in': '中所述',
    'shown in': '中所示',

    'the below': '下图',
    'as in the below': '如下图所示',
    'as follows': '如下',
    'as per the below': '如下图',
    'the above': '上图',
    'as above': '如上',
    'below': '下面',
    'above': '上面',

    'distributed code': '分发代码',
    'starter code': '起始代码',
    'distribution code': '分发代码',
    'sample code': '示例代码',

    # Very common mixed patterns
    'a file called': '名为',
    'a folder called': '的文件夹',
    'a program in C that': '一个 C 程序',
    'a program in Python that': '一个 Python 程序',
    'a program in SQL that': '一个 SQL 程序',
    'a program that': '一个程序',
    'implement a': '实现一个',
    'create a': '创建一个',
    'write a': '编写一个',
    'submit a': '提交一个',

    'the user for a': '用户输入',
    'the user for an': '用户输入',
    'the user for the': '用户输入',
    'from the user': '从用户处',
    'to the user': '给用户',

    # Error handling
    'return 1': '返回 1',
    'return 0': '返回 0',
    'exit with status 1': '以状态 1 退出',
    'exit with status 0': '以状态 0 退出',

    'handle invalid input': '处理无效输入',
    'handle errors': '处理错误',
    'error handling': '错误处理',

    'newline': '换行符',
    'new line': '新行',
    'whitespace': '空白字符',
    'trailing whitespace': '尾部空白字符',
    'leading whitespace': '前导空白字符',

    'case-sensitive': '区分大小写',
    'case-insensitive': '不区分大小写',
    'case sensitive': '区分大小写',
    'case insensitive': '不区分大小写',
}

c = 0
for root, dirs, files in os.walk('cs50/cs50-zh'):
    for fname in files:
        if not fname.endswith('.html'): continue
        fp = os.path.join(root, fname)
        try:
            with open(fp, 'r', encoding='utf-8') as fh:
                content = fh.read()
        except: continue
        orig = content
        for old, new in t.items():
            if old in content:
                content = content.replace(old, new)
        if content != orig:
            with open(fp, 'w', encoding='utf-8') as fh:
                fh.write(content)
            c += 1
print(f'Fixed {c} files')
