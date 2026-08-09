export type LocaleCode =
  | "en"
  | "hu"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "ja"
  | "ko";

export type LanguageOption = {
  code: LocaleCode;
  label: string;
  flag: string;
};

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hu", label: "Magyar", flag: "🇭🇺" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
];

export type Dictionary = {
  // Nav
  navValues: string;
  navFeatures: string;
  navStory: string;
  navSupport: string;
  supportProjectCta: string;
  darkMode: string;
  lightMode: string;
  chooseLanguage: string;

  // Hero
  dailyCompanion: string;
  heroHeadline: string;
  heroSubheadline: string;
  openAppCta: string;
  buyCoffee: string;
  freeOfflinePrivate: string;

  // Legacy hero fields still used optionally - keep for compatibility
  tagline: string;
  heroBody: string;
  heroBodyHighlight: string;
  downloadCta: string;

  // Values (core highlights)
  valuesEyebrow: string;
  valuesTitle: string;
  valuesIntro: string;
  valueFreeTitle: string;
  valueFreeDesc: string;
  valuePrivateTitle: string;
  valuePrivateDesc: string;
  valueSimpleTitle: string;
  valueSimpleDesc: string;
  valueOfflineTitle: string;
  valueOfflineDesc: string;

  // App features overview
  featuresEyebrow: string;
  featuresTitle: string;
  featuresIntro: string;
  featureHydrationTitle: string;
  featureHydrationDesc: string;
  featureMedsTitle: string;
  featureMedsDesc: string;
  featureStatsTitle: string;
  featureStatsDesc: string;

  // Legacy feature keys (map to values or keep filled)
  featureWaterTitle: string;
  featureWaterDesc: string;
  featurePrivacyTitle: string;
  featurePrivacyDesc: string;
  featureFreeTitle: string;
  featureFreeDesc: string;

  // Story
  storyEyebrow: string;
  storyTitle: string;
  storyIntro: string;
  storyTriggerTitle: string;
  storyTriggerBody: string;
  storyFrustrationTitle: string;
  storyFrustrationBody: string;
  storySolutionTitle: string;
  storySolutionBody: string;
  storySupportTitle: string;
  storySupportBody: string;
  aboutMascotAlt: string;

  // Legacy about keys - fill with story-aligned content so nothing breaks
  aboutEyebrow: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2Before: string;
  aboutP2Highlight: string;
  aboutP2After: string;
  aboutIntro: string;
  aboutStoryTitle: string;
  aboutStoryBody: string;
  aboutFreeTitle: string;
  aboutFreeBody: string;
  aboutPrivacyTitle: string;
  aboutPrivacyBody: string;
  aboutTogetherTitle: string;
  aboutTogetherBody: string;

  // Support section
  supportEyebrow: string;
  supportTitle: string;
  supportBody: string;
  supportThanks: string;
  supportNote: string;

  // Footer
  footerTagline: string;
  footerPrivacyLine: string;
  contact: string;
  support: string;
  privacy: string;
  terms: string;
  github: string;
  rightsReserved: string;

  // Mockup
  mockWelcome: string;
  mockHi: string;
  mockHydration: string;
  mockGlasses: string;
  mockMeds: string;
  mockMedMorning: string;
  mockMedEvening: string;

  // Privacy page
  privacyEyebrow: string;
  privacyTitle: string;
  privacyUpdated: string;
  privacyWhatTitle: string;
  privacyWhatBody: string;
  privacyNoTitle: string;
  privacyNoBody: string;
  privacyDeleteTitle: string;
  privacyDeleteBody: string;
  privacyMedicalTitle: string;
  privacyMedicalBody: string;
  backHome: string;

  // Donation modal
  supportDeveloper: string;
  supportCharityBlurb: string;
  inviteCoffee: string;
  giveAsYouLike: string;
  chooseAmount: string;
  customAmountLabel: string;
  confirmDonation: string;
  supportConfirmBlurb: string;
  donateAmount: string;
  thankYouSupport: string;
  hurrah: string;
  keepGoing: string;
  cancel: string;
  back: string;
  continue: string;
};

const en: Dictionary = {
  navValues: "Why free",
  navFeatures: "Features",
  navStory: "Our story",
  navSupport: "Support",
  supportProjectCta: "Support the Project ☕",
  darkMode: "Dark mode",
  lightMode: "Light mode",
  chooseLanguage: "Choose language",
  dailyCompanion: "Your daily companion",
  heroHeadline:
    "Hydration & Medication Tracking Made Simple. Truly Free Forever.",
  heroSubheadline:
    "No paywalls, no ads, no sign-ups. Designed with love to help you and your family stay healthy every day.",
  openAppCta: "Open App / Download",
  buyCoffee: "Buy Me a Coffee ☕",
  freeOfflinePrivate: "100% Free • Offline • Private",
  tagline: "Stay hydrated, stay healthy!",
  heroBody:
    "A friendly offline companion for water and medications — {highlight}. Your data stays on your phone.",
  heroBodyHighlight: "truly free forever",
  downloadCta: "Open App / Download",
  valuesEyebrow: "What sets us apart",
  valuesTitle: "Built differently on purpose",
  valuesIntro:
    "Sip & Pill is the opposite of bloated health apps — free, private, simple, and ready offline.",
  valueFreeTitle: "100% Free & No Paywalls",
  valueFreeDesc:
    "No “Pro” versions. Every single feature is free for everyone.",
  valuePrivateTitle: "Private & Safe",
  valuePrivateDesc: "No registration. Your data never leaves your device.",
  valueSimpleTitle: "Ultra-Simple & Accessible",
  valueSimpleDesc:
    "High contrast, legible typography, and intuitive navigation crafted for all ages.",
  valueOfflineTitle: "Offline Ready",
  valueOfflineDesc: "Works seamlessly without an active internet connection.",
  featuresEyebrow: "Inside the app",
  featuresTitle: "Everything you need — nothing you don’t",
  featuresIntro:
    "Gentle tools for daily hydration and medication habits, without overwhelming charts.",
  featureHydrationTitle: "Daily hydration tracking",
  featureHydrationDesc:
    "Custom goals, one-tap logging, and gentle reminders that help you sip through the day.",
  featureMedsTitle: "Medication schedules",
  featureMedsDesc:
    "Add your pills, set times, and never miss a dose with clear, calm reminders.",
  featureStatsTitle: "Simple progress stats",
  featureStatsDesc:
    "See how you’re doing at a glance — clear feedback without chart overload.",
  featureWaterTitle: "Daily hydration tracking",
  featureWaterDesc:
    "Custom goals, one-tap logging, and gentle reminders that help you sip through the day.",
  featurePrivacyTitle: "Private & Safe",
  featurePrivacyDesc: "No registration. Your data never leaves your device.",
  featureFreeTitle: "100% Free & No Paywalls",
  featureFreeDesc:
    "No “Pro” versions. Every single feature is free for everyone.",
  storyEyebrow: "Why I built Sip & Pill",
  storyTitle: "Built Out of Care, Not Profit",
  storyIntro:
    "A personal project born from heatwaves, family worry, and frustration with paywalled health apps.",
  storyTriggerTitle: "The trigger",
  storyTriggerBody:
    "The extreme 2026 heatwaves highlighted how dangerous dehydration can be for our loved ones. Seeing a fit 89-year-old neighbor struggle, and discovering my own mother’s kidney issues due to lack of water, was a wake-up call.",
  storyFrustrationTitle: "The frustration",
  storyFrustrationBody:
    "Trying to find a simple tracking app led to endless paywalls, expensive monthly subscriptions, and cluttered interfaces that my mother could never navigate.",
  storySolutionTitle: "The solution",
  storySolutionBody:
    "As an independent developer, I decided to build a clean, bulletproof, completely free app that anyone — regardless of age — can use effortlessly.",
  storySupportTitle: "Why support matters",
  storySupportBody:
    "Building and maintaining apps incurs server, domain, and developer store costs. If Sip & Pill helps you or your family stay healthy, supporting with the price of a coffee keeps this project independent and free for everyone.",
  aboutMascotAlt: "Sip & Pill mascots reading together",
  aboutEyebrow: "Why I built Sip & Pill",
  aboutTitle: "Built Out of Care, Not Profit",
  aboutP1:
    "A personal project born from heatwaves, family worry, and frustration with paywalled health apps — built so anyone can track hydration and medications simply and offline.",
  aboutP2Before:
    "It stays free by design. Donations live on the website, not inside the app, so it remains ",
  aboutP2Highlight: "completely free and accessible to all",
  aboutP2After: ", without paywalls or In-App Purchase badges.",
  aboutIntro:
    "A personal project born from heatwaves, family worry, and frustration with paywalled health apps.",
  aboutStoryTitle: "The trigger",
  aboutStoryBody:
    "The extreme 2026 heatwaves highlighted how dangerous dehydration can be for our loved ones. Seeing a fit 89-year-old neighbor struggle, and discovering my own mother’s kidney issues due to lack of water, was a wake-up call.",
  aboutFreeTitle: "Built to stay free",
  aboutFreeBody:
    "As an independent developer, I decided to build a clean, bulletproof, completely free app that anyone — regardless of age — can use effortlessly. No “Pro” versions. Every feature is free for everyone.",
  aboutPrivacyTitle: "Private by default",
  aboutPrivacyBody:
    "No registration. Your name, water goals, medications, and logs never leave your device. Nothing is uploaded to a server. Privacy isn’t a setting here — it’s the default.",
  aboutTogetherTitle: "Why support matters",
  aboutTogetherBody:
    "Building and maintaining apps incurs server, domain, and developer store costs. If Sip & Pill helps you or your family stay healthy, supporting with the price of a coffee keeps this project independent and free for everyone.",
  supportEyebrow: "Support",
  supportTitle: "Keep Sip & Pill free for everyone",
  supportBody:
    "Donations live here on the website — not inside the app — so the App Store never needs an In-App Purchases badge. Your coffee keeps the project independent.",
  supportThanks:
    "Thank you for helping keep Sip & Pill free and accessible to all!",
  supportNote: "One-time support · secure checkout",
  footerTagline: "A friendly offline companion for water and medications.",
  footerPrivacyLine: "100% Private — No tracking cookies used.",
  contact: "Contact",
  support: "Support",
  privacy: "Privacy policy",
  terms: "Terms",
  github: "GitHub",
  rightsReserved: "All rights reserved.",
  mockWelcome: "Welcome back",
  mockHi: "Hi, Petra!",
  mockHydration: "Hydration",
  mockGlasses: "5 / 8 glasses",
  mockMeds: "Medication companion",
  mockMedMorning: "Morning",
  mockMedEvening: "Evening",
  privacyEyebrow: "Legal",
  privacyTitle: "Privacy policy",
  privacyUpdated: "Last updated: August 2026",
  privacyWhatTitle: "What do we store?",
  privacyWhatBody:
    "Sip & Pill stores your name, water goals, medications, and logs only on this device. Nothing is uploaded to a server.",
  privacyNoTitle: "No account, no tracking",
  privacyNoBody:
    "We don’t ask for registration, don’t use analytics tracking, and don’t show ads. Your health data stays on your phone.",
  privacyDeleteTitle: "Deleting your data",
  privacyDeleteBody:
    "You can erase everything anytime with the “Reset All Data” button in Settings.",
  privacyMedicalTitle: "Medical disclaimer",
  privacyMedicalBody:
    "Sip & Pill is provided free of charge for personal wellness tracking. It is not a medical device and does not replace professional medical advice. Use at your own judgment.",
  backHome: "← Back to home",
  supportDeveloper: "Support Developer",
  supportCharityBlurb:
    "Sip & Pill is built out of care, not profit. Donations live on this website — not inside the app — so it stays free for everyone. If you appreciate that and want to keep the project independent, invite them for a coffee.",
  inviteCoffee: "Buy Me a Coffee ☕",
  giveAsYouLike: "Give as you see fit",
  chooseAmount: "Choose an amount",
  customAmountLabel: "Custom amount",
  confirmDonation: "Confirm your support",
  supportConfirmBlurb:
    "You're about to donate {amount}. Thank you for helping keep Sip & Pill free and accessible to all!",
  donateAmount: "Donate {amount}",
  thankYouSupport: "Thank you for supporting Sip & Pill!",
  hurrah: "Hurrah!",
  keepGoing: "Keep it up!",
  cancel: "Cancel",
  back: "Back",
  continue: "Continue",
};

const hu: Dictionary = {
  navValues: "Miért ingyenes",
  navFeatures: "Funkciók",
  navStory: "Történetünk",
  navSupport: "Támogatás",
  supportProjectCta: "Támogasd a projektet ☕",
  darkMode: "Sötét mód",
  lightMode: "Világos mód",
  chooseLanguage: "Válassz nyelvet",
  dailyCompanion: "A napi társad",
  heroHeadline:
    "Hidratálás és gyógyszerkövetés egyszerűen. Valóban örökké ingyen.",
  heroSubheadline:
    "Nincs fizetőfal, nincs reklám, nincs regisztráció. Szeretettel készült, hogy te és a családod minden nap egészségesebben élhessetek.",
  openAppCta: "App megnyitása / Letöltés",
  buyCoffee: "Vegyél nekem egy kávét ☕",
  freeOfflinePrivate: "100% Ingyenes • Offline • Privát",
  tagline: "Maradj hidratált, maradj egészséges!",
  heroBody:
    "Barátságos offline társ a víziváshoz és a gyógyszerekhez — {highlight}. Az adataid a telefonodon maradnak.",
  heroBodyHighlight: "valóban örökké ingyenes",
  downloadCta: "App megnyitása / Letöltés",
  valuesEyebrow: "Ami megkülönböztet minket",
  valuesTitle: "Szándékosan másképp épült",
  valuesIntro:
    "A Sip & Pill a túlzsúfolt egészségügyi appok ellentéte — ingyenes, privát, egyszerű, és offline is készen áll.",
  valueFreeTitle: "100% ingyenes, fizetőfal nélkül",
  valueFreeDesc:
    "Nincs „Pro” verzió. Minden funkció mindenki számára ingyenes.",
  valuePrivateTitle: "Privát és biztonságos",
  valuePrivateDesc: "Nincs regisztráció. Az adataid soha nem hagyják el az eszközödet.",
  valueSimpleTitle: "Egyszerű és hozzáférhető",
  valueSimpleDesc:
    "Magas kontraszt, jól olvasható tipográfia és intuitív navigáció — minden korosztálynak.",
  valueOfflineTitle: "Offline is működik",
  valueOfflineDesc: "Aktív internetkapcsolat nélkül is zökkenőmentesen használható.",
  featuresEyebrow: "Az app belseje",
  featuresTitle: "Minden, amire szükséged van — semmi felesleg",
  featuresIntro:
    "Gyengéd eszközök a napi hidratáláshoz és gyógyszerszokásokhoz, túlzó diagramok nélkül.",
  featureHydrationTitle: "Napi hidratálás követése",
  featureHydrationDesc:
    "Egyedi célok, egy koppintásos naplózás és gyengéd emlékeztetők, hogy végigigyál a napon.",
  featureMedsTitle: "Gyógyszer-ütemezés",
  featureMedsDesc:
    "Add hozzá a tablettáidat, állíts be időpontokat, és soha ne hagyj ki egy adagot sem — nyugodt, egyértelmű emlékeztetőkkel.",
  featureStatsTitle: "Egyszerű előrehaladás",
  featureStatsDesc:
    "Egy pillantással láthatod, hol tartasz — tiszta visszajelzés diagram-túlterhelés nélkül.",
  featureWaterTitle: "Napi hidratálás követése",
  featureWaterDesc:
    "Egyedi célok, egy koppintásos naplózás és gyengéd emlékeztetők, hogy végigigyál a napon.",
  featurePrivacyTitle: "Privát és biztonságos",
  featurePrivacyDesc: "Nincs regisztráció. Az adataid soha nem hagyják el az eszközödet.",
  featureFreeTitle: "100% ingyenes, fizetőfal nélkül",
  featureFreeDesc:
    "Nincs „Pro” verzió. Minden funkció mindenki számára ingyenes.",
  storyEyebrow: "Miért készítettem a Sip & Pill-t",
  storyTitle: "Gondoskodásból épült, nem profitból",
  storyIntro:
    "Személyes projekt, amelyet hőhullámok, családi aggodalom és a fizetős egészségügyi appok miatti frusztráció szült.",
  storyTriggerTitle: "A kiváltó ok",
  storyTriggerBody:
    "A 2026-os extrém hőhullámok megmutatták, milyen veszélyes lehet a kiszáradás szeretteinkre. Amikor láttam, hogy egy formában lévő 89 éves szomszéd küzd, és kiderült, hogy édesanyám veséi is a kevés víz miatt szenvednek, az felrázott.",
  storyFrustrationTitle: "A frusztráció",
  storyFrustrationBody:
    "Egy egyszerű követő app keresése végtelen fizetőfalakhoz, drága havi előfizetésekhez és olyan zsúfolt felületekhez vezetett, amelyeket anyám soha nem tudott volna kezelni.",
  storySolutionTitle: "A megoldás",
  storySolutionBody:
    "Független fejlesztőként úgy döntöttem, készítek egy tiszta, megbízható, teljesen ingyenes appot, amelyet bárki — kortól függetlenül — könnyedén használhat.",
  storySupportTitle: "Miért számít a támogatás",
  storySupportBody:
    "Az appok építése és fenntartása szerver-, domain- és fejlesztői bolt költségekkel jár. Ha a Sip & Pill segít neked vagy a családodnak egészségesnek maradni, egy kávé árával támogathatod, hogy a projekt független és mindenki számára ingyenes maradjon.",
  aboutMascotAlt: "Sip & Pill kabalafigurák együtt olvasnak",
  aboutEyebrow: "Miért készítettem a Sip & Pill-t",
  aboutTitle: "Gondoskodásból épült, nem profitból",
  aboutP1:
    "Személyes projekt hőhullámokból, családi aggodalomból és a fizetős egészségügyi appok miatti frusztrációból — hogy bárki egyszerűen, offline követhesse a hidratálást és a gyógyszereket.",
  aboutP2Before:
    "Szándékosan marad ingyenes. Az adományok a weboldalon élnek, nem az appban, így ",
  aboutP2Highlight: "teljesen ingyenes és mindenki számára elérhető",
  aboutP2After: ", fizetőfalak és alkalmazáson belüli vásárlás jelvények nélkül.",
  aboutIntro:
    "Személyes projekt, amelyet hőhullámok, családi aggodalom és a fizetős egészségügyi appok miatti frusztráció szült.",
  aboutStoryTitle: "A kiváltó ok",
  aboutStoryBody:
    "A 2026-os extrém hőhullámok megmutatták, milyen veszélyes lehet a kiszáradás szeretteinkre. Amikor láttam, hogy egy formában lévő 89 éves szomszéd küzd, és kiderült, hogy édesanyám veséi is a kevés víz miatt szenvednek, az felrázott.",
  aboutFreeTitle: "Ingyenesnek született",
  aboutFreeBody:
    "Független fejlesztőként úgy döntöttem, készítek egy tiszta, megbízható, teljesen ingyenes appot, amelyet bárki — kortól függetlenül — könnyedén használhat. Nincs „Pro” verzió. Minden funkció mindenkié.",
  aboutPrivacyTitle: "Alapból privát",
  aboutPrivacyBody:
    "Nincs regisztráció. A neved, vízcéljaid, gyógyszereid és naplóid soha nem hagyják el az eszközödet. Semmi sem kerül szerverre. A magánélet itt nem beállítás — ez az alapértelmezés.",
  aboutTogetherTitle: "Miért számít a támogatás",
  aboutTogetherBody:
    "Az appok építése és fenntartása szerver-, domain- és fejlesztői bolt költségekkel jár. Ha a Sip & Pill segít, egy kávé árával tarthatod függetlennek és mindenkinek ingyenesnek a projektet.",
  supportEyebrow: "Támogatás",
  supportTitle: "Maradjon a Sip & Pill mindenki számára ingyenes",
  supportBody:
    "Az adományok itt, a weboldalon élnek — nem az appban —, így az App Store-nak soha nincs szüksége alkalmazáson belüli vásárlás jelvényre. A kávéd tartja függetlennek a projektet.",
  supportThanks:
    "Köszönjük, hogy segítesz a Sip & Pill-t ingyenesen és mindenki számára elérhetően tartani!",
  supportNote: "Egyszeri támogatás · biztonságos fizetés",
  footerTagline: "Barátságos offline társ a víziváshoz és a gyógyszerekhez.",
  footerPrivacyLine: "100% privát — nem használunk nyomkövető sütiket.",
  contact: "Kapcsolat",
  support: "Támogatás",
  privacy: "Adatvédelmi irányelvek",
  terms: "Általános szerződési feltételek",
  github: "GitHub",
  rightsReserved: "Minden jog fenntartva.",
  mockWelcome: "Üdv újra",
  mockHi: "Szia, Petra!",
  mockHydration: "Hidratáltság",
  mockGlasses: "5 / 8 pohár",
  mockMeds: "Gyógyszertárs",
  mockMedMorning: "Reggel",
  mockMedEvening: "Este",
  privacyEyebrow: "Jogi",
  privacyTitle: "Adatvédelmi irányelvek",
  privacyUpdated: "Utolsó frissítés: 2026. augusztus",
  privacyWhatTitle: "Mit tárolunk?",
  privacyWhatBody:
    "A Sip & Pill a neved, vízcéljaid, gyógyszereid és naplóid csak ezen az eszközön tárolja. Semmi sem kerül szerverre.",
  privacyNoTitle: "Nincs fiók, nincs nyomkövetés",
  privacyNoBody:
    "Nem kérünk regisztrációt, nem használunk analitikai nyomkövetést, és nem jelenítünk meg reklámokat. Az egészségügyi adataid a telefonodon maradnak.",
  privacyDeleteTitle: "Adatok törlése",
  privacyDeleteBody:
    "Bármikor mindent törölhetsz az app Beállítások menüjében található „Minden adat törlése” gombbal.",
  privacyMedicalTitle: "Orvosi felelősség",
  privacyMedicalBody:
    "A Sip & Pill ingyenes, személyes wellness követésre készült. Nem orvostechnikai eszköz, és nem helyettesíti a szakmai orvosi tanácsot. Saját belátásod szerint használd.",
  backHome: "← Vissza a főoldalra",
  supportDeveloper: "Fejlesztő támogatása",
  supportCharityBlurb:
    "A Sip & Pill gondoskodásból épült, nem profitból. Az adományok ezen a weboldalon élnek — nem az appban —, így mindenki számára ingyenes marad. Ha ezt értékeled, és szeretnéd függetlennek tartani a projektet, hívj meg egy kávéra.",
  inviteCoffee: "Vegyél nekem egy kávét ☕",
  giveAsYouLike: "Tegy belátásod szerint",
  chooseAmount: "Válassz összeget",
  customAmountLabel: "Egyedi összeg",
  confirmDonation: "Erősítsd meg a támogatást",
  supportConfirmBlurb:
    "Éppen {amount} támogatást adsz. Köszönjük, hogy segítesz a Sip & Pill-t ingyenesen és mindenki számára elérhetően tartani!",
  donateAmount: "Adományozás: {amount}",
  thankYouSupport: "Köszönjük, hogy támogatod a Sip & Pill-t!",
  hurrah: "Hurrá!",
  keepGoing: "Csak így tovább!",
  cancel: "Mégse",
  back: "Vissza",
  continue: "Folytatás",
};

const es: Dictionary = {
  navValues: "Por qué es gratis",
  navFeatures: "Funciones",
  navStory: "Nuestra historia",
  navSupport: "Apoyo",
  supportProjectCta: "Apoya el proyecto ☕",
  darkMode: "Modo oscuro",
  lightMode: "Modo claro",
  chooseLanguage: "Elige idioma",
  dailyCompanion: "Tu compañero diario",
  heroHeadline:
    "Seguimiento de hidratación y medicamentos, simple. Realmente gratis para siempre.",
  heroSubheadline:
    "Sin muros de pago, sin anuncios, sin registros. Diseñado con cariño para ayudarte a ti y a tu familia a cuidar la salud cada día.",
  openAppCta: "Abrir app / Descargar",
  buyCoffee: "Invítame a un café ☕",
  freeOfflinePrivate: "100% Gratis • Offline • Privado",
  tagline: "¡Mantente hidratado y saludable!",
  heroBody:
    "Un compañero offline amable para agua y medicamentos — {highlight}. Tus datos se quedan en tu teléfono.",
  heroBodyHighlight: "realmente gratis para siempre",
  downloadCta: "Abrir app / Descargar",
  valuesEyebrow: "Lo que nos diferencia",
  valuesTitle: "Hecho distinto a propósito",
  valuesIntro:
    "Sip & Pill es lo opuesto a las apps de salud sobrecargadas: gratis, privada, simple y lista sin conexión.",
  valueFreeTitle: "100% gratis y sin muros de pago",
  valueFreeDesc:
    "Sin versiones “Pro”. Cada función es gratis para todos.",
  valuePrivateTitle: "Privada y segura",
  valuePrivateDesc:
    "Sin registro. Tus datos nunca salen de tu dispositivo.",
  valueSimpleTitle: "Ultra simple y accesible",
  valueSimpleDesc:
    "Alto contraste, tipografía legible y navegación intuitiva pensada para todas las edades.",
  valueOfflineTitle: "Lista sin conexión",
  valueOfflineDesc:
    "Funciona sin problemas sin una conexión activa a internet.",
  featuresEyebrow: "Dentro de la app",
  featuresTitle: "Todo lo que necesitas — nada de más",
  featuresIntro:
    "Herramientas suaves para hábitos diarios de hidratación y medicamentos, sin gráficos abrumadores.",
  featureHydrationTitle: "Seguimiento diario de hidratación",
  featureHydrationDesc:
    "Metas personalizadas, registro con un toque y recordatorios suaves que te ayudan a beber a lo largo del día.",
  featureMedsTitle: "Horarios de medicamentos",
  featureMedsDesc:
    "Añade tus pastillas, define horarios y no olvides ninguna dosis con recordatorios claros y calmados.",
  featureStatsTitle: "Progreso simple",
  featureStatsDesc:
    "Mira cómo vas de un vistazo: feedback claro sin sobrecarga de gráficos.",
  featureWaterTitle: "Seguimiento diario de hidratación",
  featureWaterDesc:
    "Metas personalizadas, registro con un toque y recordatorios suaves que te ayudan a beber a lo largo del día.",
  featurePrivacyTitle: "Privada y segura",
  featurePrivacyDesc:
    "Sin registro. Tus datos nunca salen de tu dispositivo.",
  featureFreeTitle: "100% gratis y sin muros de pago",
  featureFreeDesc:
    "Sin versiones “Pro”. Cada función es gratis para todos.",
  storyEyebrow: "Por qué creé Sip & Pill",
  storyTitle: "Hecho con cuidado, no por lucro",
  storyIntro:
    "Un proyecto personal nacido de olas de calor, preocupación familiar y frustración con apps de salud de pago.",
  storyTriggerTitle: "El detonante",
  storyTriggerBody:
    "Las olas de calor extremas de 2026 mostraron lo peligrosa que puede ser la deshidratación para quienes queremos. Ver a un vecino de 89 años, en buena forma, sufrir, y descubrir problemas renales de mi madre por falta de agua, fue una llamada de atención.",
  storyFrustrationTitle: "La frustración",
  storyFrustrationBody:
    "Buscar una app de seguimiento simple me llevó a muros de pago interminables, suscripciones mensuales caras e interfaces abarrotadas que mi madre nunca podría usar.",
  storySolutionTitle: "La solución",
  storySolutionBody:
    "Como desarrollador independiente, decidí crear una app limpia, sólida y completamente gratis que cualquiera — sin importar la edad — pueda usar con facilidad.",
  storySupportTitle: "Por qué importa el apoyo",
  storySupportBody:
    "Crear y mantener apps implica costes de servidor, dominio y tiendas de desarrolladores. Si Sip & Pill te ayuda a ti o a tu familia a cuidar la salud, apoyar con el precio de un café mantiene este proyecto independiente y gratis para todos.",
  aboutMascotAlt: "Mascotas de Sip & Pill leyendo juntas",
  aboutEyebrow: "Por qué creé Sip & Pill",
  aboutTitle: "Hecho con cuidado, no por lucro",
  aboutP1:
    "Un proyecto personal nacido de olas de calor, preocupación familiar y frustración con apps de salud de pago — para que cualquiera pueda seguir hidratación y medicamentos de forma simple y offline.",
  aboutP2Before:
    "Se mantiene gratis por diseño. Las donaciones viven en el sitio web, no dentro de la app, para que siga ",
  aboutP2Highlight: "completamente gratis y accesible para todos",
  aboutP2After: ", sin muros de pago ni insignias de compras integradas.",
  aboutIntro:
    "Un proyecto personal nacido de olas de calor, preocupación familiar y frustración con apps de salud de pago.",
  aboutStoryTitle: "El detonante",
  aboutStoryBody:
    "Las olas de calor extremas de 2026 mostraron lo peligrosa que puede ser la deshidratación para quienes queremos. Ver a un vecino de 89 años, en buena forma, sufrir, y descubrir problemas renales de mi madre por falta de agua, fue una llamada de atención.",
  aboutFreeTitle: "Hecha para seguir gratis",
  aboutFreeBody:
    "Como desarrollador independiente, decidí crear una app limpia, sólida y completamente gratis que cualquiera — sin importar la edad — pueda usar con facilidad. Sin versiones “Pro”. Cada función es gratis para todos.",
  aboutPrivacyTitle: "Privada por defecto",
  aboutPrivacyBody:
    "Sin registro. Tu nombre, metas de agua, medicamentos y registros nunca salen de tu dispositivo. Nada se sube a un servidor. La privacidad aquí no es un ajuste — es lo predeterminado.",
  aboutTogetherTitle: "Por qué importa el apoyo",
  aboutTogetherBody:
    "Crear y mantener apps implica costes de servidor, dominio y tiendas. Si Sip & Pill te ayuda, apoyar con un café mantiene el proyecto independiente y gratis para todos.",
  supportEyebrow: "Apoyo",
  supportTitle: "Mantén Sip & Pill gratis para todos",
  supportBody:
    "Las donaciones viven aquí, en el sitio web — no dentro de la app — para que la App Store nunca necesite una insignia de compras integradas. Tu café mantiene el proyecto independiente.",
  supportThanks:
    "¡Gracias por ayudar a mantener Sip & Pill gratis y accesible para todos!",
  supportNote: "Apoyo único · pago seguro",
  footerTagline: "Un compañero offline amable para agua y medicamentos.",
  footerPrivacyLine: "100% privado — no usamos cookies de seguimiento.",
  contact: "Contacto",
  support: "Apoyo",
  privacy: "Política de privacidad",
  terms: "Términos",
  github: "GitHub",
  rightsReserved: "Todos los derechos reservados.",
  mockWelcome: "Bienvenido de nuevo",
  mockHi: "¡Hola, Petra!",
  mockHydration: "Hidratación",
  mockGlasses: "5 / 8 vasos",
  mockMeds: "Compañero de medicación",
  mockMedMorning: "Mañana",
  mockMedEvening: "Noche",
  privacyEyebrow: "Legal",
  privacyTitle: "Política de privacidad",
  privacyUpdated: "Última actualización: agosto de 2026",
  privacyWhatTitle: "¿Qué almacenamos?",
  privacyWhatBody:
    "Sip & Pill guarda tu nombre, metas de agua, medicamentos y registros solo en este dispositivo. Nada se sube a un servidor.",
  privacyNoTitle: "Sin cuenta, sin seguimiento",
  privacyNoBody:
    "No pedimos registro, no usamos analítica de seguimiento y no mostramos anuncios. Tus datos de salud se quedan en tu teléfono.",
  privacyDeleteTitle: "Borrar tus datos",
  privacyDeleteBody:
    "Puedes borrar todo en cualquier momento con el botón “Restablecer todos los datos” en Ajustes.",
  privacyMedicalTitle: "Aviso médico",
  privacyMedicalBody:
    "Sip & Pill se ofrece gratis para el seguimiento personal de bienestar. No es un dispositivo médico y no sustituye el consejo médico profesional. Úsala según tu propio criterio.",
  backHome: "← Volver al inicio",
  supportDeveloper: "Apoyar al desarrollador",
  supportCharityBlurb:
    "Sip & Pill se construyó con cuidado, no por lucro. Las donaciones viven en este sitio — no dentro de la app — para que siga gratis para todos. Si lo valoras y quieres mantener el proyecto independiente, invítame a un café.",
  inviteCoffee: "Invítame a un café ☕",
  giveAsYouLike: "Da lo que te parezca bien",
  chooseAmount: "Elige una cantidad",
  customAmountLabel: "Cantidad personalizada",
  confirmDonation: "Confirma tu apoyo",
  supportConfirmBlurb:
    "Estás a punto de donar {amount}. ¡Gracias por ayudar a mantener Sip & Pill gratis y accesible para todos!",
  donateAmount: "Donar {amount}",
  thankYouSupport: "¡Gracias por apoyar Sip & Pill!",
  hurrah: "¡Hurra!",
  keepGoing: "¡Sigue así!",
  cancel: "Cancelar",
  back: "Atrás",
  continue: "Continuar",
};

const fr: Dictionary = {
  navValues: "Pourquoi gratuit",
  navFeatures: "Fonctionnalités",
  navStory: "Notre histoire",
  navSupport: "Soutien",
  supportProjectCta: "Soutenir le projet ☕",
  darkMode: "Mode sombre",
  lightMode: "Mode clair",
  chooseLanguage: "Choisir la langue",
  dailyCompanion: "Votre compagnon du quotidien",
  heroHeadline:
    "Suivi d’hydratation et de médicaments, simplement. Vraiment gratuit pour toujours.",
  heroSubheadline:
    "Pas de paywalls, pas de pubs, pas d’inscription. Conçu avec amour pour vous aider, vous et votre famille, à rester en bonne santé chaque jour.",
  openAppCta: "Ouvrir l’app / Télécharger",
  buyCoffee: "Offrez-moi un café ☕",
  freeOfflinePrivate: "100 % Gratuit • Hors ligne • Privé",
  tagline: "Restez hydraté, restez en forme !",
  heroBody:
    "Un compagnon hors ligne bienveillant pour l’eau et les médicaments — {highlight}. Vos données restent sur votre téléphone.",
  heroBodyHighlight: "vraiment gratuit pour toujours",
  downloadCta: "Ouvrir l’app / Télécharger",
  valuesEyebrow: "Ce qui nous distingue",
  valuesTitle: "Conçu autrement, volontairement",
  valuesIntro:
    "Sip & Pill est l’opposé des apps santé surchargées — gratuit, privé, simple, et prêt hors ligne.",
  valueFreeTitle: "100 % gratuit, sans paywall",
  valueFreeDesc:
    "Pas de version « Pro ». Chaque fonctionnalité est gratuite pour tous.",
  valuePrivateTitle: "Privé et sûr",
  valuePrivateDesc:
    "Pas d’inscription. Vos données ne quittent jamais votre appareil.",
  valueSimpleTitle: "Ultra simple et accessible",
  valueSimpleDesc:
    "Fort contraste, typographie lisible et navigation intuitive pensée pour tous les âges.",
  valueOfflineTitle: "Prêt hors ligne",
  valueOfflineDesc:
    "Fonctionne sans accroc sans connexion Internet active.",
  featuresEyebrow: "Dans l’app",
  featuresTitle: "Tout ce qu’il faut — rien de trop",
  featuresIntro:
    "Des outils doux pour l’hydratation et les médicaments au quotidien, sans graphiques écrasants.",
  featureHydrationTitle: "Suivi quotidien de l’hydratation",
  featureHydrationDesc:
    "Objectifs personnalisés, saisie en un tap et rappels doux pour vous accompagner toute la journée.",
  featureMedsTitle: "Horaires de médicaments",
  featureMedsDesc:
    "Ajoutez vos comprimés, définissez les heures, et ne manquez plus aucune dose grâce à des rappels clairs et calmes.",
  featureStatsTitle: "Progression simple",
  featureStatsDesc:
    "Voyez où vous en êtes d’un coup d’œil — un retour clair, sans surcharge de graphiques.",
  featureWaterTitle: "Suivi quotidien de l’hydratation",
  featureWaterDesc:
    "Objectifs personnalisés, saisie en un tap et rappels doux pour vous accompagner toute la journée.",
  featurePrivacyTitle: "Privé et sûr",
  featurePrivacyDesc:
    "Pas d’inscription. Vos données ne quittent jamais votre appareil.",
  featureFreeTitle: "100 % gratuit, sans paywall",
  featureFreeDesc:
    "Pas de version « Pro ». Chaque fonctionnalité est gratuite pour tous.",
  storyEyebrow: "Pourquoi j’ai créé Sip & Pill",
  storyTitle: "Né du soin, pas du profit",
  storyIntro:
    "Un projet personnel né des canicules, de l’inquiétude familiale et de la frustration face aux apps santé payantes.",
  storyTriggerTitle: "Le déclencheur",
  storyTriggerBody:
    "Les canicules extrêmes de 2026 ont rappelé à quel point la déshydratation peut être dangereuse pour nos proches. Voir un voisin de 89 ans, pourtant en forme, souffrir, et découvrir les problèmes rénaux de ma mère liés au manque d’eau, a été un électrochoc.",
  storyFrustrationTitle: "La frustration",
  storyFrustrationBody:
    "Chercher une app de suivi simple menait à des paywalls sans fin, des abonnements mensuels chers et des interfaces encombrées que ma mère n’aurait jamais pu utiliser.",
  storySolutionTitle: "La solution",
  storySolutionBody:
    "En tant que développeur indépendant, j’ai décidé de créer une app propre, solide et totalement gratuite, que chacun — quel que soit son âge — puisse utiliser sans effort.",
  storySupportTitle: "Pourquoi le soutien compte",
  storySupportBody:
    "Créer et maintenir des apps entraîne des coûts de serveur, de domaine et de boutiques développeurs. Si Sip & Pill vous aide, vous ou votre famille, à rester en bonne santé, soutenir au prix d’un café garde ce projet indépendant et gratuit pour tous.",
  aboutMascotAlt: "Mascottes Sip & Pill lisant ensemble",
  aboutEyebrow: "Pourquoi j’ai créé Sip & Pill",
  aboutTitle: "Né du soin, pas du profit",
  aboutP1:
    "Un projet personnel né des canicules, de l’inquiétude familiale et de la frustration face aux apps santé payantes — pour que chacun puisse suivre hydratation et médicaments simplement et hors ligne.",
  aboutP2Before:
    "Il reste gratuit par conception. Les dons vivent sur le site, pas dans l’app, pour qu’il reste ",
  aboutP2Highlight: "totalement gratuit et accessible à tous",
  aboutP2After: ", sans paywalls ni badges d’achats intégrés.",
  aboutIntro:
    "Un projet personnel né des canicules, de l’inquiétude familiale et de la frustration face aux apps santé payantes.",
  aboutStoryTitle: "Le déclencheur",
  aboutStoryBody:
    "Les canicules extrêmes de 2026 ont rappelé à quel point la déshydratation peut être dangereuse pour nos proches. Voir un voisin de 89 ans, pourtant en forme, souffrir, et découvrir les problèmes rénaux de ma mère liés au manque d’eau, a été un électrochoc.",
  aboutFreeTitle: "Conçu pour rester gratuit",
  aboutFreeBody:
    "En tant que développeur indépendant, j’ai décidé de créer une app propre, solide et totalement gratuite, que chacun — quel que soit son âge — puisse utiliser sans effort. Pas de version « Pro ». Chaque fonctionnalité est gratuite pour tous.",
  aboutPrivacyTitle: "Privé par défaut",
  aboutPrivacyBody:
    "Pas d’inscription. Votre nom, objectifs d’eau, médicaments et journaux ne quittent jamais votre appareil. Rien n’est envoyé sur un serveur. Ici, la confidentialité n’est pas un réglage — c’est la valeur par défaut.",
  aboutTogetherTitle: "Pourquoi le soutien compte",
  aboutTogetherBody:
    "Créer et maintenir des apps entraîne des coûts de serveur, de domaine et de boutiques. Si Sip & Pill vous aide, soutenir au prix d’un café garde le projet indépendant et gratuit pour tous.",
  supportEyebrow: "Soutien",
  supportTitle: "Gardez Sip & Pill gratuit pour tous",
  supportBody:
    "Les dons vivent ici, sur le site — pas dans l’app — pour que l’App Store n’ait jamais besoin d’un badge Achats intégrés. Votre café garde le projet indépendant.",
  supportThanks:
    "Merci d’aider à garder Sip & Pill gratuit et accessible à tous !",
  supportNote: "Soutien unique · paiement sécurisé",
  footerTagline: "Un compagnon hors ligne bienveillant pour l’eau et les médicaments.",
  footerPrivacyLine: "100 % privé — aucun cookie de suivi utilisé.",
  contact: "Contact",
  support: "Soutien",
  privacy: "Politique de confidentialité",
  terms: "Conditions",
  github: "GitHub",
  rightsReserved: "Tous droits réservés.",
  mockWelcome: "Bon retour",
  mockHi: "Salut, Petra !",
  mockHydration: "Hydratation",
  mockGlasses: "5 / 8 verres",
  mockMeds: "Compagnon médicaments",
  mockMedMorning: "Matin",
  mockMedEvening: "Soir",
  privacyEyebrow: "Mentions légales",
  privacyTitle: "Politique de confidentialité",
  privacyUpdated: "Dernière mise à jour : août 2026",
  privacyWhatTitle: "Que stockons-nous ?",
  privacyWhatBody:
    "Sip & Pill enregistre votre nom, objectifs d’eau, médicaments et journaux uniquement sur cet appareil. Rien n’est envoyé sur un serveur.",
  privacyNoTitle: "Pas de compte, pas de suivi",
  privacyNoBody:
    "Nous ne demandons pas d’inscription, n’utilisons pas d’analytique de suivi et n’affichons pas de publicités. Vos données de santé restent sur votre téléphone.",
  privacyDeleteTitle: "Supprimer vos données",
  privacyDeleteBody:
    "Vous pouvez tout effacer à tout moment avec le bouton « Réinitialiser toutes les données » dans Réglages.",
  privacyMedicalTitle: "Avertissement médical",
  privacyMedicalBody:
    "Sip & Pill est fourni gratuitement pour un suivi personnel de bien-être. Ce n’est pas un dispositif médical et ne remplace pas un avis médical professionnel. Utilisez-le selon votre propre jugement.",
  backHome: "← Retour à l’accueil",
  supportDeveloper: "Soutenir le développeur",
  supportCharityBlurb:
    "Sip & Pill est né du soin, pas du profit. Les dons vivent sur ce site — pas dans l’app — pour rester gratuit pour tous. Si vous l’appréciez et voulez garder le projet indépendant, offrez-moi un café.",
  inviteCoffee: "Offrez-moi un café ☕",
  giveAsYouLike: "Donnez ce qui vous semble juste",
  chooseAmount: "Choisissez un montant",
  customAmountLabel: "Montant personnalisé",
  confirmDonation: "Confirmez votre soutien",
  supportConfirmBlurb:
    "Vous êtes sur le point de donner {amount}. Merci d’aider à garder Sip & Pill gratuit et accessible à tous !",
  donateAmount: "Donner {amount}",
  thankYouSupport: "Merci de soutenir Sip & Pill !",
  hurrah: "Hourra !",
  keepGoing: "Continuez comme ça !",
  cancel: "Annuler",
  back: "Retour",
  continue: "Continuer",
};

const de: Dictionary = {
  navValues: "Warum kostenlos",
  navFeatures: "Funktionen",
  navStory: "Unsere Geschichte",
  navSupport: "Unterstützung",
  supportProjectCta: "Projekt unterstützen ☕",
  darkMode: "Dunkelmodus",
  lightMode: "Hellmodus",
  chooseLanguage: "Sprache wählen",
  dailyCompanion: "Dein täglicher Begleiter",
  heroHeadline:
    "Hydration & Medikamente einfach tracken. Wirklich für immer kostenlos.",
  heroSubheadline:
    "Keine Paywalls, keine Werbung, keine Anmeldung. Mit Liebe gemacht, damit du und deine Familie jeden Tag gesund bleiben.",
  openAppCta: "App öffnen / Herunterladen",
  buyCoffee: "Kauf mir einen Kaffee ☕",
  freeOfflinePrivate: "100 % Kostenlos • Offline • Privat",
  tagline: "Bleib hydriert, bleib gesund!",
  heroBody:
    "Ein freundlicher Offline-Begleiter für Wasser und Medikamente — {highlight}. Deine Daten bleiben auf dem Handy.",
  heroBodyHighlight: "wirklich für immer kostenlos",
  downloadCta: "App öffnen / Herunterladen",
  valuesEyebrow: "Was uns unterscheidet",
  valuesTitle: "Absichtlich anders gebaut",
  valuesIntro:
    "Sip & Pill ist das Gegenteil überladener Gesundheits-Apps — kostenlos, privat, einfach und offline bereit.",
  valueFreeTitle: "100 % kostenlos & ohne Paywalls",
  valueFreeDesc:
    "Keine „Pro“-Versionen. Jede einzelne Funktion ist für alle kostenlos.",
  valuePrivateTitle: "Privat & sicher",
  valuePrivateDesc:
    "Keine Registrierung. Deine Daten verlassen niemals dein Gerät.",
  valueSimpleTitle: "Ultra einfach & zugänglich",
  valueSimpleDesc:
    "Hoher Kontrast, gut lesbare Typografie und intuitive Navigation für jedes Alter.",
  valueOfflineTitle: "Offline bereit",
  valueOfflineDesc:
    "Funktioniert nahtlos ohne aktive Internetverbindung.",
  featuresEyebrow: "In der App",
  featuresTitle: "Alles, was du brauchst — nichts Überflüssiges",
  featuresIntro:
    "Sanfte Werkzeuge für tägliche Hydration und Medikamente — ohne überwältigende Diagramme.",
  featureHydrationTitle: "Tägliches Hydration-Tracking",
  featureHydrationDesc:
    "Eigene Ziele, Tippen zum Eintragen und sanfte Erinnerungen, die dich den Tag über zum Trinken bringen.",
  featureMedsTitle: "Medikamentenpläne",
  featureMedsDesc:
    "Füge deine Tabletten hinzu, setze Zeiten und verpasse keine Dosis — mit klaren, ruhigen Erinnerungen.",
  featureStatsTitle: "Einfache Fortschrittsstatistiken",
  featureStatsDesc:
    "Sieh auf einen Blick, wie du liegst — klares Feedback ohne Diagramm-Überladung.",
  featureWaterTitle: "Tägliches Hydration-Tracking",
  featureWaterDesc:
    "Eigene Ziele, Tippen zum Eintragen und sanfte Erinnerungen, die dich den Tag über zum Trinken bringen.",
  featurePrivacyTitle: "Privat & sicher",
  featurePrivacyDesc:
    "Keine Registrierung. Deine Daten verlassen niemals dein Gerät.",
  featureFreeTitle: "100 % kostenlos & ohne Paywalls",
  featureFreeDesc:
    "Keine „Pro“-Versionen. Jede einzelne Funktion ist für alle kostenlos.",
  storyEyebrow: "Warum ich Sip & Pill gebaut habe",
  storyTitle: "Aus Fürsorge gebaut, nicht für Profit",
  storyIntro:
    "Ein persönliches Projekt aus Hitzewellen, familiärer Sorge und Frustration über bezahlte Gesundheits-Apps.",
  storyTriggerTitle: "Der Auslöser",
  storyTriggerBody:
    "Die extremen Hitzewellen 2026 haben gezeigt, wie gefährlich Dehydration für unsere Lieben sein kann. Einen fitten 89-jährigen Nachbarn leiden zu sehen und bei meiner Mutter Nierenprobleme durch zu wenig Wasser zu entdecken, war ein Weckruf.",
  storyFrustrationTitle: "Die Frustration",
  storyFrustrationBody:
    "Die Suche nach einer einfachen Tracking-App führte zu endlosen Paywalls, teuren Monatsabos und überladenen Oberflächen, die meine Mutter nie bedienen könnte.",
  storySolutionTitle: "Die Lösung",
  storySolutionBody:
    "Als unabhängiger Entwickler beschloss ich, eine klare, robuste, völlig kostenlose App zu bauen, die jeder — unabhängig vom Alter — mühelos nutzen kann.",
  storySupportTitle: "Warum Unterstützung zählt",
  storySupportBody:
    "Apps zu bauen und zu pflegen kostet Server, Domain und Entwickler-Stores. Wenn Sip & Pill dir oder deiner Familie hilft, gesund zu bleiben, hält Unterstützung im Preis eines Kaffees dieses Projekt unabhängig und kostenlos für alle.",
  aboutMascotAlt: "Sip & Pill Maskottchen lesen zusammen",
  aboutEyebrow: "Warum ich Sip & Pill gebaut habe",
  aboutTitle: "Aus Fürsorge gebaut, nicht für Profit",
  aboutP1:
    "Ein persönliches Projekt aus Hitzewellen, familiärer Sorge und Frustration über bezahlte Gesundheits-Apps — damit jeder Hydration und Medikamente einfach und offline tracken kann.",
  aboutP2Before:
    "Es bleibt absichtlich kostenlos. Spenden leben auf der Website, nicht in der App, damit sie ",
  aboutP2Highlight: "völlig kostenlos und für alle zugänglich",
  aboutP2After: " bleibt — ohne Paywalls oder In-App-Kauf-Badges.",
  aboutIntro:
    "Ein persönliches Projekt aus Hitzewellen, familiärer Sorge und Frustration über bezahlte Gesundheits-Apps.",
  aboutStoryTitle: "Der Auslöser",
  aboutStoryBody:
    "Die extremen Hitzewellen 2026 haben gezeigt, wie gefährlich Dehydration für unsere Lieben sein kann. Einen fitten 89-jährigen Nachbarn leiden zu sehen und bei meiner Mutter Nierenprobleme durch zu wenig Wasser zu entdecken, war ein Weckruf.",
  aboutFreeTitle: "Gebaut, um kostenlos zu bleiben",
  aboutFreeBody:
    "Als unabhängiger Entwickler beschloss ich, eine klare, robuste, völlig kostenlose App zu bauen, die jeder — unabhängig vom Alter — mühelos nutzen kann. Keine „Pro“-Versionen. Jede Funktion ist für alle kostenlos.",
  aboutPrivacyTitle: "Privat als Standard",
  aboutPrivacyBody:
    "Keine Registrierung. Name, Wasserziele, Medikamente und Logs verlassen niemals dein Gerät. Nichts wird auf einen Server hochgeladen. Privatsphäre ist hier keine Einstellung — sie ist der Standard.",
  aboutTogetherTitle: "Warum Unterstützung zählt",
  aboutTogetherBody:
    "Apps zu bauen und zu pflegen kostet Server, Domain und Stores. Wenn Sip & Pill hilft, hält ein Kaffee das Projekt unabhängig und kostenlos für alle.",
  supportEyebrow: "Unterstützung",
  supportTitle: "Halte Sip & Pill für alle kostenlos",
  supportBody:
    "Spenden leben hier auf der Website — nicht in der App — damit der App Store nie ein In-App-Käufe-Badge braucht. Dein Kaffee hält das Projekt unabhängig.",
  supportThanks:
    "Danke, dass du hilfst, Sip & Pill kostenlos und für alle zugänglich zu halten!",
  supportNote: "Einmalige Unterstützung · sicherer Checkout",
  footerTagline: "Ein freundlicher Offline-Begleiter für Wasser und Medikamente.",
  footerPrivacyLine: "100 % privat — keine Tracking-Cookies.",
  contact: "Kontakt",
  support: "Unterstützung",
  privacy: "Datenschutz",
  terms: "Nutzungsbedingungen",
  github: "GitHub",
  rightsReserved: "Alle Rechte vorbehalten.",
  mockWelcome: "Willkommen zurück",
  mockHi: "Hi, Petra!",
  mockHydration: "Hydration",
  mockGlasses: "5 / 8 Gläser",
  mockMeds: "Medikamenten-Begleiter",
  mockMedMorning: "Morgen",
  mockMedEvening: "Abend",
  privacyEyebrow: "Rechtliches",
  privacyTitle: "Datenschutz",
  privacyUpdated: "Zuletzt aktualisiert: August 2026",
  privacyWhatTitle: "Was speichern wir?",
  privacyWhatBody:
    "Sip & Pill speichert deinen Namen, Wasserziele, Medikamente und Logs nur auf diesem Gerät. Nichts wird auf einen Server hochgeladen.",
  privacyNoTitle: "Kein Konto, kein Tracking",
  privacyNoBody:
    "Wir verlangen keine Registrierung, nutzen kein Analyse-Tracking und zeigen keine Werbung. Deine Gesundheitsdaten bleiben auf dem Handy.",
  privacyDeleteTitle: "Daten löschen",
  privacyDeleteBody:
    "Du kannst jederzeit alles mit dem Button „Alle Daten zurücksetzen“ in den Einstellungen löschen.",
  privacyMedicalTitle: "Medizinischer Hinweis",
  privacyMedicalBody:
    "Sip & Pill wird kostenlos für persönliches Wellness-Tracking bereitgestellt. Es ist kein Medizinprodukt und ersetzt keine professionelle medizinische Beratung. Nutze es nach eigenem Ermessen.",
  backHome: "← Zurück zur Startseite",
  supportDeveloper: "Entwickler unterstützen",
  supportCharityBlurb:
    "Sip & Pill wurde aus Fürsorge gebaut, nicht für Profit. Spenden leben auf dieser Website — nicht in der App — damit sie für alle kostenlos bleibt. Wenn du das schätzt und das Projekt unabhängig halten willst, lade mich auf einen Kaffee ein.",
  inviteCoffee: "Kauf mir einen Kaffee ☕",
  giveAsYouLike: "Gib, was dir richtig erscheint",
  chooseAmount: "Betrag wählen",
  customAmountLabel: "Eigener Betrag",
  confirmDonation: "Unterstützung bestätigen",
  supportConfirmBlurb:
    "Du bist dabei, {amount} zu spenden. Danke, dass du hilfst, Sip & Pill kostenlos und für alle zugänglich zu halten!",
  donateAmount: "{amount} spenden",
  thankYouSupport: "Danke, dass du Sip & Pill unterstützt!",
  hurrah: "Hurra!",
  keepGoing: "Weiter so!",
  cancel: "Abbrechen",
  back: "Zurück",
  continue: "Weiter",
};

const it: Dictionary = {
  navValues: "Perché è gratis",
  navFeatures: "Funzioni",
  navStory: "La nostra storia",
  navSupport: "Supporto",
  supportProjectCta: "Sostieni il progetto ☕",
  darkMode: "Modalità scura",
  lightMode: "Modalità chiara",
  chooseLanguage: "Scegli la lingua",
  dailyCompanion: "Il tuo compagno quotidiano",
  heroHeadline:
    "Idratazione e farmaci, semplici da seguire. Davvero gratis per sempre.",
  heroSubheadline:
    "Niente paywall, niente annunci, niente iscrizioni. Progettato con cura per aiutare te e la tua famiglia a restare in salute ogni giorno.",
  openAppCta: "Apri app / Scarica",
  buyCoffee: "Offrimi un caffè ☕",
  freeOfflinePrivate: "100% Gratis • Offline • Privato",
  tagline: "Resta idratato, resta in salute!",
  heroBody:
    "Un compagno offline amichevole per acqua e farmaci — {highlight}. I tuoi dati restano sul telefono.",
  heroBodyHighlight: "davvero gratis per sempre",
  downloadCta: "Apri app / Scarica",
  valuesEyebrow: "Cosa ci distingue",
  valuesTitle: "Costruito diversamente, di proposito",
  valuesIntro:
    "Sip & Pill è l’opposto delle app salute gonfie — gratis, privata, semplice e pronta offline.",
  valueFreeTitle: "100% gratis e senza paywall",
  valueFreeDesc:
    "Niente versioni “Pro”. Ogni singola funzione è gratis per tutti.",
  valuePrivateTitle: "Privata e sicura",
  valuePrivateDesc:
    "Niente registrazione. I tuoi dati non lasciano mai il dispositivo.",
  valueSimpleTitle: "Ultra semplice e accessibile",
  valueSimpleDesc:
    "Alto contrasto, tipografia leggibile e navigazione intuitiva pensata per ogni età.",
  valueOfflineTitle: "Pronta offline",
  valueOfflineDesc:
    "Funziona senza problemi senza una connessione Internet attiva.",
  featuresEyebrow: "Dentro l’app",
  featuresTitle: "Tutto ciò che serve — niente di superfluo",
  featuresIntro:
    "Strumenti delicati per abitudini quotidiane di idratazione e farmaci, senza grafici opprimenti.",
  featureHydrationTitle: "Monitoraggio quotidiano dell’idratazione",
  featureHydrationDesc:
    "Obiettivi personalizzati, registrazione con un tap e promemoria delicati che ti aiutano a bere durante la giornata.",
  featureMedsTitle: "Programmi dei farmaci",
  featureMedsDesc:
    "Aggiungi le tue pillole, imposta gli orari e non perdere mai una dose con promemoria chiari e calmi.",
  featureStatsTitle: "Statistiche di progresso semplici",
  featureStatsDesc:
    "Vedi a colpo d’occhio come stai andando — feedback chiaro senza sovraccarico di grafici.",
  featureWaterTitle: "Monitoraggio quotidiano dell’idratazione",
  featureWaterDesc:
    "Obiettivi personalizzati, registrazione con un tap e promemoria delicati che ti aiutano a bere durante la giornata.",
  featurePrivacyTitle: "Privata e sicura",
  featurePrivacyDesc:
    "Niente registrazione. I tuoi dati non lasciano mai il dispositivo.",
  featureFreeTitle: "100% gratis e senza paywall",
  featureFreeDesc:
    "Niente versioni “Pro”. Ogni singola funzione è gratis per tutti.",
  storyEyebrow: "Perché ho creato Sip & Pill",
  storyTitle: "Nato dalla cura, non dal profitto",
  storyIntro:
    "Un progetto personale nato da ondate di calore, preoccupazione familiare e frustrazione per le app salute a pagamento.",
  storyTriggerTitle: "Il grilletto",
  storyTriggerBody:
    "Le ondate di calore estreme del 2026 hanno evidenziato quanto possa essere pericolosa la disidratazione per i nostri cari. Vedere un vicino di 89 anni, ancora in forma, faticare, e scoprire problemi renali di mia madre per mancanza d’acqua, è stato un campanello d’allarme.",
  storyFrustrationTitle: "La frustrazione",
  storyFrustrationBody:
    "Cercare un’app di monitoraggio semplice ha portato a paywall infiniti, abbonamenti mensili costosi e interfacce sovraccariche che mia madre non avrebbe mai potuto usare.",
  storySolutionTitle: "La soluzione",
  storySolutionBody:
    "Come sviluppatore indipendente, ho deciso di creare un’app pulita, solida e completamente gratis che chiunque — a qualsiasi età — possa usare senza sforzo.",
  storySupportTitle: "Perché il supporto conta",
  storySupportBody:
    "Creare e mantenere app comporta costi di server, dominio e store per sviluppatori. Se Sip & Pill aiuta te o la tua famiglia a restare in salute, sostenere con il prezzo di un caffè mantiene questo progetto indipendente e gratis per tutti.",
  aboutMascotAlt: "Mascotte Sip & Pill che leggono insieme",
  aboutEyebrow: "Perché ho creato Sip & Pill",
  aboutTitle: "Nato dalla cura, non dal profitto",
  aboutP1:
    "Un progetto personale nato da ondate di calore, preoccupazione familiare e frustrazione per le app salute a pagamento — così chiunque possa seguire idratazione e farmaci in modo semplice e offline.",
  aboutP2Before:
    "Resta gratis per progettazione. Le donazioni vivono sul sito, non nell’app, così resta ",
  aboutP2Highlight: "completamente gratis e accessibile a tutti",
  aboutP2After: ", senza paywall né badge di acquisti in-app.",
  aboutIntro:
    "Un progetto personale nato da ondate di calore, preoccupazione familiare e frustrazione per le app salute a pagamento.",
  aboutStoryTitle: "Il grilletto",
  aboutStoryBody:
    "Le ondate di calore estreme del 2026 hanno evidenziato quanto possa essere pericolosa la disidratazione per i nostri cari. Vedere un vicino di 89 anni, ancora in forma, faticare, e scoprire problemi renali di mia madre per mancanza d’acqua, è stato un campanello d’allarme.",
  aboutFreeTitle: "Costruita per restare gratis",
  aboutFreeBody:
    "Come sviluppatore indipendente, ho deciso di creare un’app pulita, solida e completamente gratis che chiunque — a qualsiasi età — possa usare senza sforzo. Niente versioni “Pro”. Ogni funzione è gratis per tutti.",
  aboutPrivacyTitle: "Privata di default",
  aboutPrivacyBody:
    "Niente registrazione. Nome, obiettivi d’acqua, farmaci e registri non lasciano mai il dispositivo. Nulla viene caricato su un server. La privacy qui non è un’impostazione — è il predefinito.",
  aboutTogetherTitle: "Perché il supporto conta",
  aboutTogetherBody:
    "Creare e mantenere app comporta costi di server, dominio e store. Se Sip & Pill aiuta, sostenere con un caffè mantiene il progetto indipendente e gratis per tutti.",
  supportEyebrow: "Supporto",
  supportTitle: "Mantieni Sip & Pill gratis per tutti",
  supportBody:
    "Le donazioni vivono qui sul sito — non nell’app — così l’App Store non ha mai bisogno di un badge Acquisti in-app. Il tuo caffè mantiene il progetto indipendente.",
  supportThanks:
    "Grazie per aiutare a mantenere Sip & Pill gratis e accessibile a tutti!",
  supportNote: "Supporto una tantum · checkout sicuro",
  footerTagline: "Un compagno offline amichevole per acqua e farmaci.",
  footerPrivacyLine: "100% privato — nessun cookie di tracciamento.",
  contact: "Contatto",
  support: "Supporto",
  privacy: "Informativa sulla privacy",
  terms: "Termini",
  github: "GitHub",
  rightsReserved: "Tutti i diritti riservati.",
  mockWelcome: "Bentornato",
  mockHi: "Ciao, Petra!",
  mockHydration: "Idratazione",
  mockGlasses: "5 / 8 bicchieri",
  mockMeds: "Compagno farmaci",
  mockMedMorning: "Mattina",
  mockMedEvening: "Sera",
  privacyEyebrow: "Legale",
  privacyTitle: "Informativa sulla privacy",
  privacyUpdated: "Ultimo aggiornamento: agosto 2026",
  privacyWhatTitle: "Cosa memorizziamo?",
  privacyWhatBody:
    "Sip & Pill memorizza nome, obiettivi d’acqua, farmaci e registri solo su questo dispositivo. Nulla viene caricato su un server.",
  privacyNoTitle: "Niente account, niente tracciamento",
  privacyNoBody:
    "Non chiediamo registrazione, non usiamo analytics di tracciamento e non mostriamo annunci. I tuoi dati di salute restano sul telefono.",
  privacyDeleteTitle: "Eliminare i dati",
  privacyDeleteBody:
    "Puoi cancellare tutto in qualsiasi momento con il pulsante “Reimposta tutti i dati” nelle Impostazioni.",
  privacyMedicalTitle: "Avvertenza medica",
  privacyMedicalBody:
    "Sip & Pill è fornito gratis per il monitoraggio personale del benessere. Non è un dispositivo medico e non sostituisce il consiglio medico professionale. Usalo secondo il tuo giudizio.",
  backHome: "← Torna alla home",
  supportDeveloper: "Sostieni lo sviluppatore",
  supportCharityBlurb:
    "Sip & Pill è nato dalla cura, non dal profitto. Le donazioni vivono su questo sito — non nell’app — così resta gratis per tutti. Se lo apprezzi e vuoi mantenere il progetto indipendente, offrimi un caffè.",
  inviteCoffee: "Offrimi un caffè ☕",
  giveAsYouLike: "Dai quanto ti sembra giusto",
  chooseAmount: "Scegli un importo",
  customAmountLabel: "Importo personalizzato",
  confirmDonation: "Conferma il tuo supporto",
  supportConfirmBlurb:
    "Stai per donare {amount}. Grazie per aiutare a mantenere Sip & Pill gratis e accessibile a tutti!",
  donateAmount: "Dona {amount}",
  thankYouSupport: "Grazie per sostenere Sip & Pill!",
  hurrah: "Evviva!",
  keepGoing: "Continua così!",
  cancel: "Annulla",
  back: "Indietro",
  continue: "Continua",
};

const pt: Dictionary = {
  navValues: "Porque é grátis",
  navFeatures: "Funcionalidades",
  navStory: "A nossa história",
  navSupport: "Apoio",
  supportProjectCta: "Apoiar o projeto ☕",
  darkMode: "Modo escuro",
  lightMode: "Modo claro",
  chooseLanguage: "Escolher idioma",
  dailyCompanion: "O teu companheiro diário",
  heroHeadline:
    "Hidratação e medicamentos feitos simples. Verdadeiramente grátis para sempre.",
  heroSubheadline:
    "Sem paywalls, sem anúncios, sem registos. Desenhado com carinho para ajudar-te a ti e à tua família a cuidar da saúde todos os dias.",
  openAppCta: "Abrir app / Transferir",
  buyCoffee: "Oferece-me um café ☕",
  freeOfflinePrivate: "100% Grátis • Offline • Privado",
  tagline: "Mantém-te hidratado, mantém-te saudável!",
  heroBody:
    "Um companheiro offline amigável para água e medicamentos — {highlight}. Os teus dados ficam no telemóvel.",
  heroBodyHighlight: "verdadeiramente grátis para sempre",
  downloadCta: "Abrir app / Transferir",
  valuesEyebrow: "O que nos distingue",
  valuesTitle: "Construído de forma diferente de propósito",
  valuesIntro:
    "O Sip & Pill é o oposto das apps de saúde sobrecarregadas — grátis, privado, simples e pronto offline.",
  valueFreeTitle: "100% grátis e sem paywalls",
  valueFreeDesc:
    "Sem versões “Pro”. Cada funcionalidade é grátis para todos.",
  valuePrivateTitle: "Privado e seguro",
  valuePrivateDesc:
    "Sem registo. Os teus dados nunca saem do teu dispositivo.",
  valueSimpleTitle: "Ultra simples e acessível",
  valueSimpleDesc:
    "Alto contraste, tipografia legível e navegação intuitiva pensada para todas as idades.",
  valueOfflineTitle: "Pronto offline",
  valueOfflineDesc:
    "Funciona sem falhas sem uma ligação ativa à Internet.",
  featuresEyebrow: "Dentro da app",
  featuresTitle: "Tudo o que precisas — nada a mais",
  featuresIntro:
    "Ferramentas suaves para hábitos diários de hidratação e medicamentos, sem gráficos esmagadores.",
  featureHydrationTitle: "Acompanhamento diário da hidratação",
  featureHydrationDesc:
    "Metas personalizadas, registo com um toque e lembretes suaves que te ajudam a beber ao longo do dia.",
  featureMedsTitle: "Horários de medicamentos",
  featureMedsDesc:
    "Adiciona os teus comprimidos, define horários e nunca percas uma dose com lembretes claros e calmos.",
  featureStatsTitle: "Estatísticas de progresso simples",
  featureStatsDesc:
    "Vê como estás num olhar — feedback claro sem sobrecarga de gráficos.",
  featureWaterTitle: "Acompanhamento diário da hidratação",
  featureWaterDesc:
    "Metas personalizadas, registo com um toque e lembretes suaves que te ajudam a beber ao longo do dia.",
  featurePrivacyTitle: "Privado e seguro",
  featurePrivacyDesc:
    "Sem registo. Os teus dados nunca saem do teu dispositivo.",
  featureFreeTitle: "100% grátis e sem paywalls",
  featureFreeDesc:
    "Sem versões “Pro”. Cada funcionalidade é grátis para todos.",
  storyEyebrow: "Porque criei o Sip & Pill",
  storyTitle: "Construído com cuidado, não por lucro",
  storyIntro:
    "Um projeto pessoal nascido de ondas de calor, preocupação familiar e frustração com apps de saúde pagas.",
  storyTriggerTitle: "O gatilho",
  storyTriggerBody:
    "As ondas de calor extremas de 2026 mostraram o quão perigosa a desidratação pode ser para quem amamos. Ver um vizinho de 89 anos, ainda em forma, a sofrer, e descobrir problemas renais da minha mãe por falta de água, foi um alerta.",
  storyFrustrationTitle: "A frustração",
  storyFrustrationBody:
    "Procurar uma app de acompanhamento simples levou a paywalls sem fim, assinaturas mensais caras e interfaces sobrecarregadas que a minha mãe nunca conseguiria usar.",
  storySolutionTitle: "A solução",
  storySolutionBody:
    "Como programador independente, decidi criar uma app limpa, sólida e completamente grátis que qualquer pessoa — independentemente da idade — possa usar sem esforço.",
  storySupportTitle: "Porque o apoio importa",
  storySupportBody:
    "Criar e manter apps implica custos de servidor, domínio e lojas de programadores. Se o Sip & Pill te ajuda a ti ou à tua família a cuidar da saúde, apoiar com o preço de um café mantém este projeto independente e grátis para todos.",
  aboutMascotAlt: "Mascotes Sip & Pill a ler juntos",
  aboutEyebrow: "Porque criei o Sip & Pill",
  aboutTitle: "Construído com cuidado, não por lucro",
  aboutP1:
    "Um projeto pessoal nascido de ondas de calor, preocupação familiar e frustração com apps de saúde pagas — para que qualquer pessoa possa acompanhar hidratação e medicamentos de forma simples e offline.",
  aboutP2Before:
    "Mantém-se grátis de propósito. As doações vivem no site, não na app, para continuar ",
  aboutP2Highlight: "completamente grátis e acessível a todos",
  aboutP2After: ", sem paywalls nem emblemas de compras na app.",
  aboutIntro:
    "Um projeto pessoal nascido de ondas de calor, preocupação familiar e frustração com apps de saúde pagas.",
  aboutStoryTitle: "O gatilho",
  aboutStoryBody:
    "As ondas de calor extremas de 2026 mostraram o quão perigosa a desidratação pode ser para quem amamos. Ver um vizinho de 89 anos, ainda em forma, a sofrer, e descobrir problemas renais da minha mãe por falta de água, foi um alerta.",
  aboutFreeTitle: "Feito para continuar grátis",
  aboutFreeBody:
    "Como programador independente, decidi criar uma app limpa, sólida e completamente grátis que qualquer pessoa — independentemente da idade — possa usar sem esforço. Sem versões “Pro”. Cada funcionalidade é grátis para todos.",
  aboutPrivacyTitle: "Privado por predefinição",
  aboutPrivacyBody:
    "Sem registo. O teu nome, metas de água, medicamentos e registos nunca saem do dispositivo. Nada é enviado para um servidor. A privacidade aqui não é uma definição — é o predefinido.",
  aboutTogetherTitle: "Porque o apoio importa",
  aboutTogetherBody:
    "Criar e manter apps implica custos de servidor, domínio e lojas. Se o Sip & Pill ajuda, apoiar com um café mantém o projeto independente e grátis para todos.",
  supportEyebrow: "Apoio",
  supportTitle: "Mantém o Sip & Pill grátis para todos",
  supportBody:
    "As doações vivem aqui no site — não na app — para que a App Store nunca precise de um emblema de compras na app. O teu café mantém o projeto independente.",
  supportThanks:
    "Obrigado por ajudares a manter o Sip & Pill grátis e acessível a todos!",
  supportNote: "Apoio único · checkout seguro",
  footerTagline: "Um companheiro offline amigável para água e medicamentos.",
  footerPrivacyLine: "100% privado — sem cookies de rastreamento.",
  contact: "Contacto",
  support: "Apoio",
  privacy: "Política de privacidade",
  terms: "Termos",
  github: "GitHub",
  rightsReserved: "Todos os direitos reservados.",
  mockWelcome: "Bem-vindo de volta",
  mockHi: "Olá, Petra!",
  mockHydration: "Hidratação",
  mockGlasses: "5 / 8 copos",
  mockMeds: "Companheiro de medicamentos",
  mockMedMorning: "Manhã",
  mockMedEvening: "Noite",
  privacyEyebrow: "Legal",
  privacyTitle: "Política de privacidade",
  privacyUpdated: "Última atualização: agosto de 2026",
  privacyWhatTitle: "O que armazenamos?",
  privacyWhatBody:
    "O Sip & Pill guarda o teu nome, metas de água, medicamentos e registos apenas neste dispositivo. Nada é enviado para um servidor.",
  privacyNoTitle: "Sem conta, sem rastreamento",
  privacyNoBody:
    "Não pedimos registo, não usamos analytics de rastreamento e não mostramos anúncios. Os teus dados de saúde ficam no telemóvel.",
  privacyDeleteTitle: "Apagar os teus dados",
  privacyDeleteBody:
    "Podes apagar tudo a qualquer momento com o botão “Repor todos os dados” nas Definições.",
  privacyMedicalTitle: "Aviso médico",
  privacyMedicalBody:
    "O Sip & Pill é oferecido gratuitamente para acompanhamento pessoal de bem-estar. Não é um dispositivo médico e não substitui aconselhamento médico profissional. Usa segundo o teu critério.",
  backHome: "← Voltar ao início",
  supportDeveloper: "Apoiar o programador",
  supportCharityBlurb:
    "O Sip & Pill foi construído com cuidado, não por lucro. As doações vivem neste site — não na app — para continuar grátis para todos. Se valorizas isso e queres manter o projeto independente, oferece-me um café.",
  inviteCoffee: "Oferece-me um café ☕",
  giveAsYouLike: "Dá o que te parecer justo",
  chooseAmount: "Escolhe um valor",
  customAmountLabel: "Valor personalizado",
  confirmDonation: "Confirma o teu apoio",
  supportConfirmBlurb:
    "Estás prestes a doar {amount}. Obrigado por ajudares a manter o Sip & Pill grátis e acessível a todos!",
  donateAmount: "Doar {amount}",
  thankYouSupport: "Obrigado por apoiares o Sip & Pill!",
  hurrah: "Viva!",
  keepGoing: "Continua assim!",
  cancel: "Cancelar",
  back: "Voltar",
  continue: "Continuar",
};

const ja: Dictionary = {
  navValues: "なぜ無料か",
  navFeatures: "機能",
  navStory: "私たちの物語",
  navSupport: "サポート",
  supportProjectCta: "プロジェクトを応援する ☕",
  darkMode: "ダークモード",
  lightMode: "ライトモード",
  chooseLanguage: "言語を選択",
  dailyCompanion: "あなたの毎日の相棒",
  heroHeadline:
    "水分補給と服薬管理をシンプルに。本当にずっと無料。",
  heroSubheadline:
    "ペイウォールなし、広告なし、登録なし。あなたと家族が毎日健康でいられるよう、愛情を込めて設計しました。",
  openAppCta: "アプリを開く / ダウンロード",
  buyCoffee: "コーヒーをおごる ☕",
  freeOfflinePrivate: "100% 無料 • オフライン • プライベート",
  tagline: "水分をとり、健康を保とう！",
  heroBody:
    "水とお薬のためのやさしいオフライン相棒 — {highlight}。データはスマホに残ります。",
  heroBodyHighlight: "本当にずっと無料",
  downloadCta: "アプリを開く / ダウンロード",
  valuesEyebrow: "私たちが違う理由",
  valuesTitle: "意図して違うつくり",
  valuesIntro:
    "Sip & Pill は肥大化したヘルスケアアプリの対極です — 無料、プライベート、シンプル、オフライン対応。",
  valueFreeTitle: "100% 無料・ペイウォールなし",
  valueFreeDesc:
    "「Pro」版はありません。すべての機能が、すべての人に無料です。",
  valuePrivateTitle: "プライベートで安全",
  valuePrivateDesc:
    "登録不要。データが端末の外に出ることはありません。",
  valueSimpleTitle: "超シンプルで使いやすい",
  valueSimpleDesc:
    "高いコントラスト、読みやすい文字、直感的な操作 — あらゆる年齢のために。",
  valueOfflineTitle: "オフライン対応",
  valueOfflineDesc:
    "インターネット接続がなくてもスムーズに使えます。",
  featuresEyebrow: "アプリの中身",
  featuresTitle: "必要なものだけ — 余計なものはなし",
  featuresIntro:
    "毎日の水分補給と服薬習慣のためのやさしいツール。圧倒するグラフはありません。",
  featureHydrationTitle: "毎日の水分トラッキング",
  featureHydrationDesc:
    "カスタム目標、ワンタップ記録、やさしいリマインダーで一日を通して水分補給をサポート。",
  featureMedsTitle: "服薬スケジュール",
  featureMedsDesc:
    "お薬を追加し、時間を設定。落ち着いた明確なリマインダーで飲み忘れを防ぎます。",
  featureStatsTitle: "シンプルな進捗統計",
  featureStatsDesc:
    "一目で調子がわかる — グラフ過多のない、わかりやすいフィードバック。",
  featureWaterTitle: "毎日の水分トラッキング",
  featureWaterDesc:
    "カスタム目標、ワンタップ記録、やさしいリマインダーで一日を通して水分補給をサポート。",
  featurePrivacyTitle: "プライベートで安全",
  featurePrivacyDesc:
    "登録不要。データが端末の外に出ることはありません。",
  featureFreeTitle: "100% 無料・ペイウォールなし",
  featureFreeDesc:
    "「Pro」版はありません。すべての機能が、すべての人に無料です。",
  storyEyebrow: "なぜ Sip & Pill を作ったか",
  storyTitle: "利益ではなく、思いやりのために",
  storyIntro:
    "熱波、家族への心配、そして有料ヘルスケアアプリへのもどかしさから生まれた個人プロジェクトです。",
  storyTriggerTitle: "きっかけ",
  storyTriggerBody:
    "2026年の極端な熱波は、脱水が大切な人にとってどれほど危険かを浮き彫りにしました。元気だった89歳の隣人の苦しさを目にし、母の腎臓の問題が水分不足によるものだと知ったことが、目覚めの瞬間でした。",
  storyFrustrationTitle: "もどかしさ",
  storyFrustrationBody:
    "シンプルな記録アプリを探すと、終わりのないペイウォール、高い月額課金、母には到底使えないごちゃごちゃした画面ばかりでした。",
  storySolutionTitle: "解決策",
  storySolutionBody:
    "独立開発者として、年齢を問わず誰でも無理なく使える、クリーンで堅牢な完全無料アプリを作ることにしました。",
  storySupportTitle: "応援が大切な理由",
  storySupportBody:
    "アプリの開発と維持には、サーバー、ドメイン、開発者ストアの費用がかかります。Sip & Pill があなたや家族の健康を支えるなら、コーヒー一杯分の応援がこのプロジェクトを独立したまま、みんなに無料で届け続けます。",
  aboutMascotAlt: "一緒に本を読む Sip & Pill のマスコット",
  aboutEyebrow: "なぜ Sip & Pill を作ったか",
  aboutTitle: "利益ではなく、思いやりのために",
  aboutP1:
    "熱波、家族への心配、有料ヘルスケアアプリへのもどかしさから生まれた個人プロジェクト — 誰でもシンプルに、オフラインで水分とお薬を記録できるように。",
  aboutP2Before:
    "設計として無料のままです。寄付はこのウェブサイトにあり、アプリ内ではありません。だから ",
  aboutP2Highlight: "完全に無料で、すべての人に届く",
  aboutP2After: "状態を保てます — ペイウォールもアプリ内課金バッジもなし。",
  aboutIntro:
    "熱波、家族への心配、そして有料ヘルスケアアプリへのもどかしさから生まれた個人プロジェクトです。",
  aboutStoryTitle: "きっかけ",
  aboutStoryBody:
    "2026年の極端な熱波は、脱水が大切な人にとってどれほど危険かを浮き彫りにしました。元気だった89歳の隣人の苦しさを目にし、母の腎臓の問題が水分不足によるものだと知ったことが、目覚めの瞬間でした。",
  aboutFreeTitle: "無料であり続けるために",
  aboutFreeBody:
    "独立開発者として、年齢を問わず誰でも無理なく使える、クリーンで堅牢な完全無料アプリを作ることにしました。「Pro」版はありません。すべての機能が、すべての人に無料です。",
  aboutPrivacyTitle: "デフォルトでプライベート",
  aboutPrivacyBody:
    "登録不要。名前、水分目標、お薬、記録は端末の外に出ません。サーバーにアップロードされることはありません。ここでのプライバシーは設定ではなく — 初期値です。",
  aboutTogetherTitle: "応援が大切な理由",
  aboutTogetherBody:
    "アプリの開発と維持には、サーバー、ドメイン、開発者ストアの費用がかかります。Sip & Pill が役立つなら、コーヒー一杯分の応援がプロジェクトを独立したまま、みんなに無料で届け続けます。",
  supportEyebrow: "サポート",
  supportTitle: "Sip & Pill をみんなに無料のままに",
  supportBody:
    "寄付はこのウェブサイトにあります — アプリ内ではありません — だから App Store にアプリ内課金バッジは不要です。あなたのコーヒーがプロジェクトの独立性を支えます。",
  supportThanks:
    "Sip & Pill を無料で、すべての人に届く状態に保つご協力に感謝します！",
  supportNote: "一回限りのサポート · 安全な決済",
  footerTagline: "水とお薬のためのやさしいオフライン相棒。",
  footerPrivacyLine: "100% プライベート — 追跡クッキーは使いません。",
  contact: "お問い合わせ",
  support: "サポート",
  privacy: "プライバシーポリシー",
  terms: "利用規約",
  github: "GitHub",
  rightsReserved: "All rights reserved.",
  mockWelcome: "おかえりなさい",
  mockHi: "こんにちは、Petra！",
  mockHydration: "水分",
  mockGlasses: "5 / 8 杯",
  mockMeds: "お薬の相棒",
  mockMedMorning: "朝",
  mockMedEvening: "夜",
  privacyEyebrow: "法的情報",
  privacyTitle: "プライバシーポリシー",
  privacyUpdated: "最終更新：2026年8月",
  privacyWhatTitle: "何を保存しますか？",
  privacyWhatBody:
    "Sip & Pill は名前、水分目標、お薬、記録をこの端末にのみ保存します。サーバーにはアップロードされません。",
  privacyNoTitle: "アカウントなし、追跡なし",
  privacyNoBody:
    "登録は求めず、分析追跡も広告もありません。健康データはスマホに残ります。",
  privacyDeleteTitle: "データの削除",
  privacyDeleteBody:
    "設定の「すべてのデータをリセット」ボタンで、いつでもすべてを消去できます。",
  privacyMedicalTitle: "医療に関する免責",
  privacyMedicalBody:
    "Sip & Pill は個人のウェルネス追跡用に無料で提供されます。医療機器ではなく、専門的な医療アドバイスの代わりにはなりません。ご自身の判断でご利用ください。",
  backHome: "← ホームに戻る",
  supportDeveloper: "開発者を応援する",
  supportCharityBlurb:
    "Sip & Pill は利益ではなく思いやりのために作られました。寄付はこのサイトにあり — アプリ内ではありません — みんなに無料のままです。それを大切に思い、プロジェクトの独立性を守りたいなら、コーヒーをおごってください。",
  inviteCoffee: "コーヒーをおごる ☕",
  giveAsYouLike: "ご自由な金額で",
  chooseAmount: "金額を選ぶ",
  customAmountLabel: "カスタム金額",
  confirmDonation: "サポートを確認",
  supportConfirmBlurb:
    "{amount} を寄付しようとしています。Sip & Pill を無料で、すべての人に届く状態に保つご協力に感謝します！",
  donateAmount: "{amount} を寄付する",
  thankYouSupport: "Sip & Pill を応援してくださりありがとうございます！",
  hurrah: "やった！",
  keepGoing: "この調子で！",
  cancel: "キャンセル",
  back: "戻る",
  continue: "続ける",
};

const ko: Dictionary = {
  navValues: "왜 무료인가",
  navFeatures: "기능",
  navStory: "우리의 이야기",
  navSupport: "후원",
  supportProjectCta: "프로젝트 응원하기 ☕",
  darkMode: "다크 모드",
  lightMode: "라이트 모드",
  chooseLanguage: "언어 선택",
  dailyCompanion: "매일의 동반자",
  heroHeadline:
    "수분 보충과 복약 관리, 간단하게. 정말로 영원히 무료.",
  heroSubheadline:
    "페이월 없음, 광고 없음, 가입 없음. 당신과 가족이 매일 건강하도록 사랑으로 만들었습니다.",
  openAppCta: "앱 열기 / 다운로드",
  buyCoffee: "커피 한 잔 사주기 ☕",
  freeOfflinePrivate: "100% 무료 • 오프라인 • 프라이빗",
  tagline: "수분 챙기고, 건강 지키세요!",
  heroBody:
    "물과 약을 위한 친절한 오프라인 동반자 — {highlight}. 데이터는 휴대폰에 남습니다.",
  heroBodyHighlight: "정말로 영원히 무료",
  downloadCta: "앱 열기 / 다운로드",
  valuesEyebrow: "우리를 다르게 만드는 것",
  valuesTitle: "의도적으로 다르게 만들었습니다",
  valuesIntro:
    "Sip & Pill은 비대한 건강 앱의 반대입니다 — 무료, 프라이빗, 단순, 오프라인 준비 완료.",
  valueFreeTitle: "100% 무료 & 페이월 없음",
  valueFreeDesc:
    "“Pro” 버전 없음. 모든 기능이 모두에게 무료입니다.",
  valuePrivateTitle: "프라이빗하고 안전함",
  valuePrivateDesc:
    "가입 없음. 데이터는 기기를 절대 떠나지 않습니다.",
  valueSimpleTitle: "초간단 & 접근성",
  valueSimpleDesc:
    "높은 대비, 읽기 쉬운 타이포그래피, 모든 연령을 위한 직관적 탐색.",
  valueOfflineTitle: "오프라인 준비",
  valueOfflineDesc:
    "활성 인터넷 연결 없이도 매끄럽게 동작합니다.",
  featuresEyebrow: "앱 안에서",
  featuresTitle: "필요한 것만 — 쓸데없는 것은 없음",
  featuresIntro:
    "매일의 수분과 복약 습관을 위한 부드러운 도구. 압도적인 차트는 없습니다.",
  featureHydrationTitle: "매일 수분 추적",
  featureHydrationDesc:
    "맞춤 목표, 한 번 탭으로 기록, 하루 종일 마시도록 돕는 부드러운 알림.",
  featureMedsTitle: "복약 일정",
  featureMedsDesc:
    "약을 추가하고 시간을 설정하세요. 맑고 차분한 알림으로 복용을 놓치지 마세요.",
  featureStatsTitle: "간단한 진행 통계",
  featureStatsDesc:
    "한눈에 상태를 확인 — 차트 과부하 없는 분명한 피드백.",
  featureWaterTitle: "매일 수분 추적",
  featureWaterDesc:
    "맞춤 목표, 한 번 탭으로 기록, 하루 종일 마시도록 돕는 부드러운 알림.",
  featurePrivacyTitle: "프라이빗하고 안전함",
  featurePrivacyDesc:
    "가입 없음. 데이터는 기기를 절대 떠나지 않습니다.",
  featureFreeTitle: "100% 무료 & 페이월 없음",
  featureFreeDesc:
    "“Pro” 버전 없음. 모든 기능이 모두에게 무료입니다.",
  storyEyebrow: "Sip & Pill을 만든 이유",
  storyTitle: "이익이 아니라 돌봄으로 만들었습니다",
  storyIntro:
    "폭염, 가족에 대한 걱정, 유료 건강 앱에 대한 좌절에서 태어난 개인 프로젝트입니다.",
  storyTriggerTitle: "계기",
  storyTriggerBody:
    "2026년의 극심한 폭염은 탈수가 사랑하는 사람에게 얼마나 위험할 수 있는지를 보여 주었습니다. 건강한 89세 이웃이 힘들어하는 모습을 보고, 어머니의 신장 문제가 수분 부족 때문임을 알게 된 것이 깨달음의 순간이었습니다.",
  storyFrustrationTitle: "좌절",
  storyFrustrationBody:
    "간단한 추적 앱을 찾다 보니 끝없는 페이월, 비싼 월 구독, 어머니가 절대 다룰 수 없는 복잡한 인터페이스뿐이었습니다.",
  storySolutionTitle: "해결책",
  storySolutionBody:
    "독립 개발자로서, 나이와 관계없이 누구나 손쉽게 쓸 수 있는 깔끔하고 견고한 완전 무료 앱을 만들기로 했습니다.",
  storySupportTitle: "후원이 중요한 이유",
  storySupportBody:
    "앱을 만들고 유지하려면 서버, 도메인, 개발자 스토어 비용이 듭니다. Sip & Pill이 당신이나 가족의 건강에 도움이 된다면, 커피 한 잔 가격의 후원이 이 프로젝트를 독립적으로, 모두에게 무료로 유지합니다.",
  aboutMascotAlt: "함께 책을 읽는 Sip & Pill 마스코트",
  aboutEyebrow: "Sip & Pill을 만든 이유",
  aboutTitle: "이익이 아니라 돌봄으로 만들었습니다",
  aboutP1:
    "폭염, 가족에 대한 걱정, 유료 건강 앱에 대한 좌절에서 태어난 개인 프로젝트 — 누구나 간단하고 오프라인으로 수분과 약을 추적할 수 있도록.",
  aboutP2Before:
    "설계상 무료로 남습니다. 후원은 웹사이트에 있고 앱 안이 아니므로 ",
  aboutP2Highlight: "완전히 무료이며 모두에게 열려 있습니다",
  aboutP2After: " — 페이월이나 인앱 결제 배지 없이.",
  aboutIntro:
    "폭염, 가족에 대한 걱정, 유료 건강 앱에 대한 좌절에서 태어난 개인 프로젝트입니다.",
  aboutStoryTitle: "계기",
  aboutStoryBody:
    "2026년의 극심한 폭염은 탈수가 사랑하는 사람에게 얼마나 위험할 수 있는지를 보여 주었습니다. 건강한 89세 이웃이 힘들어하는 모습을 보고, 어머니의 신장 문제가 수분 부족 때문임을 알게 된 것이 깨달음의 순간이었습니다.",
  aboutFreeTitle: "무료로 남도록",
  aboutFreeBody:
    "독립 개발자로서, 나이와 관계없이 누구나 손쉽게 쓸 수 있는 깔끔하고 견고한 완전 무료 앱을 만들기로 했습니다. “Pro” 버전 없음. 모든 기능이 모두에게 무료입니다.",
  aboutPrivacyTitle: "기본이 프라이빗",
  aboutPrivacyBody:
    "가입 없음. 이름, 수분 목표, 약, 기록은 기기를 절대 떠나지 않습니다. 서버로 업로드되지 않습니다. 여기서 프라이버시는 설정이 아니라 — 기본값입니다.",
  aboutTogetherTitle: "후원이 중요한 이유",
  aboutTogetherBody:
    "앱을 만들고 유지하려면 서버, 도메인, 스토어 비용이 듭니다. Sip & Pill이 도움이 된다면, 커피 한 잔의 후원이 프로젝트를 독립적으로, 모두에게 무료로 유지합니다.",
  supportEyebrow: "후원",
  supportTitle: "Sip & Pill을 모두에게 무료로 유지하세요",
  supportBody:
    "후원은 여기 웹사이트에 있습니다 — 앱 안이 아닙니다 — 그래서 App Store에 인앱 결제 배지가 필요 없습니다. 당신의 커피가 프로젝트의 독립성을 지킵니다.",
  supportThanks:
    "Sip & Pill을 무료로, 모두에게 열려 있게 유지해 주셔서 감사합니다!",
  supportNote: "일회성 후원 · 안전한 결제",
  footerTagline: "물과 약을 위한 친절한 오프라인 동반자.",
  footerPrivacyLine: "100% 프라이빗 — 추적 쿠키를 사용하지 않습니다.",
  contact: "문의",
  support: "후원",
  privacy: "개인정보 처리방침",
  terms: "이용약관",
  github: "GitHub",
  rightsReserved: "All rights reserved.",
  mockWelcome: "다시 오신 걸 환영해요",
  mockHi: "안녕, Petra!",
  mockHydration: "수분",
  mockGlasses: "5 / 8 잔",
  mockMeds: "복약 동반자",
  mockMedMorning: "아침",
  mockMedEvening: "저녁",
  privacyEyebrow: "법적 고지",
  privacyTitle: "개인정보 처리방침",
  privacyUpdated: "마지막 업데이트: 2026년 8월",
  privacyWhatTitle: "무엇을 저장하나요?",
  privacyWhatBody:
    "Sip & Pill은 이름, 수분 목표, 약, 기록을 이 기기에만 저장합니다. 서버로 업로드되지 않습니다.",
  privacyNoTitle: "계정 없음, 추적 없음",
  privacyNoBody:
    "가입을 요구하지 않고, 분석 추적도 광고도 없습니다. 건강 데이터는 휴대폰에 남습니다.",
  privacyDeleteTitle: "데이터 삭제",
  privacyDeleteBody:
    "설정의 “모든 데이터 재설정” 버튼으로 언제든 모두 지울 수 있습니다.",
  privacyMedicalTitle: "의료 면책",
  privacyMedicalBody:
    "Sip & Pill은 개인 웰니스 추적용으로 무료 제공됩니다. 의료기기가 아니며 전문 의료 조언을 대체하지 않습니다. 본인 판단에 따라 사용하세요.",
  backHome: "← 홈으로 돌아가기",
  supportDeveloper: "개발자 응원하기",
  supportCharityBlurb:
    "Sip & Pill은 이익이 아니라 돌봄으로 만들어졌습니다. 후원은 이 웹사이트에 있고 — 앱 안이 아닙니다 — 모두에게 무료로 남습니다. 이를 소중히 여기고 프로젝트의 독립성을 지키고 싶다면, 커피 한 잔을 사 주세요.",
  inviteCoffee: "커피 한 잔 사주기 ☕",
  giveAsYouLike: "원하는 만큼 주세요",
  chooseAmount: "금액 선택",
  customAmountLabel: "직접 입력",
  confirmDonation: "후원 확인",
  supportConfirmBlurb:
    "{amount}을(를) 기부하려고 합니다. Sip & Pill을 무료로, 모두에게 열려 있게 유지해 주셔서 감사합니다!",
  donateAmount: "{amount} 기부하기",
  thankYouSupport: "Sip & Pill을 응원해 주셔서 감사합니다!",
  hurrah: "만세!",
  keepGoing: "계속 응원해요!",
  cancel: "취소",
  back: "뒤로",
  continue: "계속",
};

export const dictionaries: Record<LocaleCode, Dictionary> = {
  en,
  hu,
  es,
  fr,
  de,
  it,
  pt,
  ja,
  ko,
};

/** @deprecated Use `dictionaries` */
export const DICTIONARIES = dictionaries;

export function isLocaleCode(value: string): value is LocaleCode {
  return value in dictionaries;
}

export function resolveLocale(raw?: string | null): LocaleCode {
  if (!raw) return "en";
  const base = raw.toLowerCase().split("-")[0];
  return isLocaleCode(base) ? base : "en";
}

export function formatHeroBody(template: string, highlight: string) {
  const parts = template.split("{highlight}");
  return { before: parts[0] ?? "", after: parts[1] ?? "", highlight };
}
