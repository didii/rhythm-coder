// Build-time entry for scripts/prerender.mjs: renders the page to HTML and builds the <head> tags for scrapers.
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { createMemoryHistory } from "vue-router";
import App from "./App.vue";
import { EMAIL, LINKS, education, employers, skillOverview, skills } from "./About/cv";
import me from "./About/img/me.jpg";
import { createAppRouter } from "./router.ts";

const SITE = "https://rhythm-coder.dev/";
const TITLE = "Dieter Van Broeck · CV";
const DESCRIPTION = "CV of Dieter Van Broeck, .NET and full-stack developer with a physics background.";

export async function render(url: string) {
  const app = createSSRApp(App);
  const router = createAppRouter(createMemoryHistory());
  app.use(router);
  await router.push(url);
  await router.isReady();
  return renderToString(app);
}

export function head() {
  const image = new URL(me, SITE).href;
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dieter Van Broeck",
    givenName: "Dieter",
    familyName: "Van Broeck",
    jobTitle: ".NET and full-stack developer",
    description: DESCRIPTION,
    url: SITE,
    image,
    email: `mailto:${EMAIL}`,
    sameAs: LINKS.map((l) => l.href),
    address: { "@type": "PostalAddress", addressLocality: "Zoersel", addressCountry: "BE" },
    worksFor: { "@type": "Organization", name: employers[0]!.name },
    alumniOf: { "@type": "CollegeOrUniversity", name: education[0]!.school },
    hasCredential: education.map((e) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: e.degree,
      recognizedBy: { "@type": "CollegeOrUniversity", name: e.school },
    })),
    knowsLanguage: ["nl", "en", "fr"],
    knowsAbout: [
      ...skills.filter((c) => c.name !== "Spoken languages").flatMap((c) => c.skills.map((s) => s.name)),
      ...skillOverview.filter((c) => c.name !== "Soft skills").flatMap((c) => c.skills.slice(0, 3)),
    ],
  };
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  const meta = (attr: string, key: string, value: string) => `<meta ${attr}="${key}" content="${esc(value)}" />`;
  return [
    `<link rel="canonical" href="${SITE}" />`,
    meta("property", "og:type", "profile"),
    meta("property", "og:title", TITLE),
    meta("property", "og:description", DESCRIPTION),
    meta("property", "og:url", SITE),
    meta("property", "og:image", image),
    meta("property", "profile:first_name", "Dieter"),
    meta("property", "profile:last_name", "Van Broeck"),
    meta("name", "twitter:card", "summary"),
    // "<" escaped so description text can never close the script tag
    `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
}
