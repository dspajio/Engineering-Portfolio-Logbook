---
title: '手持装甲板检测模块'
titleEn: 'Handheld Armor-Plate Detection Module'
level: 'practice'
category: 'Electronics'
featured: true
status: 'complete'
date: '2026-04-01'
period: '2026.04 – 2026.05'
role: '机械 / PCB / 嵌入式'
summary: '基于开源方案二次开发：做 PCB 改进、结构外壳适配官方支架、可多模块组合计数，自己焊接并排查了 MOSFET 电路问题。'
cover: '/img/projects/handheld-armor-detection/cover.png'
coverCaption: 'SolidWorks 建模：结构外壳适配官方支架，支持多模块组合'
gallery:
  - src: '/img/projects/handheld-armor-detection/schematic.png'
    caption: '嘉立创原理图（基于开源方案修改的 PCB）'
  - src: '/img/projects/handheld-armor-detection/bom.png'
    caption: 'BOM 表：物料与元器件清单'
  - src: '/img/projects/handheld-armor-detection/code.png'
    caption: '嵌入式代码仓库（开源方案二次开发）· <a href="https://github.com/dspajio/ArmorCodeV2" target="_blank" rel="noopener">github.com/dspajio/ArmorCodeV2</a>'
videos:
  - type: file
    src: '/videos/handheld-armor-demo.mp4'
    caption: '击打检测 / 多模块组合计数演示'
    note: >
      这是基于驻极体麦克风的击打检测模块：撞击产生的空气压力波经 GMI6050P 感知，由 STM32F103 以 8kHz 采样、500Hz
      IIR 高通滤波后做阈值判定，命中即触发灯光闪烁并输出 50ms GPIO 脉冲。电源用 Buck-Boost 适配锂电池，4 个按键
      可一键切换灯色。整个模块兼容官方装甲板支架，多个模块并联后可测不同角度的命中分布，专为视觉自瞄算法的可重复靶标测试设计。
results:
  - '完成击打检测、计数与整机调试。'
  - '定位并修复 MOSFET 相关问题（排查 → 替换 → 电路修正）。'
  - '模块可兼容官方支架，支持多个模块组合计数。'
tags:
  - PCB
  - 嵌入式
  - 焊接
  - 3D Printing
  - 二次开发
---

> 实话：这是**基于开源方案二次开发**，不是从零独立设计全部电路。

## 背景 / 要解决的问题

需要一个能检测装甲板被击打并计数的模块，在训练/测试场景手持使用，最好能装到官方支架上、多个模块协同计数。

## 我的工作

- 从开源方案出发；
- 修改 PCB；
- 修改 3D 打印结构外壳，让模块**兼容官方支架**、支持**多个模块组合计数**；
- 自己焊接 PCB；
- 调试时发现 **MOSFET 相关电路问题**，排查后完成 MOSFET 替换与电路修正；
- 修改已有代码；
- 完成击打检测、计数和整机调试。

## 核心收获

- 一个"机械 + PCB + 嵌入式 + 实物调试"的完整机电小项目，把几条技能线合起来走了一遍；
- MOSFET 电路问题是真实且典型的：**器件坏 → 波形不对 → 换件 → 电路层面修正**，这类排查经验对后续很有价值；
- 二次开发的边界是清楚的：在开源基础上做适配，而不是假装从零写。