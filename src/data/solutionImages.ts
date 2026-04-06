/** Картинки карточек: `src/assets/solutions/s1.png` … по `id` решения */
const imageModules = import.meta.glob<string>('../assets/solutions/s*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export function getSolutionImageSrc(id: string): string | undefined {
  const key = `../assets/solutions/${id}.png`
  return imageModules[key]
}
