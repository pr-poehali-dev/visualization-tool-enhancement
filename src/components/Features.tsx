import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "CalendarCheck",
    title: "Онлайн-запись",
    desc: "Бронируй тренировки в пару касаний. Выбирай тренера, лошадь и удобное время — без звонков.",
  },
  {
    icon: "Clock",
    title: "Учёт рабочего времени",
    desc: "Приложение автоматически ведёт журнал нагрузки каждой лошади — никаких бумажных журналов.",
  },
  {
    icon: "ChartLine",
    title: "Прогресс всадника",
    desc: "История тренировок, достижения и рекомендации тренера — всё в личном кабинете.",
  },
];

export default function Features() {
  return (
    <div className="bg-[#f7f3ee] px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Возможности приложения</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 max-w-xl leading-tight">
          Всё что нужно клубу — в одном приложении
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center">
                <Icon name={f.icon} size={22} className="text-white" fallback="Star" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 uppercase tracking-wide">{f.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
