import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function PresidentQuoteSection() {
  return (
    <section className="py-12 bg-slate-900 text-white relative overflow-hidden border-y border-blue-900/60">
      {/* Background Girih Ornamental Texture & Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-[#0a2558] to-slate-950 opacity-95" />
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.4) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 215, 0, 0.3) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-blue-600/40 bg-gradient-to-br from-[#0b296b] via-[#0d348a] to-[#081d4a] shadow-2xl p-6 sm:p-10 lg:p-12"
        >
          {/* Subtle Coat of Arms Emblem Watermark */}
          <div className="absolute top-6 right-8 opacity-15 pointer-events-none hidden md:block text-7xl">
            🇺🇿
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Portrait & Official Card Visual */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/30 group">
                <img
                  src="/src/assets/images/uzbek_president_card_1789137384247.jpg"
                  alt="O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev"
                  className="w-full h-72 sm:h-80 object-cover transform group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <div className="text-sm font-extrabold tracking-wide text-white uppercase">
                    Shavkat Mirziyoyev
                  </div>
                  <div className="text-xs text-amber-300 font-medium">
                    O‘zbekiston Respublikasi Prezidenti
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Presidential Quote from User Graphic */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              {/* Emblem icon + Badge matching user image */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-800/80 border border-amber-400/40 flex items-center justify-center text-lg shadow-inner">
                  🇺🇿
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-blue-950 text-xs font-black uppercase tracking-wider shadow-sm self-start">
                  <span className="w-2 h-2 rounded-full bg-blue-900 animate-pulse"></span>
                  ISLOHOTLARNING O‘ZAGI
                </div>
              </div>

              {/* Quote Body */}
              <div className="relative">
                <Quote className="w-10 h-10 text-amber-400/30 absolute -top-4 -left-4 -z-10" />
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-relaxed sm:leading-snug tracking-tight font-serif">
                  «Mustaqillikning buyuk ahamiyati, avvalo, inson qadri va erkin hayotida namoyon bo‘ladi. “Inson qadri uchun!” degan g‘oyani davlat siyosatining markaziga olib chiqdik»
                </blockquote>
              </div>

              {/* Author Attribution */}
              <div className="pt-4 border-t border-blue-500/30 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-base sm:text-lg font-bold text-amber-400 tracking-wide uppercase">
                    SHAVKAT MIRZIYOYEV
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200">
                    O‘zbekiston Respublikasi Prezidenti
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-xl bg-blue-900/60 border border-blue-700/50 text-[11px] text-blue-300 font-medium">
                  3-hafta: Davlat islohotlari dasturi
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
