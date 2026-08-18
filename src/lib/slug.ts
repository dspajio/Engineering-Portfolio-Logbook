/**
 * 从 content collection 的 id（如 "cuadc-2026-wing-loads.md"）得到干净的页面路由 slug。
 */
export function slug(id: string): string {
  return id.replace(/\.md$/, '');
}