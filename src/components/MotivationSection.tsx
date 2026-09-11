import { motion } from 'motion/react';
import { Heart, Globe2, BookOpen, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { MOTIVATION_CONCEPTS } from '../data/lessonData';

const CONCEPT_ICONS = [Heart, BookOpen, Globe2, Sparkles, ShieldCheck];

export default function MotivationSection() {
  return (
    <section id="motivatsiya" className="py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            II. Motivatsion Qism
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            “Bizni yagona xalq sifatida birlashtiradigan kuch nima?”
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Darsning asosiy motivatsion savoli va har bir fuqaro qalbida yashaydigan besh buyuk tayanch tushuncha
          </p>
        </motion.div>

        {/* Central Inspiring Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mb-10 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-2">
              Bosh g‘oya va milliy o‘zlik
            </span>
            <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
              O‘zbekiston — 130 dan ortiq millat va elat vakillari tinch-totuv, o‘zaro hamjihatlikda yashayotgan yagona va ulug‘ vatan. Bizning qudratimiz — xalqimizning do‘stligi, ma’naviy boyligi va mushtarak kelajakka ishonchidadir.
            </p>
          </div>
        </motion.div>

        {/* 5 Foundational Concepts Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOTIVATION_CONCEPTS.map((concept, index) => {
            const Icon = CONCEPT_ICONS[index % CONCEPT_ICONS.length];
            return (
              <motion.div
                key={concept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                  {concept.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {concept.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
