import type { Language } from "@/lib/translations"

export interface Tour {
  id: string
  slug: string
  title: Record<Language, string>
  route: Record<Language, string>
  dates: Record<Language, string>
  price: string
  photos: string[]
  highlights: Record<Language, string[]>
  content: Record<Language, string>
}

export const tours: Tour[] = [
  {
    id: "1",
    slug: "dental-south-china-2026",
    title: {
      ru: "Dental South China 2026",
      uz: "Dental South China 2026",
    },
    route: {
      ru: "Гуанчжоу",
      uz: "Guangzhou",
    },
    dates: {
      ru: "2–5 марта 2026",
      uz: "2–5 mart 2026",
    },
    price: "",
    photos: [
      "/tours/Dental South China 2026/IMG_0201.JPG",
      "/tours/Dental South China 2026/IMG_0202.PNG",
    ],
    highlights: {
      ru: [
        "Одна из крупнейших стоматологических выставок Азии",
        "Более 100 000 специалистов со всего мира",
        "Свыше 1000 брендов и поставщиков оборудования",
        "Профессиональный нетворкинг и B2B переговоры",
        "В стоимость включены перелёт, отель, переводчик и сопровождение",
        "Комиссия для агентства - 50 USD",
      ],
      uz: [
        "Osiyodagi eng yirik stomatologiya ko'rgazmalaridan biri",
        "Dunyo bo'ylab 100 000 dan ortiq mutaxassis",
        "1000 dan ortiq brend va uskunalar yetkazib beruvchilari",
        "Professional networking va B2B muzokaralar",
        "Narxga: parvoz, mehmonxona, tarjimon va hamrohlik kiradi",
        "Agent komissiyasi - 50 USD",
      ],
    },
    content: {
      ru: `Dental South China - одна из крупнейших стоматологических выставок в Азии, ежегодно собирающая свыше 100 000 специалистов из десятков стран. Это уникальная возможность познакомиться с передовыми технологиями в стоматологии, наладить партнёрские связи и напрямую пообщаться с производителями оборудования.

Urban Travel организует полное сопровождение: вы просто прилетаете - всё остальное берём на себя мы. Наши опытные переводчики помогут в переговорах и на стендах выставки, а наша команда обеспечит комфортный трансфер, расселение и логистику на все дни пребывания.

Поездка идеально подходит для владельцев стоматологических клиник, дистрибьюторов медицинского оборудования и врачей, которые хотят быть в курсе последних трендов отрасли.`,
      uz: `Dental South China - Osiyodagi eng yirik stomatologiya ko'rgazmalaridan biri bo'lib, har yili o'nlab mamlakatlardan 100 000 dan ortiq mutaxassisni yig'adi. Bu stomatologiyadagi ilg'or texnologiyalar bilan tanishish, hamkorlik aloqalarini o'rnatish va uskunalar ishlab chiqaruvchilari bilan bevosita muloqot qilishning noyob imkoniyati.

Urban Travel to'liq hamrohlikni tashkil etadi: siz shunchaki uchib kelasiz - qolgani bizning zimmamizda. Tajribali tarjimonlarimiz ko'rgazma stendlarida va muzokaralarda yordam beradi, jamoamiz esa barcha kunlar davomida qulay transfer, joylashtirish va logistikani ta'minlaydi.

Bu safari stomatologiya klinikasi egalari, tibbiy uskunalar distribyutorlari va sohadagi so'nggi tendentsiyalardan xabardor bo'lishni istagan shifokorlar uchun ideal.`,
    },
  },
  {
    id: "2",
    slug: "it-ai-business-trip",
    title: {
      ru: "Бизнес поездка IT и AI",
      uz: "IT va AI biznes safari",
    },
    route: {
      ru: "Шанхай – Уси – Нанкин",
      uz: "Shanxay – Uxi – Nankin",
    },
    dates: {
      ru: "Уточняйте",
      uz: "Aniqlashtiring",
    },
    price: "от 470$",
    photos: [
      "/tours/Бизнес поездка IT и AI/IMG_0195.JPG",
      "/tours/Бизнес поездка IT и AI/IMG_0197.JPG",
    ],
    highlights: {
      ru: [
        "Шанхай - встречи с ведущими AI и tech-компаниями",
        "Уси - технопарки нового поколения, автоматизированные производства",
        "Нанкин - университеты и исследовательские лаборатории",
        "B2B переговоры с китайскими IT-партнёрами",
        "Форумы и конференции по искусственному интеллекту",
        "Авиабилет от 470 USD",
      ],
      uz: [
        "Shanxay - yetakchi AI va tech-kompaniyalar bilan uchrashuvlar",
        "Uxi - yangi avlod texnoparklar, avtomatlashtirilgan ishlab chiqarishlar",
        "Nankin - universitetlar va tadqiqot laboratoriyalari",
        "Xitoylik IT-hamkorlar bilan B2B muzokaralar",
        "Sun'iy intellekt bo'yicha forum va konferentsiyalar",
        "Aviachipта narxi 470 USD dan",
      ],
    },
    content: {
      ru: `Бизнес-поездка охватывает три ключевых города технологического Китая. Шанхай - глобальный финансовый и инновационный хаб, где вас ждут встречи с представителями крупнейших AI-компаний и участие в международных форумах. Уси - промышленное сердце янцзыдельты, где нового поколения технопарки демонстрируют производство, на 80% автоматизированное с помощью роботов. Нанкин - родина Chinese Silicon Valley с ведущими университетами и исследовательскими центрами.

Поездка рассчитана на предпринимателей и IT-специалистов, которые хотят наладить прямые деловые контакты с китайскими партнёрами, изучить рынок и технологии, определяющие облик ближайшего будущего.

Urban Travel обеспечивает трансфер, переводчика и всю организационную логистику маршрута.`,
      uz: `Biznes safari texnologik Xitoyning uchta asosiy shahrini qamrab oladi. Shanxay - global moliya va innovatsiya markazi bo'lib, bu yerda yetakchi AI kompaniyalar vakillari bilan uchrashuvlar va xalqaro forumlarda qatnashish kutadi. Uxi - Yangtze deltasining sanoat yuragi, bu yerda yangi avlod texnoparklari 80% robotlar bilan avtomatlashtirilgan ishlab chiqarishni namoyish etadi. Nankin - yetakchi universitetlar va tadqiqot markazlari bilan Xitoyning Silicon Valley shahrining vatani.

Bu safari xitoylik hamkorlar bilan bevosita biznes aloqalarini o'rnatishni, yaqin kelajak qiyofasini belgilovchi bozor va texnologiyalarni o'rganishni istagan tadbirkorlar va IT mutaxassislari uchun mo'ljallangan.

Urban Travel transfer, tarjimon va marshrutning barcha tashkiliy logistikasini ta'minlaydi.`,
    },
  },
  {
    id: "3",
    slug: "spring-fairy-tale",
    title: {
      ru: "Весенняя сказка",
      uz: "Bahoriy ertak",
    },
    route: {
      ru: "Чэнду – Чунцин – Гуйчжоу",
      uz: "Chengdu – Chongqing – Guizhou",
    },
    dates: {
      ru: "Уточняйте",
      uz: "Aniqlashtiring",
    },
    price: "1090$",
    photos: [
      "/tours/Весенняя сказка/IMG_0210.JPG",
      "/tours/Весенняя сказка/IMG_0209.PNG",
    ],
    highlights: {
      ru: [
        "Чэнду - знаменитый заповедник панд и парки цветущей сакуры",
        "Чунцин - круиз по великой реке Янцзы",
        "Гуйчжоу - живописные водопады и традиционные деревни",
        "Аутентичная сычуаньская кухня в культурном ресторане",
        "Спа, сауна и массаж - роскошный отдых по-китайски",
        "Стоимость от 1090 USD (двухместное), от 1290 USD (одноместное)",
      ],
      uz: [
        "Chengdu - mashhur panda qo'riqxonasi va gullayotgan sakura bog'lari",
        "Chongqing - buyuk Yangtze daryosi bo'ylab kruiz",
        "Guizhou - manzarali sharsharalar va an'anaviy qishloqlar",
        "Madaniy restoranda haqiqiy Sichuan taomlari",
        "Spa, sauna va massaj - xitoycha hashamatli dam olish",
        "Narxi: 1090 USD dan (2 kishilik), 1290 USD dan (1 kishilik)",
      ],
    },
    content: {
      ru: `«Весенняя сказка» - маршрут, созданный для тех, кто хочет увидеть Китай в его сказочном весеннем облике. Три города с совершенно разным характером: уютный Чэнду с пандами и одним из крупнейших в мире парков цветущей сакуры; свирепый и яркий Чунцин, стоящий на скалах над слиянием двух рек, где вас ждёт незабываемый круиз по Янцзы; и загадочное Гуйчжоу с многоярусными водопадами и деревушками коренных народов.

Вечером - аутентичный сычуаньский ужин в культурном ресторане, а потом - настоящий китайский спа: традиционный массаж и сауна, снимающие усталость после насыщенных экскурсионных дней.

Стоимость тура - 1090 USD при двухместном размещении, 1290 USD при одноместном. Авиабилеты - от 280 до 400 USD. Все остальное организует Urban Travel.`,
      uz: `"Bahoriy ertak" - Xitoyni uning sehrli bahoriy qiyofasida ko'rmoqchi bo'lganlar uchun yaratilgan marshrut. Uchta mutlaqo boshqa xarakterli shahar: pandalar va dunyodagi eng katta gullayotgan sakura bog'laridan biri bilan do'stona Chengdu; ikki daryoning qo'shilish joyidagi qoyalarda turgan, Yangtze bo'ylab unutilmas kruiz kuting, qizg'in va yorqin Chongqing; va ko'p qavatli sharsharalar va mahalliy xalqlar qishloqlari bilan sirli Guizhou.

Kechqurun - madaniy restoranda haqiqiy Sichuan kechki ovqati, keyin esa haqiqiy xitoycha spa: ziddiyatli ekskursiya kunlaridan so'ng charchoqni bosadigan an'anaviy massaj va sauna.

Tur narxi - ikki kishilik xonada 1090 USD, bir kishilik xonada 1290 USD. Aviachiptalar - 280 dan 400 USD gacha. Qolganini Urban Travel tashkil etadi.`,
    },
  },
  {
    id: "4",
    slug: "avatar-mountains",
    title: {
      ru: "Горы Аватара",
      uz: "Avatar tog'lari",
    },
    route: {
      ru: "Пекин – Чжанцзяцзе – Гуанчжоу",
      uz: "Pekin – Chjanczyatsze – Guangzhou",
    },
    dates: {
      ru: "20–28 марта",
      uz: "20–28 mart",
    },
    price: "1290$",
    photos: [
      "/tours/Горы Аватара/IMG_0215.JPG",
      "/tours/Горы Аватара/IMG_0211.JPG",
    ],
    highlights: {
      ru: [
        "Пекин - Великая Китайская стена, Храм Неба, Летний дворец",
        "Чжанцзяцзе - парящие скалы Национального парка «Аватар»",
        "Гора Тяньмэнь - «Небесные врата» и захватывающий дух вид",
        "Самый длинный стеклянный мост в мире",
        "Гуанчжоу - вечерний круиз и лучшая кантонская кухня",
        "Стоимость 1290 USD (двухместное) + авиа 400–500 USD",
      ],
      uz: [
        "Pekin - Buyuk Xitoy devori, Osmon ibodatxonasi, Yozgi saroy",
        'Chjanczyatsze - "Avatar" milliy parkining osmonda suzayotgan qoyalari',
        'Tyannmen tog\'i - "Osmon darvozalari" va nafas oldiradigan manzara',
        "Dunyodagi eng uzun shisha ko'prik",
        "Guangzhou - kechki kruiz va eng yaxshi kanton taomlari",
        "Narxi 1290 USD (2 kishilik) + avia 400–500 USD",
      ],
    },
    content: {
      ru: `Тур «Горы Аватара» - самый эффектный маршрут по Китаю, объединяющий три абсолютно разных лица этой великой страны за девять дней.

Пекин - живая история: по Великой стене можно идти часами, не встретив ни одного другого туриста; Запретный город хранит тысячелетия императорских тайн; а олимпийский стадион «Птичье гнездо» напоминает, что Китай смотрит и в будущее.

Чжанцзяцзе - место, которое невозможно описать словами. Столбы-скалы высотой до 800 метров, плавающие в облаках, вдохновили Джеймса Кэмерона на «Аватар». Подъём на гору Тяньмэнь с «Небесными вратами» и прогулка по самому длинному в мире стеклянному мосту - впечатления на всю жизнь.

Гуанчжоу завершает путешествие: вечерний круиз по Жемчужной реке, огни ночного мегаполиса и лучшая кантонская кухня. Даты: 20–28 марта. Количество мест ограничено.`,
      uz: `"Avatar tog'lari" turi - to'qqiz kun ichida bu buyuk mamlakatning uchta mutlaqo boshqa yuzini birlashtirgan Xitoy bo'ylab eng ta'sirchan marshrut.

Pekin - tirik tarix: Buyuk devor bo'ylab boshqa sayyohlar bilan uchrashmasdan soatlab yurishingiz mumkin; Taqiqlangan shahar ming yillik imperatorlik sirlarini saqlaydi; Olimpiya stadioni "Qushlar uyasi" esa Xitoy kelajakka ham nazar solayotganini eslatadi.

Chjanczyatsze - so'z bilan ta'riflab bo'lmaydigan joy. Bulutlarda suzayotgan, balandligi 800 metrgacha bo'lgan qoya-ustunlar Jeyms Kameronni "Avatar" ga ilhomlantirdi. "Osmon darvozalari" bilan Tyannmen tog'iga ko'tarilish va dunyodagi eng uzun shisha ko'prik ustida yurish - umrbod taassurotlar.

Guangzhou sayohatni yakun yasaydi: Marvarid daryosi bo'ylab kechki kruiz, tungi megapolisning chiroqlari va eng yaxshi kanton taomlari. Sanalar: 20–28 mart. Joylar soni cheklangan.`,
    },
  },
]
export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug)
}
