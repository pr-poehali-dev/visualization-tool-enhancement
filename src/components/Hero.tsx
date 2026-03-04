import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/b8fe9c1e-c499-400f-ad9e-56f3e5eeaaa2/files/b8fcc222-bbde-45ac-b600-b0080b87ed5f.jpg"
          alt="Всадник на лошади"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          СКАЧИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Запишись на тренировку и почувствуй свободу верховой езды
        </p>
        <button className="mt-8 bg-white text-black px-8 py-3 uppercase text-sm tracking-wide font-semibold hover:bg-transparent hover:text-white border border-white transition-all duration-300">
          Записаться на тренировку
        </button>
      </div>
    </div>
  );
}