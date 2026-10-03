import { createI18n, useI18n } from 'vue-i18n';

export const LOCALES = ['en', 'nl'] as const;
export type Locale = (typeof LOCALES)[number];
// CV content that differs per language; plain strings (names, tech terms) are the same in both
export type Text = string | Record<Locale, string>;
export const pick = (text: Text, locale: Locale) => (typeof text === 'string' ? text : text[locale]);

const en = {
  nav: {
    sections: 'Sections',
    top: 'Top',
    about: 'About',
    education: 'Education',
    skills: 'Skills',
    talks: 'Talks',
    mail: 'Mail',
  },
  language: 'Language',
  hero: {
    role: 'Software developer',
    expert: '.NET & React expert',
    experience: '{n} years experience',
    physics: 'Physics background',
    email: 'Email Dieter',
  },
  lead: {
    profile: 'Profile',
    photo: 'Dieter Van Broeck in front of the Rainbow Mountains',
    basedIn: 'Based in',
    mail: 'Mail',
    licence: 'Driving licence',
    born: 'Born',
  },
  place: 'Zoersel, Belgium',
  peru: 'Rainbow Mountains, Peru',
  about: {
    title: 'About me',
    prose:
      "I'm a passionate .NET and Full-stack developer with a physics background, turning complex analytical problems into elegant, maintainable solutions. Thrives in open environments that encourage initiative, bridging technical execution with product and business vision. Outside of coding, enjoys cooking, listening to music, and playing music.",
  },
  employer: { about: 'About {name}', assignments: 'Assignments at {name}' },
  years: '{n} year | {n} years',
  now: 'now',
  read: 'Read',
  close: 'Close',
  education: 'Education',
  skills: { title: 'Skills', rating: '{n} out of 7', overview: 'Full overview' },
  talks: { title: 'Presentations', sub: "Internal talks {'@'} Kenze" },
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const nl: typeof en = {
  nav: {
    sections: 'Secties',
    top: 'Top',
    about: 'Over',
    education: 'Opleiding',
    skills: 'Skills',
    talks: 'Talks',
    mail: 'Mail',
  },
  language: 'Taal',
  hero: {
    role: 'Softwareontwikkelaar',
    expert: '.NET- & React-expert',
    experience: '{n} jaar ervaring',
    physics: 'Achtergrond in fysica',
    email: 'Mail Dieter',
  },
  lead: {
    profile: 'Profiel',
    photo: 'Dieter Van Broeck voor de Rainbow Mountains',
    basedIn: 'Woont in',
    mail: 'Mail',
    licence: 'Rijbewijs',
    born: 'Geboren',
  },
  place: 'Zoersel, België',
  peru: 'Rainbow Mountains, Peru',
  about: {
    title: 'Over mij',
    prose:
      'Gepassioneerde .NET- en full-stackontwikkelaar met een achtergrond in fysica, die complexe analytische problemen omzet in elegante, onderhoudbare oplossingen. Floreert in open omgevingen die initiatief aanmoedigen en slaat de brug tussen technische uitvoering en product- en bedrijfsvisie. Naast het programmeren graag bezig met koken, muziek luisteren en muziek spelen.',
  },
  employer: { about: 'Over {name}', assignments: 'Opdrachten bij {name}' },
  years: '{n} jaar | {n} jaar',
  now: 'nu',
  read: 'Lees',
  close: 'Sluit',
  education: 'Opleiding',
  skills: { title: 'Skills', rating: '{n} op 7', overview: 'Volledig overzicht' },
  talks: { title: 'Presentaties', sub: "Interne talks {'@'} Kenze" },
  months: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
};

// one instance per app: the prerender builds its own
export const createAppI18n = () =>
  createI18n({ legacy: false, locale: 'en' as Locale, fallbackLocale: 'en', messages: { en, nl } });

// t() plus a picker for CV content in the active language
export function useText() {
  const { t, locale } = useI18n();
  return { t, locale, l: (text: Text) => pick(text, locale.value as Locale) };
}
