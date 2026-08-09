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
  navFeatures: string;
  navAbout: string;
  navSupport: string;
  darkMode: string;
  lightMode: string;
  chooseLanguage: string;
  dailyCompanion: string;
  tagline: string;
  heroBody: string;
  heroBodyHighlight: string;
  downloadCta: string;
  freeOfflinePrivate: string;
  featuresEyebrow: string;
  featuresTitle: string;
  featuresIntro: string;
  featureWaterTitle: string;
  featureWaterDesc: string;
  featureMedsTitle: string;
  featureMedsDesc: string;
  featurePrivacyTitle: string;
  featurePrivacyDesc: string;
  featureFreeTitle: string;
  featureFreeDesc: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2Before: string;
  aboutP2Highlight: string;
  aboutP2After: string;
  aboutMascotAlt: string;
  supportEyebrow: string;
  supportTitle: string;
  supportBody: string;
  buyCoffee: string;
  supportNote: string;
  footerTagline: string;
  contact: string;
  support: string;
  privacy: string;
  rightsReserved: string;
  mockWelcome: string;
  mockHi: string;
  mockHydration: string;
  mockGlasses: string;
  mockMeds: string;
  mockMedMorning: string;
  mockMedEvening: string;
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
  aboutIntro: string;
  aboutStoryTitle: string;
  aboutStoryBody: string;
  aboutFreeTitle: string;
  aboutFreeBody: string;
  aboutPrivacyTitle: string;
  aboutPrivacyBody: string;
  aboutTogetherTitle: string;
  aboutTogetherBody: string;
};

const en: Dictionary = {
  navFeatures: "Features",
  navAbout: "About",
  navSupport: "Support",
  darkMode: "Dark mode",
  lightMode: "Light mode",
  chooseLanguage: "Choose language",
  dailyCompanion: "Your daily companion",
  tagline: "Stay hydrated, stay healthy!",
  heroBody:
    "A friendly offline companion for water and medications — {highlight}. Your data stays on your phone.",
  heroBodyHighlight: "100% free and ad-free",
  downloadCta: "Download on the App Store",
  freeOfflinePrivate: "100% Free • Offline • Private",
  featuresEyebrow: "Highlights",
  featuresTitle: "Everything your daily routine needs",
  featuresIntro:
    "Clean tools for hydration and medications — without the noise or clutter.",
  featureWaterTitle: "Smart hydration",
  featureWaterDesc:
    "Set a daily goal, log with one tap, and track progress with friendly visual feedback.",
  featureMedsTitle: "Medication reminders",
  featureMedsDesc:
    "Add your medications, set times, and never miss a dose again.",
  featurePrivacyTitle: "100% offline & private",
  featurePrivacyDesc:
    "No account, no cloud, no tracking. Your health data lives only on your device.",
  featureFreeTitle: "Free & ad-free",
  featureFreeDesc:
    "No subscriptions, no banners. A simple daily companion with a charity mindset.",
  aboutEyebrow: "About",
  aboutTitle: "Why Sip & Pill was born",
  aboutP1:
    "We built Sip & Pill so friends and family could track hydration and medications simply and offline — without subscriptions or data tracking.",
  aboutP2Before:
    "It’s a charity-minded project: the developer earns nothing from it. Built on their own time and expense to help others. It stays ",
  aboutP2Highlight: "completely free and ad-free",
  aboutP2After:
    ", because health tracking shouldn’t feel like a paid maze.",
  aboutMascotAlt: "Sip & Pill mascots reading together",
  supportEyebrow: "Support",
  supportTitle: "Like the project? Support development!",
  supportBody:
    "Sip & Pill is 100% free, offline, and ad-free. If you value the work and want independent projects like this to keep going, you can buy a coffee here.",
  buyCoffee: "Buy me a coffee",
  supportNote: "External support page · secure checkout",
  footerTagline: "A friendly offline companion for water and medications.",
  contact: "Contact",
  support: "Support",
  privacy: "Privacy policy",
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
    "Sip & Pill is a charity-minded project — the developer earns nothing from it. It was built on their own time and expense to help others. If you appreciate that and want to support more projects like this, invite them for a coffee.",
  inviteCoffee: "Invite me for a coffee",
  giveAsYouLike: "Give as you see fit",
  chooseAmount: "Choose an amount",
  customAmountLabel: "Custom amount",
  confirmDonation: "Confirm your support",
  supportConfirmBlurb:
    "You're about to donate {amount}. Thank you for helping keep independent projects like this going!",
  donateAmount: "Donate {amount}",
  thankYouSupport: "Thank you for supporting Sip & Pill!",
  hurrah: "Hurrah!",
  keepGoing: "Keep it up!",
  cancel: "Cancel",
  back: "Back",
  continue: "Continue",
  aboutIntro:
    "A small, personal project with a simple belief: staying hydrated and on top of your meds shouldn’t require an account, ads, or a subscription.",
  aboutStoryTitle: "It started with people we care about",
  aboutStoryBody:
    "Sip & Pill began as a practical companion for friends and family — something calm enough for everyday use, and private enough that health habits stay on your phone. No growth hacks. No data harvest. Just a friendly routine helper.",
  aboutFreeTitle: "Built to stay free",
  aboutFreeBody:
    "This is a charity-minded project. The developer earns nothing from the app. It was made on personal time and expense so anyone can use it without paywalls, banners, or premium locks. If it helps you, that’s already the win.",
  aboutPrivacyTitle: "Offline by design",
  aboutPrivacyBody:
    "Your name, water goals, medications, and logs live only on your device. Nothing is uploaded to a server. You can erase everything anytime. Privacy isn’t a setting here — it’s the default.",
  aboutTogetherTitle: "A daily companion, not a dashboard",
  aboutTogetherBody:
    "We wanted something that feels warm and human: gentle reminders, clear progress, and mascots that make the habit a little lighter. Sip & Pill is here to support your day — quietly, freely, and without noise.",

};

const hu: Dictionary = {
  navFeatures: "Funkciók",
  navAbout: "Rólunk",
  navSupport: "Támogatás",
  darkMode: "Sötét mód",
  lightMode: "Világos mód",
  chooseLanguage: "Válassz nyelvet",
  dailyCompanion: "A napi társad",
  tagline: "Maradj hidratált, maradj egészséges!",
  heroBody:
    "Barátságos offline társ a víziváshoz és a gyógyszerekhez — {highlight}. Az adataid a telefonodon maradnak.",
  heroBodyHighlight: "100% ingyenes és reklámmentes",
  downloadCta: "Töltsd le az App Store-ból",
  freeOfflinePrivate: "100% Ingyenes • Offline • Privát",
  featuresEyebrow: "Főbb funkciók",
  featuresTitle: "Minden, amire a napi rutinodnak szüksége van",
  featuresIntro:
    "Letisztult eszközök a hidratáláshoz és a gyógyszerekhez — zaj és bonyolultság nélkül.",
  featureWaterTitle: "Okos hidratálás",
  featureWaterDesc:
    "Állíts be napi célt, naplózz egy koppintással, és kövesd a progresszt barátságos vizuális visszajelzéssel.",
  featureMedsTitle: "Gyógyszer-emlékeztetők",
  featureMedsDesc:
    "Add hozzá a gyógyszereidet, állíts be időpontokat, és soha ne maradj le egy adagról sem.",
  featurePrivacyTitle: "100% offline & privát",
  featurePrivacyDesc:
    "Nincs fiók, nincs felhő, nincs nyomkövetés. Az egészségügyi adataid csak az eszközödön élnek.",
  featureFreeTitle: "Ingyenes & reklámmentes",
  featureFreeDesc:
    "Nincs előfizetés, nincsenek bannerok. Egy egyszerű napi társ — charity szemlélettel.",
  aboutEyebrow: "Rólunk",
  aboutTitle: "Miért született a Sip & Pill?",
  aboutP1:
    "A Sip & Pill-t azért készítettük, hogy barátaink és családunk egyszerűen, offline követhesse a hidratálást és a gyógyszereket — előfizetés és adatkövetés nélkül.",
  aboutP2Before:
    "Charity jellegű projekt: a fejlesztő ebből nem keres. Saját időből és költségből épült, hogy másokon segítsen. Azért marad ",
  aboutP2Highlight: "teljesen ingyenes és reklámmentes",
  aboutP2After:
    ", mert az egészségkövetésnek nem kell fizetős labirintusnak lennie.",
  aboutMascotAlt: "Sip & Pill kabalafigurák együtt olvasnak",
  supportEyebrow: "Támogatás",
  supportTitle: "Tetszik a projekt? Támogasd a fejlesztést!",
  supportBody:
    "A Sip & Pill 100% ingyenes, offline és reklámmentes. Ha értékeled a munkát, és szeretnéd, hogy hasonló független projektek tovább éljenek, itt meghívhatsz egy kávéra.",
  buyCoffee: "Vegyél egy kávét",
  supportNote: "Külső támogatási oldal · biztonságos fizetés",
  footerTagline: "Barátságos offline társ a víziváshoz és a gyógyszerekhez.",
  contact: "Kapcsolat",
  support: "Támogatás",
  privacy: "Adatvédelmi irányelvek",
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
    "A Sip & Pill egy charity jellegű projekt — ebből a fejlesztőnek nincs bevétele. Saját idejét és költségét téve bele készült, hogy másokon segítsen. Ha ezt értékeled, és támogatnád a hasonló projekteket, hívj meg egy kávéra.",
  inviteCoffee: "Hívj meg egy kávéra",
  giveAsYouLike: "Tegy belátásod szerint",
  chooseAmount: "Válassz összeget",
  customAmountLabel: "Egyedi összeg",
  confirmDonation: "Erősítsd meg a támogatást",
  supportConfirmBlurb:
    "Éppen {amount} támogatást adsz. Köszönjük, hogy segíted a hasonló független projektek fennmaradását!",
  donateAmount: "Adományozás: {amount}",
  thankYouSupport: "Köszönjük, hogy támogatod a Sip & Pill-t!",
  hurrah: "Hurrá!",
  keepGoing: "Csak így tovább!",
  cancel: "Mégse",
  back: "Vissza",
  continue: "Folytatás",
  aboutIntro:
    "Egy kis, személyes projekt egy egyszerű hittel: a hidratálás és a gyógyszerek követése ne igényeljen fiókot, reklámot vagy előfizetést.",
  aboutStoryTitle: "Azokkal kezdődött, akik fontosak nekünk",
  aboutStoryBody:
    "A Sip & Pill barátoknak és családnak készült gyakorlati társnak indult — elég nyugodt a mindennapokra, és elég privát ahhoz, hogy az egészségügyi szokások a telefonodon maradjanak. Nincs növekedési trükk. Nincs adatgyűjtés. Csak egy barátságos rutinsegítő.",
  aboutFreeTitle: "Ingyenesnek született",
  aboutFreeBody:
    "Ez egy charity jellegű projekt. A fejlesztő az appból nem keres. Saját időből és költségből készült, hogy bárki használhassa fizetőfalak, bannerek vagy prémium zárak nélkül. Ha segít, az már a győzelem.",
  aboutPrivacyTitle: "Offline a tervezés alapja",
  aboutPrivacyBody:
    "A neved, vízcéljaid, gyógyszereid és naplóid csak az eszközödön élnek. Semmi sem kerül szerverre. Bármikor mindent törölhetsz. A magánélet itt nem egy beállítás — ez az alapértelmezés.",
  aboutTogetherTitle: "Napi társ, nem irányítópult",
  aboutTogetherBody:
    "Valami meleg és emberi dolgot akartunk: gyengéd emlékeztetőket, tiszta progresszt, és kabalákat, amelyek egy kicsit könnyebbé teszik a szokást. A Sip & Pill a napodat támogatja — csendesen, szabadon, zaj nélkül.",

};

const es: Dictionary = {
  navFeatures: "Funciones",
  navAbout: "Nosotros",
  navSupport: "Apoyo",
  darkMode: "Modo oscuro",
  lightMode: "Modo claro",
  chooseLanguage: "Elige idioma",
  dailyCompanion: "Tu compañero diario",
  tagline: "¡Mantente hidratado y saludable!",
  heroBody:
    "Un compañero offline amable para agua y medicamentos — {highlight}. Tus datos se quedan en tu teléfono.",
  heroBodyHighlight: "100% gratis y sin anuncios",
  downloadCta: "Descargar en el App Store",
  freeOfflinePrivate: "100% Gratis • Offline • Privado",
  featuresEyebrow: "Destacados",
  featuresTitle: "Todo lo que tu rutina diaria necesita",
  featuresIntro:
    "Herramientas claras para hidratación y medicamentos — sin ruido ni complicaciones.",
  featureWaterTitle: "Hidratación inteligente",
  featureWaterDesc:
    "Define una meta diaria, registra con un toque y sigue tu progreso con feedback visual amable.",
  featureMedsTitle: "Recordatorios de medicación",
  featureMedsDesc:
    "Añade tus medicamentos, configura horarios y no te saltes ninguna dosis.",
  featurePrivacyTitle: "100% offline y privado",
  featurePrivacyDesc:
    "Sin cuenta, sin nube, sin seguimiento. Tus datos de salud viven solo en tu dispositivo.",
  featureFreeTitle: "Gratis y sin anuncios",
  featureFreeDesc:
    "Sin suscripciones ni banners. Un compañero diario simple con mentalidad solidaria.",
  aboutEyebrow: "Nosotros",
  aboutTitle: "Por qué nació Sip & Pill",
  aboutP1:
    "Creamos Sip & Pill para que amigos y familia pudieran seguir hidratación y medicamentos de forma simple y offline — sin suscripciones ni rastreo de datos.",
  aboutP2Before:
    "Es un proyecto con espíritu solidario: el desarrollador no gana nada con ello. Se construyó con tiempo y recursos propios para ayudar a otros. Se mantiene ",
  aboutP2Highlight: "totalmente gratis y sin anuncios",
  aboutP2After:
    ", porque el seguimiento de salud no debería ser un laberinto de pago.",
  aboutMascotAlt: "Mascotas de Sip & Pill leyendo juntas",
  supportEyebrow: "Apoyo",
  supportTitle: "¿Te gusta el proyecto? ¡Apoya el desarrollo!",
  supportBody:
    "Sip & Pill es 100% gratis, offline y sin anuncios. Si valoras el trabajo y quieres que proyectos independientes como este continúen, puedes invitar a un café aquí.",
  buyCoffee: "Invítame a un café",
  supportNote: "Página de apoyo externa · pago seguro",
  footerTagline: "Un compañero offline amable para agua y medicamentos.",
  contact: "Contacto",
  support: "Apoyo",
  privacy: "Política de privacidad",
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
  privacyUpdated: "Última actualización: agosto 2026",
  privacyWhatTitle: "¿Qué guardamos?",
  privacyWhatBody:
    "Sip & Pill guarda tu nombre, metas de agua, medicamentos y registros solo en este dispositivo. Nada se sube a un servidor.",
  privacyNoTitle: "Sin cuenta, sin seguimiento",
  privacyNoBody:
    "No pedimos registro, no usamos analítica ni mostramos anuncios. Tus datos de salud se quedan en tu teléfono.",
  privacyDeleteTitle: "Borrar tus datos",
  privacyDeleteBody:
    "Puedes borrar todo en cualquier momento con el botón “Restablecer todos los datos” en Ajustes.",
  privacyMedicalTitle: "Aviso médico",
  privacyMedicalBody:
    "Sip & Pill se ofrece gratis para el seguimiento personal del bienestar. No es un dispositivo médico y no sustituye el consejo médico profesional. Úsalo según tu propio criterio.",
  backHome: "← Volver al inicio",
  supportDeveloper: "Apoyar al desarrollador",
  supportCharityBlurb:
    "Sip & Pill es un proyecto con espíritu solidario — el desarrollador no gana nada con ello. Se construyó con su propio tiempo y recursos para ayudar a otros. Si lo aprecias y quieres apoyar más proyectos así, invítalo a un café.",
  inviteCoffee: "Invítame a un café",
  giveAsYouLike: "Da lo que te parezca bien",
  chooseAmount: "Elige una cantidad",
  customAmountLabel: "Cantidad personalizada",
  confirmDonation: "Confirma tu apoyo",
  supportConfirmBlurb:
    "Estás a punto de donar {amount}. ¡Gracias por ayudar a que proyectos independientes como este sigan adelante!",
  donateAmount: "Donar {amount}",
  thankYouSupport: "¡Gracias por apoyar Sip & Pill!",
  hurrah: "¡Hurra!",
  keepGoing: "¡Sigue así!",
  cancel: "Cancelar",
  back: "Atrás",
  continue: "Continuar",
  aboutIntro:
    "Un proyecto pequeño y personal con una idea simple: mantenerte hidratado y al día con tus medicamentos no debería exigir una cuenta, anuncios ni una suscripción.",
  aboutStoryTitle: "Empezó con personas que nos importan",
  aboutStoryBody:
    "Sip & Pill nació como un compañero práctico para amigos y familia — lo bastante calmado para el día a día, y lo bastante privado para que tus hábitos de salud se queden en el teléfono. Sin trucos de crecimiento. Sin cosecha de datos. Solo un ayudante amable para la rutina.",
  aboutFreeTitle: "Hecho para seguir gratis",
  aboutFreeBody:
    "Es un proyecto con espíritu solidario. El desarrollador no gana nada con la app. Se hizo con tiempo y recursos personales para que cualquiera pueda usarla sin muros de pago, banners ni bloqueos premium. Si te ayuda, eso ya es la victoria.",
  aboutPrivacyTitle: "Offline por diseño",
  aboutPrivacyBody:
    "Tu nombre, metas de agua, medicamentos y registros viven solo en tu dispositivo. Nada se sube a un servidor. Puedes borrar todo en cualquier momento. La privacidad aquí no es un ajuste — es el valor predeterminado.",
  aboutTogetherTitle: "Un compañero diario, no un panel",
  aboutTogetherBody:
    "Queríamos algo cálido y humano: recordatorios suaves, progreso claro y mascotas que hagan el hábito un poco más ligero. Sip & Pill está aquí para acompañar tu día — en silencio, libremente y sin ruido.",

};

const fr: Dictionary = {
  navFeatures: "Fonctionnalités",
  navAbout: "À propos",
  navSupport: "Soutien",
  darkMode: "Mode sombre",
  lightMode: "Mode clair",
  chooseLanguage: "Choisir la langue",
  dailyCompanion: "Votre compagnon quotidien",
  tagline: "Restez hydraté, restez en bonne santé !",
  heroBody:
    "Un compagnon hors ligne amical pour l’eau et les médicaments — {highlight}. Vos données restent sur votre téléphone.",
  heroBodyHighlight: "100 % gratuit et sans publicité",
  downloadCta: "Télécharger sur l’App Store",
  freeOfflinePrivate: "100% Gratuit • Hors ligne • Privé",
  featuresEyebrow: "Points forts",
  featuresTitle: "Tout ce dont votre routine a besoin",
  featuresIntro:
    "Des outils simples pour l’hydratation et les médicaments — sans bruit ni complexité.",
  featureWaterTitle: "Hydratation intelligente",
  featureWaterDesc:
    "Fixez un objectif quotidien, notez d’un tap et suivez vos progrès avec un retour visuel amical.",
  featureMedsTitle: "Rappels de médicaments",
  featureMedsDesc:
    "Ajoutez vos médicaments, définissez les horaires et ne manquez plus aucune prise.",
  featurePrivacyTitle: "100 % hors ligne et privé",
  featurePrivacyDesc:
    "Pas de compte, pas de cloud, pas de tracking. Vos données de santé restent sur votre appareil.",
  featureFreeTitle: "Gratuit et sans pub",
  featureFreeDesc:
    "Pas d’abonnement, pas de bannières. Un compagnon quotidien simple, dans un esprit caritatif.",
  aboutEyebrow: "À propos",
  aboutTitle: "Pourquoi Sip & Pill est né",
  aboutP1:
    "Nous avons créé Sip & Pill pour que nos proches puissent suivre hydratation et médicaments simplement et hors ligne — sans abonnements ni collecte de données.",
  aboutP2Before:
    "C’est un projet à esprit caritatif : le développeur n’en tire aucun revenu. Construit sur son temps et ses frais pour aider les autres. Il reste ",
  aboutP2Highlight: "entièrement gratuit et sans publicité",
  aboutP2After:
    ", parce que le suivi santé ne devrait pas être un labyrinthe payant.",
  aboutMascotAlt: "Mascottes Sip & Pill qui lisent ensemble",
  supportEyebrow: "Soutien",
  supportTitle: "Vous aimez le projet ? Soutenez le développement !",
  supportBody:
    "Sip & Pill est 100 % gratuit, hors ligne et sans pub. Si vous appréciez le travail et voulez que des projets indépendants comme celui-ci continuent, offrez un café ici.",
  buyCoffee: "Offrez-moi un café",
  supportNote: "Page de soutien externe · paiement sécurisé",
  footerTagline: "Un compagnon hors ligne amical pour l’eau et les médicaments.",
  contact: "Contact",
  support: "Soutien",
  privacy: "Politique de confidentialité",
  rightsReserved: "Tous droits réservés.",
  mockWelcome: "Bon retour",
  mockHi: "Salut, Petra !",
  mockHydration: "Hydratation",
  mockGlasses: "5 / 8 verres",
  mockMeds: "Compagnon médicaments",
  mockMedMorning: "Matin",
  mockMedEvening: "Soir",
  privacyEyebrow: "Juridique",
  privacyTitle: "Politique de confidentialité",
  privacyUpdated: "Dernière mise à jour : août 2026",
  privacyWhatTitle: "Que stockons-nous ?",
  privacyWhatBody:
    "Sip & Pill stocke votre nom, objectifs d’eau, médicaments et journaux uniquement sur cet appareil. Rien n’est envoyé sur un serveur.",
  privacyNoTitle: "Pas de compte, pas de tracking",
  privacyNoBody:
    "Pas d’inscription, pas d’analytique, pas de publicité. Vos données de santé restent sur votre téléphone.",
  privacyDeleteTitle: "Suppression des données",
  privacyDeleteBody:
    "Vous pouvez tout effacer à tout moment avec le bouton « Réinitialiser toutes les données » dans Réglages.",
  privacyMedicalTitle: "Avertissement médical",
  privacyMedicalBody:
    "Sip & Pill est fourni gratuitement pour le suivi du bien-être personnel. Ce n’est pas un dispositif médical et ne remplace pas un avis médical professionnel. Utilisez-le selon votre jugement.",
  backHome: "← Retour à l’accueil",
  supportDeveloper: "Soutenir le développeur",
  supportCharityBlurb:
    "Sip & Pill est un projet à esprit caritatif — le développeur n’en tire aucun revenu. Il a été créé sur son temps et ses frais pour aider les autres. Si vous l’appréciez et voulez soutenir d’autres projets comme celui-ci, offrez-lui un café.",
  inviteCoffee: "Offrez-moi un café",
  giveAsYouLike: "Donnez selon votre envie",
  chooseAmount: "Choisissez un montant",
  customAmountLabel: "Montant personnalisé",
  confirmDonation: "Confirmez votre soutien",
  supportConfirmBlurb:
    "Vous êtes sur le point de donner {amount}. Merci d’aider des projets indépendants comme celui-ci à continuer !",
  donateAmount: "Donner {amount}",
  thankYouSupport: "Merci de soutenir Sip & Pill !",
  hurrah: "Hourra !",
  keepGoing: "Continuez comme ça !",
  cancel: "Annuler",
  back: "Retour",
  continue: "Continuer",
  aboutIntro:
    "Un petit projet personnel avec une conviction simple : rester hydraté et à jour avec ses médicaments ne devrait pas exiger de compte, de publicité ou d’abonnement.",
  aboutStoryTitle: "Tout a commencé avec des proches",
  aboutStoryBody:
    "Sip & Pill est né comme un compagnon pratique pour la famille et les amis — assez calme pour le quotidien, et assez privé pour que les habitudes de santé restent sur votre téléphone. Pas d’astuces de croissance. Pas de collecte de données. Juste une aide amicale pour la routine.",
  aboutFreeTitle: "Conçu pour rester gratuit",
  aboutFreeBody:
    "C’est un projet à esprit caritatif. Le développeur ne gagne rien avec l’app. Elle a été faite sur du temps et des frais personnels pour que chacun puisse l’utiliser sans paywall, bannières ni verrous premium. Si elle vous aide, c’est déjà une victoire.",
  aboutPrivacyTitle: "Hors ligne par conception",
  aboutPrivacyBody:
    "Votre nom, objectifs d’eau, médicaments et journaux vivent uniquement sur votre appareil. Rien n’est envoyé sur un serveur. Vous pouvez tout effacer à tout moment. Ici, la confidentialité n’est pas un réglage — c’est la valeur par défaut.",
  aboutTogetherTitle: "Un compagnon quotidien, pas un tableau de bord",
  aboutTogetherBody:
    "Nous voulions quelque chose de chaleureux et humain : des rappels doux, des progrès clairs, et des mascottes qui allègent un peu l’habitude. Sip & Pill est là pour accompagner votre journée — en silence, librement, sans bruit.",

};

const de: Dictionary = {
  navFeatures: "Funktionen",
  navAbout: "Über uns",
  navSupport: "Support",
  darkMode: "Dunkelmodus",
  lightMode: "Hellmodus",
  chooseLanguage: "Sprache wählen",
  dailyCompanion: "Dein täglicher Begleiter",
  tagline: "Bleib hydriert, bleib gesund!",
  heroBody:
    "Ein freundlicher Offline-Begleiter für Wasser und Medikamente — {highlight}. Deine Daten bleiben auf dem Telefon.",
  heroBodyHighlight: "100 % kostenlos und werbefrei",
  downloadCta: "Im App Store laden",
  freeOfflinePrivate: "100% Kostenlos • Offline • Privat",
  featuresEyebrow: "Highlights",
  featuresTitle: "Alles, was deine Tagesroutine braucht",
  featuresIntro:
    "Klare Tools für Hydration und Medikamente — ohne Lärm und Chaos.",
  featureWaterTitle: "Smarte Hydration",
  featureWaterDesc:
    "Setze ein Tagesziel, logge mit einem Tippen und verfolge den Fortschritt mit freundlichem Feedback.",
  featureMedsTitle: "Medikamentenerinnerungen",
  featureMedsDesc:
    "Füge Medikamente hinzu, stelle Zeiten ein und verpasse keine Dosis mehr.",
  featurePrivacyTitle: "100 % offline & privat",
  featurePrivacyDesc:
    "Kein Konto, keine Cloud, kein Tracking. Deine Gesundheitsdaten bleiben nur auf dem Gerät.",
  featureFreeTitle: "Kostenlos & werbefrei",
  featureFreeDesc:
    "Kein Abo, keine Banner. Ein einfacher Tagesbegleiter mit Charity-Gedanken.",
  aboutEyebrow: "Über uns",
  aboutTitle: "Warum Sip & Pill entstanden ist",
  aboutP1:
    "Wir haben Sip & Pill gebaut, damit Freunde und Familie Hydration und Medikamente einfach offline tracken können — ohne Abos oder Datenerfassung.",
  aboutP2Before:
    "Es ist ein Charity-Projekt: der Entwickler verdient nichts damit. Mit eigener Zeit und eigenen Mitteln gebaut, um anderen zu helfen. Es bleibt ",
  aboutP2Highlight: "komplett kostenlos und werbefrei",
  aboutP2After:
    ", weil Gesundheits-Tracking kein bezahltes Labyrinth sein sollte.",
  aboutMascotAlt: "Sip & Pill Maskottchen lesen zusammen",
  supportEyebrow: "Support",
  supportTitle: "Gefällt dir das Projekt? Unterstütze die Entwicklung!",
  supportBody:
    "Sip & Pill ist 100 % kostenlos, offline und werbefrei. Wenn du die Arbeit schätzt und unabhängige Projekte wie dieses weiterleben sollen, kannst du hier einen Kaffee ausgeben.",
  buyCoffee: "Lad mich auf einen Kaffee ein",
  supportNote: "Externe Support-Seite · sichere Zahlung",
  footerTagline: "Ein freundlicher Offline-Begleiter für Wasser und Medikamente.",
  contact: "Kontakt",
  support: "Support",
  privacy: "Datenschutz",
  rightsReserved: "Alle Rechte vorbehalten.",
  mockWelcome: "Willkommen zurück",
  mockHi: "Hi, Petra!",
  mockHydration: "Hydration",
  mockGlasses: "5 / 8 Gläser",
  mockMeds: "Medikamentenbegleiter",
  mockMedMorning: "Morgen",
  mockMedEvening: "Abend",
  privacyEyebrow: "Rechtliches",
  privacyTitle: "Datenschutz",
  privacyUpdated: "Zuletzt aktualisiert: August 2026",
  privacyWhatTitle: "Was speichern wir?",
  privacyWhatBody:
    "Sip & Pill speichert Namen, Wasserziele, Medikamente und Logs nur auf diesem Gerät. Nichts wird auf einen Server hochgeladen.",
  privacyNoTitle: "Kein Konto, kein Tracking",
  privacyNoBody:
    "Keine Registrierung, keine Analytics, keine Werbung. Deine Gesundheitsdaten bleiben auf dem Telefon.",
  privacyDeleteTitle: "Daten löschen",
  privacyDeleteBody:
    "Du kannst jederzeit alles mit „Alle Daten zurücksetzen“ in den Einstellungen löschen.",
  privacyMedicalTitle: "Medizinischer Hinweis",
  privacyMedicalBody:
    "Sip & Pill ist kostenlos für persönliches Wellness-Tracking. Es ist kein Medizinprodukt und ersetzt keinen professionellen medizinischen Rat. Nutze es nach eigenem Ermessen.",
  backHome: "← Zurück zur Startseite",
  supportDeveloper: "Entwickler unterstützen",
  supportCharityBlurb:
    "Sip & Pill ist ein Charity-Projekt — der Entwickler verdient nichts damit. Es entstand in eigener Zeit und auf eigene Kosten, um anderen zu helfen. Wenn du das schätzt und ähnliche Projekte unterstützen möchtest, lad ihn auf einen Kaffee ein.",
  inviteCoffee: "Lad mich auf einen Kaffee ein",
  giveAsYouLike: "Gib, was dir richtig erscheint",
  chooseAmount: "Betrag wählen",
  customAmountLabel: "Eigener Betrag",
  confirmDonation: "Unterstützung bestätigen",
  supportConfirmBlurb:
    "Du bist dabei, {amount} zu spenden. Danke, dass du unabhängige Projekte wie dieses am Leben hältst!",
  donateAmount: "{amount} spenden",
  thankYouSupport: "Danke, dass du Sip & Pill unterstützt!",
  hurrah: "Hurra!",
  keepGoing: "Weiter so!",
  cancel: "Abbrechen",
  back: "Zurück",
  continue: "Weiter",
  aboutIntro:
    "Ein kleines, persönliches Projekt mit einer einfachen Überzeugung: hydriert bleiben und Medikamente im Blick behalten sollte kein Konto, keine Werbung und kein Abo verlangen.",
  aboutStoryTitle: "Es begann mit Menschen, die uns wichtig sind",
  aboutStoryBody:
    "Sip & Pill begann als praktischer Begleiter für Freunde und Familie — ruhig genug für den Alltag und privat genug, dass Gesundheitsgewohnheiten auf dem Telefon bleiben. Keine Growth-Hacks. Keine Datenernte. Nur ein freundlicher Routinehelfer.",
  aboutFreeTitle: "Gebaut, um frei zu bleiben",
  aboutFreeBody:
    "Das ist ein Charity-Projekt. Der Entwickler verdient nichts mit der App. Sie entstand in persönlicher Zeit und auf eigene Kosten, damit jeder sie ohne Paywalls, Banner oder Premium-Sperren nutzen kann. Wenn sie hilft, ist das schon der Gewinn.",
  aboutPrivacyTitle: "Offline by Design",
  aboutPrivacyBody:
    "Dein Name, Wasserziele, Medikamente und Logs leben nur auf deinem Gerät. Nichts wird auf einen Server hochgeladen. Du kannst jederzeit alles löschen. Privatsphäre ist hier keine Einstellung — sie ist der Standard.",
  aboutTogetherTitle: "Ein täglicher Begleiter, kein Dashboard",
  aboutTogetherBody:
    "Wir wollten etwas Warmes und Menschliches: sanfte Erinnerungen, klaren Fortschritt und Maskottchen, die die Gewohnheit leichter machen. Sip & Pill begleitet deinen Tag — leise, frei und ohne Lärm.",

};

const it: Dictionary = {
  navFeatures: "Funzioni",
  navAbout: "Chi siamo",
  navSupport: "Supporto",
  darkMode: "Modalità scura",
  lightMode: "Modalità chiara",
  chooseLanguage: "Scegli la lingua",
  dailyCompanion: "Il tuo compagno quotidiano",
  tagline: "Resta idratato, resta in salute!",
  heroBody:
    "Un compagno offline amichevole per acqua e farmaci — {highlight}. I tuoi dati restano sul telefono.",
  heroBodyHighlight: "100% gratuito e senza pubblicità",
  downloadCta: "Scarica dall’App Store",
  freeOfflinePrivate: "100% Gratis • Offline • Privato",
  featuresEyebrow: "In evidenza",
  featuresTitle: "Tutto ciò di cui la tua routine ha bisogno",
  featuresIntro:
    "Strumenti chiari per idratazione e farmaci — senza rumore né complessità.",
  featureWaterTitle: "Idratazione smart",
  featureWaterDesc:
    "Imposta un obiettivo giornaliero, registra con un tap e segui i progressi con feedback visivo amichevole.",
  featureMedsTitle: "Promemoria farmaci",
  featureMedsDesc:
    "Aggiungi i farmaci, imposta gli orari e non perdere più nessuna dose.",
  featurePrivacyTitle: "100% offline e privato",
  featurePrivacyDesc:
    "Niente account, niente cloud, niente tracking. I tuoi dati sanitari vivono solo sul dispositivo.",
  featureFreeTitle: "Gratis e senza ads",
  featureFreeDesc:
    "Niente abbonamenti, niente banner. Un semplice compagno quotidiano con spirito solidale.",
  aboutEyebrow: "Chi siamo",
  aboutTitle: "Perché è nato Sip & Pill",
  aboutP1:
    "Abbiamo creato Sip & Pill perché amici e famiglia potessero seguire idratazione e farmaci in modo semplice e offline — senza abbonamenti né tracciamento dati.",
  aboutP2Before:
    "È un progetto con spirito solidale: lo sviluppatore non ci guadagna. Costruito con tempo e risorse proprie per aiutare gli altri. Resta ",
  aboutP2Highlight: "completamente gratuito e senza pubblicità",
  aboutP2After:
    ", perché il tracking della salute non dovrebbe essere un labirinto a pagamento.",
  aboutMascotAlt: "Mascotte Sip & Pill che leggono insieme",
  supportEyebrow: "Supporto",
  supportTitle: "Ti piace il progetto? Supporta lo sviluppo!",
  supportBody:
    "Sip & Pill è 100% gratuito, offline e senza pubblicità. Se apprezzi il lavoro e vuoi che progetti indipendenti come questo continuino, puoi offrire un caffè qui.",
  buyCoffee: "Offrimi un caffè",
  supportNote: "Pagina di supporto esterna · pagamento sicuro",
  footerTagline: "Un compagno offline amichevole per acqua e farmaci.",
  contact: "Contatto",
  support: "Supporto",
  privacy: "Informativa sulla privacy",
  rightsReserved: "Tutti i diritti riservati.",
  mockWelcome: "Bentornata",
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
    "Sip & Pill memorizza nome, obiettivi d’acqua, farmaci e registri solo su questo dispositivo. Niente viene caricato su un server.",
  privacyNoTitle: "Niente account, niente tracking",
  privacyNoBody:
    "Niente registrazione, niente analytics, niente pubblicità. I tuoi dati sanitari restano sul telefono.",
  privacyDeleteTitle: "Cancellare i dati",
  privacyDeleteBody:
    "Puoi cancellare tutto in qualsiasi momento con il pulsante “Reimposta tutti i dati” nelle Impostazioni.",
  privacyMedicalTitle: "Avviso medico",
  privacyMedicalBody:
    "Sip & Pill è fornito gratuitamente per il tracking del benessere personale. Non è un dispositivo medico e non sostituisce il consiglio medico professionale. Usalo secondo il tuo giudizio.",
  backHome: "← Torna alla home",
  supportDeveloper: "Sostieni lo sviluppatore",
  supportCharityBlurb:
    "Sip & Pill è un progetto con spirito solidale — lo sviluppatore non ci guadagna. È stato creato con tempo e risorse proprie per aiutare gli altri. Se lo apprezzi e vuoi sostenere altri progetti così, offrigli un caffè.",
  inviteCoffee: "Offrimi un caffè",
  giveAsYouLike: "Dai quanto ritieni giusto",
  chooseAmount: "Scegli un importo",
  customAmountLabel: "Importo personalizzato",
  confirmDonation: "Conferma il tuo supporto",
  supportConfirmBlurb:
    "Stai per donare {amount}. Grazie per aiutare progetti indipendenti come questo a continuare!",
  donateAmount: "Dona {amount}",
  thankYouSupport: "Grazie per aver sostenuto Sip & Pill!",
  hurrah: "Evviva!",
  keepGoing: "Continua così!",
  cancel: "Annulla",
  back: "Indietro",
  continue: "Continua",
  aboutIntro:
    "Un piccolo progetto personale con una convinzione semplice: restare idratati e al passo con i farmaci non dovrebbe richiedere un account, pubblicità o un abbonamento.",
  aboutStoryTitle: "È iniziato con le persone a cui teniamo",
  aboutStoryBody:
    "Sip & Pill è nato come un compagno pratico per amici e famiglia — abbastanza calmo per l’uso quotidiano, e abbastanza privato perché le abitudini di salute restino sul telefono. Niente trucchi di crescita. Niente raccolta dati. Solo un aiuto amichevole per la routine.",
  aboutFreeTitle: "Fatto per restare gratuito",
  aboutFreeBody:
    "È un progetto con spirito solidale. Lo sviluppatore non guadagna nulla dall’app. È stata creata con tempo e risorse personali così chiunque possa usarla senza paywall, banner o blocchi premium. Se ti aiuta, questa è già la vittoria.",
  aboutPrivacyTitle: "Offline by design",
  aboutPrivacyBody:
    "Il tuo nome, obiettivi d’acqua, farmaci e registri vivono solo sul dispositivo. Niente viene caricato su un server. Puoi cancellare tutto in qualsiasi momento. La privacy qui non è un’impostazione — è il valore predefinito.",
  aboutTogetherTitle: "Un compagno quotidiano, non una dashboard",
  aboutTogetherBody:
    "Volevamo qualcosa di caldo e umano: promemoria gentili, progressi chiari e mascotte che alleggeriscono l’abitudine. Sip & Pill è qui per sostenere la tua giornata — in silenzio, liberamente e senza rumore.",

};

const pt: Dictionary = {
  navFeatures: "Recursos",
  navAbout: "Sobre",
  navSupport: "Apoio",
  darkMode: "Modo escuro",
  lightMode: "Modo claro",
  chooseLanguage: "Escolher idioma",
  dailyCompanion: "Seu companheiro diário",
  tagline: "Mantenha-se hidratado, mantenha-se saudável!",
  heroBody:
    "Um companheiro offline amigável para água e medicamentos — {highlight}. Seus dados ficam no telefone.",
  heroBodyHighlight: "100% gratuito e sem anúncios",
  downloadCta: "Baixar na App Store",
  freeOfflinePrivate: "100% Grátis • Offline • Privado",
  featuresEyebrow: "Destaques",
  featuresTitle: "Tudo o que sua rotina diária precisa",
  featuresIntro:
    "Ferramentas claras para hidratação e medicamentos — sem ruído nem complicação.",
  featureWaterTitle: "Hidratação inteligente",
  featureWaterDesc:
    "Defina uma meta diária, registre com um toque e acompanhe o progresso com feedback visual amigável.",
  featureMedsTitle: "Lembretes de medicação",
  featureMedsDesc:
    "Adicione seus medicamentos, defina horários e nunca mais perca uma dose.",
  featurePrivacyTitle: "100% offline e privado",
  featurePrivacyDesc:
    "Sem conta, sem nuvem, sem rastreamento. Seus dados de saúde vivem só no dispositivo.",
  featureFreeTitle: "Grátis e sem anúncios",
  featureFreeDesc:
    "Sem assinaturas, sem banners. Um companheiro diário simples com espírito solidário.",
  aboutEyebrow: "Sobre",
  aboutTitle: "Por que o Sip & Pill nasceu",
  aboutP1:
    "Criamos o Sip & Pill para que amigos e família pudessem acompanhar hidratação e medicamentos de forma simples e offline — sem assinaturas nem rastreamento de dados.",
  aboutP2Before:
    "É um projeto com espírito solidário: o desenvolvedor não ganha nada com isso. Feito com tempo e recursos próprios para ajudar os outros. Continua ",
  aboutP2Highlight: "totalmente gratuito e sem anúncios",
  aboutP2After:
    ", porque o acompanhamento de saúde não deveria ser um labirinto pago.",
  aboutMascotAlt: "Mascotes do Sip & Pill lendo juntos",
  supportEyebrow: "Apoio",
  supportTitle: "Gostou do projeto? Apoie o desenvolvimento!",
  supportBody:
    "O Sip & Pill é 100% gratuito, offline e sem anúncios. Se você valoriza o trabalho e quer que projetos independentes como este continuem, pode oferecer um café aqui.",
  buyCoffee: "Me pague um café",
  supportNote: "Página externa de apoio · pagamento seguro",
  footerTagline: "Um companheiro offline amigável para água e medicamentos.",
  contact: "Contato",
  support: "Apoio",
  privacy: "Política de privacidade",
  rightsReserved: "Todos os direitos reservados.",
  mockWelcome: "Bem-vinda de volta",
  mockHi: "Oi, Petra!",
  mockHydration: "Hidratação",
  mockGlasses: "5 / 8 copos",
  mockMeds: "Companheiro de medicação",
  mockMedMorning: "Manhã",
  mockMedEvening: "Noite",
  privacyEyebrow: "Legal",
  privacyTitle: "Política de privacidade",
  privacyUpdated: "Última atualização: agosto de 2026",
  privacyWhatTitle: "O que armazenamos?",
  privacyWhatBody:
    "O Sip & Pill armazena seu nome, metas de água, medicamentos e registros apenas neste dispositivo. Nada é enviado a um servidor.",
  privacyNoTitle: "Sem conta, sem rastreamento",
  privacyNoBody:
    "Não pedimos cadastro, não usamos analytics e não mostramos anúncios. Seus dados de saúde ficam no telefone.",
  privacyDeleteTitle: "Excluir seus dados",
  privacyDeleteBody:
    "Você pode apagar tudo a qualquer momento com o botão “Redefinir todos os dados” em Ajustes.",
  privacyMedicalTitle: "Aviso médico",
  privacyMedicalBody:
    "O Sip & Pill é gratuito para acompanhamento pessoal de bem-estar. Não é um dispositivo médico e não substitui aconselhamento médico profissional. Use segundo seu próprio julgamento.",
  backHome: "← Voltar ao início",
  supportDeveloper: "Apoiar o desenvolvedor",
  supportCharityBlurb:
    "O Sip & Pill é um projeto com espírito solidário — o desenvolvedor não ganha nada com ele. Foi feito com tempo e recursos próprios para ajudar os outros. Se você valoriza isso e quer apoiar mais projetos assim, convide-o para um café.",
  inviteCoffee: "Me convide para um café",
  giveAsYouLike: "Dê o que achar justo",
  chooseAmount: "Escolha um valor",
  customAmountLabel: "Valor personalizado",
  confirmDonation: "Confirme seu apoio",
  supportConfirmBlurb:
    "Você está prestes a doar {amount}. Obrigado por ajudar projetos independentes como este a continuar!",
  donateAmount: "Doar {amount}",
  thankYouSupport: "Obrigado por apoiar o Sip & Pill!",
  hurrah: "Viva!",
  keepGoing: "Continue assim!",
  cancel: "Cancelar",
  back: "Voltar",
  continue: "Continuar",
  aboutIntro:
    "Um projeto pequeno e pessoal com uma crença simples: manter-se hidratado e em dia com os remédios não deveria exigir conta, anúncios ou assinatura.",
  aboutStoryTitle: "Começou com pessoas de quem cuidamos",
  aboutStoryBody:
    "O Sip & Pill nasceu como um companheiro prático para amigos e família — calmo o bastante para o dia a dia, e privado o bastante para que hábitos de saúde fiquem no telefone. Sem truques de crescimento. Sem coleta de dados. Só um ajudante amigável para a rotina.",
  aboutFreeTitle: "Feito para continuar gratuito",
  aboutFreeBody:
    "É um projeto com espírito solidário. O desenvolvedor não ganha nada com o app. Foi feito com tempo e recursos pessoais para que qualquer pessoa possa usar sem paywalls, banners ou bloqueios premium. Se ajuda você, essa já é a vitória.",
  aboutPrivacyTitle: "Offline por design",
  aboutPrivacyBody:
    "Seu nome, metas de água, medicamentos e registros vivem só no seu dispositivo. Nada é enviado a um servidor. Você pode apagar tudo a qualquer momento. Privacidade aqui não é uma configuração — é o padrão.",
  aboutTogetherTitle: "Um companheiro diário, não um painel",
  aboutTogetherBody:
    "Queríamos algo acolhedor e humano: lembretes suaves, progresso claro e mascotes que deixam o hábito um pouco mais leve. O Sip & Pill está aqui para apoiar o seu dia — em silêncio, livremente e sem barulho.",

};

const ja: Dictionary = {
  navFeatures: "機能",
  navAbout: "について",
  navSupport: "サポート",
  darkMode: "ダークモード",
  lightMode: "ライトモード",
  chooseLanguage: "言語を選択",
  dailyCompanion: "毎日の相棒",
  tagline: "水分補給を続けて、健康でいよう！",
  heroBody:
    "水とお薬のためのやさしいオフライン相棒 — {highlight}。データは端末の中だけに残ります。",
  heroBodyHighlight: "100%無料・広告なし",
  downloadCta: "App Storeでダウンロード",
  freeOfflinePrivate: "100%無料 • オフライン • プライベート",
  featuresEyebrow: "ハイライト",
  featuresTitle: "毎日のルーティンに必要なもの",
  featuresIntro: "水分とお薬のためのすっきりしたツール — ノイズも複雑さもなし。",
  featureWaterTitle: "スマートな水分管理",
  featureWaterDesc:
    "1日の目標を設定し、ワンタップで記録。やさしいビジュアルで進捗を確認できます。",
  featureMedsTitle: "服薬リマインダー",
  featureMedsDesc: "お薬を追加して時間を設定。飲み忘れを防ぎます。",
  featurePrivacyTitle: "100%オフライン＆プライベート",
  featurePrivacyDesc:
    "アカウントもクラウドも追跡もなし。健康データは端末の中だけ。",
  featureFreeTitle: "無料＆広告なし",
  featureFreeDesc:
    "サブスクもバナーもなし。チャリティ精神の、シンプルな毎日の相棒。",
  aboutEyebrow: "について",
  aboutTitle: "Sip & Pillが生まれた理由",
  aboutP1:
    "友人や家族が、サブスクやデータ追跡なしで、シンプルにオフラインで水分とお薬を管理できるようにつくりました。",
  aboutP2Before:
    "チャリティ精神のプロジェクトで、開発者の収益はありません。自分の時間と費用で、誰かの役に立つために作りました。だからこそ ",
  aboutP2Highlight: "完全無料・広告なし",
  aboutP2After: "のままです。健康管理は有料の迷路であるべきではありません。",
  aboutMascotAlt: "一緒に本を読む Sip & Pill のマスコット",
  supportEyebrow: "サポート",
  supportTitle: "気に入ったら、開発を応援してください！",
  supportBody:
    "Sip & Pill は100%無料・オフライン・広告なしです。この仕事を応援したい、同じような独立プロジェクトを続けてほしいと思ったら、ここでコーヒーをおごってください。",
  buyCoffee: "コーヒーをおごる",
  supportNote: "外部サポートページ · 安全なお支払い",
  footerTagline: "水とお薬のためのやさしいオフライン相棒。",
  contact: "お問い合わせ",
  support: "サポート",
  privacy: "プライバシーポリシー",
  rightsReserved: "All rights reserved.",
  mockWelcome: "おかえり",
  mockHi: "こんにちは、Petra！",
  mockHydration: "水分",
  mockGlasses: "5 / 8 杯",
  mockMeds: "お薬コンパニオン",
  mockMedMorning: "朝",
  mockMedEvening: "夜",
  privacyEyebrow: "法務",
  privacyTitle: "プライバシーポリシー",
  privacyUpdated: "最終更新：2026年8月",
  privacyWhatTitle: "何を保存しますか？",
  privacyWhatBody:
    "Sip & Pill は名前、水分目標、お薬、記録をこの端末だけに保存します。サーバーには何もアップロードしません。",
  privacyNoTitle: "アカウントも追跡もなし",
  privacyNoBody:
    "登録は不要で、分析トラッキングも広告もありません。健康データは電話の中に残ります。",
  privacyDeleteTitle: "データの削除",
  privacyDeleteBody:
    "設定の「すべてのデータをリセット」ボタンで、いつでもすべてを消去できます。",
  privacyMedicalTitle: "医療に関する免責",
  privacyMedicalBody:
    "Sip & Pill は個人のウェルネス記録用に無料で提供されます。医療機器ではなく、専門的な医療助言の代わりにはなりません。ご自身の判断でご利用ください。",
  backHome: "← ホームに戻る",
  supportDeveloper: "開発者を応援する",
  supportCharityBlurb:
    "Sip & Pill はチャリティ精神のプロジェクトで、開発者の収益はありません。誰かの役に立つために、自分の時間と費用で作りました。それを応援したい、同じようなプロジェクトを支えたいと思ったら、コーヒーをおごってください。",
  inviteCoffee: "コーヒーをおごる",
  giveAsYouLike: "気持ちのままに",
  chooseAmount: "金額を選ぶ",
  customAmountLabel: "カスタム金額",
  confirmDonation: "サポートを確認",
  supportConfirmBlurb:
    "{amount} を寄付しようとしています。このような独立したプロジェクトの継続を支えてくれてありがとう！",
  donateAmount: "{amount} を寄付する",
  thankYouSupport: "Sip & Pill を応援してくれてありがとう！",
  hurrah: "やった！",
  keepGoing: "その調子！",
  cancel: "キャンセル",
  back: "戻る",
  continue: "続ける",
  aboutIntro:
    "小さな個人プロジェクトと、シンプルな信念：水分補給と服薬管理に、アカウントも広告もサブスクもいらないはず。",
  aboutStoryTitle: "大切な人たちから始まった",
  aboutStoryBody:
    "Sip & Pill は、友人や家族のための実用的な相棒として始まりました — 毎日使いやすく、健康習慣は電話の中だけに残るプライバシー。成長ハックもデータ収集もありません。ただの、やさしいルーティンヘルパーです。",
  aboutFreeTitle: "無料であり続けるために",
  aboutFreeBody:
    "チャリティ精神のプロジェクトです。開発者はこのアプリから収益を得ません。ペイウォールもバナーもプレミアム制限もなく誰でも使えるよう、個人の時間と費用で作りました。役に立てば、それがすでに勝利です。",
  aboutPrivacyTitle: "設計からオフライン",
  aboutPrivacyBody:
    "名前、水分目標、お薬、記録は端末の中だけにあります。サーバーには何もアップロードしません。いつでもすべて消去できます。プライバシーは設定ではなく、ここでの標準です。",
  aboutTogetherTitle: "ダッシュボードではなく、毎日の相棒",
  aboutTogetherBody:
    "温かく人間らしいものを目指しました：やさしいリマインダー、わかりやすい進捗、習慣を少し軽くするマスコット。Sip & Pill はあなたの一日を支えます — 静かに、自由に、ノイズなく。",

};

const ko: Dictionary = {
  navFeatures: "기능",
  navAbout: "소개",
  navSupport: "후원",
  darkMode: "다크 모드",
  lightMode: "라이트 모드",
  chooseLanguage: "언어 선택",
  dailyCompanion: "매일의 동반자",
  tagline: "수분 보충하고, 건강하게!",
  heroBody:
    "물과 약을 위한 친절한 오프라인 동반자 — {highlight}. 데이터는 휴대폰에만 남습니다.",
  heroBodyHighlight: "100% 무료·광고 없음",
  downloadCta: "App Store에서 다운로드",
  freeOfflinePrivate: "100% 무료 • 오프라인 • 프라이빗",
  featuresEyebrow: "하이라이트",
  featuresTitle: "일일 루틴에 필요한 모든 것",
  featuresIntro: "수분과 약을 위한 깔끔한 도구 — 소음과 복잡함 없이.",
  featureWaterTitle: "스마트 수분 관리",
  featureWaterDesc:
    "일일 목표를 정하고 한 번 탭으로 기록하세요. 친근한 시각 피드백으로 진행을 확인합니다.",
  featureMedsTitle: "복약 알림",
  featureMedsDesc: "약을 추가하고 시간을 설정해 복용을 놓치지 마세요.",
  featurePrivacyTitle: "100% 오프라인 & 프라이빗",
  featurePrivacyDesc:
    "계정·클라우드·추적 없음. 건강 데이터는 기기에만 있습니다.",
  featureFreeTitle: "무료 & 광고 없음",
  featureFreeDesc:
    "구독도 배너도 없습니다. 자선 정신의 간단한 매일 동반자.",
  aboutEyebrow: "소개",
  aboutTitle: "Sip & Pill이 태어난 이유",
  aboutP1:
    "친구와 가족이 구독이나 데이터 추적 없이, 간단하고 오프라인으로 수분과 약을 관리할 수 있도록 만들었습니다.",
  aboutP2Before:
    "자선 정신의 프로젝트로, 개발자는 수익을 얻지 않습니다. 다른 사람을 돕기 위해 본인의 시간과 비용으로 만들었습니다. 그래서 ",
  aboutP2Highlight: "완전히 무료이며 광고가 없습니다",
  aboutP2After:
    ". 건강 추적은 유료 미로가 되어서는 안 됩니다.",
  aboutMascotAlt: "함께 책을 읽는 Sip & Pill 마스코트",
  supportEyebrow: "후원",
  supportTitle: "프로젝트가 마음에 드나요? 개발을 응원해 주세요!",
  supportBody:
    "Sip & Pill은 100% 무료·오프라인·광고 없음입니다. 이 작업을 소중히 여기고 이런 독립 프로젝트가 이어지길 원한다면, 여기서 커피 한 잔을 사 주세요.",
  buyCoffee: "커피 한 잔 사주기",
  supportNote: "외부 후원 페이지 · 안전한 결제",
  footerTagline: "물과 약을 위한 친절한 오프라인 동반자.",
  contact: "문의",
  support: "후원",
  privacy: "개인정보 처리방침",
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
    "Sip & Pill은 자선 정신의 프로젝트로 — 개발자는 수익을 얻지 않습니다. 다른 사람을 돕기 위해 본인의 시간과 비용으로 만들었습니다. 이를 소중히 여기고 비슷한 프로젝트를 응원하고 싶다면, 커피 한 잔을 사 주세요.",
  inviteCoffee: "커피 한 잔 사주기",
  giveAsYouLike: "원하는 만큼 주세요",
  chooseAmount: "금액 선택",
  customAmountLabel: "직접 입력",
  confirmDonation: "후원 확인",
  supportConfirmBlurb:
    "{amount}을(를) 기부하려고 합니다. 이런 독립 프로젝트가 이어지도록 도와주셔서 감사합니다!",
  donateAmount: "{amount} 기부하기",
  thankYouSupport: "Sip & Pill을 응원해 주셔서 감사합니다!",
  hurrah: "만세!",
  keepGoing: "계속 응원해요!",
  cancel: "취소",
  back: "뒤로",
  continue: "계속",
  aboutIntro:
    "작은 개인 프로젝트와 단순한 믿음: 수분 보충과 복약 관리에 계정, 광고, 구독이 필요하지 않아야 합니다.",
  aboutStoryTitle: "아끼는 사람들에서 시작됐어요",
  aboutStoryBody:
    "Sip & Pill은 친구와 가족을 위한 실용적인 동반자로 시작했습니다 — 매일 쓰기 충분할 만큼 차분하고, 건강 습관이 휴대폰에만 남을 만큼 프라이빗하게. 성장 해킹도, 데이터 수집도 없습니다. 그저 친근한 루틴 도우미입니다.",
  aboutFreeTitle: "무료로 남을 수 있게",
  aboutFreeBody:
    "자선 정신의 프로젝트입니다. 개발자는 앱에서 수익을 얻지 않습니다. 페이월, 배너, 프리미엄 잠금 없이 누구나 쓸 수 있도록 개인 시간과 비용으로 만들었습니다. 도움이 된다면, 그게 이미 승리입니다.",
  aboutPrivacyTitle: "설계부터 오프라인",
  aboutPrivacyBody:
    "이름, 수분 목표, 약, 기록은 기기에만 있습니다. 서버로 업로드되지 않습니다. 언제든 모두 지울 수 있습니다. 여기서 프라이버시는 설정이 아니라 — 기본값입니다.",
  aboutTogetherTitle: "대시보드가 아닌, 매일의 동반자",
  aboutTogetherBody:
    "따뜻하고 인간적인 느낌을 원했습니다: 부드러운 알림, 분명한 진행, 습관을 조금 더 가볍게 만드는 마스코트. Sip & Pill은 당신의 하루를 돕습니다 — 조용히, 자유롭게, 소음 없이.",

};

export const DICTIONARIES: Record<LocaleCode, Dictionary> = {
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

export function isLocaleCode(value: string): value is LocaleCode {
  return value in DICTIONARIES;
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
