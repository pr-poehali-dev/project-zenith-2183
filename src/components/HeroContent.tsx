export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">Векторная графика нового поколения</span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-6xl md:text-8xl leading-none tracking-tight text-white mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span className="font-extrabold">Создавайте</span>
          <br />
          <span className="font-bold italic opacity-80">векторы</span>
          <br />
          <span className="font-extrabold">за секунды</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          Мощный онлайн-редактор для создания векторной графики. Иконки, иллюстрации, логотипы —
          профессиональный результат без сложного ПО.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Посмотреть тарифы
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Попробовать бесплатно
          </button>
        </div>
      </div>
    </main>
  )
}