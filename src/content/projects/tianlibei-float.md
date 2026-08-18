---
title: '"天理杯" 智能浮标'
titleEn: '"Tianlibei" Smart Float (IoT Buoy)'
level: 'project'
category: 'Mechatronics'
featured: false
status: 'award'
date: '2024-03-01'
period: '大二 (2024)'
role: '承担大部分具体实现'
summary: '基于 ESP32 与现成模块、面包板做的一个可运行原型：水质检测 + GPS + 姿态 + MQTT 远程回传 + 固件远程更新。校赛优秀奖。'
cover: '/img/projects/tianlibei-float/product.jpg'
coverCaption: '实物：ESP32 + 面包板 + 现成模块快速搭出的可运行原型'
gallery:
  - src: '/img/projects/tianlibei-float/award.jpg'
    caption: '校赛优秀奖'
videos:
  - type: file
    src: '/videos/tianlibei-demo.mp4'
    caption: '依靠巴法云平台 MQTT 通信回传数据，基本由我一人完成，包括实物制作、项目 PPT 与结题答辩'
results:
  - '校赛优秀奖'
  - '可运行原型：水质检测 / GPS / 姿态，MQTT 远程回传与固件远程 OTA 更新。'
tags:
  - ESP32
  - MQTT
  - IoT
  - 面包板
  - 原型
---

> 团队项目，投入不算大，但个人承担了大量具体实现，是一条完整走通的机电系统链路。归档在工程档案中，不包装成大型科研项目。

## 背景

"天理杯"校赛的智能浮标项目。整体投资不大，用面包板 + 现成模块快速搭出可运行原型。

## 我的工作（主要承担实现部分）

- ESP32 为主控；
- 集成水质检测、GPS、姿态传感器；
- 通过 **MQTT**（巴法云平台）做数据远程回传；
- 实现**固件远程更新（OTA）**；
- 最终做出可运行原型，项目基本由我一人完成，包括实物制作、项目 PPT 和结题答辩。

## 与"大型科研"的差异说明

**没有包装成大项目** —— 它的意义是：一个人把 传感器采集 → 无线回传 → 远程升级 这条链路走通。用巴法云平台而不是自建服务器，快速出原型，符合校赛定位。