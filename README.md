# 邓桐 · 个人工程档案

机械工程本科（天津理工大学 · 2027 届）的个人工程档案网站。

- **定位**：个人工程档案 + 精选作品集（不是传统简历页、也不是程序员炫技主页）
- **技术栈**：Astro · 静态生成 · Markdown 内容驱动
- **部署**：Cloudflare Pages（静态，免费，大陆可访问）

---

## 快速开始

```bash
npm install      # 安装依赖
npm run dev      # 本地开发  http://localhost:4321
npm run build    # 生成静态站点到 dist/
npm run preview  # 预览构建产物
```

---

## 目录结构

```
src/
  content/config.ts      ← 内容 schema（frontmatter 校验）
  content/projects/      ← ★ 所有项目，一个 .md 文件 = 一个项目
  data/
    profile.ts           ← 个人信息 / 技能 / 联系方式（改这里全站生效）
    timeline.ts          ← 成长时间线数据
    site.ts              ← 分类、标签、项目等级的中英文对照
  layouts/BaseLayout.astro
  components/            ← 页头 / 页脚 / 项目卡片 / 图片占位
  pages/                 ← index / featured / archive / timeline / about / projects/[id]
  styles/global.css      ← 全部视觉样式（浅色工程风）
  lib/slug.ts
public/
  img/projects/          ← ★ 项目图片放这里
  favicon.svg
```

---

## 如何添加一个项目（不需要碰代码）

1. 在 `src/content/projects/` 下新建 `你的项目名.md`（或复制任意现有文件改名）；
2. 填写 frontmatter（字段见下）；
3. 把项目图片放到 `public/img/projects/<slug>/`；
4. 在 frontmatter 的 `cover` / `gallery` 填入图片路径（如 `/img/projects/cuadc/01.jpg`）；
5. 正文用 Markdown 写「背景 → 我的工作 → 核心决策 → 测试 → 结果」，克制、写实，不要虚构数字。

> 新建后无需改任何组件，自动进入 Archive；若要上首页「精选」，设 `featured: true`。

### frontmatter 字段

```yaml
---
title:        # 中文标题
titleEn:      # 英文副标（可选）
level:        # featured | core | project | practice | learning
category:     # Mechanical Robotics Mechatronics Aviation Electronics PersonalPractice Learning
featured:     # true 则进入首页精选区
status:       # complete | ongoing | award | stopped
date:         # 排序用开始日期，如 2025-04-01
period:       # 展示时间段，如 "2025.04 – 2026.03"
role:         # 你的角色，如 "副队长 · 步兵负责人"
summary:      # 一句话简介（卡片展示，务必克制写实）
cover:        # 主视觉图路径；留空则显示占位框
coverCaption: # 主图说明（可选）
gallery:      # 图片列表：[{ src, caption }]
results:      # 项目成果列表（不虚构数字）
tags:         # 标签，如 SolidWorks, ANSYS, STM32...
---
正文…
```

### 图片放置规则

- 目录：`public/img/projects/<slug>/`，例如 CUADC → `public/img/projects/cuadc-2026-wing-loads/`
- 优先用：实物照片 > CAD 渲染/截图 > ANSYS 结果 > PCB 图 > 比赛现场 > 奖状
- **奖状不放在主页/卡片，只作为详情页面成果证明展示**
- 不虚构截图；暂无图片就留空，页面自动显示"待补充素材"占位框

---

## 视频（演示视频区）

运动 / 装配 / 运动学 / 实测 / 联调这类"动了才看得出"的成果，纯图片展示不出来，请用视频。

视频放在**项目详情页的「演示视频」区**（位于图库下方）。

frontmatter 里加 `videos` 数组即可（可多个）：

```yaml
videos:
  - type: bilibili          # 方式一：嵌入 B 站视频（推荐大视频）
    bvid: BV1xxxxxxxxx      #   BV 号（B 站视频链接里的 BV 开头那段）
    page: 1                 #   分P可选，默认 1
    caption: 整车运动测试     #   说明文字
  - type: file              # 方式二：直传 mp4（适合小演示 <10MB）
    src: /videos/demo.mp4   #   文件放 public/videos/ 里
    caption: 电机联调演示
  - type: placeholder       # 方式三：占位（先占坑，以后再传）
    caption: 击打检测演示
```

### 怎么选方案

| 视频 | 用哪种 | 原因 |
|---|---|---|
| 大视频（>10MB，如比赛现场、整车测试） | **B 站嵌入** | 加载交给 B 站，网站保持轻快；HR 微信里也能顺畅播放 |
| 小演示（<10MB，如击打检测、电机调试） | 直传 mp4 | 完全可控，自主修改 |
| 还没录 | placeholder | 先占位，不显眼 |

> ⚠️ Cloudflare Pages 免费档**单文件上限 25MB**，直传的 mp4 一定要压到 25MB 以内（一般 720p、H.264 压缩后演示视频都远小于此）。
>
> 💡 **隐私提示**：嵌 B 站视频时，浏览者只看到"某个 UP 主的视频"，看不到你的账号资料，但视频会出现在你的 B 站主页动态/公开列表里。如果不想让认识的人认出你，建议**用一个小号上传**（或个人号开"仅个人可见"再设法临时公开嵌入——但注意：嵌入播放需要视频本身公开）。国内另一个常见选择是**上传到抖音/优酷/腾讯视频**，但这三家嵌入限制较多（抖音不支持 iframe 嵌入、优酷/腾讯有贴片广告），最顺畅的还是 B 站内嵌。无需担心版权问题——你的视频是你的原创。

---

## 如何修改个人信息 / 联系方式

全部在 [`src/data/profile.ts`](src/data/profile.ts)：

- `name` / `nameEn` / `title` / `tagline` / `intro`
- `skillGroups`（技能分组的增删）
- `contact.email` / `contact.github`

> ⚠️ 公开网页不建议直接放手机号/微信号（会被爬虫抓取）。微信建议只在简历 PDF 或沟通中提供。

---

## 部署到 Cloudflare Pages（免费，大陆可访问）

**前提**：把项目推到一个 Git 仓库（GitHub 即可）。

```bash
git init
git add -A
git commit -m "init personal engineering portfolio"
```

然后在 Cloudflare 控制台：

1. **Workers & Pages → Create → Pages → Connect to Git**，授权并选择本仓库；
2. **构建配置**：
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Framework preset: 选择 **Astro**（或留空，Node 版本 ≥ 18）
3. 点击 **Save and Deploy**。首次部署约 1 分钟内完成，随后获得 `https://xxx.pages.dev` 地址；
4. **每次推送即自动重新部署**，无需手动操作；
5. （可选，建议）在 Cloudflare 买/绑定一个短域名，如 `dengt.example`，然后在 Pages 的 Custom domains 里绑定；微信内置浏览器打开也没问题。

**上线后把网站地址放到**：
- 简历顶部/教育经历处
- 牛客/应届生求职等平台的个人主页链接
- 投递邮件签名

---

## 内容写作原则（写新项目时遵守）

- 不夸大：不把比赛成绩等同于技术水平
- 不冒充"从零开发"：使用开源方案/既有框架要如实写"基于 XXX 二次开发/优化"
- 不虚构数字：载荷、应力、速度、奖金等一律以实测/证书为准
- 结果不好的项目也可以展示：诚实写"发现了什么问题、学到了什么"
- 语言克制：不要"本人认真负责、热爱机械"这类空话，用事实说话

---

## License

内容与图片版权归作者所有。代码可自由参考学习。