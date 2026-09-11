import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flag, 
  Landmark, 
  BookOpen, 
  Calendar, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Scale
} from 'lucide-react';
import { 
  INDEPENDENCE_TIMELINE, 
  STATE_SYMBOLS, 
  INDEPENDENCE_CORE_VALUES 
} from '../data/lessonData';

export default function IndependenceSection() {
  const [activeTab, setActiveTab] = useState<'solnoma' | 'ramzlar' | 'imkoniyatlar'>('solnoma');
  const [selectedSymbolId, setSelectedSymbolId] = useState<string>('flag');

  const selectedSymbol = STATE_SYMBOLS.find(s => s.id === selectedSymbolId) || STATE_SYMBOLS[0];

  return (
    <section id="mustaqillik" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      {/* Background Decorative Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>2-Yo‘nalish: Tarixiy Asoslar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif mb-4">
            Mustaqillik — Eng Ulug‘ va Eng Aziz Ne’mat
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            1991-yil 31-avgustda erishilgan davlat mustaqilligi o‘zbek xalqining ko‘p asrlik orzu-intilishlarining tantanasi bo‘ldi. Bu bo‘limda mustaqilligimizning tarixiy bosqichlari, muqaddas davlat ramzlari va xalqimiz hayotida yuz bergan tub o‘zgarishlar jamlangan.
          </p>
        </div>

        {/* Hero Visual Card: Istiqlol Monument & Core Summary */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white grid grid-cols-1 lg:grid-cols-12">
          
          {/* Image side */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[420px] bg-slate-900 group">
            <img 
              src="/src/assets/images/uzbek_istiqlol_monument_1789137759559.jpg" 
              alt="Yangi O‘zbekiston bog‘idagi Istiqlol monumenti va Humo qushi"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-600/90 backdrop-blur-sm text-xs font-bold text-white mb-2">
                🇺🇿 “Istiqlol” Monumenti
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif leading-snug">
                Mustaqillik — ozodlik, qadr-qimmat va yangilanish timsoli
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                Yurtimiz sarhadlari daxlsizligi, xalqimiz birdamligi va suveren taraqqiyotimizning boqiy poydevori.
              </p>
            </div>
          </div>

          {/* Quick Metrics & Pillars */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-white via-slate-50 to-blue-50/30">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-700" />
                Mustaqillik bergan asosiy yutuqlar
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 font-serif">
                O‘zbekiston — o‘z taqdirini o‘zi belgilovchi qudratli davlat
              </h4>

              <div className="space-y-3.5">
                {INDEPENDENCE_CORE_VALUES.slice(0, 3).map((val, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{val.title}</div>
                      <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">{val.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">1991-yil 1-sentyabr — Mustaqillik kuni</span>
              <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-bold">33+ yillik erkin yo‘l</span>
            </div>
          </div>

        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/80 shadow-inner flex-wrap justify-center gap-1">
            <button
              id="tab-solnoma"
              onClick={() => setActiveTab('solnoma')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'solnoma'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Tarixiy Solnoma (1991–2024)</span>
            </button>

            <button
              id="tab-ramzlar"
              onClick={() => setActiveTab('ramzlar')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'ramzlar'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Flag className="w-4 h-4" />
              <span>Muqaddas Davlat Ramzlari</span>
            </button>

            <button
              id="tab-imkoniyatlar"
              onClick={() => setActiveTab('imkoniyatlar')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'imkoniyatlar'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Mustaqillik Bergan Ne’matlar</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Historical Timeline (Solnoma) */}
        {activeTab === 'solnoma' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                    Mustaqillik yillarining eng muhim tarixiy sanalari
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    9-11-sinf o‘quvchilari uchun taqdimot va dars jarayonida yodda tutish lozim bo‘lgan asosiy bosqichlar
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold">
                  8 ta tarixiy burilish nuqtasi
                </div>
              </div>

              {/* Timeline Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {INDEPENDENCE_TIMELINE.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 bg-gradient-to-b from-slate-50/50 to-white flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 font-mono">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {item.exactDate}
                        </span>
                      </div>

                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded mb-2 border border-emerald-200/60">
                        {item.badge}
                      </span>

                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug mb-2 font-serif">
                        {item.title}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.significance}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Bosqich #{idx + 1}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: State Symbols Breakdown (Ramzlar) */}
        {activeTab === 'ramzlar' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Symbol Selectors */}
            <div className="lg:col-span-4 space-y-3">
              {STATE_SYMBOLS.map((sym) => {
                const isSelected = sym.id === selectedSymbolId;
                return (
                  <button
                    key={sym.id}
                    onClick={() => setSelectedSymbolId(sym.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                      isSelected
                        ? 'bg-blue-900 text-white border-blue-900 shadow-lg scale-[1.02]'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-blue-200 hover:bg-blue-50/50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/20 text-amber-300' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {sym.id === 'flag' && <Flag className="w-5 h-5" />}
                      {sym.id === 'emblem' && <Landmark className="w-5 h-5" />}
                      {sym.id === 'anthem' && <Award className="w-5 h-5" />}
                      {sym.id === 'constitution' && <Scale className="w-5 h-5" />}
                    </div>

                    <div>
                      <div className="font-bold text-sm sm:text-base font-serif">{sym.name}</div>
                      <div className={`text-xs mt-0.5 ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                        Qabul qilingan: {sym.lawDate}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Symbol Meaning Card */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSymbol.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-md h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                        {selectedSymbol.lawDate}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        O‘zbekiston Respublikasi Qonuni bilan tasdiqlangan
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif mb-3">
                      {selectedSymbol.name}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                      {selectedSymbol.meaning}
                    </p>

                    {/* Detailed Symbol Elements */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Ramz elementlarining teran ma’nosi:
                      </div>
                      {selectedSymbol.symbolism.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inspiring Quote footer */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center gap-4 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-amber-300 shrink-0" />
                    <p className="text-xs sm:text-sm font-serif italic text-blue-100">
                      “{selectedSymbol.quote}”
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* TAB 3: What Independence Gave Us (Ne’matlar) */}
        {activeTab === 'imkoniyatlar' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {INDEPENDENCE_CORE_VALUES.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-extrabold text-sm mb-4 shadow-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-serif mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-800 gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>O‘quvchilar essesi uchun muhim dalil</span>
                </div>
              </div>
            ))}

            {/* Special summary card */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 border border-blue-800 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-400 text-blue-950 flex items-center justify-center font-bold text-lg mb-4">
                  🇺🇿
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white font-serif mb-2">
                  Xulosa: Mustaqillik — taqdirimiz, g‘ururimiz
                </h4>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Mustaqillik har birimizga o‘zligimizni anglash, erkin fikrlash, buyuk ajdodlarimizga munosib avlod bo‘lish va Yangi O‘zbekistonni jahonning eng rivojlangan davlatlari safiga olib chiqish mas’uliyatini yuklaydi.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-blue-800/80 text-xs text-amber-300 font-semibold flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>226-maktab 10-“V” sinf o‘quvchilari xulosasi</span>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
