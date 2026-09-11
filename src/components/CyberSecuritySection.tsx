import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  KeyRound, 
  AlertOctagon, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Eye, 
  EyeOff, 
  Sparkles,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CYBER_QUESTIONS } from '../data/lessonData';

export default function CyberSecuritySection() {
  // Password Tester State
  const [testPassword, setTestPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Calculate password strength
  const calculatePasswordStrength = (pwd: string) => {
    if (!pwd) return { score: 0, text: 'Kiritilmagan', color: 'bg-slate-200' };
    let score = 0;
    if (pwd.length >= 8) score += 25;
    if (pwd.length >= 12) score += 15;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score += 20;
    if (/\d/.test(pwd)) score += 20;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) score += 20;

    if (score < 40) return { score, text: 'Juda zaif', color: 'bg-rose-500' };
    if (score < 70) return { score, text: 'O‘rtacha', color: 'bg-amber-500' };
    return { score, text: 'Mustahkam va xavfsiz', color: 'bg-emerald-500' };
  };

  const pwdStrength = calculatePasswordStrength(testPassword);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    setShowResults(true);

    let correctCount = 0;
    CYBER_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    if (correctCount >= 4) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setShowResults(false);
  };

  const correctAnswersCount = CYBER_QUESTIONS.filter(q => selectedAnswers[q.id] === q.correctAnswer).length;

  return (
    <section id="kiberxavfsizlik" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> IV. Kiberxavfsizlik (“Biz uchun muhim”)
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Raqamli Xavfsizlik va Shaxsiy Ma’lumotlar Himoyasi
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Raqamli texnologiyalar hayotimizga kirdi. Endi o‘zimizni, hisoblarimizni va axborotlarimizni himoya qilishni bilishimiz shart!
          </p>
        </motion.div>

        {/* Informative Explanation Banner + Password Tester */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          
          {/* Left: Security Guidance Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wide mb-3">
                <AlertOctagon className="w-4 h-4" /> Kiberxavfsizlik nima?
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                Raqamli dunyoda shaxsiy ma’lumotlar daxlsizligi
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Kiberxavfsizlik — internet va raqamli qurilmalardan foydalanishda shaxsiy ma’lumotlarimiz, hisoblarimiz va axborotlarimizni himoya qilishga qaratilgan choralar majmuasidir.
              </p>
              
              <div className="p-4 bg-slate-800/90 rounded-2xl border border-slate-700/80 text-xs text-slate-200 space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Xavfli:</strong> Telefon raqami, parol, bank karta ma’lumotlari, shaxsiy hujjatlarni begona shaxslarga yuborish.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Taqiqlanadi:</strong> Noma’lum havolalarni ochish, ishonchsiz fayllarni (.apk, .exe) yuklab olish.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Tavsiya:</strong> Doimo axborotga tanqidiy yondashish va murakkab parollardan foydalanish.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Mas’uliyatli yoshlar jamiyati</span>
              <span className="text-rose-400 font-semibold">PDF o‘quv rejasi</span>
            </div>
          </motion.div>

          {/* Right: Password Strength Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-2">
                <KeyRound className="w-4 h-4" /> Parol Xavfsizligi
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                Mustahkamlikni Tekshirgich
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                O‘quvchilar uchun parolni qanchalik kuchli tuzish mumkinligini sinab ko‘rish trenajyori (haqiqiy parolingizni emas, namunaviy so‘z yozing).
              </p>

              <div className="relative mb-3">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={testPassword}
                  onChange={(e) => setTestPassword(e.target.value)}
                  placeholder="Masalan: Vatanim#2026!"
                  className="w-full pl-3.5 pr-10 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5 mb-4">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-600">Mustahkamlik darajasi:</span>
                  <span className={`font-bold ${
                    pwdStrength.score < 40 ? 'text-rose-600' : pwdStrength.score < 70 ? 'text-amber-600' : 'text-emerald-600'
                  }`}>
                    {pwdStrength.text} ({pwdStrength.score}%)
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${pwdStrength.color} transition-all duration-300`}
                    style={{ width: `${Math.max(pwdStrength.score, 5)}%` }}
                  />
                </div>
              </div>

              {/* Tips checklist */}
              <div className="text-[11px] space-y-1 text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className={testPassword.length >= 8 ? 'text-emerald-600 font-bold' : 'text-slate-400'}>✓</span>
                  <span>Kamida 8-12 belgidan iborat bo‘lishi</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={/[A-Z]/.test(testPassword) && /[a-z]/.test(testPassword) ? 'text-emerald-600 font-bold' : 'text-slate-400'}>✓</span>
                  <span>Katta va kichik harflar qatnashishi (A, a)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={/\d/.test(testPassword) ? 'text-emerald-600 font-bold' : 'text-slate-400'}>✓</span>
                  <span>Raqamlar bo‘lishi (0-9)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={/[!@#$%^&*(),.?":{}|<>]/.test(testPassword) ? 'text-emerald-600 font-bold' : 'text-slate-400'}>✓</span>
                  <span>Maxsus belgilar (#, $, %, !)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
              💡 <em>Maslahat: Hech qachon o‘z ismingiz yoki tug‘ilgan yilingizni parol qilmang!</em>
            </div>
          </motion.div>

        </div>

        {/* 5-Question Quiz from PDF with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase tracking-wide">
                <HelpCircle className="w-4 h-4" /> Mustahkamlash Savollari
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Kiber-savodxonlik: 5 ta muhim savol
              </h3>
            </div>

            {isSubmitted && (
              <div className="flex items-center gap-3">
                <div className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-800">
                  Natija: <span className="text-blue-600 font-extrabold">{correctAnswersCount} / {CYBER_QUESTIONS.length}</span>
                </div>
                <button
                  onClick={handleResetQuiz}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Qayta topshirish
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {CYBER_QUESTIONS.map((q, qIndex) => {
              const selectedOption = selectedAnswers[q.id];
              const isCorrect = selectedOption === q.correctAnswer;
              
              return (
                <div
                  key={q.id}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="w-7 h-7 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {qIndex + 1}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {q.question}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        To‘g‘ri javobni tanlang:
                      </p>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, optIdx) => {
                      const isOptionSelected = selectedOption === optIdx;
                      let optionClasses = "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200";

                      if (isSubmitted) {
                        if (optIdx === q.correctAnswer) {
                          optionClasses = "bg-emerald-50 text-emerald-900 border-emerald-300 ring-1 ring-emerald-400";
                        } else if (isOptionSelected && !isCorrect) {
                          optionClasses = "bg-rose-50 text-rose-900 border-rose-300 ring-1 ring-rose-400";
                        } else {
                          optionClasses = "bg-slate-50 text-slate-400 border-slate-200 opacity-60";
                        }
                      } else if (isOptionSelected) {
                        optionClasses = "bg-blue-50 text-blue-900 border-blue-400 ring-1 ring-blue-400 font-medium";
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${optionClasses}`}
                        >
                          <span className="w-5 h-5 rounded-md bg-white/80 border border-slate-300 font-semibold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="leading-snug">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation feedback */}
                  {isSubmitted && (
                    <div className={`mt-3.5 p-3 rounded-xl text-xs flex items-start gap-2 ${
                      isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'
                    }`}>
                      {isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-bold mr-1">
                          {isCorrect ? 'To‘g‘ri!' : 'Xato!'}
                        </span>
                        <span>{q.explanation}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!isSubmitted && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Javoblarni Tekshirish ({Object.keys(selectedAnswers).length} / {CYBER_QUESTIONS.length})
              </button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
