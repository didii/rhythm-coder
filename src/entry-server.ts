// Build-time entry for scripts/prerender.mjs: renders the page to HTML and builds the <head> tags for scrapers.
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import cvData from './About/cvData';
import me from './About/img/me.jpg';
import App from './App.vue';
import { createAppI18n, pick } from './i18n.ts';

const SITE = 'https://rhythm-coder.dev/';
const TITLE = 'Dieter Van Broeck · CV';
const DESCRIPTION = 'CV of Dieter Van Broeck, senior full-stack .NET developer with a physics background.';

export function render() {
  return renderToString(createSSRApp(App).use(createAppI18n()));
}

export function head() {
  const image = new URL(me, SITE).href;
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dieter Van Broeck',
    givenName: 'Dieter',
    familyName: 'Van Broeck',
    jobTitle: pick(cvData.function, 'en'),
    description: DESCRIPTION,
    url: SITE,
    image,
    email: `mailto:${cvData.email}`,
    sameAs: cvData.links.map((l) => l.href),
    address: { '@type': 'PostalAddress', addressLocality: 'Zoersel', addressCountry: 'BE' },
    worksFor: { '@type': 'Organization', name: cvData.employers[0]!.name },
    alumniOf: { '@type': 'CollegeOrUniversity', name: pick(cvData.educations[0]!.school, 'en') },
    hasCredential: cvData.educations.map((e) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: pick(e.degree, 'en'),
      recognizedBy: { '@type': 'CollegeOrUniversity', name: pick(e.school, 'en') },
    })),
    knowsLanguage: ['nl', 'en', 'fr'],
    knowsAbout: [
      ...cvData.mainSkills.filter((c) => c.id !== 'spokenLanguages').flatMap((c) => c.skills.map((s) => pick(s.name, 'en'))),
      ...cvData.skills.filter((c) => c.id !== 'softSkills').flatMap((c) => c.skills.slice(0, 3).map((s) => pick(s, 'en'))),
    ],
  };
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const meta = (attr: string, key: string, value: string) => `<meta ${attr}="${key}" content="${esc(value)}" />`;
  return [
    `<link rel="canonical" href="${SITE}" />`,
    meta('property', 'og:type', 'profile'),
    meta('property', 'og:title', TITLE),
    meta('property', 'og:description', DESCRIPTION),
    meta('property', 'og:url', SITE),
    meta('property', 'og:image', image),
    meta('property', 'profile:first_name', 'Dieter'),
    meta('property', 'profile:last_name', 'Van Broeck'),
    meta('name', 'twitter:card', 'summary'),
    // "<" escaped so description text can never close the script tag
    `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
}
