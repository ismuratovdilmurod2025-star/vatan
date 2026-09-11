import { motion } from 'motion/react';
import { Target, CheckCircle, ShieldAlert } from 'lucide-react';
import { LESSON_META } from '../data/lessonData';

export default function LessonGoals() {
  return (
    <section id="maqsad" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5" /> Dars Maqsadi va Natijalari
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mashg‘ulotning Bosh Maqsadi va Kutilayotgan Natijalar
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            9-11-sinf o‘quvchilarida vatanparvarlik, millatlararo totuvlik va mustaqil tahlil ko‘nikmalarini rivojlantirish
          </p>
        </motion.div>

        {/* Goal Statement + Expected Outcomes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Goal Card with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-2.5 text-blue-300 text-xs font-bold uppercase tracking-wide mb-3">
                <Target className="w-4 h-4 text-blue-400" />
                Mashg‘ulotning Bosh Maqsadi
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-4">
                Yagona maqsad yo‘lida birlashish va millatlararo totuvlik
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {LESSON_META.purpose}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-blue-200">
              <span className="font-semibold">“O‘zbekiston — umumiy uyimiz”</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-white font-medium">9-11-sinflar</span>
            </div>
          </motion.div>

          {/* Expected Outcomes (Kutilayotgan Natijalar) with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Kutilayotgan Ta’limiy Natijalar (5 ta ustuvor vazifa)
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {LESSON_META.expectedOutcomes.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.07 }}
                    className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-5 p-4 bg-amber-50 border border-amber-200/80 rounded-2xl flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
              <p className="text-xs text-amber-900 font-medium leading-relaxed">
                Muhim natija: O‘quvchilarda yot va buzg‘unchi g‘oyalarga qarshi <span className="font-bold">mustahkam ma’naviy immunitet</span> shakllantiriladi.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
