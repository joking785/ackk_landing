/** Логотипы участников: `src/assets/members/m1.png` … по `id` */
const imageModules = import.meta.glob<string>('../assets/members/m*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export function getMemberImageSrc(id: string): string | undefined {
  const key = `../assets/members/${id}.png`
  return imageModules[key]
}
