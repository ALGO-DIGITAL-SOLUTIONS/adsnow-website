# ADSNOW, site v3

Site-ul nou, construit de la zero pe branch-ul `v3`. Site-ul vechi (v2) a rămas neatins pe `v2-multipage`.

## Ce e diferit față de v2

- **Prima pagină e construită pe ce se schimbă pentru client**, în patru capitole (site, Google Maps, video, automatizări). Fără prețuri.
- **Prețurile stau doar pe `/preturi`:** trei pachete și lista completă pe categorii. Paginile de servicii trimit acolo cu un singur buton.
- **Pagina de pensiuni nu mai există.** `/promovare-pensiuni` duce la prima pagină (`vercel.json`).
- **Filme de fundal generate cu Higgsfield.** Primul și ultimul cadru sunt identice, ca bucla să nu se vadă. Se încarcă doar când ajung pe ecran, iar pe telefon prima pagină ia varianta verticală.
- **Google Analytics se încarcă doar după „Sunt de acord”.** Se măsoară apăsările pe WhatsApp, telefon și email (`contact_whatsapp`, `contact_telefon`, `contact_email`) și trimiterea formularului (`generate_lead`).
- **Subsolul are CUI-ul 49010279 și Reg. Com. J08/3057/2023.** În politica de confidențialitate, CUI-ul era greșit (490102793) și l-am corectat.
- **Un singur fișier de stil**, `src/styles/site.css`, fără CSS-ul vechi.

## Unde sunt lucrurile

| Ce | Unde |
|---|---|
| Texte și date (servicii, dovezi, proiecte, reels) | `src/data/site.ts` |
| Prețuri | `src/data/pricing.ts` |
| Recenzii | `src/data/reviews.ts` |
| Filme de fundal | `public/video/<nume>.mp4` + `<nume>.webp` (poster); `acasa-v.*` = varianta verticală |
| Imagini pentru linkuri | `public/assets/og/`, generate cu `brand-nou/og_v3.py` |
| Cadrele și filmele originale Higgsfield | `brand-nou/higgsfield/v3/` |

## Videoul cu Alex

Pune fișierul în `public/video/alex.mp4` și completează `ALEX_VIDEO = '/video/alex.mp4'` în `src/data/site.ts`. Instrucțiunile de filmare sunt în `DIRECTIVA-VIDEO-ALEX.md`.

## Comenzi

```
npm ci
PREVIZUALIZARE=1 npx astro build   # build de test, închis pentru Google
npx astro dev --port 4322
```
