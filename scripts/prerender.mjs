// Runs after `vite build`: renders the CV into dist/index.html so scrapers without JavaScript see the full content.
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { build } from "vite";

await build({
  logLevel: "warn",
  build: { ssr: "src/entry-server.ts", outDir: "dist-ssr", emptyOutDir: true },
});
const { render, head } = await import(pathToFileURL("dist-ssr/entry-server.js").href);

const template = readFileSync("dist/index.html", "utf8");
if (!template.includes('<div id="app"></div>')) throw new Error("prerender: #app placeholder not found in dist/index.html");
const html = template
  .replace('<div id="app"></div>', `<div id="app">${await render("/")}</div>`)
  .replace("</head>", `  ${head()}\n  </head>`);

writeFileSync("dist/index.html", html);
// GitHub Pages serves 404.html for unknown paths; the router then redirects them to /
writeFileSync("dist/404.html", html);
rmSync("dist-ssr", { recursive: true, force: true });
console.log("prerender: dist/index.html written");
