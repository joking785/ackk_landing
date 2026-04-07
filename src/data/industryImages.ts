/** Карточки отраслей: `src/assets/industries/{id}.jpg` или `.png` */
const jpgModules = import.meta.glob<string>('../assets/industries/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const pngModules = import.meta.glob<string>('../assets/industries/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const imageModules: Record<string, string> = { ...jpgModules, ...pngModules }

export function getIndustryImageSrc(id: string): string | undefined {
  return (
    imageModules[`../assets/industries/${id}.jpg`] ??
    imageModules[`../assets/industries/${id}.png`]
  )
}
