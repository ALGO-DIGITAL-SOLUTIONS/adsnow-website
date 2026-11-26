# adsnow.ro v2: site multi-page în Astro (branch `v2-multipage`)

Previzualizare: https://adsnow-v2-preview.vercel.app (proiect Vercel separat `adsnow-v2-preview`,
noindex + robots Disallow). Site-ul live `adsnow.ro` rămâne pe `main`, neatins.

## Comenzi

```bash
npm install
npm run dev                          # http://localhost:4321
PREVIZUALIZARE=1 npx astro build     # build de previzualizare (noindex, note „De completat”, fără GA)
npx astro build                      # build de producție
```

Republicare previzualizare: automat, la fiecare push pe `v2-multipage` (proiectul Vercel e legat de repo, cu producția pe acest branch). Varianta manuală, doar dacă e nevoie:

```bash
PREVIZUALIZARE=1 npx astro build && cp -r dist/. adsnow-v2-preview/
cd adsnow-v2-preview && npx vercel deploy --prod --yes
```

## Structură

- `src/layouts/Base.astro`: head, nav, subsol, banner cookie (Consent Mode v2), scripturi comune
- `src/data/site.ts`: contact, servicii, proiecte (sursa unică pentru carduri și linkuri)
- `src/data/reviews.ts`: recenzii Google (de completat cu fragmente reale)
- `src/components/Todo.astro`: note vizibile doar cu `PREVIZUALIZARE=1`
- `src/legacy-*.html`: paginile vechi, doar ca referință

## Înainte de lansare pe `main`

1. Vercel: proiectul `algo-digital-solutions-website` trebuie trecut pe framework Astro
   (build `astro build`, output `dist`). `vercel.json` cu `cleanUrls` rămâne.
2. Nu seta `PREVIZUALIZARE` pe proiectul de producție.
3. După deploy: toate URL-urile din sitemap dau 200, retrimite sitemap-ul în Search Console.

## Stare la 29 septembrie 2026

Făcut: 8 pagini (acasă, 3 pagini de serviciu, pensiuni, proiecte, audit, politică), schema `Service` +
`BreadcrumbList` + `FAQPage` pe fiecare pagină, banner de cookie-uri cu Consent Mode v2, politica de
confidențialitate corectată (varianta live spune că nu există Google Analytics, deși există).

De completat înainte de lansare (apar ca note portocalii în previzualizare):

- 3 recenzii reale de pe fișa Google, în `src/data/reviews.ts`
- decizia despre prețurile pachetelor pentru pensiuni afișate public
- exemple foto-video pe `/promovare-pensiuni` și `/social-media-foto-video`
- studii de caz pe `/proiecte`
- recitirea politicii de confidențialitate

## Stare la 26 noiembrie 2026: repoziționare

Site-ul e rescris pe noua poziționare: „marketing rapid pentru afaceri locale”, site în 10 zile, prețuri finale afișate integral (ALGO nu e plătitoare de TVA).

- Prețurile stau într-un singur loc: `src/data/pricing.ts`. Studiile de caz stau în `CASE_STUDIES` din `src/data/site.ts`.
- Pagini noi: `/preturi` și `/automatizari`. Pensiunile au ieșit din meniu și din lista de servicii; pagina rămâne, cu link în subsol, până se mută pe brandul separat.
- Recenziile din `src/data/reviews.ts` sunt copiate exact din fișa Google, la 26 noiembrie.
- Rămas de făcut: 2-3 reels încorporate pe `/social-media-foto-video`, numele și domeniul brandului pentru pensiuni (apoi redirect de pe `/promovare-pensiuni`).
