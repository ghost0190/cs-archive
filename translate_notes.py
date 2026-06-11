#!/usr/bin/env python3
"""Translate remaining English text in CS50x lecture notes."""

import re, sys

def translate_file(filepath, replacements):
    """Apply translations to a file by replacing exact strings."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    count = 0
    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            count += 1
        else:
            print(f"  WARNING: Not found: {old[:60]}...")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  Applied {count}/{len(replacements)} translations")
    return count

# ==================== NOTES 2 ====================
replacements_2 = [
    # Welcome section
    ('This 周, we are going to take a deeper look at additional building blocks that will support our goals of learning 更多 关于 编程 from the bottom up.',
     '本周，我们将更深入地研究其他构建块，这些构建块将支持我们从底层开始学习更多编程知识的目标。'),
    ('Fundamentally, in addition to the essentials of 编程, 这门课程 is 关于 problem-solving. Accordingly, we will also focus further on how to approach 计算机科学 problems.',
     '从根本上说，除了编程的基本要素外，这门课程是关于问题解决的。因此，我们还将进一步关注如何着手解决计算机科学问题。'),
    ('By the end of 这门课程, you will learn how to use these aforementioned building blocks to solve a whole host of 计算机科学 problems.',
     '在这门课程结束时，你将学会如何使用上述构建块来解决各种各样的计算机科学问题。'),
    ('We take for granted many of these solutions provided by 计算机科学.',
     '我们认为计算机科学提供的许多解决方案是理所当然的。'),

    # Reading Levels
    ('Reading Levels', '阅读等级'),
    ('One of the real-世界 problems we will solve in 这门课程 is understanding reading levels.',
     '我们在这门课程中要解决的真实世界问题之一是理解阅读等级。'),
    ('With the help of some of your peers, we presented readings at various reading levels.',
     '在同学们的帮助下，我们展示了不同阅读等级的阅读材料。'),
    ('We will be quantifying reading levels this周as one of your many 编程 challenges.',
     '作为你们众多的编程挑战之一，我们将在本周量化阅读等级。'),

    # Debugging
    ('Everyone will make mistakes while coding.',
     '每个人在编程时都会犯错。'),
    ('<em>Debugging</em> is the process of locating and removing bugs from your code.',
     '<em>调试</em>是定位和移除代码中错误的过程。'),
    ('One of the debugging techniques you will use 在这个 课程 to 调试 your code is called <em>rubber duck debugging</em>, where you can talk to an inanimate object (or自己) to help think through your code and why it is not working as intended. When you are having challenges with your code, consider how speaking out loud to, quite literally, a rubber duck关于 code problem. If you\'d rather not talk to a small plastic duck, you are 欢迎 to speak to a human near you!',
     '你在这门课程中用来调试代码的调试技术之一被称为<em>橡皮鸭调试法</em>，你可以对一个无生命的物体（或你自己）说话，帮助思考你的代码以及为什么它没有按预期工作。当你遇到代码挑战时，考虑一下如何对着一个橡皮鸭大声说出代码问题。如果你不想对一只小塑料鸭子说话，欢迎你对身边的人说话！'),
    ('We have created the CS50 Duck and <a href="https://cs50.ai">CS50.ai</a> as工具 can help you 调试 your code.',
     '我们创建了 CS50 鸭和 <a href="https://cs50.ai">CS50.ai</a> 作为可以帮助你调试代码的工具。'),

    # Missing #include paragraph
    ('Notice how the <code class="language-plaintext highlighter-rouge">#include</code> directive for <code class="language-plaintext highlighter-rouge">stdio.h</code> is missing. This header file is必需的 the <code class="language-plaintext highlighter-rouge">printf</code> function to work properly. Without it, the compiler will not recognize the <code class="language-plaintext highlighter-rouge">printf</code> function and will generate an error.',
     '注意 <code class="language-plaintext highlighter-rouge">#include</code> 指令中缺少了 <code class="language-plaintext highlighter-rouge">stdio.h</code>。这个头文件是 <code class="language-plaintext highlighter-rouge">printf</code> 函数正常工作所必需的。没有它，编译器将无法识别 <code class="language-plaintext highlighter-rouge">printf</code> 函数并会产生错误。'),
    ('This typo will cause a compilation error because the compiler cannot find 名为 <code class="language-plaintext highlighter-rouge">studio.h</code>. The correct header file名字 is <code class="language-plaintext highlighter-rouge">stdio.h</code>, which stands for \xe2\x80\x9cstandard input/output.\xe2\x80\x9d',
     '这个拼写错误将导致编译错误，因为编译器找不到名为 <code class="language-plaintext highlighter-rouge">studio.h</code> 的文件。正确的头文件名是 <code class="language-plaintext highlighter-rouge">stdio.h</code>，它代表"标准输入/输出"。'),

    ('Notice there are multiple errors. First, the type of <code class="language-plaintext highlighter-rouge">name</code> is not declared. Second, the <code class="language-plaintext highlighter-rouge">cs50.h</code> library is missing to allow us to use <code class="language-plaintext highlighter-rouge">string</code>. Third, there\xe2\x80\x99s a missing semicolon after the <code class="language-plaintext highlighter-rouge">get_string</code> call. Fourth, the <code class="language-plaintext highlighter-rouge">printf</code> statement doesn\xe2\x80\x99t actually use the <code class="language-plaintext highlighter-rouge">name</code> variable.',
     '注意这里有多处错误。首先，<code class="language-plaintext highlighter-rouge">name</code> 的类型没有被声明。其次，缺少 <code class="language-plaintext highlighter-rouge">cs50.h</code> 库，使我们无法使用 <code class="language-plaintext highlighter-rouge">string</code>。第三，<code class="language-plaintext highlighter-rouge">get_string</code> 调用后缺少分号。第四，<code class="language-plaintext highlighter-rouge">printf</code> 语句实际上没有使用 <code class="language-plaintext highlighter-rouge">name</code> 变量。'),
    ('Some bugs will prompt an error message. Others are logical errors that will not prompt a message, but will result in unexpected behavior in your program.',
     '有些错误会触发错误消息。其他错误是逻辑错误，不会触发消息，但会导致程序中出现意外行为。'),
    ('The <code class="language-plaintext highlighter-rouge">printf</code> statement 可用于 to 调试 your code. Consider the following:',
     '<code class="language-plaintext highlighter-rouge">printf</code> 语句可用于调试你的代码。请考虑以下内容：'),
    ('Consider the following image from last 周:',
     '考虑上周的以下图像：'),
    ('Consider the following code that has a bug purposely inserted within it:',
     '考虑以下故意在其中插入了一个错误的代码：'),
    ('Notice that this code prints four blocks instead of three.',
     '注意这段代码打印了四个方块而不是三个。'),
    ('Type <code class="language-plaintext highlighter-rouge">code buggy.c</code> into the terminal window and write the above code.',
     '在终端窗口中输入 <code class="language-plaintext highlighter-rouge">code buggy.c</code> 并编写上述代码。'),
    ('Running this code, four bricks appear instead of the intended three.',
     '运行这段代码，会出现四个砖块而不是预期的三个。'),
    ('<code class="language-plaintext highlighter-rouge">printf</code> is a very useful way of debugging your code. You could modify your code as follows:',
     '<code class="language-plaintext highlighter-rouge">printf</code> 是调试代码的一种非常有用的方法。你可以按如下方式修改你的代码：'),
    ('Notice how this code outputs the value of <code class="language-plaintext highlighter-rouge">i</code> during each iteration of the loop such that we can 调试 our code.',
     '注意这段代码在每次循环迭代时输出了 <code class="language-plaintext highlighter-rouge">i</code> 的值，以便我们能够调试代码。'),
    ('Running this code, you will see numerous statements, including <code class="language-plaintext highlighter-rouge">i is 0</code>, <code class="language-plaintext highlighter-rouge">i is 1</code>, <code class="language-plaintext highlighter-rouge">i is 2</code>, and <code class="language-plaintext highlighter-rouge">i is 3</code>. Seeing this, you might realize that further code needs to be corrected as follows:',
     '运行这段代码，你会看到许多语句，包括 <code class="language-plaintext highlighter-rouge">i is 0</code>、<code class="language-plaintext highlighter-rouge">i is 1</code>、<code class="language-plaintext highlighter-rouge">i is 2</code> 和 <code class="language-plaintext highlighter-rouge">i is 3</code>。看到这些，你可能会意识到需要按如下方式进一步修正代码：'),
    ('Notice the <code class="language-plaintext highlighter-rouge">&lt;=</code> has been replaced with <code class="language-plaintext highlighter-rouge">&lt;</code>.',
     '注意 <code class="language-plaintext highlighter-rouge">&lt;=</code> 已被替换为 <code class="language-plaintext highlighter-rouge">&lt;</code>。'),
    ('This code can be further improved as follows:',
     '这段代码可以按如下方式进一步改进：'),
    ('Notice that compiling and running this code still results in a bug.',
     '注意编译和运行这段代码仍然会导致一个错误。'),
    ('To address this bug, we will use a new 工具.',
     '为了解决这个错误，我们将使用一个新工具。'),
    ('一份 second 工具 in debugging is called a <em>debugger</em>, a software 工具 created by programmers to help track down bugs in code.',
     '调试中的第二种工具被称为<em>调试器</em>，这是一种由程序员创建的软件工具，用于帮助追踪代码中的错误。'),
    ('In VS Code, a pre-configured debugger has been provided to you called <code class="language-plaintext highlighter-rouge">debug50</code>.',
     '在 VS Code 中，为你提供了一个预配置的调试器，称为 <code class="language-plaintext highlighter-rouge">debug50</code>。'),

    ('Second, run <code class="language-plaintext highlighter-rouge">debug50 ./buggy</code>. You will notice that after the debugger comes to life and a line of your code will illuminate in a gold-like color. Quite literally, the code has <em>paused</em> at this line of code. Notice in the top left corner how all local variables are being displayed, including <code class="language-plaintext highlighter-rouge">h</code>, which currently does not have a value. At the top of your window, you can click the <code class="language-plaintext highlighter-rouge">step over</code> button, and it will keep moving through your code. Notice how the value of <code class="language-plaintext highlighter-rouge">i</code> increases as you step through the loop.',
     '第二步，运行 <code class="language-plaintext highlighter-rouge">debug50 ./buggy</code>。你会注意到调试器启动后，一行代码会以金色高亮显示。实际上，代码已经在这一行<em>暂停</em>了。注意在左上角如何显示所有局部变量，包括 <code class="language-plaintext highlighter-rouge">h</code>，它目前没有值。在窗口顶部，你可以点击 <code class="language-plaintext highlighter-rouge">step over</code> 按钮，它会继续在代码中移动。注意当你逐步执行循环时，<code class="language-plaintext highlighter-rouge">i</code> 的值是如何增加的。'),
    ('While this 工具 will not show you where your bug is, it will help you slow down and see how your code is running step by step. You can use <code class="language-plaintext highlighter-rouge">step into</code> as a way to look further into the details of your buggy code.',
     '虽然这个工具不会告诉你错误在哪里，但它会帮助你放慢速度，观察你的代码是如何逐步运行的。你可以使用 <code class="language-plaintext highlighter-rouge">step into</code> 作为进一步查看有错误代码细节的方法。'),
    ('一份 third way of debugging is by speaking to a rubber duck, inanimate object, or a person to describe the problem you are facing and the specific steps you are taking to solve that problem as a 意思s by which to discover your error.',
     '第三种调试方法是向橡皮鸭、无生命的物体或一个人描述你所面临的问题以及你为解决该问题所采取的具体步骤，以此作为发现错误的方法。'),
    ('Finally, <cs50.ai>, also known as the *CS50 Duck*, can help you with debugging your code.',
     '最后，<cs50.ai>（也称为 *CS50 鸭*）可以帮助你调试代码。'),

    # Compiling section
    ('Recall that last 周, you learned关于 <em>compiler</em>, a specialized computer program that converts <em>源代码</em> into <em>machine code</em> that can be understood by a computer.',
     '回想一下，上周你学习了<em>编译器</em>，这是一种专门的计算机程序，它将<em>源代码</em>转换为计算机可以理解的<em>机器码</em>。'),
    ('We convert <em>源代码</em> into machine code using a very special piece of software called a <em>compiler</em>. Today, we will be introducing you to a compiler that will allow you to convert 源代码 in the 编程 language <em>C</em> into machine code.',
     '我们使用一种非常特殊的软件——<em>编译器</em>——将<em>源代码</em>转换为机器码。今天，我们将向你介绍一个编译器，它将允许你将编程语言 <em>C</em> 中的源代码转换为机器码。'),

    ('一份 compiler will take the above code and turn it into the machine code that might look something like this:',
     '编译器会将上述代码转换为看起来像这样的机器码：'),
    ('笔记 that the above is only illustrative. The machine code 的 problem above would be much longer.',
     '注意以上仅是示例。上述问题的机器码会长的多。'),
    ('<em>VS Code</em>, the 编程 environment provided to you as a CS50 student, utilizes a compiler called <code class="language-plaintext highlighter-rouge">clang</code> (which stands for \xe2\x80\x9cC Language Family Frontend\xe2\x80\x9d).',
     '作为 CS50 学生，<em>VS Code</em> 这个编程环境使用了一个名为 <code class="language-plaintext highlighter-rouge">clang</code>（代表"C 语言家族前端"）的编译器。'),
    ('You can enter the following into the terminal window to compile your code: <code class="language-plaintext highlighter-rouge">clang -o hello hello.c</code>.',
     '你可以在终端窗口中输入以下内容来编译你的代码：<code class="language-plaintext highlighter-rouge">clang -o hello hello.c</code>。'),
    ('<em>Command-line arguments</em> are provided at the 命令行 to <code class="language-plaintext highlighter-rouge">clang</code> as <code class="language-plaintext highlighter-rouge">-o hello hello.c</code>.',
     '<em>命令行参数</em>是在命令行提供给 <code class="language-plaintext highlighter-rouge">clang</code> 的，如 <code class="language-plaintext highlighter-rouge">-o hello hello.c</code>。'),
    ('Running <code class="language-plaintext highlighter-rouge">./hello</code> in the terminal window, your program runs as intended.',
     '在终端窗口中运行 <code class="language-plaintext highlighter-rouge">./hello</code>，你的程序会按预期运行。'),
    ('Consider the following code from last 周:',
     '考虑上周的以下代码：'),
    ('To compile this code, you can type <code class="language-plaintext highlighter-rouge">clang -o hello hello.c -lcs50</code>.',
     '要编译这段代码，你可以输入 <code class="language-plaintext highlighter-rouge">clang -o hello hello.c -lcs50</code>。'),
    ('If you were to type <code class="language-plaintext highlighter-rouge">make hello</code>, it runs a command that executes clang to 创建一个n output file that you can run as a user.',
     '如果你输入 <code class="language-plaintext highlighter-rouge">make hello</code>，它会运行一个命令，执行 clang 来创建一个你可以作为用户运行的输出文件。'),
    ('VS Code has been pre-programmed such that <code class="language-plaintext highlighter-rouge">make</code> will run numerous 命令行 arguments along with clang for your convenience as a user.',
     'VS Code 已被预编程，使得 <code class="language-plaintext highlighter-rouge">make</code> 会为了方便你作为用户而运行许多命令行参数以及 clang。'),
    ('While the above is offered as an illustration, such that you can understand 更多 deeply the process and concept of compiling code, using <code class="language-plaintext highlighter-rouge">make</code> in CS50 is perfectly fine and the expectation!',
     '虽然以上是作为说明提供的，以便你能更深入地理解编译代码的过程和概念，但在 CS50 中使用 <code class="language-plaintext highlighter-rouge">make</code> 是完全可行且被期望的！'),
    ('Compiling involves four major steps, including the following:',
     '编译涉及四个主要步骤，包括以下内容：'),

    # Preprocessing
    ('First, <em>preprocessing</em> is where the header files in your code, designated by a <code class="language-plaintext highlighter-rouge">#</code> (such as <code class="language-plaintext highlighter-rouge">#include &lt;cs50.h&gt;</code>) are effectively copied and pasted into your file. During this step, the code from <code class="language-plaintext highlighter-rouge">cs50.h</code> is copied into your program. Similarly, just as your code contains <code class="language-plaintext highlighter-rouge">#include &lt;stdio.h&gt;</code>, code contained within <code class="language-plaintext highlighter-rouge">stdio.h</code> somewhere on your computer is copied to your program. This step can be visualized as follows:',
     '首先，<em>预处理</em>是将头文件（以 <code class="language-plaintext highlighter-rouge">#</code> 标识，如 <code class="language-plaintext highlighter-rouge">#include &lt;cs50.h&gt;</code>）中的代码有效地复制并粘贴到你的文件中。在这一步中，<code class="language-plaintext highlighter-rouge">cs50.h</code> 中的代码被复制到你的程序中。同样，正如你的代码包含 <code class="language-plaintext highlighter-rouge">#include &lt;stdio.h&gt;</code>，计算机某处 <code class="language-plaintext highlighter-rouge">stdio.h</code> 中包含的代码也被复制到你的程序中。这一步可以按如下方式可视化：'),
    ('Second, <em>compiling</em> is where your program is converted into assembly code. This step can be visualized as follows:',
     '第二步，<em>编译</em>是将你的程序转换为汇编代码。这一步可以按如下方式可视化：'),
    ('Third, <em>assembling</em> involves the assembler (a 工具 in the compiler toolchain) converting your assembly code into machine code. This step can be visualized as follows:',
     '第三步，<em>汇编</em>涉及汇编器（编译器工具链中的一个工具）将你的汇编代码转换为机器码。这一步可以按如下方式可视化：'),
    ('Finally, during the <em>linking</em> step, pre-compiled machine code from your included libraries is combined with your code. The final executable file is then outputted.',
     '最后，在<em>链接</em>步骤中，来自你包含的库的预编译机器码与你的代码组合在一起。然后输出最终的可执行文件。'),

    # Arrays section
    ('In 第 0 周, we talked 关于 <em>data types</em> such as <code class="language-plaintext highlighter-rouge">bool</code>, <code class="language-plaintext highlighter-rouge">int</code>, <code class="language-plaintext highlighter-rouge">char</code>, <code class="language-plaintext highlighter-rouge">string</code>, etc.',
     '在第 0 周，我们讨论了<em>数据类型</em>，如 <code class="language-plaintext highlighter-rouge">bool</code>、<code class="language-plaintext highlighter-rouge">int</code>、<code class="language-plaintext highlighter-rouge">char</code>、<code class="language-plaintext highlighter-rouge">string</code> 等。'),

    ('Inside of your computer, you have a finite amount of 内存 available.',
     '在你的计算机内部，你有有限数量的内存可用。'),
    ('Physically, on the 内存 of your computer, you can imagine how specific types of data are stored on your computer. You might imagine that a <code class="language-plaintext highlighter-rouge">char</code>, which only requires 1 byte of 内存, 五月 look as follows:',
     '从物理上讲，在计算机的内存上，你可以想象特定类型的数据是如何存储在计算机上的。你可能会想象一个 <code class="language-plaintext highlighter-rouge">char</code>，它只需要 1 字节内存，可能看起来如下：'),
    ('Similarly, an <code class="language-plaintext highlighter-rouge">int</code>, which requires 4 bytes, might look as follows:',
     '类似地，一个 <code class="language-plaintext highlighter-rouge">int</code>，它需要 4 字节，可能看起来如下：'),
    ('We can 创建一个 program that explores these concepts. Inside your terminal, type <code class="language-plaintext highlighter-rouge">code scores.c</code> and write code as follows:',
     '我们可以创建一个程序来探索这些概念。在你的终端中，输入 <code class="language-plaintext highlighter-rouge">code scores.c</code> 并按如下方式编写代码：'),
    ('Notice that the number on the right is a floating point value of <code class="language-plaintext highlighter-rouge">3.0</code>, so that the calculation is rendered as a floating point value in the end.',
     '注意右边的数字是一个浮点值 <code class="language-plaintext highlighter-rouge">3.0</code>，这样计算最终会以浮点值呈现。'),
    ('Running <code class="language-plaintext highlighter-rouge">make scores</code> compiles the program. Then running <code class="language-plaintext highlighter-rouge">./scores</code> executes it.',
     '运行 <code class="language-plaintext highlighter-rouge">make scores</code> 编译程序。然后运行 <code class="language-plaintext highlighter-rouge">./scores</code> 执行它。'),
    ('You can imagine how these variables are stored in 内存:',
     '你可以想象这些变量是如何存储在内存中的：'),
    ('<em>Arrays</em> are a sequence of values that are stored 返回-to-返回 in 内存.',
     '<em>数组</em>是一系列在内存中背靠背存储的值。'),

    ('Notice that <code class="language-plaintext highlighter-rouge">scores[0]</code> examines the value at this 地点 of 内存 by <code class="language-plaintext highlighter-rouge">indexing into</code> the array called <code class="language-plaintext highlighter-rouge">scores</code> at 地点 <code class="language-plaintext highlighter-rouge">0</code> to see what value is stored there.',
     '注意 <code class="language-plaintext highlighter-rouge">scores[0]</code> 通过<code class="language-plaintext highlighter-rouge">索引到</code>名为 <code class="language-plaintext highlighter-rouge">scores</code> 的数组在位置 <code class="language-plaintext highlighter-rouge">0</code> 来检查该内存位置的值，以查看那里存储了什么值。'),
    ('You can see how, while the above code works, there is still an opportunity for improving our code. Revise your code as follows:',
     '你可以看到，虽然上述代码可以工作，但仍有改进代码的机会。按如下方式修改你的代码：'),
    ('Notice how we index into <code class="language-plaintext highlighter-rouge">scores</code> by using <code class="language-plaintext highlighter-rouge">scores[i]</code> where <code class="language-plaintext highlighter-rouge">i</code> is supplied by the <code class="language-plaintext highlighter-rouge">for</code> loop.',
     '注意我们是如何通过使用 <code class="language-plaintext highlighter-rouge">scores[i]</code> 来索引 <code class="language-plaintext highlighter-rouge">scores</code> 的，其中 <code class="language-plaintext highlighter-rouge">i</code> 由 <code class="language-plaintext highlighter-rouge">for</code> 循环提供。'),
    ('We can simplify or <em>abstract away</em> the calculation of the average. Modify your code as follows:',
     '我们可以简化或<em>抽象掉</em>平均值的计算。按如下方式修改你的代码：'),
    ('Notice that a new function called <code class="language-plaintext highlighter-rouge">average</code> is declared. Further, notice that a <code class="language-plaintext highlighter-rouge">const</code> or constant value of <code class="language-plaintext highlighter-rouge">N</code> is declared. Most importantly, notice how the <code class="language-plaintext highlighter-rouge">average</code> function takes <code class="language-plaintext highlighter-rouge">int array[]</code>, which 意思s that the function can receive an array as a parameter.',
     '注意声明了一个名为 <code class="language-plaintext highlighter-rouge">average</code> 的新函数。此外，注意声明了一个 <code class="language-plaintext highlighter-rouge">const</code> 或常量值 <code class="language-plaintext highlighter-rouge">N</code>。最重要的是，注意 <code class="language-plaintext highlighter-rouge">average</code> 函数如何接受 <code class="language-plaintext highlighter-rouge">int array[]</code>，这意味着该函数可以接收数组作为参数。'),
    ('Not only can arrays be containers: They can be passed between functions.',
     '数组不仅可以作为容器：它们还可以在函数之间传递。'),

    # Strings section
    ('一份 <code class="language-plaintext highlighter-rouge">string</code> is simply an array of values of type <code class="language-plaintext highlighter-rouge">char</code>: an array of characters.',
     '一个 <code class="language-plaintext highlighter-rouge">string</code> 只是一个类型为 <code class="language-plaintext highlighter-rouge">char</code> 的值的数组：一个字符数组。'),
    ('To explore <code class="language-plaintext highlighter-rouge">char</code> and <code class="language-plaintext highlighter-rouge">string</code>, type <code class="language-plaintext highlighter-rouge">code hi.c</code> in the terminal window and write code as follows:',
     '要探索 <code class="language-plaintext highlighter-rouge">char</code> 和 <code class="language-plaintext highlighter-rouge">string</code>，在终端窗口中输入 <code class="language-plaintext highlighter-rouge">code hi.c</code> 并按如下方式编写代码：'),
    ('Notice that this will output a string of characters.',
     '注意这将输出一个字符字符串。'),

    ('Notice that ASCII codes are printed by replacing <code class="language-plaintext highlighter-rouge">%c</code> with <code class="language-plaintext highlighter-rouge">%i</code>.',
     '注意通过将 <code class="language-plaintext highlighter-rouge">%c</code> 替换为 <code class="language-plaintext highlighter-rouge">%i</code> 来打印 ASCII 码。'),

    ('Considering the following image, you can see how a string is an array of characters that begins with the first character and ends with a special character called a <code class="language-plaintext highlighter-rouge">NUL character</code> (笔记: NUL with one L is the \xe2\x80\x98\\0\xe2\x80\x99 character, different from NULL with two L\xe2\x80\x99s):',
     '考虑以下图像，你可以看到字符串是一个字符数组，从第一个字符开始，以一个称为 <code class="language-plaintext highlighter-rouge">NUL 字符</code> 的特殊字符结束（注意：一个 L 的 NUL 是 \'\\0\' 字符，与两个 L 的 NULL 不同）：'),
    ('Imagining this in decimal, your array would look like the following:',
     '用十进制来想象，你的数组将看起来如下：'),
    ('We can imagine the above as follows:',
     '我们可以按如下方式想象上述内容：'),
    ('Notice that all characters are represented within a <code class="language-plaintext highlighter-rouge">string</code>.',
     '注意所有字符都表示在一个 <code class="language-plaintext highlighter-rouge">string</code> 中。'),
    ('To further understand how a <code class="language-plaintext highlighter-rouge">string</code> works, revise your code as follows:',
     '要进一步理解 <code class="language-plaintext highlighter-rouge">string</code> 如何工作，按如下方式修改你的代码：'),
    ('Notice how the <code class="language-plaintext highlighter-rouge">printf</code> statement presents three values from our array called <code class="language-plaintext highlighter-rouge">s</code>.',
     '注意 <code class="language-plaintext highlighter-rouge">printf</code> 语句如何从我们的名为 <code class="language-plaintext highlighter-rouge">s</code> 的数组中呈现三个值。'),
    ('Notice that this prints the string\xe2\x80\x99s ASCII codes, including NUL.',
     '注意这将打印字符串的 ASCII 码，包括 NUL。'),
    ('Let\xe2\x80\x99s imagine we want to say both <code class="language-plaintext highlighter-rouge">HI!</code> and <code class="language-plaintext highlighter-rouge">BYE!</code>. Modify your code as follows:',
     '让我们想象我们想要同时说 <code class="language-plaintext highlighter-rouge">HI!</code> 和 <code class="language-plaintext highlighter-rouge">BYE!</code>。按如下方式修改你的代码：'),
    ('Notice that two strings are declared and used in this例子。',
     '注意在这个例子中声明并使用了两个字符串。'),
    ('We can further improve this code. Modify your code as follows:',
     '我们可以进一步改进这段代码。按如下方式修改你的代码：'),
    ('Notice that both strings are stored within a single array of type <code class="language-plaintext highlighter-rouge">string</code>.',
     '注意两个字符串都存储在一个类型为 <code class="language-plaintext highlighter-rouge">string</code> 的单一数组中。'),
    ('We can consolidate our two strings into an array of strings.',
     '我们可以将两个字符串合并为一个字符串数组。'),
    ('Notice that an array of <code class="language-plaintext highlighter-rouge">words</code> is created. It is an array of strings. Each word is stored in <code class="language-plaintext highlighter-rouge">words</code>.',
     '注意创建了一个 <code class="language-plaintext highlighter-rouge">words</code> 数组。它是一个字符串数组。每个单词都存储在 <code class="language-plaintext highlighter-rouge">words</code> 中。'),

    # String Length
    ('一份 common problem within 编程, and perhaps C 更多 specifically, is to discover the length of a string. How could we implement this in code? Type <code class="language-plaintext highlighter-rouge">code length.c</code> in the terminal window and code as follows:',
     '编程中一个常见的问题，也许 C 语言尤其如此，是获取字符串的长度。我们如何在代码中实现这一点呢？在终端窗口中输入 <code class="language-plaintext highlighter-rouge">code length.c</code> 并按如下方式编写代码：'),
    ('Notice that this code loops until the NUL character is found.',
     '注意这段代码循环直到找到 NUL 字符。'),
    ('This code can be improved by abstracting away the counting into a function as follows:',
     '这段代码可以通过将计数抽象到一个函数中来改进，如下所示：'),
    ('Notice that a new function called <code class="language-plaintext highlighter-rouge">string_length</code> counts characters until NUL is located.',
     '注意一个名为 <code class="language-plaintext highlighter-rouge">string_length</code> 的新函数在定位到 NUL 之前一直计数字符。'),
    ('Since this is such a common problem within 编程, other programmers have created code in the <code class="language-plaintext highlighter-rouge">string.h</code> library找到 length of a string. You can find the length of a string by modifying your code as follows:',
     '由于这在编程中是一个非常常见的问题，其他程序员在 <code class="language-plaintext highlighter-rouge">string.h</code> 库中创建了代码来查找字符串的长度。你可以通过按如下方式修改你的代码来找到字符串的长度：'),
    ('Notice that this code uses the <code class="language-plaintext highlighter-rouge">string.h</code> library, declared at the top of the file. Further, it uses a function from that library called <code class="language-plaintext highlighter-rouge">strlen</code>, which calculates the length of the string passed to it.',
     '注意这段代码使用了在文件顶部声明的 <code class="language-plaintext highlighter-rouge">string.h</code> 库。此外，它使用了该库中一个名为 <code class="language-plaintext highlighter-rouge">strlen</code> 的函数，该函数计算传递给它的字符串的长度。'),
    ('Our code can stand on the shoulders of programmers who came before and use libraries they created.',
     '我们的代码可以站在前辈程序员的肩膀上，使用他们创建的库。'),

    ('<code class="language-plaintext highlighter-rouge">ctype.h</code> is another library that is quite useful. Imagine we wanted to 创建一个 program that converted all lowercase characters to uppercase ones. In the terminal window, type <code class="language-plaintext highlighter-rouge">code uppercase.c</code> and write code as follows:',
     '<code class="language-plaintext highlighter-rouge">ctype.h</code> 是另一个非常有用的库。想象一下，我们想要创建一个将所有小写字符转换为大写字符的程序。在终端窗口中，输入 <code class="language-plaintext highlighter-rouge">code uppercase.c</code> 并按如下方式编写代码：'),
    ('Notice that this code <em>iterates</em> through each value in the string. The program looks at each character. If the character is lowercase, it subtracts 32 from the character\xe2\x80\x99s ASCII value to convert it to uppercase.',
     '注意这段代码<em>遍历</em>字符串中的每个值。程序查看每个字符。如果字符是小写的，它会从该字符的 ASCII 值中减去 32 以将其转换为大写。'),

    ('When an ASCII lowercase letter (a-z) has <code class="language-plaintext highlighter-rouge">32</code> subtracted from it, it results in the uppercase version of that same letter. 笔记 this only works for ASCII letters a-z, not for accented or non-ASCII characters.',
     '当一个 ASCII 小写字母 (a-z) 减去 <code class="language-plaintext highlighter-rouge">32</code> 后，它会变成同一个字母的大写版本。注意，这只适用于 ASCII 字母 a-z，不适用于带重音或非 ASCII 字符。'),

    ('Notice that the program iterates through each character of the string. The <code class="language-plaintext highlighter-rouge">toupper</code> function is passed <code class="language-plaintext highlighter-rouge">s[i]</code>. Each character (if lowercase) is converted to uppercase.',
     '注意程序遍历字符串的每个字符。<code class="language-plaintext highlighter-rouge">toupper</code> 函数被传入 <code class="language-plaintext highlighter-rouge">s[i]</code>。每个字符（如果是小写）被转换为大写。'),
    ('It\xe2\x80\x99s worth mentioning that <code class="language-plaintext highlighter-rouge">toupper</code> automatically knows to uppercase only lowercase characters. Hence, your code can be simplified as follows:',
     '值得一提的是，<code class="language-plaintext highlighter-rouge">toupper</code> 自动知道只将小写字符转换为大写。因此，你的代码可以按如下方式简化：'),
    ('Notice that this code uppercases a string using the <code class="language-plaintext highlighter-rouge">ctype</code> library.',
     '注意这段代码使用 <code class="language-plaintext highlighter-rouge">ctype</code> 库将字符串转换为大写。'),
    ('You can 阅读关于ll the capabilities of the <code class="language-plaintext highlighter-rouge">ctype</code> library on the <a href="https://manual.cs50.io/#ctype.h">手册页面</a>.',
     '你可以在<a href="https://manual.cs50.io/#ctype.h">手册页面</a>上阅读关于 <code class="language-plaintext highlighter-rouge">ctype</code> 库的所有功能。'),

    # Command-Line Arguments
    ('Command-Line Arguments', '命令行参数'),
    ('<code class="language-plaintext highlighter-rouge">Command-line arguments</code> are those arguments that are passed to your program at the 命令行. 例如, all those statements you typed after <code class="language-plaintext highlighter-rouge">clang</code> are considered 命令行 arguments. You can use these arguments in your own programs!',
     '<code class="language-plaintext highlighter-rouge">命令行参数</code>是在命令行传递给你的程序的那些参数。例如，你在 <code class="language-plaintext highlighter-rouge">clang</code> 之后输入的所有语句都被视为命令行参数。你可以在自己的程序中使用这些参数！'),
    ('In your terminal window, type <code class="language-plaintext highlighter-rouge">code greet.c</code> and write code as follows:',
     '在你的终端窗口中，输入 <code class="language-plaintext highlighter-rouge">code greet.c</code> 并按如下方式编写代码：'),
    ('Notice that this says <code class="language-plaintext highlighter-rouge">hello</code> to the user.',
     '注意这对用户说了 <code class="language-plaintext highlighter-rouge">hello</code>。'),
    ('Still, would it not be nice to be able to take arguments before the program even runs? Modify your code as follows:',
     '不过，能够在程序运行之前就接收参数不是更好吗？按如下方式修改你的代码：'),

    ('Notice that this program knows both <code class="language-plaintext highlighter-rouge">argc</code>, the number of 命令行 arguments, and <code class="language-plaintext highlighter-rouge">argv</code>, which is an array of strings passed as arguments at the 命令行.',
     '注意这个程序知道 <code class="language-plaintext highlighter-rouge">argc</code>（命令行参数的数量）和 <code class="language-plaintext highlighter-rouge">argv</code>（在命令行中作为参数传递的字符串数组）。'),
    ('Therefore, using the syntax of this program, executing <code class="language-plaintext highlighter-rouge">./greet David</code> would result in the program saying <code class="language-plaintext highlighter-rouge">hello, David</code>.',
     '因此，使用此程序的语法，执行 <code class="language-plaintext highlighter-rouge">./greet David</code> 将导致程序说出 <code class="language-plaintext highlighter-rouge">hello, David</code>。'),
    ('You can print each of the 命令行参数s with the following:',
     '你可以使用以下代码打印每个命令行参数：'),

    ('Notice how this code prints out each 命令行参数 on its own line. The first argument (argv[0]) is always the名字 of the program itself, followed by any arguments you provide when running the program.',
     '注意这段代码如何将每个命令行参数打印在单独的一行上。第一个参数（argv[0]）始终是程序本身的名称，后面跟着你运行程序时提供的任何参数。'),

    # Exit Status
    ('When a program ends, a special exit code is provided to the computer.',
     '当程序结束时，会向计算机提供一个特殊的退出代码。'),
    ('When a program exits without error, a status code of <code class="language-plaintext highlighter-rouge">0</code> is provided to the computer. Often, when an error occurs that results in the program ending, a status of <code class="language-plaintext highlighter-rouge">1</code> is provided to the computer.',
     '当程序无错误退出时，会向计算机提供状态码 <code class="language-plaintext highlighter-rouge">0</code>。通常，当发生导致程序终止的错误时，会向计算机提供状态码 <code class="language-plaintext highlighter-rouge">1</code>。'),
    ('You could 编写一个 program as follows that illustrates this by typing <code class="language-plaintext highlighter-rouge">code status.c</code> and writing code as follows:',
     '你可以通过输入 <code class="language-plaintext highlighter-rouge">code status.c</code> 并按如下方式编写代码来编写一个程序来说明这一点：'),

    ('Notice that if you fail to provide <code class="language-plaintext highlighter-rouge">./status David</code>, you will get an exit status of <code class="language-plaintext highlighter-rouge">1</code>. However, if you do provide <code class="language-plaintext highlighter-rouge">./status David</code>, you will get an exit status of <code class="language-plaintext highlighter-rouge">0</code>.',
     '注意如果你没有提供 <code class="language-plaintext highlighter-rouge">./status David</code>，你将获得退出状态 <code class="language-plaintext highlighter-rouge">1</code>。但是，如果你确实提供了 <code class="language-plaintext highlighter-rouge">./status David</code>，你将获得退出状态 <code class="language-plaintext highlighter-rouge">0</code>。'),
    ('You can type <code class="language-plaintext highlighter-rouge">echo $?</code> in the terminal to see the exit status of the last run command.',
     '你可以在终端中输入 <code class="language-plaintext highlighter-rouge">echo $?</code> 来查看最后运行命令的退出状态。'),
    ('You can imagine how you might use portions of the above program to check if a user provided the correct number of 命令行参数s.',
     '你可以想象如何使用上述程序的某些部分来检查用户是否提供了正确数量的命令行参数。'),

    # Summing Up
    ('In this lesson, you learned 更多 details 关于 compiling and how data is stored within a computer. Specifically, you learned\xe2\x80\xa6',
     '在本课中，你学习了关于编译以及数据如何在计算机中存储的更多细节。具体来说，你学习了……'),
    ('Generally, how a compiler works.',
     '编译器通常如何工作。'),
    ('How to 调试 your code using four methods.',
     '如何使用四种方法调试你的代码。'),
    ('How to utilize arrays within your code.',
     '如何在你的代码中使用数组。'),
    ('How arrays store data in 返回-to-返回 portions of 内存.',
     '数组如何在背靠背的内存部分中存储数据。'),
    ('How strings are simply arrays of characters.',
     '字符串如何仅仅是字符数组。'),
    ('How to interact with arrays in your code.',
     '如何在你的代码中与数组交互。'),
    ('How 命令行参数s can be passed to your programs.',
     '如何向你的程序传递命令行参数。'),
]

# ==================== NOTES 3 ====================
replacements_3 = [
    ('In周zero, we introduced the idea of an <em>algorithm</em>: 一份 black box that可能需要 an input and 创建一个n output.',
     '在第零周，我们介绍了<em>算法</em>的概念：一个黑盒子，可能需要一个输入并创建一个输出。'),
    ('This 周, we are going to expand upon our understanding of 算法 through pseudocode and into code itself.',
     '本周，我们将通过伪代码深入到代码本身来扩展我们对算法的理解。'),
    ('Also, we are going to consider the efficiency of these 算法. Indeed, we are going to be building upon our understanding of how to use some of the concepts we discussed last周in building 算法.',
     '此外，我们将考虑这些算法的效率。确实，我们将在理解如何使用上周讨论的一些概念来构建算法的基础上继续学习。'),
    ('算法 can be slow, having a high时间 and processing cost, or fast, having a low processing and时间 cost.',
     '算法可以慢，具有高时间和处理成本，也可以快，具有低处理和时间成本。'),
    ('As we step into 本周, you should consider how the way an algorithm works with a problem 五月 determine the时间 it takes to solve a problem! 算法 can be designed to be 更多 and 更多 efficient to a limit.',
     '当我们步入本周，你应该考虑算法处理问题的方式如何决定解决问题所需的时间！算法可以被设计得在一个限度内越来越高效。'),
    ('Today, we will focus on the design of 算法 and how to measure their efficiency.',
     '今天，我们将专注于算法的设计以及如何衡量它们的效率。'),

    # Linear Search
    ('Linear 搜索', '线性搜索'),
    ('Recall that last 周, you were introduced to the idea of an <em>array</em>, blocks of 内存 that are consecutive: Side-by-side with one another.',
     '回想一下，上周你被介绍了<em>数组</em>的概念，即连续的内存块：彼此并排放置。'),
    ('The far-left position is called <em>地点 0</em> or <em>the beginning of the array</em>. The far-right position is <em>地点 6</em> or <em>the end of the array</em>.',
     '最左边的位置称为<em>位置 0</em>或<em>数组的开头</em>。最右边的位置是<em>位置 6</em>或<em>数组的结尾</em>。'),
    ('We can imagine that we have an essential problem of wanting to know, \xe2\x80\x9cIs the number <code class="language-plaintext highlighter-rouge">50</code> inside an array?\xe2\x80\x9d 一份 computer must look at each locker to be able to see if the number <code class="language-plaintext highlighter-rouge">50</code> is inside. We call this process of finding such a number, character, string, or other item <em>searching</em>.',
     '我们可以想象我们有一个基本问题需要知道，"数字 <code class="language-plaintext highlighter-rouge">50</code> 是否在数组中？"计算机必须查看每个储物柜，才能看到数字 <code class="language-plaintext highlighter-rouge">50</code> 是否在里面。我们将此查找数字、字符、字符串或其他项目的过程称为<em>搜索</em>。'),
    ('We can potentially hand our array to an algorithm, wherein our algorithm will 搜索 through our lockers to see if the number <code class="language-plaintext highlighter-rouge">50</code> is behind one of the doors, returning the value <code class="language-plaintext highlighter-rouge">true</code> or <code class="language-plaintext highlighter-rouge">false</code>.',
     '我们可以潜在地将数组交给算法，其中我们的算法将搜索我们的储物柜，看看数字 <code class="language-plaintext highlighter-rouge">50</code> 是否在某个门后面，返回值 <code class="language-plaintext highlighter-rouge">true</code> 或 <code class="language-plaintext highlighter-rouge">false</code>。'),

    ('Notice that the above instructions are called <em>pseudocode</em>: 一份 human-readable version of the instructions that we could provide the computer.',
     '注意上述指令被称为<em>伪代码</em>：一个我们可以提供给计算机的人类可读版本的指令。'),
    ('一份 computer scientist could translate that pseudocode as follows:',
     '计算机科学家可以将该伪代码翻译如下：'),

    ('Notice that the above is still not code, but it is a pretty 关闭 approximation of what the final code might look like.',
     '注意上述内容仍然不是代码，但它是最终代码可能是什么样子的一个相当接近的近似。'),

    # Binary Search
    ('<em>二分搜索</em> is another <em>搜索 algorithm</em> that could be employed in our task of finding the <code class="language-plaintext highlighter-rouge">50</code>.',
     '<em>二分搜索</em>是另一种<em>搜索算法</em>，可以用于我们查找 <code class="language-plaintext highlighter-rouge">50</code> 的任务。'),
    ('Using the nomenclature of code, we can further modify our algorithm as follows:',
     '使用代码的术语，我们可以按如下方式进一步修改我们的算法：'),
    ('Notice that by looking at this approximation of code, you can nearly imagine what this might look like in actual code.',
     '注意通过查看这个代码近似，你几乎可以想象它在实际代码中的样子。'),

    # Running Time
    ('Running 时间', '运行时间'),
    ('You can consider how much时间 it takes an algorithm to solve a problem.',
     '你可以考虑算法解决问题需要多少时间。'),
    ('<em>Running 时间</em> involves an analysis using <em>big O</em> notation. Take a look at the following graph:',
     '<em>运行时间</em>涉及使用<em>大 O</em> 表示法的分析。看一下下面的图表：'),
    ('Rather than being ultra-specific关于 mathematical efficiency of an algorithm, computer scientists discuss efficiency in terms of <em>the order of</em> various running times.',
     '计算机科学家不是对算法的数学效率进行极其具体的讨论，而是根据各种运行时间的<em>阶</em>来讨论效率。'),
    ('In the above graph, the first algorithm is \\(O(n)\\) or <em>in the order of n</em>. The second is in \\(O(n)\\) as well, in that constants are dropped in big O. The third is in \\(O(\\log n)\\).',
     '在上面的图表中，第一个算法是 \\(O(n)\\) 或<em>n 的阶</em>。第二个也是 \\(O(n)\\)，因为在大 O 中常数被省略。第三个是 \\(O(\\log n)\\)。'),
    ('It\xe2\x80\x99s the shape of the curve that shows the efficiency of an algorithm. Some common running times we 五月 see are:',
     '展示算法效率的是曲线的形状。我们可能看到的一些常见运行时间是：'),
    ('Of the running times above, \\(O(n^2)\\) is considered the slowest running时间。 \\(O(1)\\) is the fastest.',
     '在上述运行时间中，\\(O(n^2)\\) 被认为是最慢的运行时间。\\(O(1)\\) 是最快的。'),
    ('Linear 搜索 was of order \\(O(n)\\) because it could take <em>n</em> steps in the worst case to run.',
     '线性搜索是 \\(O(n)\\) 阶的，因为在最坏情况下它可能需要 <em>n</em> 步来运行。'),
    ('二分搜索 was of order \\(O(\\log n)\\) because it would take fewer and fewer steps to run, even in the worst case.',
     '二分搜索是 \\(O(\\log n)\\) 阶的，因为即使在最坏情况下，它运行所需的步骤也越来越少。'),
    ('Programmers are interested in both the worst case, or <em>upper bound</em>, and the best case, or <em>lower bound</em>.',
     '程序员对最坏情况（或<em>上界</em>）和最好情况（或<em>下界</em>）都感兴趣。'),
    ('The \\(\\Omega\\) symbol is used to denote the best case of an algorithm, such as \\(\\Omega(\\log n)\\).',
     '\\(\\Omega\\) 符号用于表示算法的最好情况，例如 \\(\\Omega(\\log n)\\)。'),
    ('The \\(\\Theta\\) symbol is used to denote where the upper bound and lower bound are the same: Where the best case and the worst case running times are the same.',
     '\\(\\Theta\\) 符号用于表示上界和下界相同的情况：即最好情况和最坏情况运行时间相同的情况。'),
    ('<em>Asymptotic notation</em> is the measure of how well 算法 perform as the input gets larger and larger.',
     '<em>渐近表示法</em>是衡量算法随着输入越来越大而表现如何的度量。'),
    ('As you continue to develop your knowledge in 计算机科学, you will explore these topics in 更多 detail in future 课程.',
     '随着你在计算机科学方面继续发展你的知识，你将在未来的课程中更详细地探索这些主题。'),

    # search.c
    ('You can implement linear 搜索 by typing <code class="language-plaintext highlighter-rouge">code search.c</code> in your terminal window and writing code as follows:',
     '你可以通过在你的终端窗口中输入 <code class="language-plaintext highlighter-rouge">code search.c</code> 并按如下方式编写代码来实现线性搜索：'),

    ('Notice that the line beginning with <code class="language-plaintext highlighter-rouge">int numbers[]</code> allows us to define the values of each element of the array as we create it. Then, in the <code class="language-plaintext highlighter-rouge">for</code> loop, we have an implementation of linear 搜索. <code class="language-plaintext highlighter-rouge">返回 0</code> is used to indicate success and exit the program. <code class="language-plaintext highlighter-rouge">返回 1</code> is used to exit the program with an error (failure).',
     '注意以 <code class="language-plaintext highlighter-rouge">int numbers[]</code> 开头的行允许我们在创建数组时定义每个元素的值。然后，在 <code class="language-plaintext highlighter-rouge">for</code> 循环中，我们有了线性搜索的实现。<code class="language-plaintext highlighter-rouge">返回 0</code> 用于表示成功并退出程序。<code class="language-plaintext highlighter-rouge">返回 1</code> 用于以错误（失败）退出程序。'),
    ('We have now implemented linear 搜索 ourselves in C!',
     '我们现在已经用 C 语言自己实现了线性搜索！'),
    ('What if we wanted to 搜索 for a string within an array? Modify your code as follows:',
     '如果我们想在数组中搜索一个字符串呢？按如下方式修改你的代码：'),

    ('Notice that we cannot utilize <code class="language-plaintext highlighter-rouge">==</code> as in our 上一页 iteration of this program. Instead, we use <code class="language-plaintext highlighter-rouge">strcmp</code>, which comes from the <code class="language-plaintext highlighter-rouge">string.h</code> library. <code class="language-plaintext highlighter-rouge">strcmp</code> will return <code class="language-plaintext highlighter-rouge">0</code> if the strings are the same. Also, notice that the array length of <code class="language-plaintext highlighter-rouge">6</code> is hard-coded, which is not good 编程 practice.',
     '注意我们不能像在此程序的上一个版本中那样使用 <code class="language-plaintext highlighter-rouge">==</code>。相反，我们使用 <code class="language-plaintext highlighter-rouge">strcmp</code>，它来自 <code class="language-plaintext highlighter-rouge">string.h</code> 库。如果字符串相同，<code class="language-plaintext highlighter-rouge">strcmp</code> 将返回 <code class="language-plaintext highlighter-rouge">0</code>。此外，注意数组长度 <code class="language-plaintext highlighter-rouge">6</code> 被硬编码，这不是良好的编程实践。'),
    ('Indeed, running this code allows us to iterate over this array of strings to see if a certain string is within it. However, if you see a <em>segmentation fault</em>, where a part of 内存 was touched by your program that it should not have access to, do make sure you have <code class="language-plaintext highlighter-rouge">i &lt; 6</code> noted above instead of <code class="language-plaintext highlighter-rouge">i &lt; 7</code>.',
     '确实，运行这段代码允许我们遍历这个字符串数组，看看某个字符串是否在其中。但是，如果你看到一个<em>段错误</em>，即程序触及了它不应该访问的内存部分，请确保你在上面写了 <code class="language-plaintext highlighter-rouge">i &lt; 6</code> 而不是 <code class="language-plaintext highlighter-rouge">i &lt; 7</code>。'),
    ('You can learn 更多 关于 <code class="language-plaintext highlighter-rouge">strcmp</code> at the <a href="https://manual.cs50.io/3/strcmp">CS50 手册页面</a>.',
     '你可以在<a href="https://manual.cs50.io/3/strcmp">CS50 手册页面</a>上学习更多关于 <code class="language-plaintext highlighter-rouge">strcmp</code> 的内容。'),

    # phonebook.c
    ('We can combine these ideas of both numbers and strings into a single program. Type <code class="language-plaintext highlighter-rouge">code phonebook.c</code> into your terminal window and write code as follows:',
     '我们可以将数字和字符串的这些思想结合到一个程序中。在你的终端窗口中输入 <code class="language-plaintext highlighter-rouge">code phonebook.c</code> 并按如下方式编写代码：'),

    ('Notice that Kelly\xe2\x80\x99s number begins with <code class="language-plaintext highlighter-rouge">+1-617</code>, David\xe2\x80\x99s phone number starts with <code class="language-plaintext highlighter-rouge">+1-617</code>, and John\xe2\x80\x99s number starts with <code class="language-plaintext highlighter-rouge">+1-949</code>. Therefore, <code class="language-plaintext highlighter-rouge">names[0]</code> is Kelly, and <code class="language-plaintext highlighter-rouge">numbers[0]</code> is Kelly\xe2\x80\x99s number. This code will allow us to 搜索 the phonebook for a person\xe2\x80\x99s specific number.',
     '注意 Kelly 的号码以 <code class="language-plaintext highlighter-rouge">+1-617</code> 开头，David 的电话号码以 <code class="language-plaintext highlighter-rouge">+1-617</code> 开头，John 的号码以 <code class="language-plaintext highlighter-rouge">+1-949</code> 开头。因此，<code class="language-plaintext highlighter-rouge">names[0]</code> 是 Kelly，<code class="language-plaintext highlighter-rouge">numbers[0]</code> 是 Kelly 的号码。这段代码将允许我们搜索电话簿以查找特定人的号码。'),
    ('While this code works, there are numerous inefficiencies. Indeed, there is a chance that names and phone numbers可能不 correspond to one another. Wouldn\xe2\x80\x99t it be nice if we could create our own data type where we could associate a person with their phone number?',
     '虽然这段代码可以工作，但存在许多低效之处。确实，名字和电话号码之间有可能不对应。如果我们能创建自己的数据类型，将一个人与他们的电话号码关联起来，那不是很好吗？'),

    # Structs
    ('It turns out that C allows us to create our own data types via a <code class="language-plaintext highlighter-rouge">struct</code>.',
     '事实证明，C 允许我们通过 <code class="language-plaintext highlighter-rouge">struct</code> 创建自己的数据类型。'),
    ('Would it not be useful to create our own data type called a <code class="language-plaintext highlighter-rouge">person</code> that has inside of it a <code class="language-plaintext highlighter-rouge">name</code> and a <code class="language-plaintext highlighter-rouge">number</code>? Consider the following:',
     '创建我们自己的数据类型叫做 <code class="language-plaintext highlighter-rouge">person</code>，其中包含一个 <code class="language-plaintext highlighter-rouge">name</code> 和一个 <code class="language-plaintext highlighter-rouge">number</code>，这难道不有用吗？考虑以下内容：'),
    ('Notice how this represents our own datatype called a <code class="language-plaintext highlighter-rouge">person</code> that has a string called <code class="language-plaintext highlighter-rouge">name</code> and another string called <code class="language-plaintext highlighter-rouge">number</code>.',
     '注意这代表我们自己的数据类型叫做 <code class="language-plaintext highlighter-rouge">person</code>，它有一个名为 <code class="language-plaintext highlighter-rouge">name</code> 的字符串和另一个名为 <code class="language-plaintext highlighter-rouge">number</code> 的字符串。'),
    ('We can improve our prior code by modifying our phonebook program as follows:',
     '我们可以通过按如下方式修改我们的电话簿程序来改进之前的代码：'),

    ('Notice that the code begins with <code class="language-plaintext highlighter-rouge">typedef struct</code> where a new datatype called <code class="language-plaintext highlighter-rouge">person</code> is defined. Inside a <code class="language-plaintext highlighter-rouge">person</code> is a string called <code class="language-plaintext highlighter-rouge">name</code> and a <code class="language-plaintext highlighter-rouge">string</code> called <code class="language-plaintext highlighter-rouge">number</code>. In the <code class="language-plaintext highlighter-rouge">main</code> function, we begin by creating an array called <code class="language-plaintext highlighter-rouge">people</code> that is of type <code class="language-plaintext highlighter-rouge">person</code> that is of size 3. Then, we update the names and phone numbers of the three people in our <code class="language-plaintext highlighter-rouge">people</code> array. Most importantly, notice how the <em>dot notation</em>, such as <code class="language-plaintext highlighter-rouge">people[0].name</code>, allows us to access the <code class="language-plaintext highlighter-rouge">person</code> at the 0th 地点 and assign that individual a名字。',
     '注意代码以 <code class="language-plaintext highlighter-rouge">typedef struct</code> 开始，其中定义了一个名为 <code class="language-plaintext highlighter-rouge">person</code> 的新数据类型。在一个 <code class="language-plaintext highlighter-rouge">person</code> 内部有一个名为 <code class="language-plaintext highlighter-rouge">name</code> 的字符串和一个名为 <code class="language-plaintext highlighter-rouge">number</code> 的 <code class="language-plaintext highlighter-rouge">string</code>。在 <code class="language-plaintext highlighter-rouge">main</code> 函数中，我们首先创建一个名为 <code class="language-plaintext highlighter-rouge">people</code> 的数组，类型为 <code class="language-plaintext highlighter-rouge">person</code>，大小为 3。然后，我们更新 <code class="language-plaintext highlighter-rouge">people</code> 数组中三个人的名字和电话号码。最重要的是，注意<em>点记法</em>，例如 <code class="language-plaintext highlighter-rouge">people[0].name</code>，允许我们访问第 0 个位置的 <code class="language-plaintext highlighter-rouge">person</code> 并为该人分配一个名字。'),

    # Sorting and Selection Sort
    ('Sorting and 选择排序', '排序与选择排序'),
    ('<em>Sorting</em> is the act of taking an unsorted list of values and transforming this list into a sorted one.',
     '<em>排序</em>是将一个未排序的值列表转换为一个已排序列表的行为。'),
    ('When a list is sorted, searching that list is far 较少 taxing on the computer. Recall that we can use 二分搜索 on a sorted list but not on an unsorted one.',
     '当列表被排序后，在该列表中搜索对计算机的负担要小得多。回想一下，我们可以在已排序的列表上使用二分搜索，但不能在未排序的列表上使用。'),
    ('It turns out that there are many different types of sorting 算法.',
     '事实证明，有许多不同类型的排序算法。'),
    ('<em>选择排序</em> is one such sorting algorithm.',
     '<em>选择排序</em>是一种这样的排序算法。'),

    ('Summarizing those steps, the first时间 iterating through the list takes <code class="language-plaintext highlighter-rouge">n - 1</code> steps. The second时间， it takes <code class="language-plaintext highlighter-rouge">n - 2</code> steps. Carrying this logic forward, the steps 必需 could be represented as follows:',
     '总结这些步骤，第一次遍历列表需要 <code class="language-plaintext highlighter-rouge">n - 1</code> 步。第二次，需要 <code class="language-plaintext highlighter-rouge">n - 2</code> 步。按照这个逻辑继续推进，所需的步骤可以表示如下：'),
    ('This could be simplified to n(n-1)/2 or, 更多 simply, \\(O(n^2)\\). In the worst case or upper bound, 选择排序 is in the order of \\(O(n^2)\\). In the best case or lower bound, 选择排序 is in the order of \\(\\Omega(n^2)\\).',
     '这可以简化为 n(n-1)/2，更简单地说是 \\(O(n^2)\\)。在最坏情况或上界中，选择排序是 \\(O(n^2)\\) 阶的。在最好情况或下界中，选择排序是 \\(\\Omega(n^2)\\) 阶的。'),

    # Bubble Sort
    ('<em>冒泡排序</em> is another sorting algorithm that works by repeatedly swapping elements to \xe2\x80\x9cbubble\xe2\x80\x9d larger elements to the end.',
     '<em>冒泡排序</em>是另一种排序算法，它通过重复交换元素来将较大的元素"冒泡"到末尾。'),
    ('As we further 排序 the array, we know 更多 and 更多 of it becomes sorted, so we only need to look at the pairs of numbers that haven\xe2\x80\x99t been sorted yet.',
     '随着我们进一步排序数组，我们知道它的越来越多部分已经被排序，所以我们只需要查看尚未被排序的数字对。'),
    ('冒泡排序 can be analyzed as follows:',
     '冒泡排序可以分析如下：'),
    ('or, 更多 simply \\(O(n^2)\\).',
     '或者，更简单地说是 \\(O(n^2)\\)。'),
    ('In the worst case or upper bound, 冒泡排序 is in the order of \\(O(n^2)\\). In the best case or lower bound, 冒泡排序 is in the order of \\(\\Omega(n)\\).',
     '在最坏情况或上界中，冒泡排序是 \\(O(n^2)\\) 阶的。在最好情况或下界中，冒泡排序是 \\(\\Omega(n)\\) 阶的。'),
    ('You can <a href="https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html">visualize</a> a comparison of these 算法.',
     '你可以<a href="https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html">可视化</a>这些算法的比较。'),

    # Recursion
    ('How could we improve our efficiency in our sorting?',
     '我们如何提高排序的效率？'),
    ('<em>递归</em> is a concept within 编程 where a function calls itself. We saw this earlier when we saw\xe2\x80\xa6',
     '<em>递归</em>是编程中函数调用自身的一个概念。我们之前看到过这个……'),

    ('Notice that we are calling <code class="language-plaintext highlighter-rouge">search</code> on smaller and smaller iterations of this problem.',
     '注意我们正在对这个问题的越来越小的迭代调用 <code class="language-plaintext highlighter-rouge">search</code>。'),
    ('Similarly, in our pseudocode for 第 0 周, you can see where 递归 was implemented:',
     '同样，在我们第 0 周的伪代码中，你可以看到递归是在哪里实现的：'),
    ('This code could have been simplified to highlight its recursive properties as follows:',
     '这段代码可以按如下方式简化以突出其递归特性：'),
    ('一份 <em>base case</em> is defined as the condition that stops the 递归 from continuing indefinitely, preventing infinite loops.',
     '<em>基本情况</em>被定义为停止递归无限继续的条件，防止无限循环。'),
    ('一份 <em>recursive case</em> is defined as the part of the recursive function that calls itself with a modified input, moving toward the base case.',
     '<em>递归情况</em>被定义为递归函数中使用修改后的输入调用自身、向基本情况移动的部分。'),

    ('Consider how in 第 1周we wanted to 创建一个 pyramid structure as follows:',
     '考虑一下在第 1 周我们如何想要创建一个如下所示的金字塔结构：'),
    ('Type <code class="language-plaintext highlighter-rouge">code iteration.c</code> into your terminal window and write code as follows:',
     '在你的终端窗口中输入 <code class="language-plaintext highlighter-rouge">code iteration.c</code> 并按如下方式编写代码：'),
    ('Notice that this code builds the pyramid by looping.',
     '注意这段代码通过循环来构建金字塔。'),
    ('To implement this using 递归, type <code class="language-plaintext highlighter-rouge">code recursion.c</code> into your terminal window and write code as follows:',
     '要使用递归来实现这个，在你的终端窗口中输入 <code class="language-plaintext highlighter-rouge">code recursion.c</code> 并按如下方式编写代码：'),

    ('Notice the base case will ensure the code does not run forever. The line <code class="language-plaintext highlighter-rouge">if (n &lt;= 0)</code> terminates the 递归 because the problem has been solved. Every时间 <code class="language-plaintext highlighter-rouge">draw</code> calls itself, it calls itself with <code class="language-plaintext highlighter-rouge">n-1</code>. At some point, <code class="language-plaintext highlighter-rouge">n-1</code> will equal <code class="language-plaintext highlighter-rouge">0</code>, resulting in the <code class="language-plaintext highlighter-rouge">draw</code> function returning, and the program will end.',
     '注意基本情况将确保代码不会永远运行。<code class="language-plaintext highlighter-rouge">if (n &lt;= 0)</code> 这一行终止递归，因为问题已经解决。每次 <code class="language-plaintext highlighter-rouge">draw</code> 调用自身时，它用 <code class="language-plaintext highlighter-rouge">n-1</code> 调用自身。在某个时刻，<code class="language-plaintext highlighter-rouge">n-1</code> 将等于 <code class="language-plaintext highlighter-rouge">0</code>，导致 <code class="language-plaintext highlighter-rouge">draw</code> 函数返回，程序将结束。'),

    # Merge Sort
    ('We can now leverage 递归 in our quest for a 更多 efficient 排序 algorithm and implement what is called <em>归并排序</em>, a very efficient 排序 algorithm.',
     '我们现在可以利用递归来寻求更高效的排序算法，并实现所谓的<em>归并排序</em>，一种非常高效的排序算法。'),
    ('The pseudocode for 归并排序 is quite short:',
     '归并排序的伪代码相当简短：'),

    ('First, 归并排序 asks, \xe2\x80\x9cIs this one number?\xe2\x80\x9d The 答案 is \xe2\x80\x9cno,\xe2\x80\x9d so the algorithm continues.',
     '首先，归并排序问，"这是一个数字吗？"答案是"否"，所以算法继续。'),
    ('Second, 归并排序 will now split the numbers down the middle (or as 关闭 as it can get) and 排序 the left half of numbers.',
     '第二步，归并排序现在将数字从中间分开（或尽可能靠近），并排序左半边的数字。'),
    ('Third, 归并排序 would look at these numbers on the left and ask, \xe2\x80\x9cIs this one number?\xe2\x80\x9d Since答案 is no, it would then split the numbers on the left down the middle.',
     '第三步，归并排序会查看左边这些数字并问，"这是一个数字吗？"由于答案是"否"，它会将左边的数字从中间分开。'),
    ('Fourth, 归并排序 will again ask, \xe2\x80\x9cIs this one number?\xe2\x80\x9d The 答案 is yes this 时间! Therefore, it will quit this task and return to the last task it was running at this point:',
     '第四步，归并排序会再次问，"这是一个数字吗？"答案这次是"是"！因此，它将退出此任务并返回到此时它正在运行的最后一个任务：'),

    ('Fifth, 归并排序 will 排序 the numbers on the left.',
     '第五步，归并排序将排序左边的数字。'),
    ('Now, we return to where we left off in the pseudocode now that the left side has been sorted. 一份 similar process of steps 3-5 will occur with the right-hand numbers. This will result in:',
     '现在，由于左侧已经被排序，我们回到伪代码中离开的地方。右侧的数字将发生类似的步骤 3-5 过程。这将导致：'),
    ('Both halves are now sorted. Finally, the algorithm will merge both sides. It will look at the first number on the left and the first number on the right. It will put the smaller number first, then the second smallest. The algorithm will repeat this for all numbers, resulting in:',
     '两边现在都已排序。最后，算法将合并两侧。它将查看左侧的第一个数字和右侧的第一个数字。它将把较小的数字放在前面，然后是第二小的。算法将对所有数字重复此操作，结果是：'),

    ('归并排序 is complete, and the program quits.',
     '归并排序完成，程序退出。'),
    ('归并排序 is a very efficient 排序 algorithm with a worst case of \\(O(n \\log n)\\). The best case is still \\(\\Omega(n \\log n)\\) because the algorithm still must visit each place in the list. Therefore, 归并排序 is also \\(\\Theta(n \\log n)\\) since the best case and worst case are the same.',
     '归并排序是一种非常高效的排序算法，最坏情况为 \\(O(n \\log n)\\)。最好情况仍然是 \\(\\Omega(n \\log n)\\)，因为算法仍然必须访问列表中的每个位置。因此，归并排序也是 \\(\\Theta(n \\log n)\\)，因为最好情况和最坏情况相同。'),
    ('一份 final <a href="https://www.youtube.com/watch?v=ZZuD6iUe3Pc">visualization</a> was shared.',
     '最后分享了一个<a href="https://www.youtube.com/watch?v=ZZuD6iUe3Pc">可视化演示</a>。'),

    # Summing Up 3
    ('In this lesson, you learned关于lgorithmic thinking and building your own data types. Specifically, you learned\xe2\x80\xa6',
     '在本课中，你学习了关于算法思维和构建自己的数据类型。具体来说，你学习了……'),
    ('二分搜索 and linear 搜索.',
     '二分搜索和线性搜索。'),
    ('Various 排序 算法, including 冒泡排序, 选择排序, and 归并排序.',
     '各种排序算法，包括冒泡排序、选择排序和归并排序。'),
]

# ==================== NOTES 4 ====================
replacements_4 = [
    ('Today, we take off so many of the training wheels that you used to get your start in this class.',
     '今天，我们卸下了你在这门课开始时使用的许多辅助轮。'),
    ('In 上一页 周次, we talked 关于 images being made of smaller building blocks called pixels.',
     '在前几周，我们讨论了图像是由称为像素的更小构建块组成的。'),
    ('This 周, we will go into further detail关于 zeros and ones that make up these images. In particular, we will be going deeper into the fundamental building blocks that make up files, including images.',
     '本周，我们将进一步详细讨论构成这些图像的零和一。特别是，我们将更深入地研究构成文件（包括图像）的基本构建块。'),
    ('Further, we will discuss how to access the underlying data stored in computer 内存.',
     '此外，我们将讨论如何访问存储在计算机内存中的底层数据。'),
    ('As we begin today, know that the concepts covered in this 讲座可能需要 some时间 to fully <em>click</em>.',
     '当我们今天开始时，请知道本讲座涵盖的概念可能需要一些时间才能完全<em>理解</em>。'),

    # Pixel Art
    ('Pixels are squares, individual dots, of color that are arranged on an up-down, left-right grid.',
     '像素是颜色的方块、单独的色点，排列在一个上下左右网格上。'),
    ('You can imagine an image as a map of bits, where zeros represent black and ones represent white.',
     '你可以将图像想象为一张位图，其中 0 表示黑色，1 表示白色。'),

    # Hexadecimal
    ('<em>RGB</em>, or <em>red, green, blue</em>, are numbers that represent the amount of each of these colors. In Adobe Photoshop, you can see these settings as follows:',
     '<em>RGB</em>，即<em>红、绿、蓝</em>，是表示每种颜色数量的数字。在 Adobe Photoshop 中，你可以看到这些设置如下：'),
    ('Notice how the amount of red, blue, and green changes the color selected.',
     '注意红、蓝、绿的数量如何改变所选颜色。'),
    ('You can see from the image above that color is not just represented by three values. At the bottom of the window, there is a special value made up of numbers and characters. <code class="language-plaintext highlighter-rouge">255</code> is represented as <code class="language-plaintext highlighter-rouge">FF</code>. Why might this be?',
     '你可以从上图中看到，颜色不仅仅由三个值表示。在窗口底部，有一个由数字和字符组成的特殊值。<code class="language-plaintext highlighter-rouge">255</code> 被表示为 <code class="language-plaintext highlighter-rouge">FF</code>。为什么会这样呢？'),
    ('<em>Hexadecimal</em> is a system of counting that has 16 counting values. They are as follows:',
     '<em>十六进制</em>是一种有 16 个计数值的计数系统。它们如下：'),
    ('Notice that <code class="language-plaintext highlighter-rouge">F</code> represents <code class="language-plaintext highlighter-rouge">15</code>.',
     '注意 <code class="language-plaintext highlighter-rouge">F</code> 表示 <code class="language-plaintext highlighter-rouge">15</code>。'),
    ('Hexadecimal is also known as <em>base-16</em>.',
     '十六进制也被称为<em>基数为 16</em>。'),
    ('When counting in hexadecimal, each column is a power of 16.',
     '在十六进制中计数时，每一列是 16 的幂。'),
    ('The number <code class="language-plaintext highlighter-rouge">0</code> is represented as <code class="language-plaintext highlighter-rouge">00</code>.',
     '数字 <code class="language-plaintext highlighter-rouge">0</code> 表示为 <code class="language-plaintext highlighter-rouge">00</code>。'),
    ('The number <code class="language-plaintext highlighter-rouge">1</code> is represented as <code class="language-plaintext highlighter-rouge">01</code>.',
     '数字 <code class="language-plaintext highlighter-rouge">1</code> 表示为 <code class="language-plaintext highlighter-rouge">01</code>。'),
    ('The number <code class="language-plaintext highlighter-rouge">9</code> is represented by <code class="language-plaintext highlighter-rouge">09</code>.',
     '数字 <code class="language-plaintext highlighter-rouge">9</code> 由 <code class="language-plaintext highlighter-rouge">09</code> 表示。'),
    ('The number <code class="language-plaintext highlighter-rouge">10</code> is represented as <code class="language-plaintext highlighter-rouge">0A</code>.',
     '数字 <code class="language-plaintext highlighter-rouge">10</code> 表示为 <code class="language-plaintext highlighter-rouge">0A</code>。'),
    ('The number <code class="language-plaintext highlighter-rouge">15</code> is represented as <code class="language-plaintext highlighter-rouge">0F</code>.',
     '数字 <code class="language-plaintext highlighter-rouge">15</code> 表示为 <code class="language-plaintext highlighter-rouge">0F</code>。'),
    ('The number <code class="language-plaintext highlighter-rouge">16</code> is represented as <code class="language-plaintext highlighter-rouge">10</code>.',
     '数字 <code class="language-plaintext highlighter-rouge">16</code> 表示为 <code class="language-plaintext highlighter-rouge">10</code>。'),
    ('The number <code class="language-plaintext highlighter-rouge">255</code> is represented as <code class="language-plaintext highlighter-rouge">FF</code>, because 16 x 15 (or <code class="language-plaintext highlighter-rouge">F</code>) is 240. Add 15 更多 to make 255. This is the highest number you can count using a two-digit hexadecimal system.',
     '数字 <code class="language-plaintext highlighter-rouge">255</code> 表示为 <code class="language-plaintext highlighter-rouge">FF</code>，因为 16 x 15（或 <code class="language-plaintext highlighter-rouge">F</code>）是 240。再加 15 等于 255。这是你可以使用两位数十六进制系统计数的最大数字。'),
    ('Hexadecimal is useful because it can be represented using fewer digits. Hexadecimal allows us to represent information 更多 succinctly.',
     '十六进制很有用，因为它可以用更少的数字表示。十六进制允许我们更简洁地表示信息。'),

    # Memory
    ('In周past, you 五月 recall our artist rendering of concurrent blocks of 内存. Applying hexadecimal numbering to each of these blocks of 内存, you can visualize these as follows:',
     '在过去几周，你可能还记得我们艺术家渲染的并发内存块。将十六进制编号应用于这些内存块中的每一个，你可以按如下方式可视化它们：'),
    ('You can imagine how there可能是 confusion regarding whether the <code class="language-plaintext highlighter-rouge">10</code> block above 五月 represent a 地点 in 内存 or the value <code class="language-plaintext highlighter-rouge">10</code>. Accordingly, by convention, all hexadecimal numbers are often represented with the <code class="language-plaintext highlighter-rouge">0x</code> prefix as follows:',
     '你可以想象关于上面的 <code class="language-plaintext highlighter-rouge">10</code> 块是表示内存中的一个位置还是值 <code class="language-plaintext highlighter-rouge">10</code> 可能会有混淆。因此，按照惯例，所有十六进制数字通常都用 <code class="language-plaintext highlighter-rouge">0x</code> 前缀表示如下：'),

    ('Notice how <code class="language-plaintext highlighter-rouge">n</code> is stored in 内存 with the value <code class="language-plaintext highlighter-rouge">50</code>.',
     '注意 <code class="language-plaintext highlighter-rouge">n</code> 如何以值 <code class="language-plaintext highlighter-rouge">50</code> 存储在内存中。'),
    ('You can visualize how this program stores this value as follows:',
     '你可以按如下方式可视化这个程序如何存储这个值：'),

    # Pointers
    ('The C language has two powerful operators that relate to 内存:',
     'C 语言有两个与内存相关的强大运算符：'),

    ('We can leverage this knowledge by modifying our code as follows:',
     '我们可以通过按如下方式修改代码来利用这些知识：'),

    ('Notice the <code class="language-plaintext highlighter-rouge">%p</code>, which allows us to view the address of a 地点 in 内存. <code class="language-plaintext highlighter-rouge">&amp;n</code> can be literally translated as \xe2\x80\x9cthe address of <code class="language-plaintext highlighter-rouge">n</code>.\xe2\x80\x9d Executing this code will return an address of 内存 beginning with <code class="language-plaintext highlighter-rouge">0x</code>. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses0.c?download">here</a>.',
     '注意 <code class="language-plaintext highlighter-rouge">%p</code>，它允许我们查看内存中某个位置的地址。<code class="language-plaintext highlighter-rouge">&amp;n</code> 可以被字面翻译为"<code class="language-plaintext highlighter-rouge">n</code> 的地址"。执行这段代码将返回一个以 <code class="language-plaintext highlighter-rouge">0x</code> 开头的内存地址。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses0.c?download">在此</a>下载这段代码。'),
    ('一份 <em>pointer</em> is a variable that stores the address of something. Most succinctly, a pointer is an address in your computer\xe2\x80\x99s 内存.',
     '<em>指针</em>是一个存储某个事物的地址的变量。最简洁地说，指针是你计算机内存中的一个地址。'),

    ('Notice that <code class="language-plaintext highlighter-rouge">p</code> is a pointer that contains the address of an integer <code class="language-plaintext highlighter-rouge">n</code>.',
     '注意 <code class="language-plaintext highlighter-rouge">p</code> 是一个指针，包含整数 <code class="language-plaintext highlighter-rouge">n</code> 的地址。'),

    ('Notice that this code has the same effect as our 上一页 code. We have simply leveraged our new knowledge of the <code class="language-plaintext highlighter-rouge">&amp;</code> and <code class="language-plaintext highlighter-rouge">*</code> operators. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses1.c?download">here</a>.',
     '注意这段代码与之前的代码有相同的效果。我们只是利用了对 <code class="language-plaintext highlighter-rouge">&amp;</code> 和 <code class="language-plaintext highlighter-rouge">*</code> 运算符的新知识。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses1.c?download">在此</a>下载这段代码。'),

    ('Notice that the <code class="language-plaintext highlighter-rouge">printf</code> line prints the integer\xe2\x80\x99s address. <code class="language-plaintext highlighter-rouge">int *p</code> creates a pointer whose job is to store the 内存 address of an integer. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses2.c?download">here</a>.',
     '注意 <code class="language-plaintext highlighter-rouge">printf</code> 行打印了整数的地址。<code class="language-plaintext highlighter-rouge">int *p</code> 创建了一个指针，其工作是存储整数的内存地址。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses2.c?download">在此</a>下载这段代码。'),

    ('Notice that the pointer seems rather large. Indeed, a pointer is usually stored as an 8-byte value. <code class="language-plaintext highlighter-rouge">p</code> is storing the address of the <code class="language-plaintext highlighter-rouge">50</code>.',
     '注意指针看起来相当大。确实，指针通常存储为 8 字节值。<code class="language-plaintext highlighter-rouge">p</code> 存储的是 <code class="language-plaintext highlighter-rouge">50</code> 的地址。'),
    ('You can 更多 accurately visualize a pointer as one address that points to another:',
     '你可以更准确地将指针可视化为指向另一个地址的地址：'),

    # Strings
    ('Now that we have a mental model for 指针, we can peel 返回 a level of simplification that was offered earlier in 这门课程.',
     '现在我们对指针有了一个心智模型，我们可以揭掉这门课程早期提供的一层简化。'),

    ('Notice that a string <code class="language-plaintext highlighter-rouge">s</code> is printed. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses4.c?download">here</a>.',
     '注意打印了一个字符串 <code class="language-plaintext highlighter-rouge">s</code>。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses4.c?download">在此</a>下载这段代码。'),
    ('Recall that a string is simply an array of characters. 例如, <code class="language-plaintext highlighter-rouge">string s = "HI!"</code> can be represented as follows:',
     '回想一下，字符串只是一个字符数组。例如，<code class="language-plaintext highlighter-rouge">string s = "HI!"</code> 可以表示如下：'),
    ('However, what is <code class="language-plaintext highlighter-rouge">s</code> really? Where is the <code class="language-plaintext highlighter-rouge">s</code> stored in 内存? As you can imagine, <code class="language-plaintext highlighter-rouge">s</code> needs to be stored somewhere. You can visualize the relationship of <code class="language-plaintext highlighter-rouge">s</code> to the string as follows:',
     '但是，<code class="language-plaintext highlighter-rouge">s</code> 到底是什么？<code class="language-plaintext highlighter-rouge">s</code> 存储在哪里？如你所想，<code class="language-plaintext highlighter-rouge">s</code> 需要存储在某个地方。你可以按如下方式可视化 <code class="language-plaintext highlighter-rouge">s</code> 与字符串的关系：'),
    ('Notice how a pointer called <code class="language-plaintext highlighter-rouge">s</code> tells the compiler where the first byte of the string exists in 内存.',
     '注意一个名为 <code class="language-plaintext highlighter-rouge">s</code> 的指针如何告诉编译器字符串的第一个字节在内存中的位置。'),

    ('Notice the above prints the 内存 locations of each character in the string <code class="language-plaintext highlighter-rouge">s</code>. The <code class="language-plaintext highlighter-rouge">&amp;</code> symbol is used to show the address of each element of the string. When running this code, notice that elements <code class="language-plaintext highlighter-rouge">0</code>, <code class="language-plaintext highlighter-rouge">1</code>, <code class="language-plaintext highlighter-rouge">2</code>, and <code class="language-plaintext highlighter-rouge">3</code> are 下一页 to one another in 内存. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses5.c?download">here</a>.',
     '注意上面的代码打印了字符串 <code class="language-plaintext highlighter-rouge">s</code> 中每个字符的内存位置。<code class="language-plaintext highlighter-rouge">&amp;</code> 符号用于显示字符串每个元素的地址。运行这段代码时，注意元素 <code class="language-plaintext highlighter-rouge">0</code>、<code class="language-plaintext highlighter-rouge">1</code>、<code class="language-plaintext highlighter-rouge">2</code> 和 <code class="language-plaintext highlighter-rouge">3</code> 在内存中彼此相邻。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses5.c?download">在此</a>下载这段代码。'),

    ('Notice that this code creates a string using the <code class="language-plaintext highlighter-rouge">cs50.h</code> library. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses6.c?download">here</a>.',
     '注意这段代码使用 <code class="language-plaintext highlighter-rouge">cs50.h</code> 库创建了一个字符串。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses6.c?download">在此</a>下载这段代码。'),
    ('Taking off the training wheels, you can modify your code again:',
     '卸下辅助轮，你可以再次修改你的代码：'),

    ('Notice that <code class="language-plaintext highlighter-rouge">cs50.h</code> is removed. 一份 string is implemented as a <code class="language-plaintext highlighter-rouge">char *</code>. This code will present the string that starts at the 地点 of <code class="language-plaintext highlighter-rouge">s</code>. This code effectively removes the training wheels of the <code class="language-plaintext highlighter-rouge">string</code> data type offered by <code class="language-plaintext highlighter-rouge">cs50.h</code>. This is raw C code, without the scaffolding of the cs50 library. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses7.c?download">here</a>.',
     '注意 <code class="language-plaintext highlighter-rouge">cs50.h</code> 已被移除。字符串被实现为 <code class="language-plaintext highlighter-rouge">char *</code>。这段代码将呈现从 <code class="language-plaintext highlighter-rouge">s</code> 位置开始的字符串。这段代码有效地移除了 <code class="language-plaintext highlighter-rouge">cs50.h</code> 提供的 <code class="language-plaintext highlighter-rouge">string</code> 数据类型的辅助轮。这是原始的 C 代码，没有 cs50 库的脚手架。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses7.c?download">在此</a>下载这段代码。'),
    ('You can imagine how a string, as a data type, is created.',
     '你可以想象字符串作为一种数据类型是如何创建的。'),
    ('Last 周, we learned how to create your own data type as a struct.',
     '上周，我们学习了如何将你自己的数据类型创建为结构体。'),
    ('The cs50 library includes a type definition as follows: <code class="language-plaintext highlighter-rouge">typedef char *string</code>',
     'cs50 库包含以下类型定义：<code class="language-plaintext highlighter-rouge">typedef char *string</code>'),
    ('This type definition, when using the cs50 library, is a simplified representation that allows one to use a custom data type called <code class="language-plaintext highlighter-rouge">string</code>.',
     '这个类型定义，当使用 cs50 库时，是一个简化的表示，允许人们使用名为 <code class="language-plaintext highlighter-rouge">string</code> 的自定义数据类型。'),

    # Pointer Arithmetic
    ('Pointer arithmetic is the ability to do math on locations of 内存.',
     '指针运算是能够在内存位置上进行数学运算的能力。'),
    ('You can modify your code to print out each 内存 地点 in the string as follows:',
     '你可以按如下方式修改你的代码以打印出字符串中的每个内存位置：'),

    ('Notice that we are printing each character at the 地点 of <code class="language-plaintext highlighter-rouge">s</code>. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses8.c?download">here</a>.',
     '注意我们正在打印 <code class="language-plaintext highlighter-rouge">s</code> 位置的每个字符。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses8.c?download">在此</a>下载这段代码。'),

    ('Notice that the first character at the 地点 of <code class="language-plaintext highlighter-rouge">s</code> is printed. Then, the character at the 地点 <code class="language-plaintext highlighter-rouge">s + 1</code> is printed, and so on. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses9.c?download">here</a>.',
     '注意先打印 <code class="language-plaintext highlighter-rouge">s</code> 位置的第一个字符。然后打印 <code class="language-plaintext highlighter-rouge">s + 1</code> 位置的字符，依此类推。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses9.c?download">在此</a>下载这段代码。'),

    ('Notice that this code prints the values stored at various 内存 locations starting with <code class="language-plaintext highlighter-rouge">s</code>. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses10.c?download">here</a>.',
     '注意这段代码打印了从 <code class="language-plaintext highlighter-rouge">s</code> 开始的各种内存位置存储的值。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/addresses10.c?download">在此</a>下载这段代码。'),

    # String Comparison
    ('一份 string of characters is simply an array of characters identified by the 地点 of its first byte.',
     '一个字符串只是一个由第一个字节的位置标识的字符数组。'),
    ('Earlier 在该课程中, we considered the comparison of integers. We could represent this in code by typing <code class="language-plaintext highlighter-rouge">code compare.c</code> into the terminal window as follows:',
     '在这门课程的前面部分，我们考虑了整数的比较。我们可以通过在终端窗口中输入 <code class="language-plaintext highlighter-rouge">code compare.c</code> 来在代码中表示这一点，如下所示：'),

    ('Notice that this code takes two integers from the user and compares them. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/compare0.c?download">here</a>.',
     '注意这段代码从用户获取两个整数并进行比较。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/compare0.c?download">在此</a>下载这段代码。'),
    ('In the case of strings, however, one cannot compare two strings using the <code class="language-plaintext highlighter-rouge">==</code> operator.',
     '然而，对于字符串来说，不能使用 <code class="language-plaintext highlighter-rouge">==</code> 运算符来比较两个字符串。'),
    ('Utilizing the <code class="language-plaintext highlighter-rouge">==</code> operator in an attempt to compare strings will attempt to compare the 内存 locations of the strings instead of the characters therein. Accordingly, we recommended the use of <code class="language-plaintext highlighter-rouge">strcmp</code>.',
     '使用 <code class="language-plaintext highlighter-rouge">==</code> 运算符尝试比较字符串将尝试比较字符串的内存位置，而不是其中的字符。因此，我们建议使用 <code class="language-plaintext highlighter-rouge">strcmp</code>。'),
    ('To illustrate this, modify your code as follows:',
     '为了说明这一点，按如下方式修改你的代码：'),

    ('Noticing that typing in <code class="language-plaintext highlighter-rouge">HI!</code> for both strings still results in the output of <code class="language-plaintext highlighter-rouge">Different</code>. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/compare1.c?download">here</a>.',
     '注意对两个字符串都输入 <code class="language-plaintext highlighter-rouge">HI!</code> 仍然会输出 <code class="language-plaintext highlighter-rouge">Different</code>。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/compare1.c?download">在此</a>下载这段代码。'),
    ('Why are these strings seemingly different? You can use the following to visualize why:',
     '为什么这些字符串看似不同？你可以使用以下内容来可视化原因：'),
    ('Therefore, the code for <code class="language-plaintext highlighter-rouge">compare.c</code> above is actually attempting to see if the 内存 addresses are different, not the strings themselves.',
     '因此，上面的 <code class="language-plaintext highlighter-rouge">compare.c</code> 代码实际上试图查看内存地址是否不同，而不是字符串本身。'),
    ('Using <code class="language-plaintext highlighter-rouge">strcmp</code>, we can correct our code:',
     '使用 <code class="language-plaintext highlighter-rouge">strcmp</code>，我们可以纠正我们的代码：'),

    ('Notice that <code class="language-plaintext highlighter-rouge">strcmp</code> can return <code class="language-plaintext highlighter-rouge">0</code> if the strings are the same. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/compare2.c?download">here</a>.',
     '注意如果字符串相同，<code class="language-plaintext highlighter-rouge">strcmp</code> 可以返回 <code class="language-plaintext highlighter-rouge">0</code>。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/compare2.c?download">在此</a>下载这段代码。'),
    ('To further illustrate how these two strings are living in two locations, modify your code as follows:',
     '为了进一步说明这两个字符串如何存在于两个位置，按如下方式修改你的代码：'),

    ('Notice how we now have two separate strings stored, likely at two separate locations. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/compare3.c?download">here</a>.',
     '注意现在我们有两个独立的字符串被存储，很可能在两个独立的位置。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/compare3.c?download">在此</a>下载这段代码。'),
    ('You can see the locations of these two stored strings with a small modification:',
     '你可以通过一个小修改看到这两个存储的字符串的位置：'),

    ('Notice that the <code class="language-plaintext highlighter-rouge">%s</code> has been changed to <code class="language-plaintext highlighter-rouge">%p</code> in the print statement. You can 下载 this code <a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/compare4.c?download">here</a>.',
     '注意打印语句中的 <code class="language-plaintext highlighter-rouge">%s</code> 已被更改为 <code class="language-plaintext highlighter-rouge">%p</code>。你可以<a href="https://cdn.cs50.net/2025/fall/lectures/4/src4/compare4.c?download">在此</a>下载这段代码。'),
]

# Now apply all translations
base = 'D:/File/cs-archive/cs50/cs50-zh/x/notes'

all_replacements = {
    f'{base}/2/index.html': replacements_2,
    f'{base}/3/index.html': replacements_3,
    f'{base}/4/index.html': replacements_4,
}

total = 0
for filepath, reps in all_replacements.items():
    print(f'Processing {filepath}...')
    applied = translate_file(filepath, reps)
    total += applied

print(f'\nTotal translations applied: {total}')
