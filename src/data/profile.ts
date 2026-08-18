/**
 * 个人信息 + 技能 + 联系方式集中配置。
 * 改这里即全站生效。联系方式注意：公开网页请谨慎暴露微信号/手机号（会被爬虫抓取）。
 */

export const profile = {
  name: '邓桐',
  nameEn: 'Denghong', // TODO: 替换为你的惯用英文名/拼音
  title: 'Mechanical Engineering',
  tagline: 'Mechanical Design / Robotics / Manufacturing',
  intro: [
    '天津理工大学 · 机械工程本科 · 2027 届',
    '以机械设计为主，同时具备电控（STM32）、嵌入式、PCB、CAE 仿真与系统联调能力的队伍型工程师。',
    '长期 RoboMaster 机械/电控与 CUADC 机翼结构工程实践。',
  ],
  education: {
    school: '天津理工大学',
    major: '机械工程',
    degree: '本科（B.Eng）',
    classYear: '2027 届',
  },
};

export interface SkillGroup {
  group: string;
  groupEn: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    group: '机械设计 / 结构',
    groupEn: 'Mechanical Design',
    skills: ['SolidWorks 三维建模与出图', '机械结构设计 / 设计评审', '公差与尺寸链', '轻木等航模材料加工', '3D 打印件设计'],
  },
  {
    group: 'CAE / 分析',
    groupEn: 'Analysis & Simulation',
    skills: ['ANSYS 静力分析', '弯曲 / 剪切等理论校核', '强度 / 失效模式排查'],
  },
  {
    group: '电控 / 嵌入式',
    groupEn: 'Embedded & Control',
    skills: ['STM32 开发', 'PID（含前馈 / 抗积分饱和）', '机器人底盘 / 云台电控', 'I²C / UART / CAN 等总线', 'CMake 工程管理'],
  },
  {
    group: 'PCB / 硬件',
    groupEn: 'Hardware & PCB',
    skills: ['PCB 改进设计与焊接', 'MOSFET 等功率电路调试', '常见传感器选型与接入'],
  },
  {
    group: '机器人 / 制造',
    groupEn: 'Robotics & Manufacturing',
    skills: ['RoboMaster 步兵机械 + 全向轮底盘', '系统联调与故障排查', '加工图纸与实物制作', '装配工艺'],
  },
  {
    group: '工具 / 其他',
    groupEn: 'Tools & Misc',
    skills: ['XFLR5（学习固定翼设计，入门）', 'Blender（入门，跟教程）', '飞书团队协作', 'Markdown 技术文档'],
  },
];

export interface SocialLink {
  label: string;
  labelEn: string;
  href: string;
  note?: string;
}

export const contact = {
  email: '17087568505@163.com',          // TODO: 填你的邮箱，如 i@youdengtong.cn
  github: 'https://github.com/dspajio',         // TODO: 填你的 GitHub 链接，如 https://github.com/username
  location: '中国 · 天津',
  links: [] as SocialLink[], // TODO: 如需放其他链接（如 X/WeChat 备注），在此加入
  note: '',
};