// Date comune ale site-ului. Numele, adresa și telefonul trebuie să rămână identice cu fișa Google.

export const SITE = 'https://adsnow.ro';
export const PREVIEW = process.env.PREVIZUALIZARE === '1';
export const GA_ID = 'G-9NW9NYSJFF';

export const CONTACT = {
  email: 'alex@adsnow.ro',
  phone: '0771 587 498',
  phoneIntl: '+40771587498',
  whatsapp: 'https://wa.me/40771587498',
  street: 'Strada Octavian Goga 7',
  city: 'Brașov',
  postalCode: '500137',
  gbp: 'https://share.google/VeFOuazxszxVcgFcH',
};

// Datele firmei, obligatorii pe site (verificate pe listafirme / termene, 26 noiembrie 2026).
export const COMPANY = {
  name: 'ALGO Digital Solutions SRL',
  cui: '49010279',
  reg: 'J08/3057/2023',
};

export const wa = (text: string) => `${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
export const WA_DEFAULT = wa('Bună, Alex! Am văzut site-ul ADSNOW și aș vrea să vorbim.');

// Video-urile de fundal (public/video/<id>.mp4 și <id>-v.mp4 pentru telefon, plus <id>.webp ca poster).
// Generate cu Higgsfield (Seedance 2.5), cadru de start = cadru de final, ca bucla să nu se vadă.

// Cele patru servicii, descrise prin ce se schimbă pentru client. Fără prețuri: prețurile stau doar pe /preturi.
export const SERVICES = [
  {
    href: '/creare-site-brasov',
    nav: 'Site-uri',
    film: 'site',
    title: 'Te caută cineva și află în cinci secunde ce faci',
    lead: 'Un site făcut întâi pentru telefon, cu textele scrise de mine, gata în 10 zile.',
    effects: [
      'Omul vede imediat ce faci, unde ești și cum te sună.',
      'Te sună sau îți scrie pe WhatsApp dintr-o atingere.',
      'Arăți la fel de serios ca firmele mari din oraș.',
    ],
  },
  {
    href: '/seo-local-brasov',
    nav: 'Google Maps',
    film: 'harta',
    title: 'Când cineva din zonă caută ce vinzi, apari tu pe hartă',
    lead: 'Fișa Google pusă la punct, recenzii noi în fiecare lună și un site care spune Google ce faci.',
    effects: [
      'Apari în primele trei firme de pe hartă, acolo unde se dau telefoanele.',
      'Ai mai multe recenzii, de la clienții tăi reali.',
      'Vezi lunar câți te-au sunat și câți au cerut traseul spre tine.',
    ],
  },
  {
    href: '/social-media-foto-video',
    nav: 'Video',
    film: 'video',
    title: 'Oamenii te văd lucrând înainte să intre pe ușă',
    lead: 'Vin la tine, filmez și montez reels și video de prezentare, gata de postat.',
    effects: [
      'Clientul nou te cunoaște înainte să te sune.',
      'Ai material pentru Instagram, TikTok, site și reclame din aceeași zi de filmare.',
      'Postezi constant, fără să stai tu cu telefonul în mână.',
    ],
  },
  {
    href: '/automatizari',
    nav: 'Automatizări',
    film: 'automatizari',
    title: 'Niciun client care ți-a scris nu mai rămâne fără răspuns',
    lead: 'Cererile ajung pe WhatsApp, programările se fac singure, recenziile se cer singure.',
    effects: [
      'Cererea de pe site îți intră pe telefon în aceeași secundă.',
      'Clientul își alege singur ora și primește reminder.',
      'Cine a plecat mulțumit primește linkul de recenzie.',
    ],
  },
];

export const NAV = [
  ...SERVICES.map((s) => ({ href: s.href, label: s.nav })),
  { href: '/proiecte', label: 'Proiecte' },
  { href: '/preturi', label: 'Prețuri' },
];

// Dovezi verificate pe 26 noiembrie 2026. Fără cifre care depind de sezon.
export const PROOF = {
  armour: {
    client: 'Armour Glass Parbrize',
    url: 'https://armourglass-parbrize.ro',
    big: 'Top 3',
    line: 'pe Google Maps la „parbrize brasov”',
    detail: 'Fișă pornită de la zero. Azi e în primele trei pe hartă, singura cu nota 5,0, lângă firme cu 311 și 227 de recenzii.',
    pack: [
      { name: 'Firmă din Brașov', rating: '4,8', reviews: 311 },
      { name: 'Firmă din Brașov', rating: '4,6', reviews: 227 },
      { name: 'Armour Glass', rating: '5,0', reviews: 88, us: true },
    ],
  },
  albastru: {
    client: 'Albastru Infinit',
    url: 'https://albastruinfinit.ro',
    big: '407',
    line: 'căutări diferite pentru care apare în Google, față de 262 înainte',
    detail: 'Cabinet de psihoterapie. Am preluat SEO-ul în septembrie 2026. La „psiholog brasov” e pe prima pagină. Cifre din Google Search Console, fără căutările după numele cabinetului.',
  },
  ozone: {
    client: 'Ozone Residence',
    url: 'https://ozoneresidence.ro',
    big: 'Site + Instagram',
    line: 'de la zero, pentru un dezvoltator imobiliar',
    detail: 'Site de prezentare și cont de Instagram urmărit de firme din piața lui: design interior, constructori, producători de mobilă.',
  },
};

export const PROJECTS = [
  { name: 'Ozone Residence', type: 'Site și Instagram', url: 'https://ozoneresidence.ro', img: '/assets/screenshot-ozoneresidence.webp' },
  { name: 'Albastru Infinit', type: 'Site și Google', url: 'https://albastruinfinit.ro', img: '/assets/screenshot-albastruinfinit.webp' },
  { name: 'Armour Glass Parbrize', type: 'Google Maps și video', url: 'https://armourglass-parbrize.ro', img: '/assets/screenshot-armourglass.webp' },
  { name: 'Psiholog Brașov', type: 'Site', url: 'https://psihologbrasov.ro', img: '/assets/screenshot-psihologbrasov.webp' },
  { name: 'Soul Synergy', type: 'Site', url: 'https://soulsynergy.ro', img: '/assets/screenshot-soulsynergy.webp' },
  { name: 'Dr. Sima', type: 'Site', url: 'https://drsima.ro', img: '/assets/screenshot-drsima.webp' },
];

// Reels făcute de ADSNOW (public/video/<id>.mp4 + <id>.jpg).
export const REELS = [
  { id: 'DezffYPNsru', client: 'Armour Glass', topic: 'Înlocuire de parbriz în 3 pași' },
  { id: 'DdtaZAjtq0-', client: 'Armour Glass', topic: 'Polimerizare faruri' },
  { id: 'DW01iJ9kw2y', client: 'Ozone Residence', topic: 'Prezentare ansamblu' },
  { id: 'DNoGnQCNWj7', client: 'Ozone Residence', topic: 'Blocuri finalizate și predate' },
  { id: 'DVIlpeUjURb', client: 'Psiholog Brașov', topic: 'Workshop despre anxietate' },
];

// Videoul de prezentare cu Alex (public/video/alex.mp4). Gol = se arată poza.
export const ALEX_VIDEO = '';

export const BUSINESS_ID = `${SITE}/#business`;

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Acasă', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
