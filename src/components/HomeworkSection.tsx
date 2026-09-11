import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, FileText, Sparkles, Lightbulb, Bookmark } from 'lucide-react';
import { ESSAY_TOPICS } from '../data/lessonData';

export default function HomeworkSection() {
  return (
    <section id="uyga-vazifa" className="py-16 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
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
            <BookOpen className="w-3.5 h-3.5" /> V. Uyga Vazifa
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mustaqil Ijodiy Vazifa
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Darsda o‘rganilgan qadriyatlar va islohotlar asosida o‘quvchilar tomonidan bajarilishi lozim bo‘lgan vazifa rejasi
          </p>
        </motion.div>

        {/* Main Homework Card with Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Task Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                <FileText className="w-4 h-4 text-blue-400" />
                Vazifa Mavzusi (PDF talabi)
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white mb-4">
                “{ESSAY_TOPICS.mainTitle}”
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
                {ESSAY_TOPICS.description}
              </p>

              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-200">
                  <Bookmark className="w-4 h-4 text-blue-300" />
                  Mavzuning bosh maqsadi:
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  O‘quvchining yurtimizda sodir bo‘layotgan tub o‘zgarishlarga shaxsiy munosabati, vatanparvarlik hissi hamda kelajak istiqbollari bo‘yicha mustaqil fikrini bayon qilish.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-blue-200">
              <span>Hajmi: 150-250 so‘z</span>
              <span className="bg-blue-600/60 px-3 py-1 rounded-full text-white font-semibold">
                9-11-sinf o‘quvchilari
              </span>
            </div>
          </motion.div>

          {/* Right: Recommended Plan & Criteria */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                Tavsiya Etilgan 4 Bosqichli Reja
              </div>

              <div className="space-y-3.5 mb-6">
                {ESSAY_TOPICS.suggestedPlan.map((planItem, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-blue-300 transition-all flex items-start gap-3"
                  >
                    <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {planItem.step}: {planItem.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {planItem.guidance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evaluation Guidelines */}
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Baholash mezonlari:
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Mavzuning to‘liq yoritilishi, mustaqil va erkin fikrlash, aniq hayotiy dalillar keltirish, imlo va tahrir qoidalariga rioya etilishi.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
