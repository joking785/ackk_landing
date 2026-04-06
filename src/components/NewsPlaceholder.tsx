/** Якорь «Новости» — блок можно заменить лентой из CMS или API */
export function NewsPlaceholder() {
  return (
    <section
      id="news"
      className="scroll-mt-24 border-t border-white/5 bg-black px-4 py-12 md:px-8"
    >
      <div className="mx-auto max-w-[1400px] text-center">
        <h2 className="section-heading text-white">Новости</h2>
        <p className="section-description mt-3 text-[#a1a1a1]">
          Раздел в разработке. Следите за анонсами мероприятий и проектов
          ассоциации.
        </p>
      </div>
    </section>
  )
}
