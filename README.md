# CS Archive

精选计算机科学公开课程的离线归档，支持中英双语浏览。

## 课程列表

| 课程 | 学校 | 主题 | 内容 |
|------|------|------|------|
| [CS50x](courses/cs50x.html) | Harvard | 计算机科学导论 | 讲座、问题集、最终项目 |
| [CS61A](courses/cs61a.html) | UC Berkeley | 程序构造与解释 | 讲座、实验、项目、考试 |
| [CS61B](courses/cs61b.html) | UC Berkeley | 数据结构 | 讲座、实验、项目 |
| [CS61C](courses/cs61c.html) | UC Berkeley | 计算机体系结构 | 讲座、实验、项目 |
| [CS144](courses/cs144.html) | Stanford | 计算机网络 | 讲座、实验 |
| [EECS70](courses/eecs70.html) | UC Berkeley | 离散数学与概率论 | 笔记、习题、考试 |
| [15-445](courses/cmu-15445.html) | CMU | 数据库系统 | 讲座、BusTub 实验 |
| [6.824](courses/mit-6824.html) | MIT | 分布式系统 | 讲座、Raft 实验 |
| [6.S081](courses/mit-6s081.html) | MIT | 操作系统工程 | 讲座、xv6 实验 |

## 目录结构

```
cs-archive/
├── courses/        # 课程导航页（中英双语入口）
├── cs50/           # Harvard CS50x (2024/2025, en/zh)
├── cs61a/          # UC Berkeley CS61A (su26, en/zh)
├── cs61b/          # UC Berkeley CS61B (sp24, en/zh)
├── cs61c/          # UC Berkeley CS61C (sp26, en/zh)
├── cs144/          # Stanford CS144 (en/zh)
├── cmu15-445/      # CMU 15-445/645 (fa24/fa25, en/zh)
├── 6.824/          # MIT 6.5840 (en/zh)
├── 6.s081/         # MIT 6.S081/6.1810 (fa20, en/zh)
├── eecs/           # UC Berkeley EECS70 (en/zh)
├── assets/         # 全局 CSS 和字体
└── cdnjs.cloudflare.com/  # 本地 CDN 镜像
```

每个课程目录包含 `*-en/`（英文原版）和 `*-zh/`（中文翻译）子目录。中文版本包含完整翻译的导航、标题和内容。

## 本地使用

克隆后直接在浏览器中打开任意 `index.html` 即可浏览。所有 CSS、JS 和字体文件均已本地化，无需网络连接。

```bash
git clone https://github.com/<user>/cs-archive.git
cd cs-archive
# 用浏览器打开 index.html 或 courses/ 下的任意页面
```

## 维护说明

- 课程归档使用静态 HTML，无需构建步骤
- CDN 依赖已下载到项目根目录的镜像路径中
- 中文翻译位于各课程的 `*-zh/` 目录
- `.gitignore` 已配置忽略系统文件和临时脚本

## 许可

本项目仅用于课程资料整理与自学导航。各课程内容版权归原学校所有。
