// Lista de prețuri: una singură, pentru toți clienții. Pachetele diferă prin volum, nu prin tipul clientului.
// Prețuri finale în lei: ALGO Digital Solutions SRL nu e plătitoare de TVA.
// Sursa deciziilor: documentul „ADSNOW — Analiză și repoziționare 2027”, secțiunile 7 și 10 (26 noiembrie 2026).

export type PriceRow = { name: string; what: string; time?: string; price: string; note?: string };

export const PACKAGES: (PriceRow & { kicker: string; includes: string[]; separate: string; featured?: boolean })[] = [
  {
    kicker: 'O dată, 10 zile lucrătoare',
    name: 'Lansare în 10 zile',
    what: 'Pentru afacerile care pornesc online de la zero sau își refac prezența dintr-o mișcare.',
    includes: ['Site Start, până la 5 pagini', 'Fișa Google pusă la punct', '4 reels de lansare', 'Texte scrise de mine'],
    price: '3.300 lei',
    separate: '3.800 lei separat',
    featured: true,
  },
  {
    kicker: 'Lunar, minim 3 luni',
    name: 'Creștere locală',
    what: 'Ca să te găsească oamenii din zonă pe Google Maps și să te vadă în fiecare săptămână pe Instagram.',
    includes: ['Mic: Maps Esențial + Conținut Mic', 'Mare: SEO local complet + Conținut Mediu', 'Raport lunar cu apeluri și cereri'],
    price: 'de la 1.090 lei/lună',
    note: 'Mare: 1.990 lei/lună',
    separate: '1.280 / 2.380 lei separat',
  },
  {
    kicker: 'O dată, 7 zile lucrătoare',
    name: 'Pilot automat',
    what: 'Ca să nu mai pierzi niciun client care ți-a scris sau te-a sunat.',
    includes: ['Kit pentru recenzii Google', 'Formular → WhatsApp + listă de clienți', 'Programări online cu reminder'],
    price: '1.690 lei',
    separate: '2.050 lei separat',
  },
];

export const SITES: PriceRow[] = [
  { name: 'Site de o pagină', what: 'O pagină care prezintă un singur serviciu sau o ofertă, cu formular și WhatsApp', time: '5 zile', price: '1.200 lei' },
  { name: 'Site Start', what: 'Până la 5 pagini, texte scrise de mine, legat de fișa ta de pe Google Maps', time: '7–10 zile', price: '2.400 lei' },
  { name: 'Site Pro', what: 'Până la 10 pagini, blog, programări, identitate de bază, o sesiune foto', time: '10–14 zile', price: '4.400 lei' },
  { name: 'Kit identitate', what: 'Logo, culori, fonturi, 10 șabloane pentru social media', time: '5–7 zile', price: '1.200 lei' },
  { name: 'Mentenanță', what: 'Site-ul ținut online, la zi și salvat, plus o oră de modificări pe lună', time: 'lunar', price: '150 lei/lună' },
];

export const CONTENT_PIECES: PriceRow[] = [
  { name: 'Reel din materialul tău', what: 'Până la 60 de secunde, montaj, subtitrări, muzică', price: '200 lei' },
  { name: 'Zi de filmare', what: 'Până la 6 ore la tine (în 1h de Brașov), 4 reels montate și 20 de poze', price: '1.500 lei' },
  { name: 'Video de prezentare 1–2 min', what: 'Scenariu, filmare, montaj, color, subtitrări, format orizontal și vertical', price: '2.000 lei' },
  { name: 'Carusel', what: '6–10 slide-uri, text inclus', price: '150 lei' },
  { name: 'Postare, banner sau poster', what: 'Design în 2 formate', price: '90 lei' },
];

export const CONTENT_PLANS: PriceRow[] = [
  { name: 'Conținut Mic', what: '4 reels + 4 postări sau carusele, Instagram și Facebook', time: 'lunar', price: '890 lei/lună' },
  { name: 'Conținut Mediu', what: '6 reels + 6 grafice, 2 ore de filmare, Instagram, Facebook și TikTok', time: 'lunar', price: '1.490 lei/lună' },
  { name: 'Conținut Mare', what: '10 reels + 8 grafice, o jumătate de zi de filmare, raport', time: 'lunar', price: '2.490 lei/lună' },
];

export const SEO: PriceRow[] = [
  { name: 'Setup Google Maps', what: 'Fișa ta de pe Google completată, firma listată în 20 de locuri locale, link și cod QR pentru recenzii', time: 'o dată', price: '600 lei' },
  { name: 'Maps Esențial', what: '4 postări pe fișă, răspuns la recenzii, poze noi, raport', time: 'lunar', price: '390 lei/lună' },
  { name: 'SEO local complet', what: 'Tot din Maps Esențial, plus o pagină sau un articol nou pe lună și urmărirea locului tău în Google', time: 'lunar', price: '890 lei/lună' },
  { name: 'Meta Ads', what: 'Reclame pe Facebook și Instagram: le fac, le pornesc, le ajustez, raport la două săptămâni (bugetul de reclame e separat)', time: 'lunar', price: '790 lei/lună' },
];

export const AUTOMATIONS: PriceRow[] = [
  { name: 'Kit recenzii Google', what: 'Clienții mulțumiți primesc automat linkul de recenzie după vizită', time: '2 zile', price: '450 lei' },
  { name: 'Formular → WhatsApp + listă de clienți', what: 'Fiecare cerere ajunge pe telefonul tău și într-o listă, cu răspuns automat', time: '3–4 zile', price: '900 lei' },
  { name: 'Programări online cu reminder', what: 'Clientul își alege ora singur și primește reminder, ca să nu uite', time: '2–3 zile', price: '700 lei' },
  { name: 'Răspuns în 1 minut la cereri', what: 'Cine completează formularul din reclamă primește imediat un mesaj de la tine', time: '3 zile', price: '700 lei' },
  { name: 'Asistent AI pe site și WhatsApp', what: 'Răspunde la întrebările despre prețuri, program și servicii, și preia cererea', time: '1–2 săptămâni', price: '1.500 lei', note: '+ 150 lei/lună' },
];
