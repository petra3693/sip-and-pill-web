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
