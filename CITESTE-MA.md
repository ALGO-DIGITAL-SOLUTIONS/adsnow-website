# adsnow.ro — pachet cu corecțiile SEO (5 septembrie 2026)

Sursa site-ului nu mai exista nici local, nici în Vercel (proiectul `algo-digital-solutions-website`
nu are repo Git conectat). Pachetul ăsta e reconstruit din HTML-ul live descărcat azi de pe
`https://adsnow.ro`, cu corecțiile aplicate peste.

## Ce e în pachet

```
index.html                       ← fostă /
audit-gratuit.html               ← fostă /audit-gratuit
politica-confidentialitate.html  ← fostă /politica-confidentialitate
favicon.ico                      ← NOU (16/32/48 px, generat din assets/logo.webp)
sitemap.xml
robots.txt
assets/                          ← toate cele 12 fișiere originale + apple-touch-icon.png (NOU)
```

## Corecții aplicate

| # | Ce | Unde | De ce |
|---|----|------|-------|
| 1 | Adăugat `/favicon.ico` și `apple-touch-icon.png` | toate paginile | Search Console raporta `https://www.adsnow.ro/favicon.ico` ca 404 din 23.07.2024 |
| 2 | Șters link-ul duplicat către Google Fonts | toate paginile | era încărcat de două ori, render-blocking degeaba |
| 3 | Șters `<meta name="keywords">` | index, audit-gratuit | ignorat de Google din 2009; îți publica lista de termeni țintă |
| 4 | Cod poștal `500000` → `500137` | schema din index | `500000` e generic; `500137` e cel validat pe Google Business Profile |
| 5 | `lastmod` real, șters `changefreq`/`priority` | sitemap.xml | declara 21.05.2026 când serverul zicea 02.09.2026; Google învață să ignore un `lastmod` fals |

Nu a fost nevoie să ating `canonical`, `robots.txt` sau URL-urile din schema — erau deja pe apex,
iar redirectul din Vercel a fost întors ca să le corespundă.

## Propuneri de copy — verifică-le înainte de publicare

Trei H2-uri au fost rescrise ca să poarte termenii pe care oamenii chiar îi caută. Search Console
arată că pentru „agentie marketing brasov" ești pe **poziția 53,5** și pentru „agentie de marketing
brasov" pe **73,3**, în timp ce pentru genericul național „digital marketing" ești pe 8,9 cu 1.646
afișări și **zero** clicuri. Termenul „agenție de marketing … Brașov" nu apărea deloc în corpul paginii.

| Înainte | După |
|---------|------|
| Ce pot să fac pentru tine | Servicii de marketing digital în Brașov |
| Proiecte recente | Proiecte recente din Brașov și împrejurimi |
| Cine sunt și de ce contează | Cine sunt: agenția de marketing din Brașov e un singur om |

H1-ul nu a fost atins — e copy bun și diferențiator. Dacă vreo formulare nu-ți sună a tine,
schimb-o; scopul e doar ca fraza locală să existe în pagină, nu formularea exactă de mai sus.

## Cum îl pui live

```bash
cd "C:\Users\MARA\Desktop\adsnow-site-fixat"
npx vercel --prod
```

La prompt alege proiectul existent **algo-digital-solutions-website** (nu crea unul nou, altfel
domeniile rămân pe deploy-ul vechi).

Verifică apoi:

```bash
curl -sS -o /dev/null -w "%{http_code}\n" https://adsnow.ro/favicon.ico   # trebuie 200, nu 404
curl -sSI https://www.adsnow.ro/ | grep -i "^HTTP\|^location"            # trebuie 308 -> https://adsnow.ro/
```

## Recomandare separată

Pune folderul ăsta într-un repo Git și conectează-l la Vercel. Acum fiecare deploy e manual și
sursa se pierde — de-asta a trebuit reconstruită din HTML-ul live.

## Ce NU e rezolvat aici

Cea mai mare limită organică rămâne că site-ul are trei pagini pentru șase servicii. Paginile de
serviciu (`/creare-site-brasov`, `/seo-local-brasov`, `/meta-ads-brasov`, `/branding-brasov`) și
studiile de caz sunt muncă de conținut, nu o corecție de cod — vezi raportul de audit.
