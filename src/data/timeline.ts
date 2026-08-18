/**
 * 成长轨迹（Engineering Timeline）数据。
 * 每一行 = 一个阶段节点，按时间倒序展示。文本务必克制、诚实。
 * 修改这里的内容即可，无需动模板。
 */
export interface TimelineEntry {
  date: string;        // 展示用日期，如 "2026 夏"
  phase: string;       // 阶段标签，如 "CUADC 2026"
  zh: string;          // 中文说明
  en?: string;         // 可选英文小标（如 "Structural design · Static analysis · Fabrication"）
  tags?: string[];
}

export const timeline: TimelineEntry[] = [
  {
    date: '2026 夏',
    phase: 'CUADC 2026 中国大学生飞行器设计创新大赛',
    zh: '负责机翼静载结构设计和制作：SolidWorks 建模、ANSYS 静力分析、理论弯曲/剪切计算、轻木结构加工。经历设计—仿真—制造之间的反复矛盾，并分析仿真与实际破坏模式不一致的问题。',
    en: 'Structural design · FEA · Fabrication',
    tags: ['SolidWorks', 'ANSYS', 'CUADC', '3D Printing'],
  },
  {
    date: '2025 春 — 2026 春',
    phase: 'RoboMaster 副队长 · 步兵负责人',
    zh: '负责新赛季步兵机械方案、全向轮底盘重新设计、云台/供弹优化；同时负责 STM32 电控开发与三台机器人系统联调，将工程迁移至 CMake，优化 PID 与视角闭环。',
    en: 'Mechanical design · Embedded · System integration',
    tags: ['STM32', 'SolidWorks', 'RoboMaster', 'CMake'],
  },
  {
    date: '2025 初',
    phase: '个人项目 · 自适应悬挂麦轮靶车',
    zh: '独立设计麦轮底盘，提出对角轮组自适应悬挂方案，SolidWorks 建模 → 3D 打印 → 装配 → STM32 电控 → 实测。发现低功率电机带不动 4kg 整车，意识到器件功率与结构质量的匹配问题。',
    en: 'Mechanism design · 3D printing · Embedded',
    tags: ['SolidWorks', '3D Printing', 'STM32', 'Mechanisms'],
  },
  {
    date: '2024 秋 — 2025 春',
    phase: 'RoboMaster 队员 · 机械/电控',
    zh: '参与现有步兵机器人的拆装维护、规则适配；新增 INA226 电流/功率监测；现场排查并解决遥控信号被金属结构遮蔽的问题。',
    en: 'Maintenance · Electronics · Debugging',
    tags: ['RoboMaster', 'STM32', 'Debugging'],
  },
  {
    date: '2024',
    phase: '机电系统 · 智能浮标（校赛优秀奖）',
    zh: '基于 ESP32 与现成模块、面包板完成水质检测 + GPS + 姿态 + MQTT 远程回传 + 固件远程更新的可运行原型。投入不多但完整走通一条系统链路。',
    en: 'Embedded · IoT · Rapid prototype',
    tags: ['ESP32', 'MQTT', 'IoT'],
  },
  {
    date: '2023（大一）',
    phase: '早期社团实践 · KT 板滑翔翼',
    zh: '用 SolidWorks 画 KT 板/木棍无动力滑翔翼，实际切割拼装，参加社团比赛获优秀奖。第一次接触机械 CAD 与实物制作。',
    en: 'First CAD · Hands-on build',
    tags: ['SolidWorks', 'CAD'],
  },
];