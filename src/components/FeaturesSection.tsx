import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Shapes",
    title: "Иконки и пиктограммы",
    description: "Создавайте чёткие масштабируемые иконки для интерфейсов и брендинга. Любой размер без потери качества.",
  },
  {
    icon: "PenTool",
    title: "Иллюстрации",
    description: "Рисуйте сложные иллюстрации с помощью векторных инструментов. Кривые Безье, слои и умные направляющие.",
  },
  {
    icon: "Sparkles",
    title: "Логотипы",
    description: "Проектируйте профессиональные логотипы и фирменный стиль. Экспорт в SVG, PDF, PNG в один клик.",
  },
  {
    icon: "LayoutTemplate",
    title: "Шаблоны",
    description: "Более 500 готовых шаблонов для быстрого старта. Адаптируйте под свой бренд за минуты.",
  },
  {
    icon: "Users",
    title: "Совместная работа",
    description: "Работайте с командой в реальном времени. Комментарии, версионирование и общий доступ.",
  },
  {
    icon: "Download",
    title: "Экспорт в любом формате",
    description: "SVG, PNG, PDF, EPS — скачивайте в нужном формате для любого носителя и платформы.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative z-20 py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Возможности</p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Всё для{" "}
            <span className="font-medium italic">векторного</span>{" "}
            дизайна
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-black/40 backdrop-blur-sm p-8 hover:bg-white/5 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 transition-colors duration-300">
                <Icon name={feature.icon} fallback="Shapes" size={18} className="text-white/70" />
              </div>
              <h3 className="text-white font-medium text-sm mb-2">{feature.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}