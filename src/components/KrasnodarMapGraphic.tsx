/** Декоративная «пиксельная» карта — стилистика макета АЦРКК */
export function KrasnodarMapGraphic({ className = '' }: { className?: string }) {
  const cols = 22
  const rows = 28
  const cells: boolean[] = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const nx = c / cols - 0.5
      const ny = r / rows - 0.45
      const d = Math.sqrt(nx * nx + ny * ny)
      const wave = Math.sin(c * 0.45 + r * 0.35) * 0.12
      const edge = Math.abs(nx) < 0.42 && ny > -0.35 && ny < 0.38
      const blob =
        d + wave < 0.48 &&
        !(nx > 0.15 && ny < -0.05) &&
        !(nx < -0.28 && ny > 0.12)
      cells.push(edge && blob)
    }
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 45%, rgba(229, 25, 36, 0.35), transparent 70%)',
        }}
      />
      <div
        className="grid h-full w-full gap-[3px] p-3"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {cells.map((on, i) => {
          const opacity = on ? 0.25 + ((i * 17) % 60) / 100 : 0.04
          return (
            <span
              key={i}
              className="rounded-[1px] transition-colors duration-300"
              style={{
                backgroundColor: on
                  ? `rgba(229, 25, 36, ${opacity})`
                  : 'rgba(255,255,255,0.03)',
                boxShadow: on ? '0 0 8px rgba(229, 25, 36, 0.25)' : undefined,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
