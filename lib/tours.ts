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
      "/tours/dental-south-china/IMG_0201.JPG",
      "/tours/dental-south-china/IMG_0202.PNG",
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
      "/tours/it-ai-business-trip/IMG_0195.JPG",
      "/tours/it-ai-business-trip/IMG_0197.JPG",
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
      "/tours/spring-fairy-tale/IMG_0210.JPG",
      "/tours/spring-fairy-tale/IMG_0209.PNG",
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
      "/tours/avatar-mountains/IMG_0215.JPG",
      "/tours/avatar-mountains/IMG_0212.JPG",
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
  {
    id: "5",
    slug: "family-beijing",
    title: {
      ru: "Семейный тур в Пекин",
      uz: "Pekinga oilaviy tur",
    },
    route: {
      ru: "Ташкент – Пекин",
      uz: "Toshkent – Pekin",
    },
    dates: {
      ru: "21–28 марта",
      uz: "21–28 mart",
    },
    price: "1090$",
    photos: [
      "/tours/family-beijing/IMG_0211.JPG",
      "/tours/family-beijing/IMG_0219.JPG",
    ],
    highlights: {
      ru: [
        "Великая Китайская стена — подъём по канатной дороге и потрясающие виды",
        "Мастер-класс по кунг-фу для детей",
        "Прогулка по атмосферной улице Цяньмэнь",
        "Храм Неба — символ древнего Китая",
        "Мастер-класс по китайской каллиграфии",
        "Universal Studios Beijing — аттракционы мирового уровня",
        "Музей науки и технологий и планетарий",
        "Сафари-парк — путешествие среди диких животных",
        "Свободный день для отдыха и шоппинга",
        "Стоимость 1090 USD (двухместное размещение)",
      ],
      uz: [
        "Buyuk Xitoy devori — kanat yo‘li orqali ko‘tarilish va ajoyib manzaralar",
        "Bolalar uchun kung-fu mahorat darsi",
        "Qianmen ko‘chasida sayr — an’anaviy Pekin muhiti",
        "Osmon ibodatxonasi — qadimgi Xitoy ramzi",
        "Xitoy kaligrafiyasi bo‘yicha mahorat darsi",
        "Universal Studios Beijing — butun oila uchun mashhur attraksionlar",
        "Fan va texnologiya muzeyi hamda planetariy",
        "Safari park — yovvoyi hayvonlar orasida sayohat",
        "Dam olish va shopping uchun erkin kun",
        "Narxi 1090 USD (2 kishilik joylashuv)",
      ],
    },
    content: {
      ru: `Семейный тур в Пекин — идеальное путешествие для родителей и детей во время весенних каникул.

Это не просто экскурсии, а настоящее приключение, где история оживает, технологии удивляют, а каждый день приносит новые эмоции.

Вы подниметесь на Великую Китайскую стену на канатной дороге и увидите одно из чудес света с высоты. Дети попробуют себя в роли учеников мастера на мастер-классе по кунг-фу и научатся писать своё имя иероглифами на уроке китайской каллиграфии.

Прогулка по атмосферной улице Цяньмэнь позволит почувствовать традиционный Пекин, а посещение Храма Неба откроет историю древнего Китая.

Один из самых ярких дней — поездка в Universal Studios Beijing с аттракционами мирового уровня. Также вас ждёт Музей науки и технологий и планетарий с интерактивными экспозициями, роботами и экспериментами.

В сафари-парке вы отправитесь в настоящее путешествие среди диких животных. А свободный день позволит отдохнуть, заняться шоппингом и провести время всей семьёй.

Стоимость тура — 1090 USD при двухместном размещении. Это путешествие объединяет семью и дарит детям впечатления на всю жизнь.`,
      uz: `Pekinga oilaviy tur — bahorgi ta'tilda ota-onalar va bolalar uchun mukammal sayohat.

Bu oddiy ekskursiya emas, balki tarix jonlanadigan, texnologiyalar hayratga soladigan va har bir kun yangi taassurotlarga boy bo‘lgan haqiqiy sarguzashtdir.

Siz kanat yo‘li orqali Buyuk Xitoy devoriga ko‘tarilib, dunyoning eng mashhur mo‘jizalaridan birini balandlikdan tomosha qilasiz. Bolalar kung-fu mahorat darsida o‘zlarini haqiqiy shogirddek his qiladilar va xitoy kaligrafiyasi darsida o‘z ismlarini ierogliflar bilan yozishni o‘rganadilar.

Qianmen ko‘chasida sayr qilish orqali an’anaviy Pekin muhitini his qilasiz, Osmon ibodatxonasi esa qadimgi Xitoy tarixini ochib beradi.

Sayohatning eng yorqin kunlaridan biri — Universal Studios Beijing parkiga tashrif. Bu yerda butun oila uchun jahon darajasidagi attraksionlar mavjud. Shuningdek, Fan va texnologiya muzeyi hamda planetariyda robotlar, tajribalar va interaktiv ko‘rgazmalar orqali o‘rganish imkoniyati bo‘ladi.

Safari parkda esa yovvoyi hayvonlar orasida haqiqiy sarguzasht kutmoqda. Erkin kun esa dam olish, shopping qilish va oilaviy vaqt o‘tkazish uchun ajratiladi.

Tur narxi — 1090 USD (ikki kishilik joylashuv). Bu sayohat oilani yanada yaqinlashtiradi va bolalar uchun unutilmas xotiralar qoldiradi.`,
    },
  },
  {
    id: "6",
    slug: "health-guangzhou-gulong",
    title: {
      ru: "Оздоровительный тур в Китай",
      uz: "Xitoyga sog‘lomlashtiruvchi tur",
    },
    route: {
      ru: "Гуанчжоу – Ущелье Гулун",
      uz: "Guangzhou – Gulun darasi",
    },
    dates: {
      ru: "10–16 апреля",
      uz: "10–16 aprel",
    },
    price: "1090$",
    photos: [
      "/tours/health-guangzhou-gulong/IMG_0221.JPG",
      "/tours/health-guangzhou-gulong/IMG_0223.PNG",
    ],
    highlights: {
      ru: [
        "Гуанчжоу — центр традиционной китайской медицины",
        "Консультация специалиста в медицинском центре",
        "Оздоровительные процедуры: гуаша, баночная терапия",
        "Лечебный массаж туйна",
        "Иглоукалывание и моксотерапия",
        "Массаж головы и шеи",
        "Ущелье Гулун — природное чудо юга Китая",
        "Прогулка по долине «Тайна Гулун»",
        "Каскадные водопады и тропические леса",
        "Стеклянный мост над ущельем",
        "Стоимость от 1090 USD (двухместное размещение)",
      ],
      uz: [
        "Guangzhou — an’anaviy xitoy tibbiyot markazi",
        "Tibbiyot markazida mutaxassis konsultatsiyasi",
        "Sog‘lomlashtiruvchi muolajalar: guasha va banka terapiyasi",
        "Davolovchi tuyna massaji",
        "Igna terapiyasi va moksoterapiya",
        "Bosh va bo‘yin massaji",
        "Gulun darasi — Xitoy janubining tabiiy mo‘jizasi",
        "“Gulun siri” vodiysida sayr",
        "Kaskad sharsharalar va tropik o‘rmonlar",
        "Dara ustidan o‘tgan mashhur shisha ko‘prik",
        "Narxi 1090 USD dan (2 kishilik joylashuv)",
      ],
    },
    content: {
      ru: `Оздоровительный и экскурсионный тур в Китай — идеальное сочетание отдыха, восстановления здоровья и знакомства с природными красотами юга страны.

Гуанчжоу — один из главных центров традиционной китайской медицины. Во время тура вы посетите профессиональный медицинский центр, где специалисты проведут консультацию и подберут процедуры для восстановления организма.

В программу входят популярные методы традиционной китайской медицины: гуаша, баночная терапия, лечебный массаж туйна, иглоукалывание, моксотерапия, а также расслабляющий массаж головы и шеи.

Вторая часть путешествия проходит в живописном ущелье Гулун — одном из самых красивых природных мест юга Китая. Здесь вас ждут тропические леса, каскадные водопады и прогулка по долине «Тайна Гулун».

Особое впечатление оставит прогулка по знаменитому стеклянному мосту над ущельем, открывающему захватывающие виды на горные пейзажи.

Тур сочетает отдых, оздоровление и яркие экскурсии, позволяя полностью восстановить силы и открыть для себя удивительную природу Китая. Стоимость тура — от 1090 USD при двухместном размещении.`,
      uz: `Xitoyga sog‘lomlashtiruvchi va ekskursiya turi — dam olish, salomatlikni tiklash va mamlakat janubining go‘zal tabiatini kashf qilishning mukammal uyg‘unligi.

Guangzhou shahri an’anaviy xitoy tibbiyotining muhim markazlaridan biri hisoblanadi. Sayohat davomida siz professional tibbiyot markaziga tashrif buyurasiz, bu yerda mutaxassislar konsultatsiya o‘tkazib, organizmni tiklash uchun kerakli muolajalarni tavsiya qiladilar.

Dasturga an’anaviy xitoy tibbiyotining mashhur usullari kiradi: guasha, banka terapiyasi, davolovchi tuyna massaji, igna terapiyasi, moksoterapiya, shuningdek bosh va bo‘yin massaji.

Sayohatning ikkinchi qismi Xitoy janubidagi eng chiroyli tabiiy joylardan biri bo‘lgan Gulun darasida davom etadi. Bu yerda tropik o‘rmonlar, kaskad sharsharalar va “Gulun siri” vodiysida sayr sizni kutmoqda.

Eng hayratlanarli tajribalardan biri — daradan o‘tgan mashhur shisha ko‘prik bo‘ylab yurish bo‘lib, u tog‘ manzaralarining ajoyib ko‘rinishini taqdim etadi.

Bu tur dam olish, sog‘lomlashtirish va qiziqarli ekskursiyalarni birlashtiradi hamda sizga Xitoyning noyob tabiatini kashf qilish imkonini beradi. Tur narxi — 1090 USD dan (ikki kishilik joylashuv).`,
    },
  },
]
export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug)
}
