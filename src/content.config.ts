import { defineCollection, z } from 'astro:content';

/**
 * 内容集合：项目档案
 * 每个项目 = 一个 Markdown 文件，放在 src/content/projects/ 下。
 * 新增项目：复制任一文件 + 改 frontmatter + 写正文即可，无需改代码。
 */
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    // ---- 基本信息 ----
    title: z.string(),            // 中文标题
    titleEn: z.string().optional(), // 英文副标题（可选）
    level: z.enum([
      'featured',   // 精选 Featured —— 首页/精选页
      'core',       // 核心 Core（与精选视觉略有区分，仍进精选页）
      'project',    // 工程档案项目
      'practice',   // 个人工程实践
      'learning',   // 学习 / 实验
    ]),
    category: z.enum([
      'Mechanical',
      'Robotics',
      'Mechatronics',
      'Aviation',
      'Electronics',
      'PersonalPractice',
      'Learning',
    ]),
    featured: z.boolean().default(false), // 是否进入首页「精选项目」区
    status: z.enum(['complete', 'ongoing', 'award', 'stopped']).default('complete'),

    // ---- 时间 ----
    date: z.coerce.date(),  // 用于排序，取项目开始时间
    period: z.string(),     // 展示用时间段，如 "2026.06 – 2026.08"

    // ---- 角色 & 描述 ----
    role: z.string(),        // 项目角色，如 "机翼静载负责人"
    summary: z.string(),     // 一句话简介（卡片上用，务必克制、写实）

    // ---- 图片素材 ----
    // 图片放 public/img/projects/<slug>/ 下，路径以 / 开头
    cover: z.string().default(''),
    coverCaption: z.string().optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          caption: z.string().optional(),
        })
      )
      .default([]),

    // ---- 演示视频 ----
    // type: 'bilibili' | 'file' | 'placeholder'
    //   bilibili:  bvid 必填（一个视频的 BV 号），page 可选（若存在分P）
    //   file:     src 为 mp4 路径
    //   placeholder: 占位，后续替换
    videos: z
      .array(
        z.object({
          type: z.enum(['bilibili', 'file', 'placeholder']).default('file'),
          src: z.string().optional(),        // file 类型必填
          bvid: z.string().optional(),       // bilibili 类型必填
          page: z.number().optional(),
          caption: z.string().optional(),
          cover: z.string().optional(),      // 视频封面（可选，建议）
          note: z.string().optional(),       // 视频下方的说明段落（可选）
        })
      )
      .default([]),

    // ---- 项目成果（列表，不要编造数字）/ 关键事实 ----
    results: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };