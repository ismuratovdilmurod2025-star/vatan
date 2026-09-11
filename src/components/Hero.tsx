import { motion } from 'motion/react';
import { Compass, Users, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { LESSON_META } from '../data/lessonData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200/80 pt-8 pb-16">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text & Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Subtle School & Class attribution note */}
            <div className="inline-flex items-center gap-2 text-xs text-slate-500 font-normal bg-slate-100/80 px-2.5 py-1 rounded-md border border-slate-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              <span>Bu loyiha ishi 226-maktabning 10-“V” sinfining faol o‘quvchilari tomonidan tayyorlandi</span>
            </div>

            {/* Pill badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                <Compass className="w-3.5 h-3.5 text-blue-600" />
                {LESSON_META.grade}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                {LESSON_META.week} Loyiha Ishi
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                {LESSON_META.totalDuration}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                “Yagona Vatan — <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-700 to-teal-600">
                  yagona xalq”
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-600 italic">
                “O‘zbekiston — umumiy uyimiz” g‘oyasi asosida maxsus ta’limiy loyiha portali
              </p>
            </div>

            {/* Purpose excerpt */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Yurtimizda istiqomat qilayotgan turli millat va elatlarning o‘zaro ahilligi, do‘stligi, mustaqillik bergan imkoniyatlar, jamiyatimizdagi ulkan islohotlar hamda yoshlar uchun dolzarb bo‘lgan kiberxavfsizlik ko‘nikmalarini o‘rganamiz.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#mavzular"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all group"
              >
                Asosiy Mavzularni Ko‘rish
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#islohotlar"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-all"
              >
                Islohotlar Tahlili
              </a>
              <a
                href="#kiberxavfsizlik"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-indigo-700 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-all"
              >
                Kiberxavfsizlik
              </a>
              <a
                href="#uyga-vazifa"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all"
              >
                Uyga Vazifa
              </a>
            </div>

            {/* Quick stats checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-700 font-medium">3 ta asosiy yo‘nalish</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-700 font-medium">130+ millat ahilligi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-700 font-medium">Kiberxavfsizlik darsi</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Composite with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
              <img
                src="/src/assets/images/uzbek_heritage_hero_1789137337498.jpg"
                alt="O'zbekiston madaniy merosi, Samarqand Registon va Toshkent"
                className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

              {/* Bottom Caption Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                  <span className="font-semibold text-blue-300">Milliy g‘urur va do‘stlik</span>
                  <span>9-11-sinf</span>
                </div>
                <p className="text-sm font-semibold text-white leading-snug">
                  “Bizni yagona xalq sifatida birlashtiradigan eng ulug‘ qadriyat — tinchlik va totuvlikdir.”
                </p>
                <div className="mt-2.5 flex items-center gap-3 text-[11px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-blue-400" /> Hamjihatlik va bag‘rikenglik
                  </span>
                  <span className="text-slate-500">•</span>
                  <span>O‘zbekiston — umumiy uyimiz</span>
                </div>
              </div>

            </div>

            {/* Sub-image thumbnail */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-white p-2.5 rounded-2xl shadow-lg border border-slate-200">
              <img
                src="/src/assets/images/uzbek_youth_unity_1789137362409.jpg"
                alt="Yoshlar va ta'lim"
                className="w-14 h-14 rounded-xl object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="pr-2">
                <div className="text-[11px] font-bold text-slate-900">Yoshlar — yangi O‘zbekiston bunyodkori</div>
                <div className="text-[10px] text-slate-500">Mustaqil tafakkur va yuksak intilish</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
