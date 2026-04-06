/** Иллюстрации услуг: `src/assets/services/{id}.png` по `id` карточки в `serviceGroups` */
const imageModules = import.meta.glob<string>('../assets/services/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export function getServiceImageSrc(id: string): string | undefined {
  const key = `../assets/services/${id}.png`
  return imageModules[key]
}
