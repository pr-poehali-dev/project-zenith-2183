import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Для знакомства с сервисом",
    features: [
      "5 проектов",
      "Базовые инструменты",
      "Экспорт PNG",
      "Сообщество",
    ],
    cta: "Начать бесплатно",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "790",
    description: "Для профессионалов и фрилансеров",
    features: [
      "Безлимитные проекты",
      "Все инструменты",
      "Экспорт SVG, PDF, EPS",
      "500+ шаблонов",
      "Приоритетная поддержка",
    ],
    cta: "Выбрать Pro",
    highlighted: true,
  },
  {
    name: "Business",
    price: "2 490",
    description: "Для команд и агентств",
    features: [
      "Всё из Pro",
      "До 20 участников",
      "Совместная работа",
      "Брендбук команды",
      "Персональный менеджер",
    ],
    cta: "Связаться с нами",
    highlighted: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative z-20 py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Тарифы</p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Выберите свой{" "}
            <span className="font-medium italic">план</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "bg-white text-black"
                  : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-violet-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs uppercase tracking-widest mb-2 ${plan.highlighted ? "text-black/50" : "text-white/50"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-light">{plan.price}</span>
                  {plan.price !== "0" && (
                    <span className={`text-sm mb-1 ${plan.highlighted ? "text-black/50" : "text-white/50"}`}>₽/мес</span>
                  )}
                </div>
                <p className={`text-xs ${plan.highlighted ? "text-black/60" : "text-white/50"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      size={14}
                      className={plan.highlighted ? "text-violet-500" : "text-white/40"}
                    />
                    <span className={`text-xs ${plan.highlighted ? "text-black/80" : "text-white/70"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full text-xs font-normal transition-all duration-200 cursor-pointer ${
                  plan.highlighted
                    ? "bg-black text-white hover:bg-black/80"
                    : "border border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
