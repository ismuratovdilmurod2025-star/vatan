import { useState, useEffect } from 'react';
import { BookOpen, Shield, Search, Printer, Share2, Sparkles, Compass, Layers, Landmark, Flag, Download } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeSection: string;
}

export default function Navbar({ searchQuery, onSearchChange, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Yagona Vatan - yagona xalq | O'quvchilar Portali",
        text: "9-11-sinf o'quvchilari uchun loyiha ishi va kiberxavfsizlik ta'lim portali",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const navLinks = [
    { href: '#maqsad', label: 'Maqsad va Natijalar', icon: BookOpen, id: 'maqsad' },
    { href: '#motivatsiya', label: 'Birlashtiruvchi Kuch', icon: Compass, id: 'motivatsiya' },
    { href: '#mavzular', label: 'Asosiy Mavzular', icon: Layers, id: 'mavzular' },
    { href: '#mustaqillik', label: 'Mustaqillik Tarixi', icon: Flag, id: 'mustaqillik' },
    { href: '#islohotlar', label: 'Islohotlar Tahlili', icon: Landmark, id: 'islohotlar' },
    { href: '#kiberxavfsizlik', label: 'Kiberxavfsizlik', icon: Shield, id: 'kiberxavfsizlik' },
    { href: '#uyga-vazifa', label: 'Uyga Vazifa', icon: Sparkles, id: 'uyga-vazifa' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-white border-b border-slate-100'}`}>
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white font-semibold px-2 py-0.5 rounded text-[11px] tracking-wide">
              9-11-SINF
            </span>
            <span className="hidden sm:inline text-blue-200">|</span>
            <span className="font-medium text-slate-200">3-hafta: Loyiha ishi</span>
            <span className="text-blue-300 font-serif italic hidden md:inline">“Yagona Vatan - yagona xalq”</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300 text-[11px]">
            <span className="text-slate-300 font-normal">226-maktab, 10-“V” sinf</span>
            <span className="text-slate-500">•</span>
            <span className="text-amber-400 font-semibold">“O‘zbekiston — umumiy uyimiz”</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="text-lg">🇺🇿</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight flex items-center gap-1.5">
                Yagona Vatan
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span className="text-blue-700">Yagona Xalq</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                O‘quvchilar uchun ta’limiy loyiha portali
              </span>
            </div>
          </a>

          {/* Search bar */}
          <div className="hidden md:flex items-center relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Mavzu yoki atamani qidirish..."
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-blue-400 rounded-lg outline-none transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <link.icon className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href="/yagona-vatan-loyiha.zip"
              download="yagona-vatan-loyiha-226-maktab.zip"
              title="Loyiha barcha kodlari va fayllarini ZIP holatida yuklab olish"
              className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-2 rounded-lg transition-all shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span><span className="hidden sm:inline">ZIP </span>Yuklab olish</span>
            </a>
            <button
              onClick={() => window.print()}
              title="Sahifani chop etish yoki PDF sifatida saqlash"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Chop etish
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Nusxa olindi!' : 'Ulashish'}</span>
            </button>
          </div>

        </div>

        {/* Mobile Search bar */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Qidirish (masalan: islohot, parol, bag'rikenglik)..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-slate-100 border border-transparent focus:border-blue-400 rounded-lg outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Mobile quick pills */}
        <div className="xl:hidden flex items-center gap-2 overflow-x-auto pb-2.5 scrollbar-none text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap px-3 py-1 bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-full font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
