---
title: 'A1 Mini 第三方改装'
titleEn: 'A1 Mini Third-Party Mods'
level: 'practice'
category: 'PersonalPractice'
featured: false
status: 'complete'
date: '2024-06-01'
period: '2024 至今（断续）'
role: '个人 3D 打印设备改装与硬件实践'
summary: '按第三方方案复刻 BMCU（在 A1 Mini 上实现 AMS 的多色功能，成本更低）；第三方自动换盘出问题，自己调试机械把手；过程中还把打印机弄出过毛病，自己排查修好。'
cover: '/img/projects/a1-mini-mod/final.jpg'
coverCaption: '维修后功能正常：自动换盘 + BMCU 第三方多色打印'
gallery:
  - src: '/img/projects/a1-mini-mod/bmcu-solder.jpg'
    caption: '自动换盘 + BMCU：正在焊接'
  - src: '/img/projects/a1-mini-mod/bmcu-mech.jpg'
    caption: 'BMCU 机械结构（复刻第三方方案）'
  - src: '/img/projects/a1-mini-mod/bmcu-test.jpg'
    caption: 'BMCU 实机测试'
  - src: '/img/projects/a1-mini-mod/repair-1.jpg'
    caption: '调试中把打印机弄出问题：排查维修图 1'
  - src: '/img/projects/a1-mini-mod/repair-2.jpg'
    caption: '排查维修图 2'
videos:
  - type: file
    src: '/videos/a1mini-ams-test.mp4'
    caption: '自动换盘机械测试（有 bug，后来修好了）'
    note: >
      第三方开源的自动换盘方案，买的是成品，但实际用的时候机械上有问题，自己重新调试机械手感。
      视频里这段是还没完全修好的测试记录 —— bug 是真实存在的，后面逐项排查机械后修复。
results:
  - '复刻 BMCU：在 A1 Mini 上实现 AMS 的多色进料功能，成本比原厂 AMS 低。'
  - '调试第三方自动换盘方案，定位并解决机械问题。'
  - '过程中把打印机弄出问题，自己逐项排查后修复。'
  - '最终自动换盘 + BMCU 多色打印功能正常。'
tags:
  - 3D Printing
  - 硬件改装
  - 焊接
  - 故障排查
  - Personal Practice
---

> 定位：**轻量级 Engineering Practice 条目**，个人兴趣驱动的硬件折腾。涉及第三方硬件复刻，下面都如实标注，不冒充"从零开发"。

## 背景

对 3D 打印设备本身有兴趣 —— 不只是"用它打印"，而是拆开来改装它。

## 做了什么

- **复刻 BMCU**（第三方方案）：它的实际功能是**替代 AMS**（Bambu 的多色进料系统），但成本低很多。按第三方文档一步一步复刻，自己焊接、处理接线与配置；实机测试可用。
- **自动换盘**：用的第三方开源方案，买的是成品，但到手后机械上存在一些问题，自己重新调试机械、逐项排查。
- **踩坑与修复**：改装过程中把打印机弄出了问题，自己排查原因并修好 —— 视频里那段自动换盘测试就是还没修好时的 bug 记录，后面逐步定位到机械问题解决掉。

## 排查过的问题（如实记录）

- 改装过程把打印机弄出问题，不是直接顺利完成的；
- 自动换盘机械测试出现过 bug，视频是当时未修复的现场记录，后来自己调试机械修好；
- BMCU 是按第三方方案复刻，接线与固件会踩兼容性的坑。

## 沉淀

- 理解了 3D 打印机作为机电设备的整体架构 —— 设备本身也是被设计出来、可以拆解的；
- 焊接与硬件故障排查的实践；
- 学会了「按第三方方案复刻 + 出了问题自己排查修复」的完整闭环。