import os, re

# Comprehensive translation for all x/ folder pages
t = {}
# Common across all pages
t['This is CS50x'] = '这就是 CS50x'
t['OpenCourseWare'] = '开放课件'
t['Donate'] = '捐赠'
t['Status Page'] = '状态页面'
t['Manual Pages'] = '手册页面'
t['Style Guide'] = '风格指南'
t['Problem Set'] = '问题集'
t['Final Project'] = '最终项目'
t['Academic Honesty'] = '学术诚信'
t['How to Take this Course'] = '如何学习这门课程'
t['How to Teach this Course'] = '如何教授这门课程'
t['Watch an introduction'] = '观看课程介绍'
t['If interested in'] = '如果你对'
t['verified certificate'] = '认证证书'
t['professional certificate'] = '专业证书'
t['transfer credit'] = '学分转换'
t['accreditation'] = '认证'
t['enroll at'] = '请在以下链接注册'
t['register at'] = '请在以下链接注册'

# Notes pages common headers
t['Welcome'] = '欢迎'
t["CS50's Introduction to Computer Science"] = 'CS50 计算机科学导论'
t['Computational Thinking'] = '计算思维'
t['Problem Solving'] = '问题解决'
t['Algorithms'] = '算法'
t['Data Structures'] = '数据结构'
t['Memory'] = '内存'
t['Arrays'] = '数组'
t['Linked Lists'] = '链表'
t['Trees'] = '树'
t['Hash Tables'] = '哈希表'
t['Tries'] = '字典树'
t['Stacks'] = '栈'
t['Queues'] = '队列'
t['Python'] = 'Python'
t['SQL'] = 'SQL'
t['Flask'] = 'Flask'
t['HTML'] = 'HTML'
t['CSS'] = 'CSS'
t['JavaScript'] = 'JavaScript'
t['Scratch'] = 'Scratch'
t['C'] = 'C'

# Lecture content patterns
t['Last week we'] = '上周我们'
t['Last week, we'] = '上周，我们'
t['This week we'] = '本周我们'
t['This week, we'] = '本周，我们'
t['In this lecture'] = '在这堂课中'
t['In this lecture,'] = '在这堂课中，'
t['In this lesson'] = '在这节课中'
t['In this lesson,'] = '在这节课中，'
t["Let's start"] = '让我们开始'
t["Let's look at"] = '让我们看看'
t["Let's consider"] = '让我们考虑'
t["Let's now"] = '现在让我们'
t['For example,'] = '例如，'
t['For example'] = '例如'
t['As an example'] = '作为一个例子'
t['Consider the'] = '考虑'
t['Suppose that'] = '假设'
t['Assume that'] = '假设'
t['Note that'] = '请注意'
t['Notice that'] = '注意'
t['Recall that'] = '回忆一下'
t['Keep in mind'] = '请记住'
t['One way to'] = '一种方法是'
t['Another way to'] = '另一种方法是'
t['The way to'] = '方法是'
t['We can think of'] = '我们可以将'
t['We can use'] = '我们可以使用'
t['We can also'] = '我们也可以'
t['We can see'] = '我们可以看到'
t['We can now'] = '我们现在可以'
t['It turns out'] = '事实证明'
t['As it turns out'] = '事实证明'
t['In other words'] = '换句话说'
t['That is to say'] = '也就是说'
t['More specifically'] = '更具体地说'
t['More generally'] = '更一般地说'
t['In general'] = '一般来说'
t['In short'] = '简而言之'
t['To summarize'] = '总结一下'
t['Summing Up'] = '总结'
t['Summary'] = '总结'
t['Conclusion'] = '结论'
t['Overview'] = '概述'

# Source Code
t['Source Code'] = '源代码'
t['source code'] = '源代码'
t['from Lecture'] = '来自讲座'
t['from Week'] = '来自第'

# Common verbs
t['Let us'] = '让我们'
t['We need to'] = '我们需要'
t['We want to'] = '我们想要'
t['We have to'] = '我们必须'
t['We must'] = '我们必须'
t['We can'] = '我们可以'
t['We will'] = '我们将'
t['We are going to'] = '我们将要'
t['We should'] = '我们应该'
t['We might'] = '我们可能'
t['We could'] = '我们可以'
t['We would'] = '我们会'
t['We do not'] = '我们不'
t["We don't"] = '我们不'

# Lectures / Weeks
t['Week 0'] = '第 0 周'
t['Week 1'] = '第 1 周'
t['Week 2'] = '第 2 周'
t['Week 3'] = '第 3 周'
t['Week 4'] = '第 4 周'
t['Week 5'] = '第 5 周'
t['Week 6'] = '第 6 周'
t['Week 7'] = '第 7 周'
t['Week 8'] = '第 8 周'
t['Week 9'] = '第 9 周'
t['Week 10'] = '第 10 周'
t['Lecture 0'] = '讲座 0'
t['Lecture 1'] = '讲座 1'
t['Lecture 2'] = '讲座 2'
t['Lecture 3'] = '讲座 3'
t['Lecture 4'] = '讲座 4'
t['Lecture 5'] = '讲座 5'
t['Lecture 6'] = '讲座 6'
t['Lecture 7'] = '讲座 7'
t['Lecture 8'] = '讲座 8'
t['Lecture 9'] = '讲座 9'
t['Lecture 10'] = '讲座 10'

# Common CS50 phrases
t['problem set'] = '问题集'
t['problem sets'] = '问题集'
t['lab'] = '实验'
t['labs'] = '实验'
t['section'] = '小组课'
t['sections'] = '小组课'
t['office hours'] = '答疑时间'
t['walkthrough'] = '演练'
t['sections'] = '小组课'
t['seminar'] = '研讨课'
t['seminars'] = '研讨课'
t['syllabus'] = '教学大纲'
t['certificate'] = '证书'
t['staff'] = '工作人员'
t['communities'] = '社区'

c = 0
for root, dirs, files in os.walk('cs50/cs50-zh/x'):
    for fn in files:
        if not fn.endswith('.html'): continue
        fp = os.path.join(root, fn)
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
