import { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRightLeft, SlidersHorizontal, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { REFORMS_COMPARISON } from '../data/lessonData';

export default function ReformsComparison() {
  const [viewMode, setViewMode] = useState<'avval-hozir' | 'muammo-yechim'>('avval-hozir');
  const [activeCategory, setActiveCategory] = useState<string>('Barchasi');

  const categories = ['Barchasi', 'Ta\'lim', 'Davlat xizmatlari', 'Raqamlashtirish', 'Ekologiya'];

  const filteredItems = activeCategory === 'Barchasi'
    ? REFORMS_COMPARISON
    : REFORMS_COMPARISON.filter(item => item.category === activeCategory);

  return (
    <section id="islohotlar" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" /> Islohotlar Qiyosiy Tahlili
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              O‘zbekistondagi Tarixiy Islohotlar Matritsasi
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              PDF talabi bo‘yicha: “Avval va Hozir” hamda “Muammo — Yechim — Natija” qiyosiy tahlili
            </p>
          </div>

          {/* Mode Switcher Pill */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setViewMode('avval-hozir')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'avval-hozir'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              “Avval va Hozir”
            </button>
            <button
              onClick={() => setViewMode('muammo-yechim')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'muammo-yechim'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              “Muammo — Yechim — Natija”
            </button>
          </div>
        </motion.div>

        {/* Category Filter with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Comparison Cards Matrix with Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Yo‘nalish #{index + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                {/* Mode 1: Avval va Hozir */}
                {viewMode === 'avval-hozir' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                    {/* Avval */}
                    <div className="p-3.5 bg-rose-50/70 rounded-xl border border-rose-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-rose-700 mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        Avvalgi holat:
                      </div>
                      <p className="text-xs text-rose-950 leading-relaxed">
                        {item.avval}
                      </p>
                    </div>

                    {/* Hozir */}
                    <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Hozirgi natija:
                      </div>
                      <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                        {item.hozir}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Mode 2: Muammo - Yechim - Natija */
                  <div className="space-y-2.5 mb-4 text-xs">
                    <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-900 block mb-0.5">Muammo:</span>
                        <p className="text-amber-800 leading-relaxed">{item.muammo}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200/80 flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-blue-900 block mb-0.5">Davlat yechimi:</span>
                        <p className="text-blue-800 leading-relaxed">{item.yechim}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/80 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-900 block mb-0.5">Kutilgan va amaldagi natija:</span>
                        <p className="text-emerald-800 leading-relaxed">{item.natija}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Tahlil holati:</span>
                <span className="font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Tasdiqlangan amaliy natijalar
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
