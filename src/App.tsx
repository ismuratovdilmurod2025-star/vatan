import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LessonGoals from './components/LessonGoals';
import MotivationSection from './components/MotivationSection';
import CoreThemesSection from './components/CoreThemesSection';
import IndependenceSection from './components/IndependenceSection';
import PresidentQuoteSection from './components/PresidentQuoteSection';
import ReformsComparison from './components/ReformsComparison';
import CyberSecuritySection from './components/CyberSecuritySection';
import HomeworkSection from './components/HomeworkSection';
import Footer from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('maqsad');

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['maqsad', 'motivatsiya', 'mavzular', 'mustaqillik', 'islohotlar', 'kiberxavfsizlik', 'uyga-vazifa'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-200 selection:text-blue-900 font-sans">
      {/* Navigation */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSection={activeSection}
      />

      {/* Global Search Results Drawer if user is actively querying */}
      {searchQuery.trim() && (
        <div className="bg-amber-50 border-b border-amber-200 py-3 px-4 text-xs sm:text-sm text-amber-900 sticky top-28 z-40 shadow-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div>
              <span>Qidiruv so‘rovi: <strong>“{searchQuery}”</strong></span>
              <span className="text-slate-500 ml-2">(Tegishli dars bo‘limiga o‘tish uchun tugmani bosing)</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#mavzular"
                className="px-2.5 py-1 bg-white border border-amber-300 rounded font-semibold text-amber-800 hover:bg-amber-100"
              >
                Asosiy Mavzular
              </a>
              <a
                href="#islohotlar"
                className="px-2.5 py-1 bg-white border border-amber-300 rounded font-semibold text-amber-800 hover:bg-amber-100"
              >
                Islohotlar
              </a>
              <a
                href="#kiberxavfsizlik"
                className="px-2.5 py-1 bg-white border border-amber-300 rounded font-semibold text-amber-800 hover:bg-amber-100"
              >
                Kiberxavfsizlik
              </a>
              <a
                href="#uyga-vazifa"
                className="px-2.5 py-1 bg-white border border-amber-300 rounded font-semibold text-amber-800 hover:bg-amber-100"
              >
                Uyga Vazifa
              </a>
              <button
                onClick={() => setSearchQuery('')}
                className="text-amber-700 hover:text-amber-950 font-bold ml-2 cursor-pointer"
              >
                ✕ Tozalash
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area with Scroll Animations */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Section 1: Goals and Expected Outcomes (No 5-stage timeline) */}
        <LessonGoals />

        {/* Section 2: Motivation ("Bizni yagona xalq sifatida birlashtiradigan kuch nima?") */}
        <MotivationSection />

        {/* Section 3: Core Themes (3 primary themes & Teacher's conclusion) */}
        <CoreThemesSection />

        {/* Section 3.1: Independence & Statehood - Solnoma, Davlat Ramzlari va Ne'matlar */}
        <IndependenceSection />

        {/* Presidential Quote Banner: "Mustaqillikning buyuk ahamiyati... Islohotlarning o'zagi" */}
        <PresidentQuoteSection />

        {/* Section 3.1: Reforms Analysis Matrix ("Avval va Hozir") */}
        <ReformsComparison />

        {/* Section 4: Cybersecurity - "Biz uchun muhim" & Test */}
        <CyberSecuritySection />

        {/* Section 5: Homework Section (Clean guidance for essay topic) */}
        <HomeworkSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
