import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  HeartHandshake, 
  ShieldCheck, 
  Globe2, 
  Landmark, 
  Sparkles, 
  Building2, 
  Flag, 
  BookOpen, 
  History, 
  GraduationCap, 
  Compass, 
  Award, 
  Cpu, 
  Home, 
  Trees, 
  Layers,
  GraduationCap as TeacherIcon
} from 'lucide-react';
import { GROUP_PROJECTS } from '../data/lessonData';

const ICON_MAP: Record<string, any> = {
  HeartHandshake,
  ShieldCheck,
  Users,
  Globe2,
  Landmark,
  Sparkles,
  Building2,
  Flag,
  BookOpen,
  History,
  GraduationCap,
  Compass,
  Award,
  Cpu,
  Home,
  Trees,
  Layers
};

export default function CoreThemesSection() {
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  const currentTheme = GROUP_PROJECTS[activeThemeIndex];

  return (
    <section id="mavzular" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" /> III. Asosiy Mavzular
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loyiha Ishining Asosiy Mazmuniy Yo‘nalishlari
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Dars ishlanmasidagi uchta ustuvor mavzu bo‘yicha qadriyatlar, tarixiy burilishlar va zamonaviy islohotlar
          </p>
        </motion.div>

        {/* 3 Theme Navigation Tabs with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-10"
        >
          {GROUP_PROJECTS.map((theme, index) => {
            const isSelected = activeThemeIndex === index;
            return (
              <button
                key={theme.id}
                onClick={() => setActiveThemeIndex(index)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-blue-900 to-indigo-900 text-white border-transparent shadow-lg shadow-blue-950/15 ring-2 ring-blue-600'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                    isSelected ? 'bg-white/15 text-blue-200' : 'bg-slate-200/80 text-slate-700'
                  }`}>
                    {index + 1}-yo‘nalish
                  </span>
                  <span className={`text-xs font-medium ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                    {theme.keyPoints.length} ta asosiy qism
                  </span>
                </div>
                <div>
                  <h3 className={`text-base sm:text-lg font-bold leading-snug mb-1 ${
                    isSelected ? 'text-white' : 'text-slate-900'
                  }`}>
                    {theme.title}
                  </h3>
                  <p className={`text-xs line-clamp-2 leading-relaxed ${
                    isSelected ? 'text-slate-200' : 'text-slate-500'
                  }`}>
                    {theme.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Active Theme Showcase */}
        <motion.div
          key={currentTheme.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10"
        >
          {/* Header of Active Theme */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-slate-200">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                  Mavzu: {currentTheme.theme}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {currentTheme.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentTheme.description}
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-72 h-44 rounded-2xl overflow-hidden shadow-md border-2 border-white relative">
              <img
                src={currentTheme.image}
                alt={currentTheme.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold drop-shadow-sm">
                {currentTheme.title}
              </div>
            </div>
          </div>

          {/* Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentTheme.keyPoints.map((point, pIdx) => {
              const PointIcon = ICON_MAP[point.iconName] || Landmark;
              return (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: pIdx * 0.06 }}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <PointIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {point.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {point.description}
                    </p>
                  </div>

                  {point.details && point.details.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      {point.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-500">
                          <span className="text-blue-500 font-bold leading-none mt-0.5">•</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Teacher's Conclusion ("O'qituvchi xulosasi" from PDF) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-7 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl shadow-lg border border-blue-800 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-blue-300">
              <TeacherIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-1">
                Dars Boyicha O‘qituvchi Xulosasi (PDF Dasturi)
              </span>
              <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed italic">
                “Vatan taraqqiyoti, mustaqillik va amalga oshirilayotgan keng ko‘lamli islohotlar xalqimiz farovonligi uchun xizmat qiladi. Bugungi zamonaviy bilim va texnologiyalarni egallayotgan yoshlar esa bu jarayonlarning eng faol va yetakchi ishtirokchisidir.”
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
