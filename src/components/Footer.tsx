import { ArrowUp, BookOpen, Shield, Heart, Landmark, Compass, Layers, Flag, Download } from 'lucide-react';
import { LESSON_META } from '../data/lessonData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-base">
                🇺🇿
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Yagona Vatan — Yagona Xalq
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              9-11-sinf o‘quvchilari uchun 3-hafta loyiha ishi o‘quv-uslubiy portali. Millatlararo totuvlik, vatanparvarlik, zamonaviy islohotlar va kiberxavfsizlik ko‘nikmalarini rivojlantirishga qaratilgan.
            </p>

            <div className="text-xs text-blue-400 font-semibold italic">
              “{LESSON_META.motto}”
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Dars Bo‘limlari
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#maqsad" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  I. Maqsad va Natijalar
                </a>
              </li>
              <li>
                <a href="#motivatsiya" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-blue-400" />
                  II. Birlashtiruvchi Kuch
                </a>
              </li>
              <li>
                <a href="#mavzular" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  III. Asosiy Mavzular
                </a>
              </li>
              <li>
                <a href="#mustaqillik" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Flag className="w-3.5 h-3.5 text-emerald-400" />
                  Mustaqillik Tarixi va Ramzlar
                </a>
              </li>
              <li>
                <a href="#islohotlar" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5 text-blue-400" />
                  Islohotlar Tahliliy Matritsasi
                </a>
              </li>
              <li>
                <a href="#kiberxavfsizlik" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-blue-400" />
                  IV. Kiberxavfsizlik Rukni
                </a>
              </li>
              <li>
                <a href="#uyga-vazifa" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-blue-400" />
                  V. Uyga Vazifa
                </a>
              </li>
            </ul>
          </div>

          {/* Guidelines info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              O‘quv-uslubiy Ma’lumot
            </h4>
            <div className="text-xs text-slate-400 space-y-2 mb-4">
              <p>Auditoriya: 9, 10, 11-sinf o‘quvchilari</p>
              <p>Mavzu: “Yagona Vatan — yagona xalq”</p>
              <p>Bosh g‘oya: “O‘zbekiston — umumiy uyimiz”</p>
            </div>

            <a
              href="/yagona-vatan-loyiha.zip"
              download="yagona-vatan-loyiha-226-maktab.zip"
              className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 hover:text-emerald-200 border border-emerald-700/60 rounded-lg text-xs font-semibold transition-all group shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Loyiha ZIP faylini yuklash</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} “Yagona Vatan — yagona xalq” o‘quv-uslubiy loyiha portali. 226-maktab 10-“V” sinf faol o‘quvchilari loyiha ishi.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Yuqoriga qaytish</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
