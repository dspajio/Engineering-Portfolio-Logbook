---
title: 'RoboMaster 2026 机甲大师高校联盟赛'
titleEn: 'RoboMaster 2026 University League'
level: 'featured'
category: 'Robotics'
featured: true
status: 'award'
date: '2025-04-01'
period: '2025.04 – 2026.03'
role: '副队长 · 步兵负责人'
summary: '作为副队长与步兵负责人，负责新赛季步兵机械方案（含全向轮底盘重新设计）、STM32 电控开发与三台机器人系统联调。'
cover: '/img/projects/rm2026-infantry/cover.png'
coverCaption: '新赛季全向轮步兵——因经费原因未制造，处于半成品状态，各模块以打印件形式组装测试'
gallery:
  - src: '/img/projects/rm2026-infantry/team-docs.png'
    caption: '为团队写技术文档、整理资料与报销、统计消耗资源，也有步兵建模和代码'
  - src: '/img/projects/rm2026-infantry/3v3-award.jpg'
    caption: '3v3 对抗赛三等奖'
  - src: '/img/projects/rm2026-infantry/infantry-award.jpg'
    caption: '步兵对抗赛三等奖'
  - src: '/img/projects/rm2026-infantry/engineering-award.jpg'
    caption: '工程挑战赛优秀奖'
videos:
  - type: file
    src: '/videos/rm2026-3car-test.mp4'
    caption: '熬夜联调三车通过完整形态评测'
  - type: file
    src: '/videos/rm2026-vision-aim.mp4'
    caption: '熬夜联调和视觉对接，调通自瞄'
  - type: file
    src: '/videos/rm2026-engineer-can.mp4'
    caption: '熬夜联调工程完整形态评测——因 CAN 线硬件问题机械臂动不了，帮忙调了工程的控制，最后定位到是 CAN 线问题'
results:
  - '3v3 对抗赛三等奖'
  - '步兵对抗赛三等奖'
  - '工程挑战赛优秀奖'
tags:
  - RoboMaster
  - SolidWorks
  - STM32
  - CMake
  - 嵌入式
  - 系统联调
---

> 真实参与方式：**在既有代码与前辈基础上修改、重构、调试、集成**，不是从零独立研发整个机器人。

## 背景 / 要解决的问题

2026 赛季，我需要同时扛"机械方案"和"电控系统"两条线，并参与三台机器人的赛前集中联调。

- 机械面：新赛季规则变化带来的空间与结构限制，需要重新设计步兵底盘；
- 电控面：既有 STM32 代码框架功能已不能满足新规则与稳定性要求，要把云台抖动、工程可维护性这类老问题修掉，还要接入两套视觉方案。

## 机械相关（步兵负责人）

- 负责新赛季步兵机器人**机械方案设计**；
- 根据比赛空间约束和既有车型 **重新设计全向轮底盘**；
- 参与云台、供弹结构优化；
- 曾考虑平行四边形悬挂、自适应悬挂等结构方案，参考开源结构并修改；
- 决策时统筹考虑结构复用、空间、减重、供弹与云台惯量等因素。

## 电控 / 系统相关

- 负责步兵机器人电控开发与**系统联调**；
- 基于已有 STM32 代码框架做功能优化；将工程从 **Makefile 迁移到 CMake**；
- PID 模块增加**前馈、抗积分饱和、积分限幅**；
- Pitch 轴从陀螺仪闭环改为**位置闭环**，改善陀螺仪零漂导致的云台抖动；
- 按新规则增加**图传链路控制**，维护既有遥控模式；
- 分别对接**神经网络视觉**与**传统视觉**两套方案，为两套视觉各完成**通信接口及下位机解算链路**；
- 参与三台机器人赛前**集中联调和故障排查**；
- 整理电控环境配置、SEGGER RTT 实时调试与工具使用 Markdown 文档，降低战队技术传承成本；用飞书做战队协作管理。

## 沉淀

- 一次"一个人同时当机械设计、嵌入式开发和系统联调"的多线程赛季；
- 明确意识到 **复用既有框架、增量改进** 的价值，以及文档对环境传承的重要性；
- 视觉 / 下位机的两层通信解算是这次最需要系统思维的部分。