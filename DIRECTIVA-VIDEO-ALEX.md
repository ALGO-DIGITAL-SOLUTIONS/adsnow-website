# Video de prezentare: Alex, pentru homepage

Videoul stă imediat după hero, în locul pozei. E primul moment în care clientul vede omul cu care va lucra. Scopul e unul singur: după 40 de secunde, omul să simtă că îți poate scrie pe WhatsApp fără emoții.

## Pe scurt

- **Durată:** 35–45 de secunde. Peste un minut nu-l mai vede nimeni până la capăt.
- **Format:** vertical, 9:16, 1080×1920. Ține capul și umerii pe mijlocul cadrului, pentru că pe site se taie puțin sus și jos (cadrul e 2:3).
- **Unde:** la birou sau într-un loc din Brașov care se recunoaște. Fundal liniștit, nu perete gol alb.
- **Lumină:** cu fața spre fereastră, ziua. Fără lumină din spate.
- **Sunet:** microfon lavalieră sau telefonul la 50 cm de gură. Sunetul contează mai mult decât imaginea.
- **Privire:** în cameră, ca și cum vorbești cu un singur om, nu cu „publicul”.
- **Ton:** cum vorbești la telefon cu un client nou. Fără prezentare de firmă, fără „bine ați venit”.

## Structura (4 bucăți scurte)

1. **Cine ești (5 s)**
   „Salut, sunt Alex, de la ADSNOW, din Brașov.”

2. **Ce faci, pe limba clientului (10–15 s)**
   Spui ce primește omul, nu ce servicii ai. De exemplu:
   „Ajut afacerile locale să aibă mai mulți clienți: le fac site-ul în 10 zile, îi pun pe Google Maps și vin la ei să filmez video-uri ca ăsta.”

3. **Un exemplu real (10–15 s)**
   Un singur client, o singură cifră. De exemplu:
   „Armour Glass a pornit de la zero. Azi e în primele trei pe hartă când cauți parbrize în Brașov.”

4. **Ce face omul acum (5–10 s)**
   „Dacă vrei să vedem ce s-ar potrivi la tine, scrie-mi pe WhatsApp. Îți răspund eu, de obicei în aceeași zi.”

Nu trebuie să spui textul cuvânt cu cuvânt. Spune-l cu cuvintele tale, de 3–4 ori, și alegem dubla cea mai naturală.

## Ce să eviți

- Cuvinte de agenție: „soluții”, „servicii integrate”, „strategie 360”, „SEO”, „conversii”.
- Liste lungi de servicii. Clientul reține un singur lucru.
- Muzică tare peste voce.
- Logo animat la început. Primele 2 secunde trebuie să fie fața ta.

## B-roll (opțional, 3–4 cadre de 2 secunde)

Dacă vrei să tai pe ici pe colo:
- tu filmând la un client;
- un site de-al tău derulat pe telefon;
- fișa Google a unui client pe hartă.

## Subtitrări

Pune subtitrări arse în video, pentru că pe site pornește fără sunet până dă clientul click.

## Cum mi-l trimiți

Trimite fișierul brut, sau montat, la cea mai bună calitate. Eu îl comprim pentru web (sub 4 MB), fac poza de copertă și îl pun pe site.

Tehnic: fișierul ajunge în `public/video/alex.mp4`, iar în `src/data/site.ts` se completează `ALEX_VIDEO = '/video/alex.mp4'`. Componenta `AlexIntro` îl afișează automat în locul pozei.
