import re
import sys

# Translation map for all 6 files (common patterns)
translations = [
    # Intro paragraph
    (r'以下是答案 to the <span id="questionCount"></span> most frequently asked关于 这门课程\. For其他答案问题，请在 in any of CS50&#39;s <a href="../communities/index\.html">社区</a>!',
     '以下是关于本课程最常被问到的 <span id="questionCount"></span> 个问题的答案。关于其他问题的答案，请在 CS50 的任何<a href="../communities/index.html">社区</a>中提问！'),
    (r'<p>以下是答案 to the <span id="questionCount"></span> most frequently asked关于 这门课程\. For其他答案问题，请在 in any of CS50&#39;s <a href="../communities/index\.html">社区</a>!</p>',
     '<p>以下是关于本课程最常被问到的 <span id="questionCount"></span> 个问题的答案。关于其他问题的答案，请在 CS50 的任何<a href="../communities/index.html">社区</a>中提问！</p>'),

    # Update date
    (r'These常见问题更新至最新。我们上次更新于5月28, 2026 在 18:57 UTC\.',
     '这些常见问题始终保持最新。我们上次于 2026 年 5 月 28 日 18:57 UTC 更新。'),
    (r'These常见问题更新至最新。我们上次更新于5月28, 2026 at 18:5[67] UTC\.',
     '这些常见问题始终保持最新。我们上次于 2026 年 5 月 28 日 18:57 UTC 更新。'),
    (r'These常见问题更新至最新。我们上次更新于5月28, 2026 at 14:57 UTC\.',
     '这些常见问题始终保持最新。我们上次于 2026 年 5 月 28 日 14:57 UTC 更新。'),

    # Common mixed phrases
    (r'在 this point in your development as a learner\.',
     '在你目前的学习阶段。'),

    # Does my gradebook only show
    (r'Does 我的成绩册只 show if I scored high enough to pass a问题\?\s+如何查看我的实际分数\?',
     '我的成绩册只显示我是否达到了问题及格线吗？如何查看我的实际分数？'),
    (r'<h3 id="(?:does-my-gradebook-only-show-if-i-scored-high-enough-to-pass-a-problem--how-can-i-see-my-actual-numeric-grades|does-my-gradebook-only-show-if-i-scored-high-enough-to-pass-a-problem\?how-can-i-see-my-actual-numeric-grades)">Does 我的成绩册只 show if I scored high enough to pass a问题\?\s+如何查看我的实际分数\?</h3>',
     '<h3 id="does-my-gradebook-only-show-if-i-scored-high-enough-to-pass-a-problem--how-can-i-see-my-actual-numeric-grades">我的成绩册只显示我是否达到了问题及格线吗？如何查看我的实际分数？</h3>'),

    # I completed in prior year
    (r'I completed 一份作业或这门 课程 in 前一年\. 为什么我的成绩册 不再 show 我之前的进度\?',
     '我在前一年完成了一份作业或这门课程。为什么我的成绩册不再显示我之前的进度？'),

    # I watched all videos
    (r'I watched 所有视频 in edX or on YouTube: Why don&#39;t I have a 证书\?',
     '我在 edX 或 YouTube 上观看了所有视频：为什么我没有获得证书？'),
    (r'I watched 所有视频 in edX or on YouTube: Why don\xe2\x80\x99t I have a 证书\?',
     '我在 edX 或 YouTube 上观看了所有视频：为什么我没有获得证书？'),

    # Why does edX dashboard say resume
    (r'为什么我的 edX dashboard say I can \xe2\x80\x9cresume\xe2\x80\x9d 这门课程 even though I have completed it\?',
     '为什么我的 edX 仪表板显示我可以\xe2\x80\x9c恢复\xe2\x80\x9d这门课程，即使我已经完成了它？'),
    (r'为什么我的 edX dashboard say I can "resume" 这门课程 even though I have completed it\?',
     '为什么我的 edX 仪表板显示我可以\xe2\x80\x9c恢复\xe2\x80\x9d这门课程，即使我已经完成了它？'),

    # I submitted a project
    (r'I submitted 一个项目，但 没有显示任何内容 在我的 成绩册中显示 I&#39;ve submitted\. Why\?',
     '我提交了一个项目，但我的成绩册中没有显示任何内容表明我已提交。为什么？'),
    (r'I submitted 一个项目，但 没有显示任何内容 在我的 成绩册中显示 I\xe2\x80\x99ve submitted\. Why\?',
     '我提交了一个项目，但我的成绩册中没有显示任何内容表明我已提交。为什么？'),

    # I submitted a problem more than three weeks ago
    (r'I submitted a问题 更多 than three周ago and no grade appears in my成绩册。 Why is that\?',
     '我在三周多前提交了一个问题，但我的成绩册中没有出现成绩。为什么会这样？'),

    # My assignment feedback
    (r'My作业 feedback states that my GitHub username is wrong\. Why\?',
     '我的作业反馈显示我的 GitHub 用户名是错的。为什么？'),

    # My score changed
    (r'My score changed on成绩册 but I didn&#39;t receive an邮件关于 it\. Why\?',
     '我的成绩在成绩册上发生了变化，但我没有收到关于此事的电子邮件。为什么？'),
    (r'My score changed on成绩册 but I didn\xe2\x80\x99t receive an邮件关于 it\. Why\?',
     '我的成绩在成绩册上发生了变化，但我没有收到关于此事的电子邮件。为什么？'),

    # I got non-passing grade
    (r'I got a non-passing grade on a submission, but I don&#39;t know why\. How do I view my feedback\?',
     '我提交的作业得了不及格的成绩，但我不知道为什么。如何查看我的反馈？'),
    (r'I got a non-passing grade on a submission, but I don\xe2\x80\x99t know why\. How do I view my feedback\?',
     '我提交的作业得了不及格的成绩，但我不知道为什么。如何查看我的反馈？'),

    # I resubmitted
    (r'I resubmitted, but the same 答案 that was previously marked correct is now marked incorrect\. Why\?',
     '我重新提交了，但之前被标记为正确的相同答案现在被标记为错误。为什么？'),

    # If I submitted a problem and did not reach 70%
    (r'如果我提交了 a问题 and did not reach the 70% passing grade, 我可以重新提交吗\?',
     '如果我提交了一个问题但没有达到 70% 的及格线，我可以重新提交吗？'),

    # If I did 70% of problems
    (r'如果我完成了 70% of 问题， do I get a 证书\?',
     '如果我完成了 70% 的问题，我能获得证书吗？'),

    # Can you rush grading
    (r'你能加快 the grading of my 作业\?',
     '你能加快批改我的作业吗？'),

    # If I don't finish
    (r'If I don&#39;t finish 这门课程 before 结束-of-day 312026年12月, what 会发生什么\?',
     '如果我在 2026 年 12 月 31 日结束前没有完成这门课程，会发生什么？'),
    (r'If I don\xe2\x80\x99t finish 这门课程 before 结束-of-day 312026年12月, what 会发生什么\?',
     '如果我在 2026 年 12 月 31 日结束前没有完成这门课程，会发生什么？'),
    (r'If I don&#39;t finish 这门课程 before 2026年12月31日结束前, what 会发生什么\?',
     '如果我在 2026 年 12 月 31 日结束前没有完成这门课程，会发生什么？'),
    (r'If I don\xe2\x80\x99t finish 这门课程 before 2026年12月31日结束前, what 会发生什么\?',
     '如果我在 2026 年 12 月 31 日结束前没有完成这门课程，会发生什么？'),
    (r'If I don&#39;t finish 这门课程 before end-of-day 30 六月 2024, what 会发生什么\?',
     '如果我在 2024 年 6 月 30 日结束前没有完成这门课程，会发生什么？'),
    (r'If I don\xe2\x80\x99t finish 这门课程 before end-of-day 30 六月 2024, what 会发生什么\?',
     '如果我在 2024 年 6 月 30 日结束前没有完成这门课程，会发生什么？'),

    # Will the work carry forward
    (r'Will the work I complete for 这门课程 in 2026 carry forward into 2027\?',
     '我在 2026 年为这门课程完成的工作会延续到 2027 年吗？'),

    # What name appears
    (r'什么名字将出现 on my 证书\?',
     '我的证书上会出现什么名字？'),

    # How can I take advantage of ACE
    (r'How can I take advantage of American Council on Education \(ACE\) 信用卡 recommendation\?',
     '如何利用美国教育委员会（ACE）的学分推荐？'),

    # ACE section sentences
    (r'"to jump-开始 \[their\] 大学生涯 with transfer 信用卡, 或开启 新内容 用徽章开启新的就业机会\."',
     '\xe2\x80\x9c快速启动他们的大学生涯并获得学分转换，或用徽章开启新的就业机会。\xe2\x80\x9d'),
    (r'"the ACE National Guide \[可用于\] 查找 课程 and exams that carry college 信用卡 or competency recommendations\."',
     '\xe2\x80\x9cACE 国家指南可用于查找提供大学学分或能力认证推荐的课程和考试。\xe2\x80\x9d'),
    (r'Further, 他们指出 ',
     '此外，他们指出 '),

    # Obtaining ACE credit
    (r'Obtain an official ACE 信用卡 笔记 or ACE 文字稿 from edX\. Sometimes, the edX 认证证书 alone可能是 sufficient for ACE documentation, provided the 认证证书 explicitly includes an ACE 信用卡 recommendation\.',
     '从 edX 获取官方的 ACE 学分笔记或 ACE 成绩单。有时，仅 edX 认证证书可能就足以作为 ACE 证明文件，前提是认证证书明确包含 ACE 学分推荐。'),
    (r'Claim your ACE 信用卡 Badge on Credly\. edX will typically provide you with a link or invitation to claim your Credly badge when they issue your edX 认证证书\.',
     '在 Credly 上领取你的 ACE 学分徽章。edX 通常会在颁发 edX 认证证书时提供链接或邀请以领取 Credly 徽章。'),
    (r'Retain your edX 认证证书, your ACE documentation \(such as 信用卡 笔记 or 文字稿\), and your Credly badge\.',
     '保留你的 edX 认证证书、ACE 证明文件（如学分笔记或成绩单）以及 Credly 徽章。'),
    (r'All inquiries 关于 ACE 信用卡 should be directed to edX support\.',
     '所有关于 ACE 学分的咨询应直接联系 edX 支持。'),

    # Schools and universities
    (r'世界各地的学校和大学对于接受学分转换的具体规定各不相同。因此，你应该咨询你的学术顾问了解你的个人情况。我们的证书有可能（但你需要向你的顾问核实）会满足他们的要求。事实上，我们的一些课程（通过 edX 的）已被 <a href="#how-can-i-take-advantage-of-american-council-on-education-ace-credit-recommendation">美国教育委员会（ACE）</a>推荐为大学或学院学分，你所在的学术机构可能会认可。',
     '世界各地的学校和大学对于接受学分转换的具体规定各不相同。因此，你应该咨询你的学术顾问了解你的个人情况。我们的证书有可能（但你需要向你的顾问核实）会满足他们的要求。事实上，我们的一些课程（通过 edX 的）已被 <a href="#how-can-i-take-advantage-of-american-council-on-education-ace-credit-recommendation">美国教育委员会（ACE）</a>推荐为大学或学院学分，你所在的学术机构可能会认可。'),

    # enrollment letter
    (r'\. Finally, 关于时间要求 的 课程, you can 合计 每一 周&#39;s课程讲座自己\. For 时间必需的 必需作业, 最好估计 between 10-20时间 for 每周&#39;s 问题集\.',
     '。最后，关于课程的时间要求，你可以自己合计每周的课程讲座。对于必需作业所需的时间，最好估算每周的问题集大约需要 10-20 小时。'),
    (r'\. Finally, 关于时间要求 的 课程, you can 合计 每一 周\xe2\x80\x99s课程讲座自己\. For 时间必需的 必需作业, 最好估计 between 10-20时间 for 每周\xe2\x80\x99s 问题集\.',
     '。最后，关于课程的时间要求，你可以自己合计每周的课程讲座。对于必需作业所需的时间，最好估算每周的问题集大约需要 10-20 小时。'),
    (r'\. Finally, 关于时间要求 的 课程, you can 合计 每一 周&#39;s课程讲座自己\. For 时间必需的 必需作业, 最好估计 在 10-20 小时之间 for 每周&#39;s 问题集\.',
     '。最后，关于课程的时间要求，你可以自己合计每周的课程讲座。对于必需作业所需的时间，最好估算每周的问题集大约需要 10-20 小时。'),
    (r'\. Finally, 关于时间要求 的 课程, you can 合计 每一 周\xe2\x80\x99s课程讲座自己\. For 时间必需的 必需作业, 最好估计 在 10-20 小时之间 for 每周\xe2\x80\x99s 问题集\.',
     '。最后，关于课程的时间要求，你可以自己合计每周的课程讲座。对于必需作业所需的时间，最好估算每周的问题集大约需要 10-20 小时。'),

    (r'用于 of，用于提供你已注册该课程的证明。此外，你可以从 ',
     '，用于提供你已注册该课程的证明。此外，你可以从 '),
    (r'课程 page',
     '课程页面'),

    # Verified vs free cert
    (r'What&#39;s the difference between a 认证证书 and a CS50 证书\?',
     '认证证书和 CS50 证书有什么区别？'),
    (r'What\xe2\x80\x99s the difference between a 认证证书 and a CS50 证书\?',
     '认证证书和 CS50 证书有什么区别？'),
    (r', which you can purchase from edX, ',
     '，你可以从 edX 购买，"'),

    (r'Yes\.</p>',
     '是的。</p>'),

    # edX registration and free audit
    (r'Best to carefully re-阅读 edX&#39;s问题 on their website as you register\. There is a \xe2\x80\x9cfree\xe2\x80\x9d or \xe2\x80\x9caudit\xe2\x80\x9d option which requires no payment\.',
     '最好在注册时仔细重新阅读 edX 网站上的问题。有一项\xe2\x80\x9c免费\xe2\x80\x9d或\xe2\x80\x9c旁听\xe2\x80\x9d选项，无需付款。'),
    (r'Best to carefully re-阅读 edX\xe2\x80\x99s问题 on their website as you register\. There is a \xe2\x80\x9cfree\xe2\x80\x9d or \xe2\x80\x9caudit\xe2\x80\x9d option which requires no payment\.',
     '最好在注册时仔细重新阅读 edX 网站上的问题。有一项\xe2\x80\x9c免费\xe2\x80\x9d或\xe2\x80\x9c旁听\xe2\x80\x9d选项，无需付款。'),
    (r'Best to carefully re-阅读 edX&#39;s问题 on their website as you register\. There is a "free" or "audit" option which requires no payment\.',
     '最好在注册时仔细重新阅读 edX 网站上的问题。有一项\xe2\x80\x9c免费\xe2\x80\x9d或\xe2\x80\x9c旁听\xe2\x80\x9d选项，无需付款。'),
    (r'Best to carefully re-阅读 edX\xe2\x80\x99s问题 on their website as you register\. There is a "free" or "audit" option which requires no payment\.',
     '最好在注册时仔细重新阅读 edX 网站上的问题。有一项\xe2\x80\x9c免费\xe2\x80\x9d或\xe2\x80\x9c旁听\xe2\x80\x9d选项，无需付款。'),

    # Nope verification
    (r'Nope! If you would like a 认证证书 from edX, you can pay for verification 在 any point up until 10 days before 这门课程&#39;s final 截止时间, even after completing all of 这门课程work\. However, we strongly recommend, to avoid any logistical issues that can delay证书 issuance, that you verify before finishing 这门课程\. Otherwise, the 30-day wait we reference',
     '不会！如果你想要 edX 的认证证书，你可以在课程最终截止日期前 10 天之前的任何时间付费验证，甚至可以在完成所有课程作业之后。然而，我们强烈建议你在完成课程之前进行验证，以免出现可能延误证书发放的后勤问题。否则，我们'),
    (r'Nope! If you would like a 认证证书 from edX, you can pay for verification at any point up until 10 days before 这门课程&#39;s final 截止时间, even after completing all of 这门课程work\. However, we strongly recommend, to avoid any logistical issues that can delay证书 issuance, that you verify before finishing 这门课程\. Otherwise, the 30-day wait we reference',
     '不会！如果你想要 edX 的认证证书，你可以在课程最终截止日期前 10 天之前的任何时间付费验证，甚至可以在完成所有课程作业之后。然而，我们强烈建议你在完成课程之前进行验证，以免出现可能延误证书发放的后勤问题。否则，我们'),
    (r'Nope! If you would like a 认证证书 from edX, you can pay for verification at any point up until 10 days before 这门课程\xe2\x80\x99s final 截止时间, even after completing all of 这门课程work\. However, we strongly recommend, to avoid any logistical issues that can delay证书 issuance, that you verify before finishing 这门课程\. Otherwise, the 30-day wait we reference',
     '不会！如果你想要 edX 的认证证书，你可以在课程最终截止日期前 10 天之前的任何时间付费验证，甚至可以在完成所有课程作业之后。然而，我们强烈建议你在完成课程之前进行验证，以免出现可能延误证书发放的后勤问题。否则，我们'),
    (r'Nope! If you would like a 认证证书 from edX, you can pay for verification at any point up until 10 days before 这门课程&#39;s final 截止时间, even after completing all of 这门课程work\. However, we strongly recommend, to avoid any logistical issues that can delay证书 issuance, that you verify before finishing 这门课程\. Otherwise, the 30-day wait we reference',
     '不会！如果你想要 edX 的认证证书，你可以在课程最终截止日期前 10 天之前的任何时间付费验证，甚至可以在完成所有课程作业之后。然而，我们强烈建议你在完成课程之前进行验证，以免出现可能延误证书发放的后勤问题。否则，我们'),
    (r'only starts once you have had your identity verified by edX\. Thus, waiting to register for a 认证证书 after you complete 这门课程 will likely delay receiving your 认证证书 for 30 days or 更多\.',
     '只有在 edX 验证了你的身份之后才开始计算。因此，在完成课程后再注册认证证书可能会将你收到认证证书的时间延迟 30 天或更长时间。'),
    (r'shows that 你已完成 这门课程, you will receive y我们的证书 up to 30 days after you make payment for a 认证证书 with edX\.',
     '显示你已完成这门课程，你将在向 edX 支付认证证书费用后最多 30 天内收到我们的证书。'),
    (r'If you completed 这门课程 prior to 这个日历年: Yes\. Send us a copy of your CS50证书， your edX and GitHub username that you used to complete 这门课程, and a receipt from your purchase of the edX 认证证书\. 你必须 purchase the edX 认证证书 using the same edX account you used to complete 这门课程 prior\.',
     '如果你在这个日历年之前完成了这门课程：是的。将你的 CS50 证书副本、你用于完成课程的 edX 和 GitHub 用户名，以及你购买 edX 认证证书的收据发送给我们。你必须使用你之前完成课程时所用的相同 edX 账户购买 edX 认证证书。'),

    # Prior year certificate
    (r'Yes, we can provide a 认证证书 for any 课程 completion from 2019 to present\. We do so provided that you can send us a copy of your CS50证书， your edX and GitHub username that you used to complete 这门课程, and a receipt from your purchase of the edX 认证证书\. Without this information, we cannot provide such a证书。',
     '是的，我们可以为 2019 年至今的任何课程完成提供认证证书。我们提供此项服务的前提是，你能够将你的 CS50 证书副本、你用于完成课程的 edX 和 GitHub 用户名，以及你购买 edX 认证证书的收据发送给我们。没有这些信息，我们无法提供此类证书。'),

    # Payment re-verify
    (r'No, your verification should be good for an entire year, but if it has expired, you should be able to re-verify自己 via edX&#39;s',
     '不需要，你的验证应该有效一整年，但如果已过期，你应该能够通过 edX 的'),
    (r'No, your verification should be good for an entire year, but if it has expired, you should be able to re-verify自己 via edX\xe2\x80\x99s',
     '不需要，你的验证应该有效一整年，但如果已过期，你应该能够通过 edX 的'),

    # Gradebook sections
    (r'显示结果 for each作业 提交 最新版本 of 这门课程\. 你的顶部 ',
     '显示最新版本课程中每次作业提交的结果。你的 '),
    (r'显示你当前的状态 在该课程中, 显示数量必需作业 你已完成\. If your ',
     '显示你当前在该课程中的状态，显示你已完成的必需作业数量。如果你的 '),
    (r'显示你未注册 在该课程中, 最好注册 and 开始 completing 必需作业\.',
     '显示你未注册该课程，最好注册并开始完成必需作业。'),
    (r'shows which作业 you received a passing score for, along with those you have not\. Once you have received a score of 70% or higher for a particular作业， the作业 number will appear in green, and your progress indicator will be updated to reflect that\.',
     '显示你已获得及格分数的作业以及尚未及格的作业。一旦你对某个作业获得 70% 或更高的分数，该作业编号将显示为绿色，你的进度指示器也将更新以反映该情况。'),
    (r'Once you have scored 在 least a 70% 在所有必需作业, 你将看到一个绿色横幅 atop that page, 确认你已mpletion and providing you 下一页 steps to obtain y我们的证书\(s\)\.',
     '一旦你在所有必需作业中至少获得 70% 的分数，你将在页面顶部看到一个绿色横幅，确认你已完成课程，并为你提供获取证书的后续步骤。'),
    (r'Once you have scored at least a 70% 在所有必需作业, 你将看到一个绿色横幅 atop that page, 确认你已mpletion and providing you 下一页 steps to obtain y我们的证书\(s\)\.',
     '一旦你在所有必需作业中至少获得 70% 的分数，你将在页面顶部看到一个绿色横幅，确认你已完成课程，并为你提供获取证书的后续步骤。'),

    # Not enrolled reasons
    (r'There are many potential reasons for this\. The most common reasons are as follows\. First, it&#39;s possible that you never enrolled 在该课程中 before\. Second, it&#39;s possible that you never linked your edX account to 你的成绩册\. Best to follow the on-screen instructions in your ',
     '出现这种情况有多种可能的原因。最常见的原因如下。首先，你可能之前从未注册过该课程。其次，你可能从未将你的 edX 账户关联到你的成绩册。最好按照 '),
    (r'There are many potential reasons for this\. The most common reasons are as follows\. First, it\xe2\x80\x99s possible that you never enrolled 在该课程中 before\. Second, it\xe2\x80\x99s possible that you never linked your edX account to 你的成绩册\. Best to follow the on-screen instructions in your ',
     '出现这种情况有多种可能的原因。最常见的原因如下。首先，你可能之前从未注册过该课程。其次，你可能从未将你的 edX 账户关联到你的成绩册。最好按照 '),
    (r'to resolve this issue and enroll\.',
     ' 中显示的屏幕说明来解决此问题并注册。'),

    # Non-passing grade
    (r'No\. 这门课程 has numeric scores\. An作业 that receives a score of 70% or higher is considered passing\.',
     '没有。这门课程有数字分数。获得 70% 或更高分数的作业被视为及格。'),

    # Gradebook shows which
    (r'shows which作业 you have received a passing score for\.作业 not graded and作业 that did not receive a passing score will <strong>not</strong> display\. Once you have received a score of 70% or higher for a particular作业， the作业 number will appear in green, and your progress indicator will be updated to reflect that\.',
     '显示你已获得及格分数的作业。未评分的作业和未获得及格分数的作业将<strong>不</strong>显示。一旦你对某个作业获得 70% 或更高的分数，该作业编号将显示为绿色，你的进度指示器也将更新以反映该情况。'),

    # Completed in prior year cleanup
    (r'在 the 开始 of each日历年, we clean up our ',
     '在每个日历年开始时，我们会清理我们的 '),
    (r'At the start of each日历年, we clean up our ',
     '在每个日历年开始时，我们会清理我们的 '),
    (r'and "reset" it\. What happened to your progress depends on when you last submitted an作业 的 课程\.',
     '并\xe2\x80\x9c重置\xe2\x80\x9d它。你的进度发生了什么取决于你上次提交课程作业的时间。'),
    (r'If you last submitted \(and had graded\) an作业 in 2025, no cause for worry, your past progress is archived\. Once you have an作业 submitted, graded, and passed in 2026, your past progress will be automatically imported to your ',
     '如果你上次在 2025 年提交（并被评分）了一份作业，不用担心，你过去的进度已被存档。一旦你在 2026 年提交、评分并通过了一份作业，你过去的进度将自动导入到你的 '),
    (r'again\.',
     '。'),
    (r'If you last submitted \(and had graded\) an作业 in 2024, your progress will not carry over into 2026, and you&#39;ll need to 开始 这门课程 again\. After you have been inactive for 在 least twelve months, the system will 不再 retain your 旧内容 scores\.',
     '如果你上次在 2024 年提交（并被评分）了一份作业，你的进度将不会延续到 2026 年，你需要重新开始这门课程。在你至少十二个月不活跃后，系统将不再保留你的旧成绩。'),
    (r'If you last submitted \(and had graded\) an作业 in 2024, your progress will not carry over into 2026, and you&#39;ll need to start 这门课程 again\. After you have been inactive for at least twelve months, the system will 不再 retain your old scores\.',
     '如果你上次在 2024 年提交（并被评分）了一份作业，你的进度将不会延续到 2026 年，你需要重新开始这门课程。在你至少十二个月不活跃后，系统将不再保留你的旧成绩。'),
    (r'If you actually finished 这门课程 in 2025, your ',
     '如果你在 2025 年实际完成了这门课程，你的 '),
    (r'will be removed 在这个 reset, as we do not continue to retain scores for those who&#39;ve finished 这门课程! Your CS50证书 \(attesting to your completion of 这门课程\) will still be available by visiting ',
     '将在本次重置中被移除，因为我们不会继续保留已完成课程者的成绩！你的 CS50 证书（证明你完成了这门课程）仍然可以通过访问 '),

    # edX dashboard
    (r'这门课程 does not use edX&#39;s built-in成绩册， so all students&#39; scores always appear \(in edX&#39;s 成绩册\) as 0%\. Not to worry, see your ',
     '这门课程不使用 edX 内置的成绩册，因此所有学生的成绩在 edX 的成绩册中始终显示为 0%。不用担心，请查看你的 '),
    (r'这门课程 does not use edX\xe2\x80\x99s built-in成绩册， so all students\xe2\x80\x99 scores always appear \(in edX\xe2\x80\x99s 成绩册\) as 0%\. Not to worry, see your ',
     '这门课程不使用 edX 内置的成绩册，因此所有学生的成绩在 edX 的成绩册中始终显示为 0%。不用担心，请查看你的 '),
    (r'for your actual results\. If you recently completed 这门课程, it can take up to 30 days for edX to acknowledge your completion on your edX dashboard\.',
     ' 以获取你的实际结果。如果你最近完成了这门课程，edX 可能需要最多 30 天才能在你的 edX 仪表板上确认你的完成情况。'),

    # Course has numerous assignments
    (r'这门课程 has numerous作业 that must be completed in addition to watching 这门课程讲座\. Best to see 这门课程 菜单, which lists the various作业 的 课程\.',
     '除了观看课程讲座外，这门课程还有许多必须完成的作业。最好查看课程菜单，其中列出了课程的各种作业。'),

    # Dashboard resume
    (r'Your edX dashboard 五月 display either ',
     '你的 edX 仪表板可能会显示 '),
    (r' as a convenience to you, such that you can return or view 这门课程\. It doesn&#39;t indicate completion or non-completion\.',
     '，以方便你返回或查看这门课程。这并不表示完成或未完成。'),
    (r' as a convenience to you, such that you can return or view 这门课程\. It doesn\xe2\x80\x99t indicate completion or non-completion\.',
     '，以方便你返回或查看这门课程。这并不表示完成或未完成。'),

    # GitHub disabled
    (r'Best to consult GitHub&#39;s ',
     '最好查阅 GitHub 的 '),
    (r'Best to consult GitHub\xe2\x80\x99s ',
     '最好查阅 GitHub 的 '),
    (r' regarding account reinstatement\. We cannot transfer your past progress to a 新内容 GitHub account\. Further, we cannot access your files from a disabled GitHub account\. If you cannot regain access to your GitHub account, you will need to restart 这门课程\.',
     ' 以了解账户恢复的相关信息。我们无法将你过去的进度转移到新的 GitHub 账户。此外，我们无法从已禁用的 GitHub 账户访问你的文件。如果你无法重新获得对 GitHub 账户的访问权限，你将需要重新开始这门课程。'),
    (r' regarding account reinstatement\. We cannot transfer your past progress to a new GitHub account\. Further, we cannot access your files from a disabled GitHub account\. If you cannot regain access to your GitHub account, you will need to restart 这门课程\.',
     ' 以了解账户恢复的相关信息。我们无法将你过去的进度转移到新的 GitHub 账户。此外，我们无法从已禁用的 GitHub 账户访问你的文件。如果你无法重新获得对 GitHub 账户的访问权限，你将需要重新开始这门课程。'),

    # Exam/no test
    (r'这门课程 does not have a summative test or "final exam\." While 我们的课程 在 哈佛学院 and Harvard Extension often have final tests, 这门课程 does not\. You need only complete the作业 listed in each周or module of 这门课程\.',
     '这门课程没有总结性测试或\xe2\x80\x9c期末考试\xe2\x80\x9d。虽然我们在哈佛学院和 Harvard Extension 的课程通常有期末考试，但这门课程没有。你只需要完成课程每周或每个模块中列出的作业。'),
    (r'这门课程 does not have a summative test or "final exam\." While 我们的课程 at 哈佛学院 and Harvard Extension often have final tests, 这门课程 does not\. You need only complete the作业 listed in each周or module of 这门课程\.',
     '这门课程没有总结性测试或\xe2\x80\x9c期末考试\xe2\x80\x9d。虽然我们在哈佛学院和 Harvard Extension 的课程通常有期末考试，但这门课程没有。你只需要完成课程每周或每个模块中列出的作业。'),

    # After following submissions
    (r'After following the作业 submission instructions, upon submitting the 必需 Google Form, you will immediately receive an邮件confirmation of your submission\. If you do not receive such an邮件confirmation, best to check your junk mailbox\. Your submission will take up to three周to be graded\.',
     '按照作业提交说明操作后，提交必需的 Google 表单后，你将立即收到一封确认你已提交的电子邮件。如果你没有收到这样的电子邮件确认，最好检查你的垃圾邮件箱。你的提交最多需要三周时间进行评分。'),

    # Submit project Google Form
    (r'When you 提交 the Google Form for each作业， you will receive an邮件confirmation; if you get that confirmation, we have your form and your submission will be graded within three 周次\. If you did not receive such an邮件confirmation, best to see "',
     '当你为每份作业提交 Google 表单时，你将收到一封电子邮件确认；如果你收到了该确认，我们就收到了你的表单，你的提交将在三周内评分。如果你没有收到这样的电子邮件确认，最好查看\xe2\x80\x9c'),

    # We rely upon you
    (r'We rely upon you to supply us with correct and accurate information in your作业 submissions\.',
     '我们依赖你在作业提交中向我们提供正确和准确的信息。'),

    # First possible never received
    (r'First, it is possible that we never received your作业。 Check to make sure you have received a Google Form confirmation邮件 your作业 submission\. If you did not receive such a confirmation, it&#39;s unlikely we received your submission\. In this case, you should resubmit your作业。 If you did not receive such an邮件confirmation, best to see "',
     '首先，我们可能从未收到你的作业。检查确认你是否收到了 Google 表单确认邮件。如果你没有收到这样的确认，我们很可能没有收到你的提交。在这种情况下，你应该重新提交你的作业。如果你没有收到这样的电子邮件确认，最好查看\xe2\x80\x9c'),

    # Second you may not have received
    (r'Second, you可能没有 received a passing grade\. When we finalize your grade for an作业， we will always send a results邮件to you\. If you did not receive this 电子邮件, even after three 周次, best to check your junk mailbox\. We cannot resend you your results or feedback for a submission\.',
     '其次，你可能没有获得及格分数。当我们为作业最终确定你的分数时，我们总会向你发送一封成绩结果邮件。如果即使在三周后你也没有收到这封电子邮件，最好检查你的垃圾邮件箱。我们无法为提交重新发送你的结果或反馈。'),

    # Finally it could be usernames
    (r'do not match the usernames that you provided us when you submitted your作业。 Best to check the Google Form confirmation emails for your作业 submissions to ensure that the usernames provided were the correct ones\. If 在 any时间 you provided us an incorrect GitHub username do not resubmit: Best to contact support while keeping in mind our ',
     '与你提交作业时提供给我们的用户名不匹配。最好检查你的作业提交的 Google 表单确认邮件，以确保提供的用户名是正确的。如果你在任何时候提供了错误的 GitHub 用户名，请不要重新提交：最好联系支持人员，同时牢记我们关于更改用户名的'),
    (r'regarding the changing of usernames\.',
     '。'),

    # Assignment feedback states wrong
    (r'No, your feedback does not state that\. Please re-阅读 that portion of the feedback, especially in the 小组课 immediately below your username\.',
     '不，你的反馈没有这样说明。请重新阅读反馈的那个部分，特别是紧接你用户名下方的小组课部分。'),

    # Score changes
    (r'Our 工作人员 grades periodically, but grades are never finalized until you receive an邮件 CS50, so even if the status changes, you should not consider anything final until you get that 电子邮件\.',
     '我们的工作人员定期评分，但在你收到 CS50 的电子邮件之前，成绩永远不会最终确定，因此即使状态发生变化，在你收到那封电子邮件之前，你不应将任何内容视为最终结果。'),

    # Google Forms feedback
    (r'Unfortunately, the Google Forms release interface will occasionally render invisible a link that you can use to see what feedback可能有 been left for you by the 工作人员\. Below your numeric score in the邮件 bot@cs50\.net releasing your score is a link\. If your browser renders that link invisible, hover your mouse around in that area until you find a clickable spot: It&#39;s there, we promise! Click your mouse in the area roughly where the black box is in the below image \(this particular image is from one of our many 课程, but the score release emails all look the same!\)',
     '不幸的是，Google 表单发布界面偶尔会使一个链接不可见，你可以使用该链接查看工作人员可能为你留下的反馈。在你收到来自 bot@cs50.net 发布成绩的电子邮件中，你的数字分数下方有一个链接。如果你的浏览器将该链接渲染为不可见，请在该区域周围移动鼠标直到找到一个可点击的位置：它在那里，我们保证！在下图中的黑框大致所在区域点击鼠标（这张特定的图片来自我们的众多课程之一，但成绩发布邮件看起来都一样！）'),

    # I resubmitted borderline
    (r'This sometimes happens when 答案 are "borderline\." We do reserve the right to change our minds regarding the acceptability of an 答案\. Different graders 五月 assess borderline 答案 differently\. We encourage you to try to 编写一个 clearer 答案\.',
     '当答案处于\xe2\x80\x9c临界状态\xe2\x80\x9d时，有时会发生这种情况。我们确实保留改变对答案可接受性看法的权利。不同的评分者可能会对临界答案做出不同的评估。我们鼓励你尝试编写一个更清晰的答案。'),

    # Yes, of course you may resubmit
    (r'Yes, of 课程! You 五月 resubmit\. Just 提交 the form again, taking into account the feedback the 工作人员 left for you; we will only ever count your highest-scoring submission, so it&#39;s okay to 提交 as many times as needed, but please 提交 only once until your score is released again unless you make an error while submitting\. Repeated submissions without improvement可能是 considered spam, resulting in you being prevented from making further submissions\.',
     '是的，当然可以！你可以重新提交。只需再次提交表单，将工作人员留给你的反馈考虑进去；我们只会计算你最高分的提交，所以可以根据需要多次提交，但请只提交一次，直到你的成绩再次发布，除非你在提交时出错。没有改进的重复提交可能被视为垃圾信息，导致你被阻止进行进一步提交。'),

    # 最终项目 feedback
    (r'After receiving your feedback on 你的最终项目, best to consult the feedback to understand why you did not receive a passing score\. If you did not receive feedback on 你的最终项目, best to see "',
     '在收到关于你的最终项目的反馈后，最好查阅反馈以了解你为什么没有获得及格分数。如果你没有收到关于最终项目的反馈，最好查看\xe2\x80\x9c'),

    # Next common reason
    (r'The most common reason for not receiving a passing score on 你的最终项目 is that you have not followed the ',
     '你的最终项目没有获得及格分数的最常见原因是你没有遵循 '),

    # Must do all
    (r'No\. 你必须 do all 必需作业 and receive 在 least a score of 70% on each\.',
     '不能。你必须完成所有必需作业，并且每项至少获得 70% 的分数。'),
    (r'No\. 你必须 do all 必需作业 and receive at least a score of 70% on each\.',
     '不能。你必须完成所有必需作业，并且每项至少获得 70% 的分数。'),

    # Deadlines
    (r'这门课程 does not have individual deadlines for作业。 You are 欢迎 to work on and 提交 在 your own pace\.',
     '这门课程没有针对各项作业的单独截止日期。欢迎你按照自己的节奏学习和提交。'),
    (r'这门课程 does not have individual deadlines for作业。 You are 欢迎 to work on and 提交 at your own pace\.',
     '这门课程没有针对各项作业的单独截止日期。欢迎你按照自己的节奏学习和提交。'),
    (r'The overall 截止时间 的 课程 is currently 结束-of-day ',
     '该课程的总截止时间目前为 '),
    (r'The overall 截止时间 的 课程 is currently end-of-day ',
     '该课程的总截止时间目前为 '),

    # If all required work
    (r'If all 必需 work is turned in before the above时间 and ultimately receives a satisfactory grade \(whether before or shortly after that 截止时间\), you will be considered to have completed 这门课程\.',
     '如果在上述时间之前提交了所有必需作业并最终获得满意的分数（无论是在截止时间之前还是之后不久），你将被视为已完成该课程。'),

    # At present deadline
    (r'在 present, the 截止时间 for 这门课程 is 312026年12月\. 一份 few months before that final 截止时间, the team re-evaluates 这门课程&#39;s continued relevance, and 五月 decide to extend the 截止时间 by a further six or twelve months\. For now though, best to assume the final 截止时间 is 312026年12月\.',
     '目前，这门课程的截止时间是 2026 年 12 月 31 日。在最终截止时间前几个月，团队会重新评估这门课程的持续相关性，并可能决定将截止时间延长六个月或十二个月。不过现在，最好假设最终截止时间是 2026 年 12 月 31 日。'),
    (r'At present, the 截止时间 for 这门课程 is 312026年12月\. 一份 few months before that final 截止时间, the team re-evaluates 这门课程&#39;s continued relevance, and 五月 decide to extend the 截止时间 by a further six or twelve months\. For now though, best to assume the final 截止时间 is 312026年12月\.',
     '目前，这门课程的截止时间是 2026 年 12 月 31 日。在最终截止时间前几个月，团队会重新评估这门课程的持续相关性，并可能决定将截止时间延长六个月或十二个月。不过现在，最好假设最终截止时间是 2026 年 12 月 31 日。'),
    (r'At present, the 截止时间 for 这门课程 is 312026年12月\. 一份 few months before that final 截止时间, the team re-evaluates 这门课程\xe2\x80\x99s continued relevance, and 五月 decide to extend the 截止时间 by a further six or twelve months\. For now though, best to assume the final 截止时间 is 312026年12月\.',
     '目前，这门课程的截止时间是 2026 年 12 月 31 日。在最终截止时间前几个月，团队会重新评估这门课程的持续相关性，并可能决定将截止时间延长六个月或十二个月。不过现在，最好假设最终截止时间是 2026 年 12 月 31 日。'),
    (r'At present, the 截止时间 for 一门课程 is 30 六月 2024\. 一份 few months before that final 截止时间, the team re-evaluates 一门课程&#39;s continued relevance, and 五月 decide to extend the 截止时间 by a further six or twelve months\. For now though, best to assume the final 截止时间 is 30 六月 2024\.',
     '目前，这门课程的截止时间是 2024 年 6 月 30 日。在最终截止时间前几个月，团队会重新评估这门课程的持续相关性，并可能决定将截止时间延长六个月或十二个月。不过现在，最好假设最终截止时间是 2024 年 6 月 30 日。'),

    # Should course be extended
    (r'Should 一门课程 be extended, so long as you have submitted one or 更多作业 in 2026, your progress will carry forward into the 下一页 term \(likely 2027\)\.',
     '如果这门课程被延长，只要你在 2026 年提交了一份或多份作业，你的进度将延续到下一学期（可能是 2027 年）。'),
    (r'Should 这门课程 be extended, so long as you have submitted one or 更多作业 in 2026, your progress will carry forward into the 下一页 term \(likely 2027\)\.',
     '如果这门课程被延长，只要你在 2026 年提交了一份或多份作业，你的进度将延续到下一学期（可能是 2027 年）。'),
    (r'Should 这门课程 be extended, so long as you have submitted one or 更多作业 in 2024, your progress will carry forward into the 下一页 term \(likely 2025\)\.',
     '如果这门课程被延长，只要你在 2024 年提交了一份或多份作业，你的进度将延续到下一学期（可能是 2025 年）。'),

    # We cannot exceptions
    (r'We cannot make any exceptions to the deadlines for any reason\. We therefore encourage you, if possible, to avoid trying to rush to complete 这门课程 在 the 截止时间 and instead spread your studies out over a reasonable stretch of时间。',
     '无论出于何种原因，我们都不能对截止日期做任何例外处理。因此，我们鼓励你尽可能避免在截止时间前匆忙完成这门课程，而是将你的学习分散在一段合理的时间范围内。'),
    (r'We cannot make any exceptions to the deadlines for any reason\. We therefore encourage you, if possible, to avoid trying to rush to complete 一门课程 at the 截止时间 and instead spread your studies out over a reasonable stretch of时间。',
     '无论出于何种原因，我们都不能对截止日期做任何例外处理。因此，我们鼓励你尽可能避免在截止时间前匆忙完成这门课程，而是将你的学习分散在一段合理的时间范围内。'),
    (r'We cannot make any exceptions to the deadlines for any reason\. We therefore encourage you, if possible, to avoid trying to rush to complete 这门课程 at the 截止时间 and instead spread your studies out over a reasonable stretch of时间。',
     '无论出于何种原因，我们都不能对截止日期做任何例外处理。因此，我们鼓励你尽可能避免在截止时间前匆忙完成这门课程，而是将你的学习分散在一段合理的时间范围内。'),

    # Carry forward
    (r'If 一门课程 is extended: Yes\. However, work submitted prior to  2026  will not carry forward\.',
     '如果这门课程被延长：是的。但是，2026 年之前提交的作业将不会延续。'),
    (r'If 这门课程 is extended: Yes\. However, work submitted prior to  2026  will not carry forward\.',
     '如果这门课程被延长：是的。但是，2026 年之前提交的作业将不会延续。'),

    # Free certificate link
    (r'Once 你已完成 一门课程 and met all of the requirements \(per the above\), you&#39;ll see a link on your ',
     '一旦你已完成这门课程并满足所有要求（如上所述），你将在 '),
    (r'Once 你已完成 这门课程 and met all of the requirements \(per the above\), you&#39;ll see a link on your ',
     '一旦你已完成这门课程并满足所有要求（如上所述），你将在 '),
    (r'Once 你已完成 一门课程 and met all of the requirements \(per the above\), you\xe2\x80\x99ll see a link on your ',
     '一旦你已完成这门课程并满足所有要求（如上所述），你将在 '),
    (r'Once 你已完成 这门课程 and met all of the requirements \(per the above\), you\xe2\x80\x99ll see a link on your ',
     '一旦你已完成这门课程并满足所有要求（如上所述），你将在 '),
    (r'page allowing you to request a free CS50证书， much like the one ',
     ' 页面上看到一个链接，允许你申请免费的 CS50 证书，就像 '),
    (r'\. This link will be available within approximately four时间 after you receive your score for your last必需作业 and your progress bar in your ',
     ' 所示。该链接将在你收到最后一份必需作业的分数后大约四小时内可用，并且你 '),
    (r'\. This link will be available within approximately four hours after you receive your score for your last必需作业 and your progress bar in your ',
     ' 所示。该链接将在你收到最后一份必需作业的分数后大约四小时内可用，并且你 '),
    (r'indicates 课程 completion\. Once this link appears, you should then proceed to log in using your <strong>GitHub</strong> credentials\. If you have trouble accessing it, try logging out of GitHub and 返回 in, then revisit the link to 下载 y我们的证书\.  请务必 下载 your free证书 <strong>before</strong> the 截止时间\.',
     ' 中的进度条会显示课程完成。一旦该链接出现，你应该继续使用你的 <strong>GitHub</strong> 凭据登录。如果你在访问时遇到问题，请尝试退出 GitHub 并重新登录，然后重新访问该链接以下载我们的证书。请务必<strong>在</strong>截止时间<strong>之前</strong>下载你的免费证书。'),

    # Verified certificate every 3 weeks
    (r'Every three 周次, CS50&#39;s 工作人员 provides edX with a list of students who have satisfied 这门课程&#39;s requirements \(by receiving scores of 在 least 70% on each of all of the 必需 问题\)\. Typically, within a周thereafter, edX then generates students&#39; 认证证书s \(for students who have active verification\), 在 which point they should appear automatically on edX&#39;s ',
     '每三周，CS50 的工作人员向 edX 提供一份满足课程要求的学生名单（在所有必需问题上至少获得 70% 的分数）。通常，在此之后的一周内，edX 会生成学生的认证证书（针对已经过验证的学生），届时证书应该会自动出现在 edX 的 '),
    (r'Every three 周次, CS50&#39;s 工作人员 provides edX with a list of students who have satisfied 一门课程&#39;s requirements \(by receiving scores of 在 least 70% on each of all of the 必需 问题\)\. Typically, within a周thereafter, edX then generates students&#39; 认证证书s \(for students who have active verification\), 在 which point they should appear automatically on edX&#39;s ',
     '每三周，CS50 的工作人员向 edX 提供一份满足课程要求的学生名单（在所有必需问题上至少获得 70% 的分数）。通常，在此之后的一周内，edX 会生成学生的认证证书（针对已经过验证的学生），届时证书应该会自动出现在 edX 的 '),
    (r'Every three 周次, CS50&#39;s 工作人员 provides edX with a list of students who have satisfied 一门课程&#39;s requirements \(by receiving scores of at least 70% on each of all of the 必需 problems\)\. Typically, within a周thereafter, edX then generates students&#39; 认证证书s \(for students who have active verification\), at which point they should appear automatically on edX&#39;s ',
     '每三周，CS50 的工作人员向 edX 提供一份满足课程要求的学生名单（在所有必需问题上至少获得 70% 的分数）。通常，在此之后的一周内，edX 会生成学生的认证证书（针对已经过验证的学生），届时证书应该会自动出现在 edX 的 '),
    (r'Every three 周次, CS50&#39;s 工作人员 provides edX with a list of students who have satisfied 一门课程&#39;s requirements \(by receiving scores of at least 70% on each of all of the 必需 problems\)\. Typically, within a周thereafter, edX then generates students&#39; 认证证书s \(for students who have active verification\), at which point they should appear automatically on edX&#39;s ',
     '每三周，CS50 的工作人员向 edX 提供一份满足课程要求的学生名单（在所有必需问题上至少获得 70% 的分数）。通常，在此之后的一周内，edX 会生成学生的认证证书（针对已经过验证的学生），届时证书应该会自动出现在 edX 的 '),
    (r'Every three 周次, CS50\xe2\x80\x99s 工作人员 provides edX with a list of students who have satisfied 一门课程\xe2\x80\x99s requirements \(by receiving scores of at least 70% on each of all of the 必需 problems\)\. Typically, within a周thereafter, edX then generates students\xe2\x80\x99 认证证书s \(for students who have active verification\), at which point they should appear automatically on edX\xe2\x80\x99s ',
     '每三周，CS50 的工作人员向 edX 提供一份满足课程要求的学生名单（在所有必需问题上至少获得 70% 的分数）。通常，在此之后的一周内，edX 会生成学生的认证证书（针对已经过验证的学生），届时证书应该会自动出现在 edX 的 '),
    (r'Every three 周次, CS50\xe2\x80\x99s 工作人员 provides edX with a list of students who have satisfied 一门课程\xe2\x80\x99s requirements \(by receiving scores of 在 least 70% on each of all of the 必需 问题\)\. Typically, within a周thereafter, edX then generates students\xe2\x80\x99 认证证书s \(for students who have active verification\), 在 which point they should appear automatically on edX\xe2\x80\x99s ',
     '每三周，CS50 的工作人员向 edX 提供一份满足课程要求的学生名单（在所有必需问题上至少获得 70% 的分数）。通常，在此之后的一周内，edX 会生成学生的认证证书（针对已经过验证的学生），届时证书应该会自动出现在 edX 的 '),
    (r'\. Thus, after you have satisfied 一门课程&#39;s requirements, it can take up to 30 days for your 认证证书 to be generated by edX\.请注意， edX will <strong>not</strong> notify you, so be sure to check your dashboard periodically\.',
     '。因此，在满足课程要求后，edX 生成你的认证证书最多可能需要 30 天。请注意，edX <strong>不会</strong>通知你，所以一定要定期检查你的仪表板。'),
    (r'\. Thus, after you have satisfied 一门课程\xe2\x80\x99s requirements, it can take up to 30 days for your 认证证书 to be generated by edX\.请注意， edX will <strong>not</strong> notify you, so be sure to check your dashboard periodically\.',
     '。因此，在满足课程要求后，edX 生成你的认证证书最多可能需要 30 天。请注意，edX <strong>不会</strong>通知你，所以一定要定期检查你的仪表板。'),
    (r'\. Thus, after you have satisfied 这门课程&#39;s requirements, it can take up to 30 days for your 认证证书 to be generated by edX\.',
     '。因此，在满足课程要求后，edX 生成你的认证证书最多可能需要 30 天。'),

    # More than 30 days
    (r'If it has been <strong>更多 than 30 days</strong> since you met all requirements and you have still not received y我们的证书 despite holding an active Verification that whole时间，邮件certificates@cs50\.harvard\.edu with your details\. Please do not邮件sooner; we cannot accept requests for expedited processing of 认证证书s\.',
     '如果你满足所有要求已超过 <strong>30 天</strong>，并且尽管在这整个期间内持有有效验证仍然没有收到我们的证书，请将你的详细信息发送邮件至 certificates@cs50.harvard.edu。请不要提前发邮件；我们不接受加急处理认证证书的请求。'),

    # Why did I not get verified
    (r'First, recall that your verified edX证书 will be issued by edX up to 30 days after three criteria are met: \(a\) Your ',
     '首先，请记住，你的 edX 认证证书将在满足三个条件后最多 30 天内由 edX 发放：(a) 你的 '),
    (r'shows that 你已完成 all of 必需作业 with 在 least a 70% score or higher on each, \(b\) you have made payment to edX and completed their verification process, resulting in a verified badge on your edX dashboard, and \(C\) you have linked your ',
     ' 显示你已完成所有必需作业，且每项至少获得 70% 或更高的分数，(b) 你已向 edX 付款并完成了他们的验证流程，在你的 edX 仪表板上显示已验证徽章，(c) 你已将你的 '),
    (r'shows that 你已完成 all of 必需作业 with at least a 70% score or higher on each, \(b\) you have made payment to edX and completed their verification process, resulting in a verified badge on your edX dashboard, and \(c\) you have linked your ',
     ' 显示你已完成所有必需作业，且每项至少获得 70% 或更高的分数，(b) 你已向 edX 付款并完成了他们的验证流程，在你的 edX 仪表板上显示已验证徽章，(c) 你已将你的 '),
    (r'to your edX account\. Thus, you should ensure that 30 days have passed since all three of these above criteria have occurred\.',
     ' 关联到你的 edX 账户。因此，你应该确保自上述三个条件都满足以来已经过去 30 天。'),

    # Second we can only inform
    (r'Second, we can only inform edX of your passing status if you have linked your ',
     '其次，只有当你已将 '),
    (r'to edX\. Visit your ',
     ' 关联到 edX，我们才能告知 edX 你的通过状态。访问你的 '),
    (r'and ensure that no gold bar appears 在 the top of the page stating that you must link your ',
     ' 并确保页面顶部没有出现金色栏，提示你必须将 '),
    (r'and ensure that no gold bar appears at the top of the page stating that you must link your ',
     ' 并确保页面顶部没有出现金色栏，提示你必须将 '),
    (r'to your edX account\. If you see such a gold bar, complete the linking process\. Then, re-阅读 the above关于 timing in which you might expect to receive y我们的证书\.',
     ' 关联到你的 edX 账户。如果你看到这样的金色栏，请完成关联流程。然后，重新阅读上述关于你可能期望收到我们证书的时间安排。'),

    # Finally if not received
    (r'Finally, if you still have not received your edX证书， best to ensure that the edX username that appears 在 the top of your ',
     '最后，如果你仍然没有收到你的 edX 证书，最好确保 '),
    (r'Finally, if you still have not received your edX证书， best to ensure that the edX username that appears at the top of your ',
     '最后，如果你仍然没有收到你的 edX 证书，最好确保 '),
    (r'is the same edX username that appears 在 the top of your ',
     ' 顶部显示的 edX 用户名与你的 '),
    (r'is the same edX username that appears at the top of your ',
     ' 顶部显示的 edX 用户名与你的 '),
    (r'\. If there is a mismatch between these usernames, you will need to inform edX that they need to transfer your verification payment to the correct username, as we have likely already informed them that the edX username that appears on top of your ',
     ' 顶部显示的 edX 用户名相同。如果这些用户名之间存在不匹配，你需要通知 edX 他们需要将你的验证付款转移到正确的用户名，因为我们可能已经通知他们，你的 '),
    (r'has passed 一门课程\.',
     ' 顶部显示的 edX 用户名已通过这门课程。'),
    (r'has passed 这门课程\.',
     ' 顶部显示的 edX 用户名已通过这门课程。'),
    (r'; and</li>',
     '；以及</li>'),

    # gradebook access per course
    (r'\. If you&#39;ve never visited that link before, you&#39;ll need to click the link to "enroll," which really just enables your ',
     '。如果你以前从未访问过该链接，你需要点击\xe2\x80\x9c注册\xe2\x80\x9d链接，这只是启用你 '),
    (r'\. If you\xe2\x80\x99ve never visited that link before, you\xe2\x80\x99ll need to click the link to "enroll," which really just enables your ',
     '。如果你以前从未访问过该链接，你需要点击\xe2\x80\x9c注册\xe2\x80\x9d链接，这只是启用你 '),
    (r'access! Registration with edX, whether for a free or 认证证书, is 必需\.',
     ' 的访问权限！无论选择免费证书还是认证证书，都必须在 edX 注册。'),
]

# Also add per-course name substitutions
course_names = {
    '网络安全': ['网络安全', 'cs50/cs50-zh/cybersecurity'],
    'Games': ['Games', 'cs50/cs50-zh/games'],
    '2D': ['2D', 'cs50/cs50-zh/games'],
    'Web': ['Web', 'cs50/cs50-zh/web'],
    'Lawyers': ['Lawyers', 'cs50/cs50-zh/law'],
    'Business': ['Business', 'cs50/cs50-zh/business'],
}

files = [
    'D:/File/cs-archive/cs50/cs50-zh/cybersecurity/faqs/index.html',
    'D:/File/cs-archive/cs50/cs50-zh/games/faqs/index.html',
    'D:/File/cs-archive/cs50/cs50-zh/web/faqs/index.html',
    'D:/File/cs-archive/cs50/cs50-zh/technology/faqs/index.html',
    'D:/File/cs-archive/cs50/cs50-zh/law/faqs/index.html',
    'D:/File/cs-archive/cs50/cs50-zh/business/faqs/index.html',
]

for filepath in files:
    print(f'Processing: {filepath}')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    # Find main content boundaries
    main_start = content.find('<main class="col-lg">')
    main_end = content.find('</main>')
    if main_start == -1 or main_end == -1:
        print(f'  SKIP: no main content found')
        continue

    before = content[:main_start]
    main_content = content[main_start:main_end]
    after = content[main_end:]

    # Apply translations only to main content
    for pat, repl in translations:
        prev = len(main_content)
        main_content = re.sub(pat, repl, main_content)
        if len(main_content) != prev:
            pass  # print(f'  Applied: {pat[:50]}...')

    # Reconstruct
    content = before + main_content + after

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'  UPDATED')
    else:
        print(f'  No changes')

print('\nDone!')
