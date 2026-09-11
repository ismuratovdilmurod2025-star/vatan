import { GroupProject, ReformItem, IdeaPost, QuizQuestion } from '../types';

export const LESSON_META = {
  grade: "9-11-sinf o‘quvchilari uchun",
  week: "3-hafta",
  title: "Yagona Vatan - yagona xalq",
  totalDuration: "45 daqiqa",
  motto: "O‘zbekiston — umumiy uyimiz",
  purpose: "O‘zbekistonda istiqomat qilayotgan turli millat va elat vakillarining yagona maqsad yo‘lida birlashgani, o‘zaro ahilligi, do‘stligi va bag‘rikenglik muhitini chuqur anglatish; o‘quvchilarda milliy g‘urur, Vatanga muhabbat va yurtimizdagi tinchlik hamda osoyishtalikni qadrlash hissini shakllantirish.",
  expectedOutcomes: [
    {
      title: "Millatlararo totuvlik siyosati",
      desc: "Mamlakatimizda olib borilayotgan do'stlik va bag'rikenglik siyosatining chuqur mazmunini anglab yetish."
    },
    {
      title: "Mustaqil axborot izlash ko'nikmasi",
      desc: "Manbalar, arxivlar, statistik ma'lumotlar bilan ishlash hamda so'rovnomalar o'tkazish malakasini oshirish."
    },
    {
      title: "Jamoada hamjihatlikda ishlash",
      desc: "Guruhlarda vazifalarni taqsimlash, o'zaro hurmat va fikrlarni erkin bayon etish mahoratini egallash."
    },
    {
      title: "Taqdimot va notiqlik san'ati",
      desc: "Ommaviy axborot vositalari yoki sinf oldida loyiha ishini ishonchli va zamonaviy vositalarda himoya qilish."
    },
    {
      title: "Sog'lom ma'naviy immunitet",
      desc: "Yot va buzg'unchi g'oyalarga qarshi immunitet, turli millat urf-odatlari va qadriyatlariga samimiy ehtirom."
    }
  ],
  stages: [
    {
      id: "stage-1",
      number: "I",
      name: "Tashkiliy qism",
      duration: "5 daqiqa",
      desc: "Salomlashish, davomatni aniqlash, darsga ruhiy tayyorgarlik va maqsadni tushuntirish."
    },
    {
      id: "stage-2",
      number: "II",
      name: "Motivatsion qism",
      duration: "5 daqiqa",
      desc: "“Bizni yagona xalq sifatida birlashtiradigan kuch nima?” muammoli savol va aqliy hujum."
    },
    {
      id: "stage-3",
      number: "III",
      name: "Asosiy qism",
      duration: "20 daqiqa",
      desc: "3 ta ijodiy guruhning taqdimotlari (har bir guruhga 3 daqiqa reglament), savol-javob va tahlil."
    },
    {
      id: "stage-4",
      number: "IV",
      name: "Mustahkamlash (“Biz uchun muhim”)",
      duration: "10 daqiqa",
      desc: "Zamonaviy raqamli hayotda yoshlar uchun kiberxavfsizlik qoidalari, shaxsiy ma'lumotlar himoyasi."
    },
    {
      id: "stage-5",
      number: "V",
      name: "Uyga vazifa",
      duration: "5 daqiqa",
      desc: "“Yangi O‘zbekiston - yangi yutuqlar maskani” mavzusida qisqa esse yozish va xulosa chiqarish."
    }
  ]
};

export const INITIAL_IDEAS: IdeaPost[] = [
  {
    id: "idea-1",
    author: "Zuhra Alimova",
    grade: "10-B sinf",
    category: "Vatanga muhabbat",
    text: "Bizni birlashtiruvchi eng katta kuch — bu kindik qonimiz to'kilgan muqaddas zamin, ajdodlarimizdan qolgan boy meros va musaffo osmonimizdir.",
    likes: 24,
    timestamp: "Bugun, 08:35",
    isInitial: true
  },
  {
    id: "idea-2",
    author: "Jasur Rahimov",
    grade: "11-A sinf",
    category: "Ona tilimiz",
    text: "Ona tilimiz — xalqimiz ruhining ko'zgusi. Qaysi millat vakili bo'lishimizdan qat'i nazar, davlat tili barchamizni birdamlikda bog'lab turadi.",
    likes: 19,
    timestamp: "Bugun, 08:42",
    isInitial: true
  },
  {
    id: "idea-3",
    author: "Malika Ismoilova",
    grade: "9-V sinf",
    category: "Do'stlik va Bag'rikenglik",
    text: "Yurtimizda 130 dan ortiq millat vakillari bir oiladek tinch-totuv yashayotgani bizning eng ulug' boyligimizdir.",
    likes: 31,
    timestamp: "Bugun, 08:50",
    isInitial: true
  },
  {
    id: "idea-4",
    author: "Shohruh Mirzayev",
    grade: "10-A sinf",
    category: "Kelajakka intilish",
    text: "Yangi O'zbekistonni jahonning eng ilg'or davlatlariga aylantirishdek yagona va yuksak maqsad butun yoshlarni birlashtiradi.",
    likes: 27,
    timestamp: "Bugun, 09:05",
    isInitial: true
  }
];

export const GROUP_PROJECTS: GroupProject[] = [
  {
    id: "group-1",
    number: 1,
    title: "Bizni birlashtirgan kuch",
    subtitle: "O‘zbekiston jamiyatini birlashtiruvchi asosiy qadriyatlar",
    theme: "Qadriyatlar, Hamjihatlik va Millatlararo totuvlik",
    color: "blue",
    bgGradient: "from-blue-600 to-indigo-700",
    image: "/src/assets/images/uzbek_youth_unity_1789137362409.jpg",
    description: "Mazkur guruh taqdimot davomida O‘zbekiston jamiyatini birlashtiruvchi asosiy qadriyatlarni yoritib beradi. Har bir tanlangan qadriyatning jamiyatdagi ahamiyati qisqacha izohlanib, uning xalqni birlashtirish va mamlakat taraqqiyotidagi o‘rni amaliy misollar asosida ochib beriladi.",
    keyPoints: [
      {
        title: "Vatanga muhabbat va sadoqat",
        description: "Har bir vatandosh qalbida ajdodlar merosiga hurmat, tug'ilib o'sgan go'shani asrash va uning dovrug'ini yuksaltirish tuyg'usi.",
        iconName: "HeartHandshake",
        details: [
          "O'zbekiston - har birimizning or-nomusimiz va faxrimiz",
          "Ona tuproqni e'zozlash xalqimizning qon-qoniga singgan muqaddas fazilat"
        ]
      },
      {
        title: "Tinchlik va osoyishtalik",
        description: "Dunyoning ko'plab hududlarida notinchlik hukm surayotgan davrda O'zbekistondagi barqarorlik eng oliy ne'matdir.",
        iconName: "ShieldCheck",
        details: [
          "Xonadonlarimiz farovonligi va bolalar quvonchi tinchlik mevasi",
          "Mahallalarda xavfsiz muhit va qo'ni-qo'shnichilik ahilligi"
        ]
      },
      {
        title: "Xalq birdamligi va hamjihatlik",
        description: "Hashar, to'y-ma'rakalarda birga bo'lish, qiyin damlarda yelkadosh bo'lish kabi asriy an'analar.",
        iconName: "Users",
        details: [
          "“Birlashgan daryo bo'lar, tarqalgan irmoq bo'lar” xalq maqoli",
          "Bir-biriga muruvvat ko'rsatish va saxovat madaniyati"
        ]
      },
      {
        title: "O‘zaro hurmat va bag‘rikenglik",
        description: "130 dan ortiq millat va elat, 16 ta diniy konfessiya vakillari ahil-inoq istiqomat qilayotgan o'ziga xos bag'rikenglik makoni.",
        iconName: "Globe2",
        details: [
          "Madaniyat markazlari va turli tillardagi maktablar faoliyati",
          "30-iyul — O'zbekistonda “Xalqlar do'stligi kuni” sifatida nishonlanishi"
        ]
      },
      {
        title: "Umumiy tarix va boy madaniy meros",
        description: "Ipak yo'lining chorrahasi bo'lgan muazzam Samarqand, Buxoro, Xiva va Toshkentning ming yillik merosi barchamizni g'ururlantiradi.",
        iconName: "Landmark",
        details: [
          "Imom Buxoriy, Beruniy, Ibn Sino, Navoiy merosi butun insoniyat xazinasi",
          "Milliy bayramlarimiz: Navro'z, Mustaqillik, Ramazon va Qurbon hayiti"
        ]
      },
      {
        title: "Kelajakka intilish va yoshlar shijoati",
        description: "Bugungi yosh avlodning zamonaviy texnologiyalarni egallash, ilm-fanga intilish va vatanimizni dunyoga tanitishdagi qat'iyati.",
        iconName: "Sparkles",
        details: [
          "Olimpiada chempionlari, xalqaro fan olimpiadalari g'oliblari",
          "Dunyo bo'ylab bilim olayotgan va IT loyihalar qilayotgan yoshlar"
        ]
      }
    ],
    conclusions: "Bizni birlashtiruvchi qadriyatlar shunchaki shior emas, balki kundalik hayotimizning ajralmas asosi va ertangi yorug' kunimiz kafolatidir."
  },
  {
    id: "group-2",
    number: 2,
    title: "Mustaqillik bizga nima berdi?",
    subtitle: "Mustaqillikdan keyin O‘zbekiston hayotida yuz bergan tub o‘zgarishlar va yaratilgan imkoniyatlar",
    theme: "Davlatchilik, Ramzlar, Huquqlar va Erkinlik",
    color: "emerald",
    bgGradient: "from-emerald-600 to-teal-700",
    image: "/src/assets/images/uzbek_heritage_hero_1789137337498.jpg",
    description: "Mazkur guruh taqdimot davomida mustaqillikdan keyin O‘zbekiston hayotida yuz bergan asosiy o‘zgarish va imkoniyatlarni yoritib beradi. Davlat ramzlari, ona tili, tarixiy haqiqat, zamonaviy ta'lim va xalqaro munosabatlarga urg'u beriladi.",
    keyPoints: [
      {
        title: "Davlat va milliy davlatchilik",
        description: "O'zbekiston o'z taqdirini o'zi belgilaydigan, BMTning teng huquqli a'zosi bo'lgan suveren, mustaqil davlatga aylandi.",
        iconName: "Building2",
        details: [
          "Mustaqil Konstitutsiya va milliy qonunchilik tizimi",
          "Milliy armiya — sarhadlarimiz va tinchligimiz qalqoni"
        ]
      },
      {
        title: "Davlat ramzlari",
        description: "Davlat bayrog'i, gerbi, madhiyasi va milliy valyutamiz — so'm mustaqilligimizning muqaddas timsollari sifatida qaror topdi.",
        iconName: "Flag",
        details: [
          "Bayrog'imiz xalqaro anjumanlar va Olimpiya shohsupalarida mag'rur hilpiraydi",
          "Madhiyamiz yangraganda har bir yurtdosh qalbini to'lqinlanish qamrab oladi"
        ]
      },
      {
        title: "Ona tiliga e'tibor va uning nufuzi",
        description: "O'zbek tili davlat tili maqomiga ega bo'ldi, lotin yozuviga asoslangan alifbo joriy qilindi va uning xalqaro nufuzi oshdi.",
        iconName: "BookOpen",
        details: [
          "21-oktyabr — O'zbek tili bayrami kuni",
          "Ona tilimizda yangi darsliklar, elektron ensiklopediyalar va dasturlar yaratilmoqda"
        ]
      },
      {
        title: "Tarixiy meros va qadriyatlarni tiklash",
        description: "Sobiq tuzum davrida nomlari qoralangan allomalarimiz, ma'rifatparvar jadid bobolarimizning muqaddas nomlari oqlandi va merosi tiklandi.",
        iconName: "History",
        details: [
          "Amir Temur, Mirzo Ulug'bek, Bobur merosi xalqimizga qaytarildi",
          "Jadidlar maktabi va jadidchilik harakati chuqur o'rganilmoqda"
        ]
      },
      {
        title: "Zamonaviy ta'lim va ilm-fan",
        description: "Prezident maktablari, ixtisoslashtirilgan ijod maktablari, xalqaro universitetlar filiallari ochildi va ta'lim tizimi modernizatsiya qilindi.",
        iconName: "GraduationCap",
        details: [
          "Oliy ta'lim bilan qamrov darajasi 9 foizdan 42 foizdan ziyodga yetdi",
          "Yuzlab xorijiy nufuzli oliy o'quv yurtlari (Westminster, INHA, Webster va b.) faoliyat yuritmoqda"
        ]
      },
      {
        title: "Xalqaro aloqalar va fuqaro huquqlari",
        description: "Ochiq, do'stona va konstruktiv tashqi siyosat; fuqarolarning insoniy qadr-qimmati, shaxsiy daxlsizligi va erkinliklari kafolatlangan.",
        iconName: "Compass",
        details: [
          "Markaziy Osiyo davlatlari bilan do'stona va ochiq chegaralar siyosati",
          "Yangi tahrirdagi Konstitutsiyada 'Inson — jamiyat — davlat' tamoyili ustuvor etib belgilandi"
        ]
      }
    ],
    conclusions: "Mustaqillik bizga o'zligimizni anglash, orzu-maqsadlarimizni erkin amalga oshirish va dunyo hamjamiyatida munosib o'rin egallash imkoniyatini berdi."
  },
  {
    id: "group-3",
    number: 3,
    title: "O‘zbekistondagi islohotlar",
    subtitle: "Ta'lim, tibbiyot, iqtisodiyot, raqamlashtirish, ekologiya va yoshlar sohasidagi yangilanishlar",
    theme: "Yangilanishlar, Raqamlashtirish, Inson Qadri va Ekologiya",
    color: "amber",
    bgGradient: "from-amber-600 to-orange-700",
    image: "/src/assets/images/uzbek_reforms_modern_1789137404124.jpg",
    description: "Bu guruh ta’lim, tibbiyot, iqtisodiyot, tadbirkorlik, raqamlashtirish, davlat xizmatlari, mahalla va ijtimoiy himoya, ekologiya, yoshlar siyosati sohalaridagi islohotlarni 'avval va hozir' yoki 'muammo - yechim - natija' ko‘rinishida chuqur tahlil qiladi.",
    keyPoints: [
      {
        title: "Ta'lim va Yoshlar siyosati",
        description: "Maktab ta'limida xalqaro standartlar, zamonaviy darsliklar, IT yo'nalishlar, “El-yurt umidi” jamg'armasi orqali xorijda ta'lim.",
        iconName: "Award",
        details: [
          "Yoshlar daftari va yoshlar tadbirkorligiga foizsiz kreditlar",
          "Prezident va ixtisoslashtirilgan maktablar tarmog'i"
        ]
      },
      {
        title: "Raqamlashtirish va IT-sohasi",
        description: "IT Park rezidentlari soni yuzlab marta oshdi, IT xizmatlari eksporti yuzlab million dollarga yetdi, elektron davlat xizmatlari joriy etildi.",
        iconName: "Cpu",
        details: [
          "Bir million o'zbek dasturchisi loyihasi",
          "my.gov.uz orqali 600 dan ortiq davlat xizmatlarining uydan chiqmasdan ko'rsatilishi"
        ]
      },
      {
        title: "Mahalla instituti va Ijtimoiy himoya",
        description: "Har bir mahallada 'Mahalla yettiligi' tizimi, 'Inson' ijtimoiy xizmatlar markazlari va ehtiyojmand qatlamni aniq qo'llab-quvvatlash.",
        iconName: "Home",
        details: [
          "Muammolarni joyida hal qilish mexanizmi",
          "Kambag'allikni qisqartirish bo'yicha maqsadli dasturlar"
        ]
      },
      {
        title: "Ekologiya va 'Yashil makon'",
        description: "Iqlim o'zgarishiga qarshi kurash, millionlab ko'chatlar ekish, Orol dengizi tubida 2 million gektarga yaqin o'rmon barpo etilishi.",
        iconName: "Trees",
        details: [
          "“Yashil makon” umummilliy loyihasi",
          "Qayta tiklanuvchi yashil energiya — quyosh va shamol elektr stansiyalari"
        ]
      }
    ],
    conclusions: "Islohotlarning tub maqsadi bitta: inson uchun munosib hayot sharoitini yaratish, har bir o'quvchi va yoshning iste'dodini to'liq yuzaga chiqarishdir."
  }
];

export const REFORMS_COMPARISON: ReformItem[] = [
  {
    id: "reform-1",
    title: "Ta'lim va Maktab tizimi",
    category: "Ta'lim",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    avval: "Eski metodikaga asoslangan darsliklar, qog'oz jurnallar, kompyuter sinflarining yetishmasligi va cheklangan oliy ta'lim kvotalari (9-10%).",
    hozir: "Zamonaviy kompetensiyaga asoslangan darsliklar, 'eMaktab' tizimi, interaktiv doskalar, IT to'garaklar va 42% dan oshgan oliy ta'lim qamrovi.",
    muammo: "Bitiruvchilarning zamonaviy kasblarga va xorijiy tillarga tayyorgarligi pastligi.",
    yechim: "Prezident ta'lim muassasalari tajribasini barcha maktablarga joriy etish, xorijiy tillarni sertifikat bilan o'rganishni rag'batlantirish.",
    natija: "Xalqaro fan olimpiadalarida yuzlab medallar, xorijiy tillarni biluvchi o'quvchilar ko'rsatkichining 5 barobar o'sishi."
  },
  {
    id: "reform-2",
    title: "Davlat xizmatlari va Byurokratiya",
    category: "Davlat xizmatlari",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    avval: "Har bir ma'lumotnoma uchun idorama-idora sarson bo'lish, soatlab navbat kutish, qog'ozbozlik va korrupsion xavflar.",
    hozir: "Yagona Davlat Xizmatlari Markazlari (DXM) va 'my.gov.uz' mobil ilovasi orqali 600 dan ziyod xizmatlar 1 daqiqada smartfon orqali taqdim etilmoqda.",
    muammo: "Aholining vaqt va mablag' sarfi, hujjat aylanishidagi byurokratiya.",
    yechim: "Yagona elektron portal va xizmatlarni to'liq raqamlashtirish.",
    natija: "Yiliga 20 milliondan ortiq murojaatlar elektron ko'rinishda tez va shaffof hal etilmoqda."
  },
  {
    id: "reform-3",
    title: "Raqamlashtirish va IT sohasidagi sakrash",
    category: "Raqamlashtirish",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    avval: "Sekin internet tezligi, cheklangan dasturchilar jamoasi va xorijga IT xizmatlar eksportining deyarli yo'qligi.",
    hozir: "Respublika bo'ylab IT Park filiallari, optik tolali yuqori tezlikdagi internet, 1000 dan ortiq rezident kompaniyalar va 350+ mln dollar IT eksporti.",
    muammo: "Yoshlar uchun yuqori daromadli zamonaviy texnologiya kasblarining kamligi.",
    yechim: "IT Parklarga soliq imtiyozlari berish, bepul IT kurslari va o'quv markazlarini qo'llab-quvvatlash.",
    natija: "O'n minglab yosh dasturchilar jahonning eng nufuzli IT kompaniyalarida masofadan turib yuqori maosh bilan ishlamoqda."
  },
  {
    id: "reform-4",
    title: "Ekologiya: 'Yashil makon' va Orolbo'yi",
    category: "Ekologiya",
    icon: "Trees",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    avval: "Yashil maydonlarning qisqarishi, qurilishlar sababli daraxtlar kesilishi va Orol dengizi qurigan tubidan tuz-chang bo'ronlari ko'tarilishi.",
    hozir: "“Yashil makon” umummilliy loyihasi doirasida yiliga 200 mln tup daraxt ekilishi, Orol tubida 1.8 mln gektarda saksovulzorlar barpo qilinishi.",
    muammo: "Cho'llanish, chang bo'ronlari va havoning ifloslanishi xavfi.",
    yechim: "Daraxt kesishga doimiy moratoriy e'lon qilish, yashil belbog'lar barpo etish va qayta tiklanuvchi energetikani kengaytirish.",
    natija: "Shahar va qishloqlarda mikroiqlim yaxshilanmoqda, Orolbo'yi fojiasi asoratlari izchil yumshatilmoqda."
  }
];

export const CYBER_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Internetda notanish odamdan 'Siz 10 000 000 so'm yutib oldingiz, SMS kodni ayting' degan xabar kelsa, qanday yo'l tutish kerak?",
    options: [
      "Darhol SMS kodni unga yuborish",
      "Xabarga e'tibor bermasdan uni bloklash va ota-onaga yoki o'qituvchiga aytish",
      "Kartadagi barcha raqamlarni rasmga olib yuborish",
      "Do'stlarga tarqatish"
    ],
    correctAnswer: 1,
    explanation: "Hech qachon SMS kod yoki karta ma'lumotlarini begona kishilarga bermang! Bu firibgarlik (fishing) usulidir."
  },
  {
    id: 2,
    question: "Kiberxavfsizlik qoidalariga ko'ra eng kuchli va ishonchli parol qanday bo'lishi kerak?",
    options: [
      "O'z tug'ilgan yilingiz va ismingiz (masalan: ali2008)",
      "Ketma-ket raqamlar (12345678 yoki qwerty)",
      "Katta va kichik harflar, raqamlar hamda maxsus belgilar aralashgan kamida 8-12 belgidan iborat murakkab kombinatsiya",
      "Barcha ijtimoiy tarmoqlar uchun bitta sodda parol"
    ],
    correctAnswer: 2,
    explanation: "Murakkab parol (masalan: T0shk3nt#2026!) xakerlar va parolni tanlash dasturlaridan hisobingizni ishonchli himoya qiladi."
  },
  {
    id: 3,
    question: "Ijtimoiy tarmoqlarda (Telegram, Instagram, TikTok) e'lon qilingan har qanday vahimali yoki shov-shuvli xabarga darhol ishonish to'g'rimi?",
    options: [
      "Ha, internetda nima yozilsa, hammasi haqiqat",
      "Yo'q, axborotga tanqidiy yondashib, uni rasmiy davlat axborot manbalaridan tekshirish kerak",
      "Tezda barcha guruhlarga tarqatish shart",
      "Faqat kommentariyadagi odamlar fikriga ishonish kerak"
    ],
    correctAnswer: 1,
    explanation: "O'quvchida doimo 'axborot immuniteti' bo'lishi lozim. Feyk (yolg'on) xabarlarni tekshirmay turib tarqatish qonunan taqiqlanadi."
  },
  {
    id: 4,
    question: "Noma'lum elektron pochta yoki xabardagi shubhali ilova (fayl yoki .apk, .exe) kelganda nima qilish lozim?",
    options: [
      "Qiziqib tezda yuklab olib, telefonga o'rnatish kerak",
      "Faylni ochmaslik, havolani bosmaslik va uni o'chirib tashlash",
      "Uni do'stlarga yuborib tekshirib ko'rishini so'rash",
      "Telefondagi parollarni o'chirib keyin ochish"
    ],
    correctAnswer: 1,
    explanation: "Noma'lum fayllar ichida virus yoki ma'lumotlarni o'g'irlaydigan josus dasturlar bo'lishi mumkin. Ularni ochish xavflidir!"
  },
  {
    id: 5,
    question: "Nima sababli yoshlarning kiberxavfsizlik qoidalarini puxta bilishi juda muhim?",
    options: [
      "Faqat kompyuter o'yinlarida yutish uchun",
      "O'zining, oilasining shaxsiy va moliyaviy ma'lumotlarini himoya qilish, raqamli madaniyatli fuqaro bo'lish uchun",
      "Hech qanday ahamiyati yo'q",
      "Faqat imtihondan 5 baho olish uchun"
    ],
    correctAnswer: 1,
    explanation: "Zamonaviy raqamli dunyoda bilimli bo'lish bilan birga texnologiyalardan xavfsiz va mas'uliyatli foydalanish har bir yoshning burchidir."
  }
];

export const MOTIVATION_CONCEPTS = [
  {
    id: "concept-1",
    title: "Vatan",
    description: "Kindik qonimiz to‘kilgan muqaddas zamin, ajdodlarimizdan meros qolgan bebaho boyligimiz va umumiy uyimiz."
  },
  {
    id: "concept-2",
    title: "Ona tili",
    description: "Xalqimizning ruhi, milliy o‘zligimiz ko‘zgusi hamda barchamizni bir butun qilib bog‘lab turuvchi ma’naviy ko‘prik."
  },
  {
    id: "concept-3",
    title: "Umumiy tarix",
    description: "Asrlar davomida birga yengib o‘tilgan mashaqqatlar, buyuk allomalar xazinasi va yuksak milliy iftixor manbai."
  },
  {
    id: "concept-4",
    title: "Milliy qadriyatlar",
    description: "Mehr-oqibat, kattalarga hurmat, mehmondo‘stlik, hamjihatlik va 130 dan ziyod millat va elatlarning do‘stona bag‘rikengligi."
  },
  {
    id: "concept-5",
    title: "Tinchlik va hamjihatlik",
    description: "Har bir xonadon farovonligi, yoshlar kamoloti va vatanimizning qudratli taraqqiyotining bosh garovi."
  }
];

export const ESSAY_TOPICS = {
  mainTitle: "Yangi O‘zbekiston — yangi yutuqlar maskani",
  description: "Darsda o‘rganilgan milliy qadriyatlar, mustaqillik bergan imkoniyatlar va so‘nggi yillardagi tub islohotlar asosida o‘quvchilar tomonidan yoziladigan ijodiy esse.",
  suggestedPlan: [
    {
      step: "1-bosqich",
      title: "Kirish",
      guidance: "Mustaqillik, tinchlik va Yangi O‘zbekiston tushunchasining mazmun-mohiyati haqida umumiy fikrlar."
    },
    {
      step: "2-bosqich",
      title: "Asosiy qism",
      guidance: "So‘nggi yillarda ta’lim, fan, IT, tibbiyot va davlat xizmatlarida erishilgan aniq yutuqlar va o‘zgarishlar."
    },
    {
      step: "3-bosqich",
      title: "Shaxsiy munosabat",
      guidance: "Yoshlarga berilayotgan keng imkoniyatlar va vatan taraqqiyotiga qo‘shmoqchi bo‘lgan shaxsiy hissangiz."
    },
    {
      step: "4-bosqich",
      title: "Xulosa",
      guidance: "Yagona xalq sifatida Yangi O‘zbekiston kelajagiga bo‘lgan ishonch va vatanparvarlik xulosasi."
    }
  ]
};

export interface IndependenceMilestone {
  year: string;
  exactDate: string;
  title: string;
  significance: string;
  category: "politics" | "symbols" | "constitution" | "economy" | "world";
  badge: string;
}

export const INDEPENDENCE_TIMELINE: IndependenceMilestone[] = [
  {
    year: "1991",
    exactDate: "31-avgust",
    title: "O‘zbekiston Respublikasi Davlat mustaqilligining e’lon qilinishi",
    significance: "O‘zbekiston o‘z mustaqilligini jahonga tantanali e’lon qildi. 1-sentyabr — umumxalq bayrami “Mustaqillik kuni” deb belgilandi. Xalqimiz asriy orzusi ushaldi.",
    category: "politics",
    badge: "Tarixiy burilish"
  },
  {
    year: "1991",
    exactDate: "18-noyabr",
    title: "Davlat bayrog‘ining qabul qilinishi",
    significance: "Mustaqil O‘zbekistonning ilk davlat ramzi — moviy, oq, yashil ranglar, qizil hoshiyalar, hilol va 12 yulduzni o‘zida mujassam etgan Davlat bayrog‘i tasdiqlandi.",
    category: "symbols",
    badge: "Davlat ramzi"
  },
  {
    year: "1992",
    exactDate: "2-mart",
    title: "O‘zbekistonning BMTga a’zo bo‘lishi",
    significance: "O‘zbekiston Birlashgan Millatlar Tashkilotining (BMT) teng huquqli a’zosiga aylandi. Nyu-Yorkdagi BMT bosh qarorgohi oldida O‘zbekiston bayrog‘i hilpiray boshladi.",
    category: "world",
    badge: "Xalqaro tan olinish"
  },
  {
    year: "1992",
    exactDate: "2-iyul",
    title: "Davlat gerbining tasdiqlanishi",
    significance: "Baxt va erk qushi — afsonaviy Humo, serquyosh diyorimiz nurlari, to‘kinchilik timsoli bo‘lgan bug‘doy va paxta chambari mujassam bo‘lgan Davlat gerbi qabul qilindi.",
    category: "symbols",
    badge: "Muqaddas timsol"
  },
  {
    year: "1992",
    exactDate: "8-dekabr",
    title: "O‘zbekiston Respublikasi Konstitutsiyasining qabul qilinishi",
    significance: "Mustaqil davlatimizning huquqiy poydevori — Bosh Qomusimiz qabul qilindi. Inson erkinligi, fuqarolik jamiyati va qonun ustuvorligi bosh tamoyil etib muhrlandi.",
    category: "constitution",
    badge: "Bosh Qomus"
  },
  {
    year: "1992",
    exactDate: "10-dekabr",
    title: "Davlat madhiyasining qabul qilinishi",
    significance: "O‘zbekiston Respublikasining Davlat madhiyasi qabul qilindi. Mutal Burhonov bastalagan ulug‘vor musiqa va Abdulla Oripov she’ri xalqimizning faxr madhiyasiga aylandi.",
    category: "symbols",
    badge: "Milliy g‘urur"
  },
  {
    year: "1994",
    exactDate: "1-iyul",
    title: "Milliy valyutamiz — “So‘m”ning muomalaga kiritilishi",
    significance: "O‘zbekiston o‘z milliy valyutasi — “so‘m”ni muomalaga chiqardi. Bu iqtisodiy mustaqillikni mustahkamlash va mustaqil pul-kredit tizimini yaratishda hal qiluvchi qadam bo‘ldi.",
    category: "economy",
    badge: "Iqtisodiy asos"
  },
  {
    year: "2023",
    exactDate: "30-aprel",
    title: "Yangi tahrirdagi Konstitutsiyaning qabul qilinishi",
    significance: "Umumxalq referendumi orqali O‘zbekiston Respublikasi Konstitutsiyasi yangi tahrirda qabul qilindi. O‘zbekiston — suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat deb belgilandi.",
    category: "constitution",
    badge: "Yangi O‘zbekiston"
  }
];

export interface StateSymbolItem {
  id: string;
  name: string;
  lawDate: string;
  meaning: string;
  symbolism: string[];
  quote: string;
}

export const STATE_SYMBOLS: StateSymbolItem[] = [
  {
    id: "flag",
    name: "Davlat Bayrog‘i",
    lawDate: "1991-yil 18-noyabr",
    meaning: "O‘zbekiston suvereniteti va xalqimizning tinchlik, taraqqiyot va ezgulik yo‘lidagi intilishlari timsoli.",
    symbolism: [
      "Moviy rang — musaffo osmon, toza suv va Amir Temur saltanati bayrog‘ining ramziy davomiyligi.",
      "Oq rang — muqaddas tinchlik, beg‘uborlik, poklik va xalqimizning oq niyatlari ifodasi.",
      "Yashil rang — serhosil tabiat, yangilanish, yasharish va navqironlik timsoli.",
      "Qizil hoshiyalar — har bir tirik jonzot vujudida oqayotgan hayotiy quvvat va abadiyat belgisi.",
      "Yarim oy va 12 yulduz — mustaqillik tongi, qadimiy sivilizatsiyamiz va 12 oy / mukammallik ifodasi."
    ],
    quote: "Bayrog‘imiz — milliy g‘ururimiz, xalqaro maydonlardagi yuksak obro‘-e’tiborimiz ko‘zgusidir."
  },
  {
    id: "emblem",
    name: "Davlat Gerbi",
    lawDate: "1992-yil 2-iyul",
    meaning: "Xalqimizning erkinlik, mehmondo‘stlik, to‘kin-sochinlik va yuksak ma’naviyatini ifodalovchi muqaddas tamg‘a.",
    symbolism: [
      "Humo qushi — baxt, erk, olijanoblik va himmat ramzi. U qanotlarini yoyib, butun yurtimizni o‘z panohiga olgan.",
      "Oltin quyosh va nurlar — saxovatli O‘zbekistonning serquyoshligi va yorqin, saodatli kelajagi kafolati.",
      "Bug‘doy va paxta chambari — rizq-ro‘z, to‘kinchilik va mehnatkash xalqimizning asosiy boyliklari.",
      "Sakkiz burchakli yulduz — respublikamizning jipsligi, birdamligi va o‘zaro hamjihatligining abadiy belgisi.",
      "Amudaryo va Sirdaryo — yurtimizga hayot va baraka ulashuvchi ikki buyuk daryo oqimi."
    ],
    quote: "Gerbimiz — asrlar silsilasida shakllangan ezgu qadriyatlarimiz va milliy o‘zligimiz tamg‘asidir."
  },
  {
    id: "anthem",
    name: "Davlat Madhiyasi",
    lawDate: "1992-yil 10-dekabr",
    meaning: "Xalqimizning vatanparvarlik ruhi, o‘tmish shon-sharafi va ertangi buyuk kelajakka bo‘lgan mustahkam ishonch sadolari.",
    symbolism: [
      "Musiqasi: O‘zbekiston xalq artisti Mutal Burhonov tomonidan yaratilgan ulug‘vor, tantanavor ohang.",
      "Matni: O‘zbekiston Qahramoni, xalq shoiri Abdulla Oripov qalamiga mansub chuqur falsafiy satrlar.",
      "Madhiyamiz jaranglaganda har bir fuqaro o‘rnidan turib, qo‘lini ko‘ksiga qo‘yishi vatan oldidagi muqaddas burchidir.",
      "Xalqaro sport arenalari, Olimpiada shohsupalari va davlat tashriflarida yangrab, jahon ahlini hayratga soladi."
    ],
    quote: "Madhiyamiz — millatimiz qalbining musiqiy tarannumi, yurt ishqi va faxrimizdir."
  },
  {
    id: "constitution",
    name: "Bosh Qomusimiz (Konstitutsiya)",
    lawDate: "1992-yil 8-dekabr (2023-yil 30-aprelda yangilangan)",
    meaning: "Davlatimizning huquqiy asosi, inson qadri, huquq va erkinliklarining bosh kafolati.",
    symbolism: [
      "O‘zbekiston — suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat (1-modda).",
      "“Inson — jamiyat — davlat” tamoyili qonunchilikning bosh mezoniga aylantirildi.",
      "Har bir fuqaroning ta’lim olish, tibbiy yordam, mehnat qilish va munosib hayot kechirish huquqi kafolatlangan.",
      "Majburiy mehnat, shu jumladan bolalar mehnati konstitutsiya darajasida qat’iy taqiqlandi."
    ],
    quote: "Konstitutsiya — baxtimiz qomusi, erkin va farovon hayotimizning mustahkam tayanchi."
  }
];

export const INDEPENDENCE_CORE_VALUES = [
  {
    title: "O‘zbek tilining davlat tili maqomi",
    detail: "Ona tilimiz o‘zining munosib nufuziga ega bo‘ldi, lotin yozuviga asoslangan alifboga o‘tildi va davlat ish yurituvining asosi sifatida mustahkamlandi."
  },
  {
    title: "Tarixiy adolat va buyuk ajdodlar me’rosi",
    detail: "Amir Temur, Imom Buxoriy, Mirzo Ulug‘bek, Alisher Navoiy va ma’rifatparvar jadidlarimiz (Behbudiy, Avloniy, Cho‘lpon, Qodiriy) nomlari oqlandi va merosi xalqimizga qaytarildi."
  },
  {
    title: "Inson qadri va erkinlik kafolatlari",
    detail: "Paxta qulligi va majburiy mehnatga butunlay chek qo‘yildi. Inson qadri, so‘z erkinligi, fuqarolik jamiyati va milliy qonunchilik yuksaldi."
  },
  {
    title: "Yoshlar uchun global imkoniyatlar",
    detail: "Prezident maktablari, xalqaro universitetlar filiallari, “El-yurt umidi” jamg‘armasi ochildi; yoshlar dunyoning eng nufuzli ilmiy maydonlarida tahsil olmoqda."
  },
  {
    title: "Tinchlik, xavfsizlik va ochiq tashqi siyosat",
    detail: "O‘zbekiston Markaziy Osiyo va dunyo miqyosida do‘stona, tinchlikparvar, mustaqil va mustahkam chegaralarga ega qudratli davlatga aylandi."
  }
];
