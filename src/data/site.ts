/** Archive 分类与常规范例标签（用于筛选显示）。 */

export const CATEGORIES: { key: string; zh: string; en: string }[] = [
  { key: 'Mechanical', zh: '机械设计', en: 'Mechanical' },
  { key: 'Robotics', zh: '机器人', en: 'Robotics' },
  { key: 'Mechatronics', zh: '机电一体化', en: 'Mechatronics' },
  { key: 'Aviation', zh: '航空', en: 'Aviation' },
  { key: 'Electronics', zh: '电子', en: 'Electronics' },
  { key: 'PersonalPractice', zh: '个人实践', en: 'Personal Practice' },
  { key: 'Learning', zh: '学习', en: 'Learning' },
];

export const ALL_TAGS = [
  'SolidWorks',
  'ANSYS',
  'STM32',
  'PCB',
  '3D Printing',
  'RoboMaster',
  'CUADC',
  'XFLR5',
];

/** 项目等级的中文/英文标签与分组说明 */
export const LEVELS: Record<
  string,
  { zh: string; en: string; hint: string }
> = {
  featured: { zh: '精选项目', en: 'Featured', hint: '最具代表性、适合求职展示' },
  core: { zh: '核心项目', en: 'Core', hint: '贯穿一个赛季/阶段的重头工作' },
  project: { zh: '工程项目', en: 'Project', hint: '工程档案中的完整实践' },
  practice: { zh: '工程实践', en: 'Engineering Practice', hint: '规模较小但有完整过程' },
  learning: { zh: '学习 / 实验', en: 'Learning', hint: '仍在学习、不作成品展示' },
};