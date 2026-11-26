// Date comune ale site-ului. Numele, adresa și telefonul trebuie să rămână identice cu fișa Google.

export const SITE = 'https://adsnow.ro';
export const PREVIEW = process.env.PREVIZUALIZARE === '1';

export const CONTACT = {
  email: 'alex@adsnow.ro',
  phone: '0771 587 498',
  phoneIntl: '+40771587498',
  whatsapp: 'https://wa.me/40771587498',
  street: 'Strada Octavian Goga 7',
  city: 'Brașov',
  postalCode: '500137',
  gbp: 'https://share.google/VeFOuazxszxVcgFcH',
  calendar:
    'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ38JrGsAlyvinUx2IY6KHYyI7IQ-QaifvAz9diIDscT3oKh-S-_tG2_Kgkv_CYFaGW_RxtNrH73',
};

export const NAV = [
  { href: '/#servicii', label: 'Servicii' },
  { href: '/preturi', label: 'Prețuri' },
  { href: '/proiecte', label: 'Proiecte' },
  { href: '/#despre', label: 'Despre' },
];

// Cele patru servicii principale. Pensiunile au brand separat și nu mai apar aici.
export const SERVICES = [
  {
    href: '/creare-site-brasov',
    short: 'Site în 10 zile',
    title: 'Site de prezentare în 10 zile',
    desc: 'Site rapid, făcut întâi pentru telefon și pregătit pentru Google din prima zi. Gata în 10 zile lucrătoare de la ce primesc materialele.',
    price: 'de la 1.200 lei',
    priceNote: 'o dată',
    time: '5–14 zile',
  },
  {
    href: '/seo-local-brasov',
    short: 'SEO local și Google Maps',
    title: 'SEO local și Google Maps',
    desc: 'Ca să apari când cineva din zonă caută exact ce faci. Fișa Google, recenzii, pagini locale și raport lunar.',
    price: 'de la 390 lei/lună',
    priceNote: 'setup 600 lei',
    time: 'lunar',
  },
  {
    href: '/social-media-foto-video',
    short: 'Conținut video și grafic',
    title: 'Reels, video și grafică',
    desc: 'Reels și video de prezentare de până la 2 minute, filmate la tine, plus postări, carusele, bannere și postere.',
    price: 'de la 90 lei',
    priceNote: 'abonament de la 890 lei/lună',
    time: 'pe bucată sau lunar',
  },
  {
    href: '/automatizari',
    short: 'Automatizări',
    title: 'Automatizări pentru afaceri mici',
    desc: 'Cereri care ajung direct pe WhatsApp, programări online, recenzii cerute automat. Ca să nu mai pierzi niciun client care ți-a scris.',
    price: 'de la 450 lei',
    priceNote: 'o dată',
    time: '2–14 zile',
    tag: 'Nou',
  },
];

export const PROJECTS = [
  {
    name: 'Ozone Residence',
    type: 'Website și Instagram',
    url: 'https://ozoneresidence.ro',
    img: '/assets/screenshot-ozoneresidence.webp',
    alt: 'Website prezentare Ozone Residence Brașov, realizat de ADSNOW',
    services: ['site', 'social'],
  },
  {
    name: 'Albastru Infinit',
    type: 'Website și SEO local',
    url: 'https://albastruinfinit.ro',
    img: '/assets/screenshot-albastruinfinit.webp',
    alt: 'Website și SEO local pentru cabinetul de psihoterapie Albastru Infinit din Brașov',
    services: ['site', 'seo'],
  },
  {
    name: 'Armour Glass Parbrize',
    type: 'SEO local și content video',
    url: 'https://armourglass-parbrize.ro',
    img: '/assets/screenshot-armourglass.webp',
    alt: 'SEO local, Google Maps și reels pentru Armour Glass Parbrize Brașov',
    services: ['seo', 'content'],
  },
  {
    name: 'Psiholog Brașov',
    type: 'Website',
    url: 'https://psihologbrasov.ro',
    img: '/assets/screenshot-psihologbrasov.webp',
    alt: 'Website pentru cabinet psiholog Brașov, realizat de ADSNOW',
    services: ['site'],
  },
  {
    name: 'Soul Synergy',
    type: 'Website',
    url: 'https://soulsynergy.ro',
    img: '/assets/screenshot-soulsynergy.webp',
    alt: 'Website pentru Soul Synergy, realizat de ADSNOW',
    services: ['site'],
  },
  {
    name: 'Dr. Sima',
    type: 'Website',
    url: 'https://drsima.ro',
    img: '/assets/screenshot-drsima.webp',
    alt: 'Website prezentare cabinet medical Dr. Sima, realizat de ADSNOW',
    services: ['site'],
  },
];

// Studii de caz cu cifre verificate pe 26 noiembrie 2026 (Search Console, Google, Instagram).
export const CASE_STUDIES = [
  {
    slug: 'armour-glass',
    client: 'Armour Glass Parbrize',
    service: 'SEO local · content video',
    stat: 'Locul 1',
    statLabel: 'pe Google Maps la „parbrize brasov”',
    story:
      'Un business pornit de la zero: site, fișa Google și Instagram, toate lansate de noi. Azi fișa e prima pe hartă, cu nota 5,0 din 88 de recenzii, înaintea unor concurenți cu 311 și 227 de recenzii.',
    facts: [
      'Nota 5,0 din 88 de recenzii pe Google',
      'Ultimele 3 reels făcute de noi: 1.214 vizualizări, de 4,5 ori mai mult decât urmăritorii contului',
      'Urmează: site-ul pe prima pagină, nu doar fișa',
    ],
    url: 'https://armourglass-parbrize.ro',
  },
  {
    slug: 'albastru-infinit',
    client: 'Albastru Infinit',
    service: 'SEO local · website',
    stat: '+45%',
    statLabel: 'vizite din Google în primele 3 luni de SEO',
    story:
      'Am preluat SEO-ul în septembrie 2026. Comparăm septembrie–noiembrie cu iunie–august: mai multe vizite pe zi, mai multe căutări pentru care apare site-ul, aceeași poziție de top pe căutarea principală.',
    facts: [
      'Apare pentru 407 căutări diferite, față de 262 înainte',
      '„psiholog brasov”: prima pagină, cu 75% mai multe clicuri pe zi',
      'Cifre din Google Search Console, fără căutările după nume',
    ],
    url: 'https://albastruinfinit.ro',
  },
  {
    slug: 'ozone-residence',
    client: 'Ozone Residence',
    service: 'Instagram · website',
    stat: '451',
    statLabel: 'urmăritori reali, pe un cont pornit de la zero',
    story:
      'Contul de Instagram al dezvoltatorului a pornit de la zero. Urmăritorii sunt oameni și firme din piața lui: studiouri de design interior, constructori, instalatori, producători de mobilă, peisagiști. Niciun urmăritor cumpărat.',
    facts: [
      '26 de postări care construiesc încredere înainte de vânzare',
      'Audiență de business relevantă, nu boți',
      'Site-ul ozoneresidence.ro, tot de la noi',
    ],
    url: 'https://www.instagram.com/ozoneresidencebrasov/',
  },
];

// Nodul LocalBusiness, referit din toate paginile prin @id.
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
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// Reels făcute de ADSNOW, încorporate pe pagina de conținut. Se încarcă de la Instagram doar când ajungi la ele.
export const REELS = [
  { id: 'DezffYPNsru', client: 'Armour Glass', topic: 'Înlocuire de parbriz în 3 pași' },
  { id: 'DdtaZAjtq0-', client: 'Armour Glass', topic: 'Polimerizare faruri' },
  { id: 'DW01iJ9kw2y', client: 'Ozone Residence', topic: 'Prezentare ansamblu' },
  { id: 'DNoGnQCNWj7', client: 'Ozone Residence', topic: 'Blocuri finalizate și predate' },
  { id: 'DVIlpeUjURb', client: 'Psiholog Brașov', topic: 'Workshop despre anxietate' },
];
