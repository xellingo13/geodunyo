import { Language, Translation, GeoItem, VideoItem } from './types';

export const translations: Record<Language, Translation> = {
  uz: {
    title: "Dunyo bo'ylab sayohat",
    subtitle: "Geografiya olamiga xush kelibsiz! Materiklar, okeanlar va qiziqarli mamlakatlar haqida bilib oling.",
    continents: "Materiklar",
    oceans: "Okeanlar",
    countries: "Mamlakatlar",
    videos: "Videolar",
    learnMore: "Batafsil",
    interestingFacts: "Qiziqarli faktlar",
    back: "Orqaga",
    videoSectionTitle: "Geografiya bo'yicha videolar",
    videoSectionDesc: "Dunyo mo'jizalarini video darsliklar orqali kashf eting."
  },
  kaa: {
    title: "Du'nya boylap sayaxat",
    subtitle: "Geografiya du'nyasina xosh kelipsiz! Materikler, okeanlar ha'm qızıqlı ma'mleketler haqqında bilip alın'..",
    continents: "Materikler",
    oceans: "Okeanlar",
    countries: "Ma'mleketler",
    videos: "Videolar",
    learnMore: "Tolıg'ıraq",
    interestingFacts: "Qızıqlı faktlar",
    back: "Izge",
    videoSectionTitle: "Geografiya boyınsha videolar",
    videoSectionDesc: "Du'nya ka'ramatların video sabaqlıqlar arqalı kashf etin'."
  },
  ru: {
    title: "Путешествие по миру",
    subtitle: "Добро пожаловать в мир географии! Узнайте больше о материках, океанах и интересных странах.",
    continents: "Материки",
    oceans: "Океаны",
    countries: "Страны",
    videos: "Видео",
    learnMore: "Подробнее",
    interestingFacts: "Интересные факты",
    back: "Назад",
    videoSectionTitle: "Видео по географии",
    videoSectionDesc: "Откройте для себя чудеса мира с помощью видеоуроков."
  },
  en: {
    title: "Journey Around the World",
    subtitle: "Welcome to the world of geography! Learn about continents, oceans, and fascinating countries.",
    continents: "Continents",
    oceans: "Oceans",
    countries: "Countries",
    videos: "Videos",
    learnMore: "Learn More",
    interestingFacts: "Interesting Facts",
    back: "Back",
    videoSectionTitle: "Geography Videos",
    videoSectionDesc: "Discover the wonders of the world through video tutorials."
  }
};

export const data: {
  continents: GeoItem[];
  oceans: GeoItem[];
  countries: GeoItem[];
  videos: VideoItem[];
} = {
  continents: [
    {
      id: 'eurasia',
      name: { 
        uz: 'Yevroosiyo', 
        kaa: 'Evroaziya', 
        ru: 'Евразия', 
        en: 'Eurasia' 
      },
      description: {
        uz: "Yevroosiyo - Yerning eng katta materigi bo'lib, u ikki qit'ani: Yevropa va Osiyoni o'z ichiga oladi.",
        kaa: "Evroaziya - Jerdin' en' u'lken materigi bolıp, ol ekki qıt'anı: Evropa ha'm Aziyanı o'z ishine aladı.",
        ru: "Евразия — самый крупный материк на Земле, включающий две части света: Европу и Азию.",
        en: "Eurasia is the largest continent on Earth, comprising two parts of the world: Europe and Asia."
      },
      facts: {
        uz: [
          "Dunyodagi eng baland nuqta - Everest cho'qqisi shu yerda joylashgan.",
          "Bu yerda dunyodagi eng katta davlat - Rossiya joylashgan.",
          "Dunyodagi eng katta ko'l - Kaspiy dengizi ham shu materikda."
        ],
        kaa: [
          "Du'nyadag'ı en' biyik noqat - Everest shoqqısı usı yerde jaylasqan.",
          "Bul jerde du'nyadag'ı en' u'lken ma'mleket - Rossiya jaylasqan.",
          "Du'nyadag'ı en' u'lken ko'l - Kaspiy ten'izi de usı materikte."
        ],
        ru: [
          "Здесь находится самая высокая точка мира — Эверест.",
          "Здесь расположена самая большая страна мира — Россия.",
          "Самое большое озеро в мире — Каспийское море — также находится на этом материке."
        ],
        en: [
          "The highest point on Earth, Mount Everest, is located here.",
          "The largest country in the world, Russia, is located here.",
          "The world's largest lake, the Caspian Sea, is also on this continent."
        ]
      },
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2070&auto=format&fit=crop",
      color: "#10b981"
    },
    {
      id: 'africa',
      name: { 
        uz: 'Afrika', 
        kaa: 'Afrika', 
        ru: 'Африка', 
        en: 'Africa' 
      },
      description: {
        uz: "Afrika - yer yuzidagi eng issiq va xilma-xil tabiatga ega materik.",
        kaa: "Afrika - jer ju'zindegi en' ıssı ha'm ha'r tu'rli ta'biatqa iye materik.",
        ru: "Африка - самый жаркий континент с разнообразной природой.",
        en: "Africa is the hottest continent on Earth with diverse nature."
      },
      facts: {
        uz: [
          "Sahroi Kabir - dunyodagi eng katta issiq sahro shu yerda.",
          "Nil daryosi dunyodagi eng uzun daryolardan biri.",
          "Afrikada 2000 dan ortiq tillarda so'zlashishadi."
        ],
        kaa: [
          "Saxara sho'listanı - du'nyadag'ı en' u'lken ıssı sho'listan usı jerde.",
          "Nil da'ryası du'nyadag'ı en' uzın da'ryalardan biri.",
          "Afrikada 2000 den artıq tillerde so'ylesedi."
        ],
        ru: [
          "Здесь находится Сахара — самая большая жаркая пустыня в мире.",
          "Река Нил — одна из самых длинных рек в мире.",
          "В Африке говорят более чем на 2000 языках."
        ],
        en: [
          "The Sahara, the world's largest hot desert, is here.",
          "The Nile River is one of the longest rivers in the world.",
          "More than 2000 languages are spoken in Africa."
        ]
      },
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop",
      color: "#f59e0b"
    },
    {
      id: 'north-america',
      name: { uz: 'Shimoliy Amerika', kaa: 'Arqa Amerika', ru: 'Северная Amerika', en: 'North America' },
      description: {
        uz: "Shimoliy Amerika - rivojlangan iqtisodiyot va turli xil iqlimga ega materik.",
        kaa: "Arqa Amerika - rawajlang'an ekonomika ha'm ha'r tu'rli ıqlımg'a iye materik.",
        ru: "Северная Америка - континент с развитой экономикой и разнообразным климатом.",
        en: "North America is a continent with a developed economy and a diverse climate."
      },
      facts: {
        uz: ["Dunyodagi eng katta orol - Grenlandiya shu yerda.", "AQSH va Kanada eng yirik davlatlaridir.", "Bu yerda dunyodagi eng katta chuchuk suvli ko'llar joylashgan."],
        kaa: ["Du'nyadag'ı en' u'lken ataw - Grenlandiya usı jerde.", "AQSH ha'm Kanada en' u'lken ma'mleketleri.", "Bul jerde du'nyadag'ı en' u'lken dushshı suwlı ko'ller jaylasqan."],
        ru: ["Здесь находится самый большой остров в мире — Гренландия.", "США и Канада — крупнейшие страны этого континента.", "Здесь находятся крупнейшие в мире пресноводные озера."],
        en: ["Greenland, the largest island in the world, is here.", "The USA and Canada are the largest countries.", "The world's largest freshwater lakes are located here."]
      },
      image: "https://images.unsplash.com/photo-1471306224500-6d0d218be372?q=80&w=2070&auto=format&fit=crop",
      color: "#ef4444"
    },
    {
      id: 'south-america',
      name: { uz: 'Janubiy Amerika', kaa: 'Qubla Amerika', ru: 'Южная Amerika', en: 'South America' },
      description: {
        uz: "Janubiy Amerika - dunyodagi eng katta o'rmonlar va baland tog'lar vatani.",
        kaa: "Qubla Amerika - du'nyadag'ı en' u'lken tog'aylar ha'm biyik tawlar watanı.",
        ru: "Южная Америка — родина самых больших лесов и высоких гор в мире.",
        en: "South America is home to the world's largest forests and high mountains."
      },
      facts: {
        uz: ["Amazonka o'rmonlari - 'yer o'pkasi' shu yerda.", "And tog'lari dunyodagi eng uzun tog' tizmasidir.", "Braziliya eng katta davlatidir."],
        kaa: ["Amazonka tog'ayları - 'jer o'pkesi' usı jerde.", "And tawları du'nyadag'ı en' uzın taw dizbegi.", "Braziliya en' u'lken ma'mleketi."],
        ru: ["Здесь находятся леса Амазонки — «легкие планеты».", "Горы Анды — самая длинная горная цепь в мире.", "Бразилия — самая большая страна на материке."],
        en: ["The Amazon rainforest, the 'lungs of the Earth', is here.", "The Andes are the longest mountain range in the world.", "Brazil is the largest country."]
      },
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
      color: "#ec4899"
    },
    {
      id: 'antarctica',
      name: { uz: 'Antarktida', kaa: 'Antarktida', ru: 'Антарктида', en: 'Antarctica' },
      description: {
        uz: "Antarktida - dunyodagi eng sovuq, eng quruq va muz bilan qoplangan materik.",
        kaa: "Antarktida - du'nyadag'ı en' suwıq, en' qurqoq ha'm muz benen qaplang'an materik.",
        ru: "Антарктида — самый холодный, сухой и покрытый льдом континент в мире.",
        en: "Antarctica is the coldest, driest, and most ice-covered continent in the world."
      },
      facts: {
        uz: ["U yerda doimiy aholi yo'q.", "Yer yuzidagi chuchuk suv zaxirasining 70% muz holida shu yerda.", "Pingvinlar bu yerning asosiy yashovchilari."],
        kaa: ["Ol jerde turaqlı xalıq jo'q.", "Jer ju'zindegi dushshı suw zapasının' 70% muz ko'rinisinde usı jerde.", "Pingvinler bul jerudin' tiykarg'ı jasawshıları."],
        ru: ["Там нет постоянного населения.", "70% запасов пресной воды на Земле находится здесь в виде льда.", "Пингвины — основные обитатели этого материка."],
        en: ["There is no permanent population there.", "70% of the Earth's freshwater reserves are here in the form of ice.", "Penguins are the main inhabitants here."]
      },
      image: "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?q=80&w=2000&auto=format&fit=crop",
      color: "#94a3b8"
    },
    {
      id: 'australia',
      name: { uz: 'Avstraliya', kaa: 'Avstraliya', ru: 'Австралия', en: 'Australia' },
      description: {
        uz: "Avstraliya - ham materik, ham bir davlat bo'lgan yolg'iz hudud.",
        kaa: "Avstraliya - ha'm materik, ha'm bir ma'mleket bolg'an jalg'ız aymaq.",
        ru: "Австралия — единственный регион, являющийся одновременно и материком, и государством.",
        en: "Australia is the only region that is both a continent and a country."
      },
      facts: {
        uz: ["Kenguru va Koala faqat shu yerda yashaydi.", "Dunyodagi eng katta rif - Katta to'siq rifi shu yerda.", "U dunyodagi eng kichik materik."],
        kaa: ["Kenguru ha'm Koala tek usı jerde jasaydı.", "Du'nyadag'ı en' u'lken rif - U'lken tosıq rifi usı jerde.", "Ol du'nyadag'ı en' kishi materik."],
        ru: ["Кенгуру и коалы живут только здесь.", "Здесь находится самый большой риф в мире — Большой Барьерный риф.", "Это самый маленький континент в мире."],
        en: ["Kangaroos and koalas only live here.", "The Great Barrier Reef, the world's largest reef, is here.", "It is the smallest continent in the world."]
      },
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop",
      color: "#8b5cf6"
    }
  ],
  oceans: [
    {
      id: 'pacific',
      name: { 
        uz: 'Tinch okeani', 
        kaa: 'Tınısh okeanı', 
        ru: 'Тихий океан', 
        en: 'Pacific Ocean' 
      },
      description: {
        uz: "Tinch okeani - dunyodagi eng katta va eng chuqur okean.",
        kaa: "Tınısh okeanı - du'nyadag'ı en' u'lken ha'm en' teren' okean.",
        ru: "Тихий океан - самый большой и глубокий океан в мире.",
        en: "The Pacific Ocean is the largest and deepest ocean in the world."
      },
      facts: {
        uz: [
          "Mariana botig'i - dunyodagi eng chuqur nuqta shu okeanda.",
          "U yer sharining uchdan bir qismini egallaydi.",
          "Unda 25 000 dan ortiq orollar mavjud."
        ],
        kaa: [
          "Mariana batıg'ı - du'nyadag'ı en' teren' noqat usı okeanda.",
          "Ol jer sharının' u'shten bir bo'legin iyeleydi.",
          "Onda 25 000 den artıq atawlar bar."
        ],
        ru: [
          "Марианская впадина — самая глубокая точка мира в этом океане.",
          "Он занимает треть поверхности земного шара.",
          "В нем более 25 000 островов."
        ],
        en: [
          "The Mariana Trench, the deepest point in the world, is in this ocean.",
          "It covers one-third of the Earth's surface.",
          "There are more than 25,000 islands in it."
        ]
      },
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2070&auto=format&fit=crop",
      color: "#0284c7"
    },
    {
      id: 'atlantic',
      name: { uz: 'Atlantika okeani', kaa: 'Atlantika okeanı', ru: 'Атлантический океан', en: 'Atlantic Ocean' },
      description: {
        uz: "Atlantika okeani - ikkinchi yirik okean bo'lib, u Yevropa, Afrika va Amerika orasida joylashgan.",
        kaa: "Atlantika okeanı - ekinshi iri okean bolıp, ol Evropa, Afrika ha'm Amerika arasında jaylasqan.",
        ru: "Атлантический океан — второй по величине океан, расположенный между Европой, Африкой и Америкой.",
        en: "The Atlantic Ocean is the second largest ocean, located between Europe, Africa, and the Americas."
      },
      facts: {
        uz: ["U dunyodagi eng sho'r okean.", "Mashhur 'Titanik' kemasi shu okeanda cho'kkan.", "U yer yuzining 20% qismini egallaydi."],
        kaa: ["Ol du'nyadag'ı en' sho'r okean.", "Mashhur 'Titanik' kemesi usı okeanda sho'kken.", "Ol jer ju'zinin' 20% bo'legin iyeleydi."],
        ru: ["Это самый соленый океан в мире.", "Знаменитый корабль «Титаник» затонул в этом океане.", "Он занимает 20% поверхности Земли."],
        en: ["It is the saltiest ocean in the world.", "The famous 'Titanic' ship sank in this ocean.", "It covers 20% of the Earth's surface."]
      },
      image: "https://images.unsplash.com/photo-1511266205807-628f805a8d9a?q=80&w=2071&auto=format&fit=crop",
      color: "#0369a1"
    },
    {
      id: 'indian',
      name: { uz: 'Hind okeani', kaa: 'Hind okeanı', ru: 'Индийский океан', en: 'Indian Ocean' },
      description: {
        uz: "Hind okeani - dunyodagi eng iliq suvlarga ega okean.",
        kaa: "Hind okeanı - du'nyadag'ı en' ıssı suwlarg'a iye okean.",
        ru: "Индийский океан — океан с самыми теплыми водами в мире.",
        en: "The Indian Ocean is the ocean with the warmest waters in the world."
      },
      facts: {
        uz: ["U dunyodagi dengiz yuk tashishining katta qismini ta'minlaydi.", "Unda ko'plab ekzotik orollar (Masalan, Maldiv) mavjud.", "U dunyodagi uchinchi eng katta okean."],
        kaa: ["Ol du'nyadag'ı ten'iz ju'k tasıwının' u'lken bo'legin ta'miyinleydi.", "Onda ko'plegen ekzotikalıq atawlar (Mısalı, Maldiv) bar.", "Ol du'nyadag'ı u'shinshi en' u'lken okean."],
        ru: ["Он обеспечивает большую часть мировых морских перевозок.", "В нем много экзотических островов (например, Мальдивы).", "Это третий по величине океан в мире."],
        en: ["It provides a large part of the world's sea shipping.", "It has many exotic islands (e.g., Maldives).", "It is the third largest ocean in the world."]
      },
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
      color: "#0891b2"
    },
    {
      id: 'arctic',
      name: { uz: 'Shimoliy Muz okeani', kaa: 'Arqa Muz okeanı', ru: 'Северный Ледовитый океан', en: 'Arctic Ocean' },
      description: {
        uz: "Shimoliy Muz okeani - dunyodagi eng kichik va eng sayoz okean.",
        kaa: "Arqa Muz okeanı - du'nyadag'ı en' kishi ha'm en' sayız okean.",
        ru: "Северный Ледовитый океан — самый маленький и мелководный океан в мире.",
        en: "The Arctic Ocean is the smallest and shallowest ocean in the world."
      },
      facts: {
        uz: ["U yilning katta qismida muz bilan qoplanadi.", "Oq ayiqlar bu yerning ramzidir.", "U barcha okeanlarning eng sovuqidir."],
        kaa: ["Ol jıldın' u'lken bo'leginde muz benen qaplanadı.", "Aq ayılar bul jerdin' ramzi.", "Ol barlıq okeanlardın' en' suwıg'ı."],
        ru: ["Большую часть года он покрыт льдом.", "Белые медведи — символ этого региона.", "Это самый холодный из всех океанов."],
        en: ["It is covered with ice most of the year.", "Polar bears are the symbol of this region.", "It is the coldest of all oceans."]
      },
      image: "https://images.unsplash.com/photo-1589136142558-9f69f8260d20?q=80&w=2070&auto=format&fit=crop",
      color: "#38bdf8"
    }
  ],
  countries: [
    {
      id: 'uzbekistan',
      name: { 
        uz: "O'zbekiston", 
        kaa: "O'zbekistan", 
        ru: 'Узбекистан', 
        en: 'Uzbekistan' 
      },
      description: {
        uz: "O'zbekiston - Markaziy Osiyodagi boy tarix va madaniyatga ega davlat.",
        kaa: "O'zbekistan - Oraylıq Aziyadag'ı bay tariyx ha'm ma'deniyatqa iye ma'mleket.",
        ru: "Узбекистан - страна в Центральной Азии с богатой историей и культурой.",
        en: "Uzbekistan is a country in Central Asia with a rich history and culture."
      },
      facts: {
        uz: [
          "O'zbekiston - dunyodagi ikkita davlatdan biri bo'lib, okeanga chiqish uchun kamida ikkita davlat hududidan o'tish kerak.",
          "Samarqand - dunyodagi eng qadimiy shaharlardan biri.",
          "O'zbekiston oltin zaxiralari bo'yicha dunyoda kuchli o'rinlarda turadi."
        ],
        kaa: [
          "O'zbekistan - du'nyadag'ı ekki ma'mleketten biri bolıp, okeang'a shıg'ıw ushın keminde ekki ma'mleket aymag'ınan o'tiw kerek.",
          "Samarqand - du'nyadag'ı en' qadimiy qalalardan biri.",
          "O'zbekistan altın zapasları boyınsha du'nyada ku'shli orınlarda turadı."
        ],
        ru: [
          "Узбекистан — одна из двух стран в мире, которой для выхода к океану нужно пересечь территорию как минимум двух государств.",
          "Самарканд — один из древнейших городов мира.",
          "Узбекистан занимает лидирующие позиции в мире по запасам золота."
        ],
        en: [
          "Uzbekistan is one of only two countries in the world that are doubly landlocked.",
          "Samarkand is one of the oldest cities in the world.",
          "Uzbekistan holds leading positions in the world in terms of gold reserves."
        ]
      },
      image: "https://images.unsplash.com/photo-1528644491123-2f907161353b?q=80&w=2070&auto=format&fit=crop",
      color: "#059669"
    }
  ],
  videos: [
    {
      id: 'v1',
      title: {
        uz: "Yer sayyorasi haqida 10 ta fakt",
        kaa: "Jer sayyorası haqqında 10 fakt",
        ru: "10 фактов о планете Земля",
        en: "10 Facts About Planet Earth"
      },
      description: {
        uz: "Sayyoramiz haqidagi eng qiziqarli va hayratlanarli ma'lumotlar.",
        kaa: "Sayyoramız haqqındag'ı en' qızıqlı ha'm hayran qaldırarlıq mag'lıwmatlar.",
        ru: "Самые интересные и удивительные факты о нашей планете.",
        en: "The most interesting and surprising facts about our planet."
      },
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/HCDVN7DCzL8"
    },
    {
      id: 'v2',
      title: {
        uz: "Okeanlar dunyosi",
        kaa: "Okeanlar du'nyası",
        ru: "Мир океанов",
        en: "World of Oceans"
      },
      description: {
        uz: "Okeanlar ostidagi sirli hayot va tabiat mo'jizalari.",
        kaa: "Okeanlar astındag'ı sırlı o'mir ha'm ta'biat ka'ramatları.",
        ru: "Тайная жизнь под океанами и чудеса природы.",
        en: "Secret life under the oceans and wonders of nature."
      },
      thumbnail: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1932&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/unZ_S0k8564"
    }
  ]
};
