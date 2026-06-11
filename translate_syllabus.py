#!/usr/bin/env python3
"""Translate remaining English text in CS50 syllabus/sql files."""

import re
import sys

# Dictionary of old strings -> new strings (exact match)
replacements = {
    # ---- 2021 file specific ----

    # P1-P6 + Big Ideas (already partially done, but let's fix the remaining)
    'P1: 计算解决方案设计esign': 'P1：计算解决方案设计 (Computational Solution Design)',
    'P2: 算法与程序rogram Development': 'P2：算法与程序开发 (Algorithms and Program Development)',
    'P3: 抽象 in Program Development': 'P3：程序开发中的抽象 (Abstraction in Program Development)',
    'P4: Code 分析': 'P4：代码分析 (Code Analysis)',
    'P5: Computing Innovations': 'P5：计算创新 (Computing Innovations)',
    'P6: Responsible Computing': 'P6：负责任的计算 (Responsible Computing)',
    '<dd>这门课程 为学生提供了发展计算思维实践相关技能的机会 ': '<dd>本课程为学生提供了发展计算思维实践相关技能的机会 ',

    # Overview section
    '创造性开发 (Creative Development)。': '创造性开发 (Creative Development)。',
    'Creative Development (CRD)': '创造性开发 (Creative Development, CRD)',
    'Data (DAT)': '数据 (Data, DAT)',
    '算法 and 编程 (AAP)': '算法与编程 (Algorithms and Programming, AAP)',
    'Computing Systems and Networks (CSN)': '计算系统与网络 (Computing Systems and Networks, CSN)',
    '计算的影响 (IOC)': '计算的影响 (Impact of Computing, IOC)',

    # Six practices
    '计算解决方案设计esign': '计算解决方案设计 (Computational Solution Design)',
    '算法与程序rogram Development': '算法与程序开发 (Algorithms and Program Development)',
    '抽象 in Program Development': '程序开发中的抽象 (Abstraction in Program Development)',
    'Code 分析': '代码分析 (Code Analysis)',
    'Computing Innovations': '计算创新 (Computing Innovations)',
    'Responsible Computing': '负责任的计算 (Responsible Computing)',
}

# Define large block replacements. We'll search for each old_string and replace with new_string.
# Note: These need to be EXACT substrings as they appear in the files.

block_replacements = [
    # ==================== COMMON TO ALL 5 SYLLABUS FILES ====================

    # ---- Curriculum Requirements section (CRD through TCA definitions) ----
    # These appear identical across files

    # ---- Course Introduction ----
    (
        'CS50 is 哈佛大学\'s introduction to the intellectual enterprises of 计算机科学 and the art of 编程 for students较简单 and较难 alike. CS50 for AP 计算机科学 Principles is an adaptation of CS50 for high schools that aligns with the AP 计算机科学 Principles curriculum framework. 这门课程 assumes no prior 背景 of students, but it is rigorous by design and 编程-centric, engaging students with fundamentals of 计算机科学 by way of hands-on 编程项目。 The computational-thinking skills that students ultimately acquire are broadly applicable.',
        'CS50 是哈佛大学为所有学生开设的计算机科学知识事业和编程艺术的入门课程，无论基础薄弱还是深厚。面向 AP 计算机科学原理的 CS50 是 CS50 面向高中的改编版，符合 AP 计算机科学原理课程框架。本课程不要求学生有任何先前背景，但它在设计上是严谨的、以编程为中心的，通过动手实践编程项目让学生接触计算机科学基础。学生最终获得的计算思维技能具有广泛适用性。'
    ),

    # ---- Prerequisites ----
    (
        'The only 背景必需的 CS50 for AP 计算机科学 Principles is completion of Algebra I or its equivalent.',
        'CS50 面向 AP 计算机科学原理的唯一必要背景是完成代数 I 或同等水平课程。'
    ),

    # ---- Recommended Books intro ----
    (
        'No books are必需的 这门课程. However, students可能希望 to supplement their preparation for or review of some material with self-assigned readings relevant to the material from either of the books below. The first is intended for those inexperienced in (or较简单 with the idea of) 编程. The second is intended for those experienced in (or较难 with the idea of) 编程. Realize that free, if not superior, 资源 can be found on 这门课程\'s website or on the 互联网 更多 generally.',
        '本课程不要求任何书籍。但是，学生可能希望用以下任何一本书中的相关内容自行阅读，以补充准备或复习某些材料。第一本面向编程经验不足（或对编程不太熟悉）的人。第二本面向有编程经验（或对编程更熟悉）的人。需认识到，本课程网站或更广泛的互联网上可以找到免费（甚至更优秀）的资源。'
    ),

    ('For Those 较少 Comfortable', '给不太熟悉的同学'),
    ('For Those 更多 Comfortable', '给更熟悉的同学'),

    (
        'The following book is recommended for those interested in understanding 更多关于如何 their own computers work, for personal edification.',
        '以下书籍推荐给有兴趣更深入了解自己计算机如何工作的同学，以供个人启发。'
    ),

    (
        'Lastly, the following book is recommended for aspiring hackers—those interested in 编程 techniques and low-level optimization of code that goes beyond the scope of 这门课程.',
        '最后，以下书籍推荐给有抱负的黑客——那些对编程技巧和超本课程范围的底层代码优化感兴趣的人。'
    ),

    # ---- Programming Environments ----
    (
        '<p>Several 编程 languages are taught 在该课程中, and students are able to program in all of them in an environment designed specifically 的 课程 called CS50 IDE. Students will need to sign up for a (free) <a href="https://github.com/join">GitHub</a> account in order to use CS50 IDE.</p>',
        '<p>本课程中教授多种编程语言，学生可以在一个专为本课程设计的环境中——称为 CS50 IDE——使用所有这些语言进行编程。学生需要注册一个（免费）<a href="https://github.com/join">GitHub</a> 账户才能使用 CS50 IDE。</p>'
    ),

    (
        '<p>CS50 IDE is a web-based utility (hosted on a platform known as AWS Cloud9) with cloud storage, 意思ing students will be able to work on 这门课程\'s 编程 练习 at 首页, school, or anywhere they have an 互联网 connection. 说明 for setting up and using CS50 IDE are provided in the first作业 requiring its use.</p>',
        '<p>CS50 IDE 是一个基于网页的工具（托管在 AWS Cloud9 平台上），具有云存储功能，这意味着学生可以在家里、学校或任何有互联网连接的地方完成本课程的编程练习。CS50 IDE 的设置和使用说明将在第一次需要使用它的作业中提供。</p>'
    ),

    (
        '<p>Additionally, students will use a drag-and-drop 编程 language called Scratch for some of 这门课程\'s early material. <a href="https://scratch.mit.edu/">Scratch</a> is similarly a web-based environment.</p>',
        '<p>此外，学生将在本课程的早期部分使用一种名为 Scratch 的拖放式编程语言。<a href="https://scratch.mit.edu/">Scratch</a> 同样是一个基于网页的环境。</p>'
    ),

    # ---- Academic Honesty ----
    (
        '<p>这门课程\'s philosophy on 学术诚信 is best stated as "be reasonable." 这门课程 recognizes that interactions with classmates and others can facilitate mastery of 这门课程\'s material. However, there remains a line between enlisting the help of another and submitting the work of another. This policy characterizes both sides of that line.</p>',
        '<p>本课程对学术诚信的理念最好概括为"保持合理"。本课程认识到与同学和他人的互动可以帮助掌握课程材料。然而，在寻求他人帮助和提交他人工作之间仍有一条界限。本政策描述了这一界限的两面。</p>'
    ),

    (
        '<p>The essence of all work that you 提交 to 这门课程 must be your own. Collaboration on problems is not permitted (unless explicitly stated otherwise) except to the extent that you 五月 ask classmates and others for help so long as that help does not reduce to another doing your work for you. <strong>Generally speaking, when asking for help, you 五月 show your code or writing to others, but you可能不 view theirs, so long as you and they respect this policy\'s other constraints.</strong></p>',
        '<p>你提交给本课程的所有工作的本质必须是你自己的。不允许在问题上协作（除非另有明确说明），但你可以向同学和他人寻求帮助，只要这种帮助不会沦为他人替你完成工作。<strong>一般来说，在寻求帮助时，你可以向他人展示你的代码或文字，但你不能查看他们的，只要你和他们遵守本政策的其他限制。</strong></p>'
    ),

    (
        '<p>Below are例子that inexhaustibly characterize acts that 这门课程 considers reasonable and not reasonable. If in doubt as to whether some act is reasonable, do not commit it until you solicit and receive approval in writing from your instructor. If a violation of this policy is suspected and confirmed, your instructor reserves the right to impose an appropriate penalty.</p>',
        '<p>以下示例详尽地描述了本课程认为合理和不合理的行为。如果不确定某种行为是否合理，请在征求并获得教师的书面批准之前不要实施。如果涉嫌违反本政策并得到确认，你的教师保留施加适当处罚的权利。</p>'
    ),

    # ---- Assessment ----
    (
        '<p>Because 计算机科学 is not a discipline that only lends itself to问题 of right and wrong but also <em>how</em> and <em>why</em>, 这门课程\'s assessment policy is designed to try 回答some or all of these问题。 这门课程\'s problems are evaluated along two axes: correctness and style.</p>',
        '<p>因为计算机科学不是一门仅涉及对错问题的学科，还涉及<em>如何</em>和<em>为什么</em>，本课程的评估政策旨在尝试回答部分或全部这些问题。本课程的问题从两个维度进行评估：正确性和风格。</p>'
    ),

    (
        '<dt>Correctness</dt><dd>To what extent is your submission consistent with our 规格说明 and free of bugs or errors?</dd><dt>Style</dt><dd>To what extent is your submission readable (i.e., code is commented and indented with aptly named variables)?</dd>',
        '<dt>正确性 (Correctness)</dt><dd>你的提交在多大程度上符合我们的规范，并且没有错误或缺陷？</dd><dt>风格 (Style)</dt><dd>你的提交在多大程度上是可读的（即代码有注释、有缩进，变量命名恰当）？</dd>'
    ),

    (
        '<p>To obtain a passing grade 在该课程中, all students must ordinarily 提交 all assigned problems unless otherwise granted an exception in writing by the instructor.</p>',
        '<p>要在本课程中获得及格成绩，所有学生通常必须提交所有指定问题，除非教师书面批准例外。</p>'
    ),

    # ---- Overview ----
    (
        '<p>Consistent with the AP 计算机科学 Principles curriculum framework, 这门课程\'s material is organized around five so-called "big ideas" as well as six computational thinking practices. The five big ideas are:</p>',
        '<p>与 AP 计算机科学原理课程框架一致，本课程的材料围绕五个所谓的"核心思想"以及六种计算思维实践来组织。五个核心思想是：</p>'
    ),

    (
        '<p>And the six computational thinking practices are:</p>',
        '<p>六种计算思维实践是：</p>'
    ),

    # ---- Curriculum / Course Outline ----
    (
        '<p>CS50 for AP 计算机科学 Principles includes materials from CS50T (理解技术) and CS50x (计算机科学导论) as well as two AP-specific modules (数据科学 and 计算的影响).</p>',
        '<p>CS50 面向 AP 计算机科学原理包括来自 CS50T（理解技术）和 CS50x（计算机科学导论）的材料，以及两个 AP 专属模块（数据科学和计算的影响）。</p>'
    ),

    # ---- CS50T module intro ----
    (
        '<p>In this module, students learn关于如何 it all works underneath the hood and how to solve problems when something goes wrong, 这门课程 fills in the gaps, empowering students to use and troubleshoot technology 更多 effectively.</p>',
        '<p>在本模块中，学生了解这一切在底层是如何运作的，以及当出现问题时如何解决问题。本课程填补了这些空白，使学生能够更有效地使用和排除技术故障。</p>'
    ),

    # ---- CS50T topic list ----
    ('<li>Hardware</li>', '<li>硬件 (Hardware)</li>'),
    ('<li>Multimedia</li>', '<li>多媒体 (Multimedia)</li>'),
    ('<li>Web 开发 *</li>', '<li>Web 开发 (Web Development) *</li>'),
    ('<li>编程 **</li>', '<li>编程 (Programming) **</li>'),

    # ---- Around the House ----
    (
        '<p>Around the House</p>',
        '<p>家里的设备 (Around the House)</p>'
    ),
    (
        '<p>Students explore the devices in their 首页 查找 "non-traditional" computers. In no 更多 than 400 words, they\'ll describe these devices in detail. [P5] [P6]</p>',
        '<p>学生探索家中的设备，寻找"非传统"计算机。用不超过 400 个词，他们将详细描述这些设备。[P5] [P6]</p>'
    ),
    (
        '<p>They will 答案问题 such as:</p>',
        '<p>他们将回答以下问题：</p>'
    ),
    (
        '<li data-marker="*">什么是 the device look like?</li>',
        '<li data-marker="*">这个设备长什么样？</li>'
    ),
    (
        '<li data-marker="*">What kind of data does it accept?</li>',
        '<li data-marker="*">它接收什么类型的数据？</li>'
    ),
    (
        '<li data-marker="*">How does it process that data?</li>',
        '<li data-marker="*">它如何处理这些数据？</li>'
    ),
    (
        '<li data-marker="*">What is the result of that processing?</li>',
        '<li data-marker="*">处理的结果是什么？</li>'
    ),

    # ---- Tech Spotlight ----
    (
        '<p>Tech Spotlight</p>',
        '<p>科技聚焦 (Tech Spotlight)</p>'
    ),
    (
        '<p>Students research technological innovations and apply their newfound knowledge of computer hardware. In no 更多 than 600 words, students will expound on this technology. Their objective is to provide the reader with a well-rounded, unbiased summary of this innovation and the abstractions used in its creation. [P1] [P3] [P5] [P6]</p>',
        '<p>学生研究技术创新，并应用他们新掌握的计算机硬件知识。用不超过 600 个词，学生将详细阐述这项技术。他们的目标是为读者提供关于这项创新及其创建中所用抽象方法的全面、公正的总结。[P1] [P3] [P5] [P6]</p>'
    ),
    (
        '<strong>Computing Innovation 1[CI-1], students will explore Technology around the 首页 and:</strong>',
        '<strong>计算创新 1 [CI-1]，学生将探索家庭科技，并：</strong>'
    ),
    (
        '<li data-marker="*">[B] Students will Identify the data used in at least one computing innovation and explain how the data is consumed, produced, or transformed by the given computing innovation.</li>',
        '<li data-marker="*">[B] 学生将识别至少一项计算创新中使用的数据，并解释该数据如何被该项计算创新消费、产生或转换。</li>'
    ),
    (
        '<p>In addition, in writing their response students will consider:</p>',
        '<p>此外，在撰写回复时，学生将考虑：</p>'
    ),
    (
        '<li data-marker="*">What is this technology called?</li>',
        '<li data-marker="*">这项技术叫什么？</li>'
    ),
    (
        '<li data-marker="*">什么是 it do?</li>',
        '<li data-marker="*">它是做什么的？</li>'
    ),
    (
        '<li data-marker="*">How does someone use this technology?</li>',
        '<li data-marker="*">人们如何使用这项技术？</li>'
    ),
    (
        '<li data-marker="*">How is its quality of performance commonly measured? (e.g. in megabytes (MB), gigahertz (GHz), etc.)</li>',
        '<li data-marker="*">它的性能质量通常如何衡量？（例如以兆字节 (MB)、千兆赫兹 (GHz) 等为单位）</li>'
    ),
    (
        '<li data-marker="*">How does the recent news关于 technology change the product or service?</li>',
        '<li data-marker="*">关于这项技术的最新消息如何改变产品或服务？</li>'
    ),
    (
        '<li data-marker="*">What older form of technology does it replace, if any?</li>',
        '<li data-marker="*">它替代了什么旧技术（如果有的话）？</li>'
    ),
    (
        '<li data-marker="*">How has this technology impacted your life, for better or worse?</li>',
        '<li data-marker="*">这项技术如何影响了你的生活，无论好坏？</li>'
    ),
    (
        '<li data-marker="*">How has this technology impacted society at large, for better or worse</li>',
        '<li data-marker="*">这项技术如何影响了整个社会，无论好坏？</li>'
    ),

    # ---- Everyday Algorithms ----
    (
        '<p>Everyday 算法</p>',
        '<p>日常算法 (Everyday Algorithms)</p>'
    ),
    (
        '<p>Students will 编写一个n algorithm in sentence form and in pseudocode for how to complete a task that they do on a daily basis such as brushing their teeth. Students should strive to accurately describe that algorithm without ambiguity in a spoken language. [P2] [P3]</p>',
        '<p>学生将用自然语句和伪代码编写一个算法，描述他们每天做的某件事（如刷牙）的完成步骤。学生应力求用口语准确描述该算法，不含歧义。[P2] [P3]</p>'
    ),

    # ---- Scratch module ----
    (
        '<p>In this module, students will learn关于如何 data is represented in their computer and the language of computers – binary, how information is encoded so that humans can understand it and begin to explore the ways in which computers process information.</p>',
        '<p>在本模块中，学生将了解数据在计算机中如何表示以及计算机的语言——二进制，信息如何被编码以便人类理解，并开始探索计算机处理信息的方式。</p>'
    ),
    ('<li>Binary</li>', '<li>二进制 (Binary)</li>'),
    ('<li>Pseudocode</li>', '<li>伪代码 (Pseudocode)</li>'),

    # ---- Scratch problem ----
    (
        '<p>Students will use the drag-and-drop 编程 language called Scratch to 实现一个项目 of their choice (be it an animation, a game, interactive art, or anything else) [P1] [P2] [P3] [P4] [P6], subject only to the following requirements:</p>',
        '<p>学生将使用名为 Scratch 的拖放式编程语言来实现一个自己选择的项目（可以是动画、游戏、互动艺术或其他任何东西）[P1] [P2] [P3] [P4] [P6]，仅需满足以下要求：</p>'
    ),
    (
        '<li data-marker="*">have at least two sprites, at least one of which must resemble something other than a cat</li>',
        '<li data-marker="*">至少有两个精灵 (sprites)，其中至少一个必须像猫以外的其他东西</li>'
    ),
    (
        '<li data-marker="*">have at least three scripts total (i.e., not necessarily three per sprite)</li>',
        '<li data-marker="*">总共至少有三个脚本（即不一定每个精灵三个）</li>'
    ),
    (
        '<li data-marker="*">use at least one condition, one loop, and one variable</li>',
        '<li data-marker="*">至少使用一个条件、一个循环和一个变量</li>'
    ),
    (
        '<li data-marker="*">use at least one sound</li>',
        '<li data-marker="*">至少使用一个声音</li>'
    ),

    # ---- C module ----
    (
        '<p>In this module, students will learn the fundamentals of computer 编程, to permit them to begin to manipulate information and data and command a computer to do calculations they wish for it to perform.</p>',
        '<p>在本模块中，学生将学习计算机编程的基础知识，使他们能够开始操作信息和数据，并命令计算机执行他们希望的计算。</p>'
    ),
    ('<li>Syntax</li>', '<li>语法 (Syntax)</li>'),
    ('<li>Variables</li>', '<li>变量 (Variables)</li>'),
    ('<li>Data Types</li>', '<li>数据类型 (Data Types)</li>'),
    ('<li>Operators</li>', '<li>运算符 (Operators)</li>'),
    ('<li>Boolean Expressions and Conditionals</li>', '<li>布尔表达式和条件语句 (Boolean Expressions and Conditionals)</li>'),
    ('<li>Loops</li>', '<li>循环 (Loops)</li>'),

    # ---- C Hello problem ----
    (
        '<p>Students learn the syntax specific to C. Here, they write their first program in a web-based 编程 environment called the CS50 IDE. [P1] [P3] [P4]</p>',
        '<p>学生学习 C 语言特定的语法。在这里，他们在名为 CS50 IDE 的基于网页的编程环境中编写他们的第一个程序。[P1] [P3] [P4]</p>'
    ),

    # ---- Fahrenheit ----
    (
        '<p>Students will 编写一个 program that converts a temperature in Celsius to Fahrenheit and explore bugs that might arise when dealing with imprecision relating to floats and division in C. [P1] [P3] [P2] [P4]</p>',
        '<p>学生将编写一个程序，将摄氏温度转换为华氏温度，并探索在 C 语言中处理浮点数和除法相关的不精确性时可能出现的错误。[P1] [P3] [P2] [P4]</p>'
    ),

    # ---- Cash ----
    (
        'This activity introduces students to greedy 算法. Here, they will 编写一个 program that first asks the user how much change is owed and then outputs the minimum number of coins with which said change can be made. [P1] [P3] [P2] [P4]',
        '这个活动向学生介绍贪心算法。在这里，他们将编写一个程序，首先询问用户应找多少零钱，然后输出用最少数量的硬币可以凑出该零钱的结果。[P1] [P3] [P2] [P4]'
    ),

    # ---- Pennies ----
    (
        '<p>Students will 创建一个 file that calculates the amount that the user will have received in total by the end of the month (not just on the last day) if some initial amount is doubled on every day but the first, expressed not as pennies but as dollars and cents. [P1] [P3] [P2] [P4]</p>',
        '<p>学生将创建一个文件，计算如果某个初始金额在除第一天外的每一天都翻倍，用户在月底（而不仅仅是最后一天）总共会收到多少金额，结果以美元和美分（而非美分）表示。[P1] [P3] [P2] [P4]</p>'
    ),

    # ---- ISBN ----
    (
        "<p>Students will further build on the abstractions available to them in C. Here, they will explore iteration and loops by writing a program that prompts the user for an ISBN-10 and then reports (via printf) whether the number's legitimate. The program's last line of output should be either yes or no, nothing 更多, nothing 较少. [P1] [P3] [P2] [P4]</p>",
        '<p>学生将进一步建立在 C 语言中可用的抽象基础上。在这里，他们将通过编写一个程序来探索迭代和循环，该程序提示用户输入 ISBN-10，然后报告（通过 printf）该号码是否合法。程序的最后一行输出应为 yes 或 no，没有多余内容。[P1] [P3] [P2] [P4]</p>'
    ),

    # ---- Mario ----
    (
        '<p>Students further their understanding of loops and their familiarity with the syntax of C, by creating a program that outputs the famous Mario pyramid using spaces and hashes. [P1] [P2] [P3] [P4]</p>',
        '<p>学生通过创建一个使用空格和井号输出著名马里奥金字塔的程序，进一步加深对循环的理解和对 C 语法的熟悉。[P1] [P2] [P3] [P4]</p>'
    ),

    # ---- Credit ----
    (
        '<p>Students will put the concepts from C together, using loops, iteration, booleans, and data types to 实现一个 program that prompts the user for a credit card number and then reports (via printf) whether it is a valid American Express, MasterCard, or Visa card number, per the definitions of each\'s format. [P1] [P2] [P3] [P4]</p>',
        '<p>学生将综合运用 C 语言的概念，使用循环、迭代、布尔值和数据类型来实现一个程序，该程序提示用户输入信用卡号码，然后报告（通过 printf）它是否是有效的 American Express、MasterCard 或 Visa 卡号，依据各自格式的定义。[P1] [P2] [P3] [P4]</p>'
    ),

    # ---- Arrays module ----
    (
        '<p>In this module, students will expand upon their knowledge of the fundamentals of computer 编程 and begin building abstractions of their own. They\'ll also learn 关于 strategies for debugging their own programs.</p>',
        '<p>在本模块中，学生将扩展他们对计算机编程基础的知识，并开始构建自己的抽象。他们还将学习调试自己程序的策略。</p>'
    ),
    ('<li>Compiling</li>', '<li>编译 (Compiling)</li>'),
    ('<li>Debugging</li>', '<li>调试 (Debugging)</li>'),
    ('<li>Arrays and Strings</li>', '<li>数组和字符串 (Arrays and Strings)</li>'),
    ('<li>Command-Line Interactions</li>', '<li>命令行交互 (Command-Line Interactions)</li>'),
    ('<li>Exit Codes</li>', '<li>退出代码 (Exit Codes)</li>'),

    # ---- Old Friends ----
    (
        '<p>Students begin to interact with their programs at the 命令行, allowing them to run differently each时间， instead of always doing the same thing. Here, students modify some of the 上一页 problems to allow them to be run from the 命令行. [P3] [P4]</p>',
        '<p>学生开始在命令行中与他们的程序交互，允许它们每次以不同方式运行，而不是总是做同样的事情。在这里，学生修改一些之前的问题，使其可以从命令行运行。[P3] [P4]</p>'
    ),

    # ---- Calc ----
    (
        '<p>Students continue to interact with their programs at the 命令行. They will implement the basic 特征s of calculators including addition, subtraction, multiplication, division, and modulo. [P1] [P2] [P3] [P4]</p>',
        '<p>学生继续在命令行中与他们的程序交互。他们将实现计算器的基本功能，包括加法、减法、乘法、除法和取模。[P1] [P2] [P3] [P4]</p>'
    ),

    # ---- Caesar ----
    (
        '<p>Students dive into 密码学—the transformation of "plaintexts" to instead be secret messages, and how we can use machines to do this for us. Here they implement their own version of a caesar cipher. [P1] [P2] [P3] [P4]</p>',
        '<p>学生深入密码学——将"明文"转换为秘密信息，以及我们如何使用机器为我们完成这一点。在这里，他们实现自己的凯撒密码版本。[P1] [P2] [P3] [P4]</p>'
    ),

    # ---- Vigenere ----
    (
        '<p>Furthering their understanding of 密码学, students will 创建一个 cipher 更多 secure than a caesar cipher, a vigenére cipher, where a keyword is used to encrypt the message. [P1] [P2] [P3] [P4]</p>',
        '<p>为进一步加深对密码学的理解，学生将创建一个比凯撒密码更安全的密码——维吉尼亚密码，其中使用关键词来加密消息。[P1] [P2] [P3] [P4]</p>'
    ),

    # ---- Crack ----
    (
        '<p>After learning 关于 encrypting "plaintext," students will explore the opposite. They will 创建一个 program, using varying levels of abstraction such as functions and libraries to help them decrypt encrypted passwords. [P1] [P2] [P3] [P4] [P6]</p>',
        '<p>在学习了加密"明文"之后，学生将探索相反的操作。他们将创建一个程序，使用不同级别的抽象（如函数和库）来帮助他们解密加密的密码。[P1] [P2] [P3] [P4] [P6]</p>'
    ),

    # ---- Algorithms module ----
    (
        '<p>In this module, students will explore 算法 更多 deeply, acquiring an appreciation of tradeoffs among 算法 and learning how to compare 算法 asymptotically. [P1] [P2] [P4]</p>',
        '<p>在本模块中，学生将更深入地探索算法，理解算法之间的权衡，并学习如何渐进地比较算法。[P1] [P2] [P4]</p>'
    ),
    ('<li>Searching</li>', '<li>搜索 (Searching)</li>'),
    ('<li>Sorting</li>', '<li>排序 (Sorting)</li>'),
    ('<li>Computational 复杂度</li>', '<li>计算复杂度 (Computational Complexity)</li>'),
    ('<li>Computational Models</li>', '<li>计算模型 (Computational Models)</li>'),

    # ---- Fifteen ----
    (
        '<p>Students take their newfound knowledge of functions and organizing data and aided by some 分发代码 that implements the basic framework 的m, to collaborate on implementing the classic Game of Fifteen with user-interactivity, while explaining their implementations with other groups. [P1] [P2] [P3] [P4]</p>',
        '<p>学生运用他们新获得的关于函数和数据组织的知识，借助一些实现了基本框架的分发代码，协作实现经典的"十五"游戏并添加用户交互，同时向其他小组解释他们的实现。[P1] [P2] [P3] [P4]</p>'
    ),

    # ---- Memory module ----
    (
        '<p>In this module, students will uncover some of the concepts that go on under the hood when we use different数据结构 like strings and arrays. Then students explore ways to store data of various types in a struct.</p>',
        '<p>在本模块中，学生将揭示当我们使用字符串和数组等不同数据结构时底层发生的一些概念。然后学生探索将各种类型数据存储在结构体 (struct) 中的方法。</p>'
    ),
    ('<li>Functions</li>', '<li>函数 (Functions)</li>'),
    ('<li>工具 for Debugging</li>', '<li>调试工具 (Tools for Debugging)</li>'),
    ('<li>更多 on Strings</li>', '<li>更多关于字符串 (More on Strings)</li>'),
    ('<li>Structs</li>', '<li>结构体 (Structs)</li>'),

    # ---- Whodunit ----
    (
        '<p>Students explore images in depth and the varying levels of abstraction used to represent an image, rooting 返回 to the individual bits that compose the pixels within an image. They will both individually and in teams, modify bitmap images to extract a hidden image. Additionally, they will 答案 some问题 关于 images 更多 generally. [P1] [P2] [P3] [P4]</p>',
        '<p>学生深入探索图像以及用于表示图像的不同抽象级别，追溯到构成图像内像素的单个比特。他们将单独和以团队形式修改位图图像以提取隐藏图像。此外，他们将回答一些关于图像的一般性问题。[P1] [P2] [P3] [P4]</p>'
    ),

    # ---- Resize ----
    (
        '<p>Diving deeper into bitmap manipulation, students will 创建一个 program that takes in a 24-bit uncompressed BMPs and scales it larger by a factor of n. [P1] [P2] [P3] [P4] [P5]</p>',
        '<p>更深入地探讨位图操作，学生将创建一个程序，该程序接收 24 位未压缩 BMP 文件，并按因子 n 将其放大。[P1] [P2] [P3] [P4] [P5]</p>'
    ),

    # ---- Recover ----
    (
        '<p>In this problem, students will receive the file of a corrupted 内存 card storing 50 jpegs. They will work in groups to use their knowledge of file I/O to 阅读 the images from the 内存 card and write them to new files, thus restoring the lost images. [P1] [P2] [P3] [P4] [P6]</p>',
        '<p>在这个问题中，学生将收到一个损坏的存储卡文件，其中存储了 50 张 jpeg 图片。他们将分组合作，利用文件 I/O 的知识从存储卡中读取图像并将其写入新文件，从而恢复丢失的图像。[P1] [P2] [P3] [P4] [P6]</p>'
    ),

    # ---- Data Structures module ----
    (
        '<p>As students begin to wrap up their时间 in C, they are challenged to consider 更多 complex数据结构. Students dive into the various pros and cons of the various数据结构 and which are better to use in various scenarios.</p>',
        '<p>当学生开始结束他们在 C 语言中的时间时，他们被要求考虑更复杂的数据结构。学生深入探讨各种数据结构的优缺点，以及在各种场景中哪些更好使用。</p>'
    ),
    ('<li>Valgrind</li>', '<li>Valgrind</li>'),  # keep as is
    ('<li>更多 on Structs</li>', '<li>更多关于结构体 (More on Structs)</li>'),
    ('<li>哈希表</li>', '<li>哈希表 (Hash Tables)</li>'),
    ('<li>Trees</li>', '<li>树 (Trees)</li>'),
    ('<li>Tries</li>', '<li>前缀树 (Tries)</li>'),

    # ---- Speller ----
    (
        '<p>Students use their new-found knowledge of数据结构 to 实现一个 spell checker in C. They implement several functions that work within 工作人员-provided 分发代码 and test their code with various text files. [P1] [P2] [P3] [P4]</p>',
        '<p>学生运用他们新获得的数据结构知识在 C 语言中实现一个拼写检查器。他们实现几个在工作人员提供的分发代码中工作的函数，并用各种文本文件测试他们的代码。[P1] [P2] [P3] [P4]</p>'
    ),

    # ---- Python module ----
    (
        '<p>Students build upon their knowledge gained 在该课程中 to learn several new 编程 languages with abstractions built in that allow them to go far beyond what simply C and Scratch are able to do. They solve 更多 complex problems that require processing large amounts of data and dealing with processes that scale and see how these techniques can be applied to confront the challenges computer scientists will be contending with in 未来.</p>',
        '<p>学生在本课程中积累的知识基础上学习几种新的编程语言，这些语言内置了抽象，使他们能够远远超越仅靠 C 和 Scratch 能做的事情。他们解决需要处理大量数据和应对可扩展流程的更复杂问题，并看到这些技术如何应用于应对未来计算机科学家将面临的挑战。</p>'
    ),
    ('<li>Conditionals</li>', '<li>条件语句 (Conditionals)</li>'),
    ('<li>Booleans</li>', '<li>布尔值 (Booleans)</li>'),

    # ---- Analyze This ----
    (
        '<p>Students will reflect on their experiences 在该课程中. In 500-1000 words, they will talk 关于 some of the challenges they encountered 在该课程中 and how they persevered through the problem.</p>',
        '<p>学生将反思他们在本课程中的经历。在 500-1000 个词中，他们将讲述在本课程中遇到的一些挑战以及他们如何坚持克服问题。</p>'
    ),

    # ---- Sentimental ----
    (
        '<p>Students will re-实现一个 subset of 你好, Mario, Cash, Credit, Caesar, Vigenére, and Crack in Python to gain familiarity with Python syntax and the affordances that higher level 编程 languages offer. [P1] [P3] [P4]</p>',
        '<p>学生将用 Python 重新实现 Hello、Mario、Cash、Credit、Caesar、Vigenére 和 Crack 的子集，以熟悉 Python 语法和高级编程语言提供的便利功能。[P1] [P3] [P4]</p>'
    ),

    # ---- Bleep ----
    (
        '<p>Students will 实现一个 program that censors out a list of banned words by replacing them with asterixis. Here students gain familiarity with Python specific functionality, particularly around string manipulation. [P1] [P3] [P4] [P6]</p>',
        '<p>学生将实现一个程序，通过用星号替换来审查一组禁止词汇。在这里，学生熟悉 Python 特有的功能，特别是在字符串操作方面。[P1] [P3] [P4] [P6]</p>'
    ),

    # ---- SQL module ----
    (
        '<p>Students learn关于如何 applications store data in 数据库. They solve problems that require processing large amounts of data and dealing with processes that scale and see how these techniques can be applied to confront the challenges computer scientists will be contending with in 未来.</p>',
        '<p>学生了解应用程序如何在数据库中存储数据。他们解决需要处理大量数据和应对可扩展流程的问题，并看到这些技术如何应用于应对未来计算机科学家将面临的挑战。</p>'
    ),
    ('<li>Race Conditions</li>', '<li>竞态条件 (Race Conditions)</li>'),

    # ---- Web Track ----
    (
        '<p>At this point 在该课程中, we transition from 编程 in a mostly command-line environment to taking our applications to scale via the 互联网. First, however, students are introduced to the technologies underpinning this thing we know as "the 互联网" before beginning to explore Web 编程 by building simple pages of their own and making them accessible to 世界各地 via CS50 IDE.</p>',
        '<p>在课程的这一点上，我们从主要以命令行环境编程过渡到通过互联网扩展我们的应用程序。然而，首先向学生介绍支撑我们称之为"互联网"的这个东西的技术，然后开始通过构建自己的简单页面并通过 CS50 IDE 使其在全球范围内可访问来探索 Web 编程。</p>'
    ),
    (
        '<p>Students build upon their knowledge of Web 编程 and Python to create web-based applications. They learn 关于 structures for organizing their files for web applications, like MVC.</p>',
        '<p>学生在 Web 编程和 Python 知识的基础上创建基于网页的应用程序。他们学习组织 Web 应用程序文件的结构，如 MVC。</p>'
    ),
    ('<li>互联网 Basics</li>', '<li>互联网基础 (Internet Basics)</li>'),
    ('<li>Forms</li>', '<li>表单 (Forms)</li>'),
    ('<li>Autocomplete</li>', '<li>自动完成 (Autocomplete)</li>'),
    ('<li>Events</li>', '<li>事件 (Events)</li>'),
    ('<li>Cookies</li>', '<li>Cookies</li>'),
    ('<li>Sessions</li>', '<li>Sessions</li>'),
    ('<li>Flask</li>', '<li>Flask</li>'),
    ('<li>Ajax</li>', '<li>Ajax</li>'),

    # ---- Be the Teacher ----
    (
        '<p>Be the Teacher</p>',
        '<p>当老师 (Be the Teacher)</p>'
    ),
    (
        '<p>The technologies of the 互联网 can be complex, so students are challenged to explain in writing things concisely to a lay audience, cementing their understanding of these technologies by having to discuss them 更多 casually. In 1500 words students will explain how the 互联网 works to 3rd graders. [P3] [P5] [P6]</p>',
        '<p>互联网技术可能很复杂，因此学生被要求以书面形式简洁地向普通受众解释事物，通过必须更随意地讨论这些技术来巩固他们的理解。在 1500 个词中，学生将向三年级学生解释互联网是如何工作的。[P3] [P5] [P6]</p>'
    ),

    # ---- Defender of the Web ----
    (
        '<p>Defender of the Web</p>',
        '<p>网络卫士 (Defender of the Web)</p>'
    ),
    (
        '<p>Students explore the notions of cyberattacks and 网络安全 and investigate in 更多 detail some of the common types of attacks that impact websites today. [P1] [P3] [P5] [P6]</p>',
        '<p>学生探索网络攻击和网络安全的概念，并更详细地调查当今影响网站的一些常见攻击类型。[P1] [P3] [P5] [P6]</p>'
    ),
    (
        '<strong>Computing Innovation 3 [CI-3], students will explore 网络安全 and the 互联网 and</strong>',
        '<strong>计算创新 3 [CI-3]，学生将探索网络安全和互联网，并</strong>'
    ),
    (
        '<li data-marker="*">[A] Students will explain beneficial and harmful effects of at least one computing innovation on society, economy, or culture.</li>',
        '<li data-marker="*">[A] 学生将解释至少一项计算创新对社会、经济或文化的有益和有害影响。</li>'
    ),
    (
        '<li data-marker="*">[C] Students will identify data 隐私, 安全, or storage concerns for at least one computing innovation.</li>',
        '<li data-marker="*">[C] 学生将识别至少一项计算创新的数据隐私、安全或存储问题。</li>'
    ),
    (
        '<p>Students should likewise cover the following (in a total of 750-1,000 words):</p>',
        '<p>学生同样应涵盖以下内容（总计 750-1,000 个词）：</p>'
    ),
    (
        '<li data-marker="*">What is the名字 of the attack? What type of attack is it?</li>',
        '<li data-marker="*">攻击的名称是什么？它是什么类型的攻击？</li>'
    ),
    (
        '<li data-marker="*">Where did it come from? Who created it (if known), and why?</li>',
        '<li data-marker="*">它来自哪里？谁创建了它（如果已知），为什么？</li>'
    ),
    (
        '<li data-marker="*">How did we find out 关于 it - how was it caught?</li>',
        '<li data-marker="*">我们是如何发现它的——它是如何被捕获的？</li>'
    ),
    (
        '<li data-marker="*">What types of companies or individuals does it target?</li>',
        '<li data-marker="*">它针对什么类型的公司或个人？</li>'
    ),
    (
        '<li data-marker="*">How does it work? What components of the network does it attack, and from which end (client or server)?</li>',
        '<li data-marker="*">它是如何工作的？它攻击网络的哪些组件，从哪一端（客户端还是服务器）？</li>'
    ),
    (
        '<li data-marker="*">What damage is it capable of doing? What information does it target?</li>',
        '<li data-marker="*">它能造成什么损害？它针对什么信息？</li>'
    ),
    (
        '<li data-marker="*">Has a fix been found? How does it work? Has it been implemented in all websites/servers with potential vulnerabilities?</li>',
        '<li data-marker="*">是否已找到修复方案？它是如何工作的？是否已在所有有潜在漏洞的网站/服务器上实施？</li>'
    ),
    (
        '<li data-marker="*">If applicable, how can we defend ourselves against this attack?</li>',
        '<li data-marker="*">如果适用，我们如何防御这种攻击？</li>'
    ),

    # ---- Homepage ----
    (
        '<p>Students create their own web pages, learn 关于 permissions schemes, and make their creations accessible to 世界各地.  [P1] [P4] [P6]</p>',
        '<p>学生创建自己的网页，了解权限方案，并使他们的创作在全球范围内可访问。[P1] [P4] [P6]</p>'
    ),

    # ---- Similarities ----
    (
        '<p>Students will 编写一个 program to determine segments of similar code between two sample submissions. [P1] [P2] [P3] [P4] [P6]</p>',
        '<p>学生将编写一个程序来确定两个样本提交之间相似代码的片段。[P1] [P2] [P3] [P4] [P6]</p>'
    ),

    # ---- Survey ----
    (
        '<p>Students will 实现一个 web application similar to Google Forms, whereby students 实现一个 form that collects information and saves the user data to a CSV and displays the CSV to the user on a web page. [P1] [P2] [P3] [P4] [P5]</p>',
        '<p>学生将实现一个类似于 Google Forms 的 Web 应用程序，其中学生实现一个收集信息的表单，将用户数据保存到 CSV 文件，并在网页上向用户显示该 CSV。[P1] [P2] [P3] [P4] [P5]</p>'
    ),

    # ---- C$50 Finance ----
    (
        "<p>Students will work in groups to construct their own stock-trading website (pulling real stock prices from a 金融 API), working with 数据库 and managing user information securely. [P1] [P2] [P3] [P4] [P5] [P6]</p>",
        '<p>学生将分组合作构建自己的股票交易网站（从金融 API 获取真实股票价格），使用数据库并安全管理用户信息。[P1] [P2] [P3] [P4] [P5] [P6]</p>'
    ),

    # ---- AP Modules ----
    (
        '<p>The material in these chapters include topics that are not covered in CS50 on campus but are essential to the AP 计算机科学 Principles 课程.</p>',
        '<p>这些章节中的材料包含 CS50 校内课程未涵盖但对 AP 计算机科学原理课程至关重要的主题。</p>'
    ),
    (
        '<p>These modules are 较少 编程 focused and can be integrated at any point in the curriculum.</p>',
        '<p>这些模块较少以编程为中心，可以在课程的任何阶段整合。</p>'
    ),

    # ---- Data Science ----
    (
        '<p>In this module, students learn 关于 big data. Students learn关于如何 to collect and analyze data responsibly and how human bias can affect computation artifacts.</p>',
        '<p>在本模块中，学生了解大数据。学生了解如何负责任地收集和分析数据，以及人类偏见如何影响计算产物。</p>'
    ),
    ('<p>Collecting Data</p>', '<p>收集数据 (Collecting Data)</p>'),
    ('<p>Analyzing Data</p>', '<p>分析数据 (Analyzing Data)</p>'),

    # ---- Impact of Computing ----
    (
        '<p>In this module, students learn关于如何 computing affects society. Students also dive into the development process from a high level and the ethics and legalities around 计算机科学.</p>',
        '<p>在本模块中，学生了解计算如何影响社会。学生还从高层次深入了解开发过程以及围绕计算机科学的伦理和法律问题。</p>'
    ),
    ('<li>The Development Process</li>', '<li>开发流程 (The Development Process)</li>'),
    ('<li>Scaling</li>', '<li>扩展 (Scaling)</li>'),
    ('<li>Models</li>', '<li>模型 (Models)</li>'),
    ('<li>Simulations</li>', '<li>模拟 (Simulations)</li>'),
    ('<li>The Digital Divide</li>', '<li>数字鸿沟 (The Digital Divide)</li>'),
    ('<li>Ethics and Legalities of Computing</li>', '<li>计算伦理与法律 (Ethics and Legalities of Computing)</li>'),

    # ---- Simulate! ----
    (
        '<p>Simulate! (Simulation)</p>',
        '<p>模拟吧！(Simulation) (Simulate! (Simulation))</p>'
    ),
    (
        '<p>In this writing problem, students research a computer simulation of their choice. They will explain how the simulation and the benefits and disadvantages of using it. Does the program account for all the 特征s it is trying to model? Does the model rely on any assumptions? Are there downsides to using a program instead of 测试 in the real-世界? What are those downsides? [P1] [P5] [P6]</p>',
        '<p>在这道写作题中，学生研究一个自己选择的计算机模拟。他们将解释模拟的工作原理以及使用它的好处和缺点。该程序是否考虑到了它试图建模的所有特征？模型是否依赖于任何假设？使用程序而非在现实世界中进行测试有什么缺点？这些缺点是什么？[P1] [P5] [P6]</p>'
    ),

    # ---- Degrees of Scalability ----
    (
        '<p>Degrees of Scalability</p>',
        '<p>可扩展的程度 (Degrees of Scalability)</p>'
    ),
    (
        '<p>In this writing problem, students show how scalable real-世界 applications are. [P1] [P5] [P6]</p>',
        '<p>在这道写作题中，学生展示现实世界应用程序的可扩展性。[P1] [P5] [P6]</p>'
    ),
    (
        '<strong>Computing Innovation 2 [CI-2], students will explore Large-Scale Data Processing and</strong>',
        '<strong>计算创新 2 [CI-2]，学生将探索大规模数据处理，并</strong>'
    ),
    (
        '<p>Additional问题 include but are not limited to:</p>',
        '<p>其他问题包括但不限于：</p>'
    ),
    (
        '<li data-marker="*">How do companies handle big data and large amounts of users?</li>',
        '<li data-marker="*">公司如何处理大数据和大量用户？</li>'
    ),
    (
        '<li data-marker="*">What factors affect the scalability of a product?</li>',
        '<li data-marker="*">哪些因素影响产品的可扩展性？</li>'
    ),

    # ---- Create Performance Task ----
    (
        '<p>Students should be provided at least twelve (12) hours of dedicated class时间 to complete the Create: 应用s from Ideas Performance Task [TCA].</p>',
        '<p>学生应获得至少十二 (12) 小时的专门课堂时间来完成"从创意到应用"创建表现任务 [TCA]。</p>'
    ),

    # ==================== 2022/2024/2025 SPECIFIC VARIATIONS ====================
    # "in at least" vs "at least"
    (
        '<li data-marker="*">[B] Students will Identify the data used in 在 least one computing innovation and explain how the data is consumed, produced, or transformed by the given computing innovation.</li>',
        '<li data-marker="*">[B] 学生将识别至少一项计算创新中使用的数据，并解释该数据如何被该项计算创新消费、产生或转换。</li>'
    ),
    (
        '<li data-marker="*">[A] Students will explain beneficial and harmful effects of 在 least one computing innovation on society, economy, or culture.</li>',
        '<li data-marker="*">[A] 学生将解释至少一项计算创新对社会、经济或文化的有益和有害影响。</li>'
    ),
    (
        '<li data-marker="*">[C] Students will identify data 隐私, 安全, or storage concerns for 在 least one computing innovation.</li>',
        '<li data-marker="*">[C] 学生将识别至少一项计算创新的数据隐私、安全或存储问题。</li>'
    ),
    # "at the" vs "in the"
    (
        '<p>Students begin to interact with their programs 在 the 命令行, allowing them to run differently each时间， instead of always doing the same thing. Here, students modify some of the 上一页问题 to allow them to be run from the 命令行. [P3] [P4]</p>',
        '<p>学生开始在命令行中与他们的程序交互，允许它们每次以不同方式运行，而不是总是做同样的事情。在这里，学生修改一些之前的问题，使其可以从命令行运行。[P3] [P4]</p>'
    ),
    (
        '<p>Students continue to interact with their programs 在 the 命令行. They will implement the basic 特征s of calculators including addition, subtraction, multiplication, division, and modulo. [P1] [P2] [P3] [P4]</p>',
        '<p>学生继续在命令行中与他们的程序交互。他们将实现计算器的基本功能，包括加法、减法、乘法、除法和取模。[P1] [P2] [P3] [P4]</p>'
    ),
    # "Students are provided 在 least twelve"
    (
        '<dd>Students are provided 在 least twelve (12)时间 of dedicated class时间 to complete the AP 创建表现任务.</dd>',
        '<dd>学生将获得至少十二 (12) 小时的专门课堂时间来完成 AP 创建表现任务 (Create Performance Task)。</dd>'
    ),
    # "Students should be provided 在 least"
    (
        '<p>Students should be provided 在 least twelve (12)时间 of dedicated class时间 to complete the Create: 应用s from Ideas Performance Task [TCA].</p>',
        '<p>学生应获得至少十二 (12) 小时的专门课堂时间来完成"从创意到应用"创建表现任务 [TCA]。</p>'
    ),
    # "在 this point 在该课程中"
    (
        '<p>在 this point 在该课程中, we transition from 编程 in a mostly command-line environment to taking our applications to scale via the 互联网. First, however, students are introduced to the technologies underpinning this thing we know as "the 互联网" before beginning to explore Web 编程 by building simple pages of their own and making them accessible to 世界各地 via CS50 IDE.</p>',
        '<p>在课程的这一点上，我们从主要以命令行环境编程过渡到通过互联网扩展我们的应用程序。然而，首先向学生介绍支撑我们称之为"互联网"的这个东西的技术，然后开始通过构建自己的简单页面并通过 CS50 IDE 使其在全球范围内可访问来探索 Web 编程。</p>'
    ),
    # "on a daily basis"
    (
        'Students will 编写一个n algorithm in sentence form and in pseudocode for how to complete a task that they do on a daily basis such as brushing their teeth. Students should strive to accurately describe that algorithm without ambiguity in a spoken language.',
        '学生将用自然语句和伪代码编写一个算法，描述他们每天做的某件事（如刷牙）的完成步骤。学生应力求用口语准确描述该算法，不含歧义。'
    ),

    # ==================== 2024/2025/AP SYLLABUS VARIATIONS (VS Code) ====================
    (
        '<p>Several 编程 languages are taught 在该课程中, and students are able to program in all of them in an environment designed specifically 的 课程 called Visual Studio Code for CS50 (<a href="https://cs50.dev">cs50dev</a>). Students will need to sign up for a (free) <a href="https://github.com/join">GitHub</a> account in order to use Visual Studio Code for CS50.</p>',
        '<p>本课程中教授多种编程语言，学生可以在一个专为本课程设计的环境中——称为 CS50 版 Visual Studio Code（<a href="https://cs50.dev">cs50.dev</a>）——使用所有这些语言进行编程。学生需要注册一个（免费）<a href="https://github.com/join">GitHub</a> 账户才能使用 CS50 版 Visual Studio Code。</p>'
    ),
    (
        '<p>Visual Studio Code for CS50 is a web-based utility with cloud storage, 意思ing students will be able to work on 这门课程\'s 编程 练习 在 首页, school, or anywhere they have an 互联网 connection. 说明 for setting up and using Visual Studio Code for CS50 are provided in the first作业 requiring its use. Addotionally, you can learn 更多 关于 Visual Studio Code for CS50 with this <a href="https://cs50.readthedocs.io/cs50.dev/#">documentation</a>.</p>',
        '<p>CS50 版 Visual Studio Code 是一个基于网页的工具，具有云存储功能，这意味着学生可以在家里、学校或任何有互联网连接的地方完成本课程的编程练习。CS50 版 Visual Studio Code 的设置和使用说明将在第一次需要使用它的作业中提供。此外，你可以通过此<a href="https://cs50.readthedocs.io/cs50.dev/#">文档</a>了解更多关于 CS50 版 Visual Studio Code 的信息。</p>'
    ),
]

def process_file(filepath):
    """Process a single file, applying all replacements."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    for old, new in block_replacements:
        if old in content:
            content = content.replace(old, new)
        else:
            # Try without line breaks (some files have different whitespace)
            old_compact = old.replace('\n', '').replace('  ', ' ')
            content_compact = content.replace('\n', ' ').replace('  ', ' ')
            # Not reliable, skip

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filepath}")
    else:
        print(f"No changes: {filepath}")

if __name__ == '__main__':
    if len(sys.argv) > 1:
        for fp in sys.argv[1:]:
            process_file(fp)
    else:
        print("Usage: python translate_syllabus.py <file1> <file2> ...")
