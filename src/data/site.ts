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
  { href: '/promovare-pensiuni', label: 'Pensiuni' },
  { href: '/proiecte', label: 'Proiecte' },
  { href: '/#despre', label: 'Despre' },
];

export const SERVICES = [
  {
    href: '/creare-site-brasov',
    short: 'Creare site și branding',
    title: 'Creare site de prezentare și branding',
    desc: 'Site care aduce cereri, nu doar arată bine. Identitatea vizuală e inclusă când construim site-ul împreună.',
    price: '4.000 - 6.500 RON',
    priceNote: 'one-time',
    time: '3-6 săptămâni',
  },
  {
    href: '/seo-local-brasov',
    short: 'SEO local și Google Maps',
    title: 'SEO local și Google Business Profile',
    desc: 'Pentru afacerile care vor să apară când cineva din zonă caută exact ce fac ele.',
    price: 'de la 1.500 RON/lună',
    priceNote: 'contract minim 3 luni',
    time: 'raport lunar',
  },
  {
    href: '/social-media-foto-video',
    short: 'Social media și foto-video',
    title: 'Social media, Meta Ads și producție foto-video',
    desc: 'Prezență consistentă pe Instagram, Facebook și TikTok, cu poze și filmări făcute de noi, plus reclame care se măsoară.',
    price: 'de la 1.500 RON/lună',
    priceNote: 'Meta Ads de la 2.000 RON/lună',
    time: 'lunar',
  },
  {
    href: '/promovare-pensiuni',
    short: 'Promovare pensiuni',
    title: 'Promovare pentru pensiuni și cabane',
    desc: 'O zi de filmare, poze care arată ce laudă oaspeții în recenzii, Instagram, TikTok, fișă Google și Booking.',
    price: 'pachete de la 1.000 lei',
    priceNote: 'preț fix, plata 50/50',
    time: 'o zi de filmare, o săptămână montaj',
    tag: 'Nou',
  },
];

export const PROJECTS = [
  {
    name: 'Ozone Residence',
    type: 'Website Development & Design',
    url: 'https://ozoneresidence.ro',
    img: '/assets/screenshot-ozoneresidence.webp',
    alt: 'Website prezentare Ozone Residence Brașov, realizat de ADSNOW',
    services: ['site'],
  },
  {
    name: 'Armour Glass Parbrize',
    type: 'SEO Local & Google Business Profile',
    url: 'https://armourglass-parbrize.ro',
    img: '/assets/screenshot-armourglass.webp',
    alt: 'Optimizare SEO local și Google Business Profile pentru Armour Glass Parbrize',
    services: ['seo'],
  },
  {
    name: 'Soul Synergy',
    type: 'Web Development & Meta Ads',
    url: 'https://soulsynergy.ro',
    img: '/assets/screenshot-soulsynergy.webp',
    alt: 'Website și campanii Meta Ads pentru Soul Synergy, realizat de ADSNOW',
    services: ['site', 'social'],
  },
  {
    name: 'Psiholog Brașov',
    type: 'Web Development & Content Creation',
    url: 'https://psihologbrasov.ro',
    img: '/assets/screenshot-psihologbrasov.webp',
    alt: 'Website și content creation pentru cabinet psiholog Brașov',
    services: ['site', 'seo'],
  },
  {
    name: 'Dr. Sima',
    type: 'Web Development',
    url: 'https://drsima.ro',
    img: '/assets/screenshot-drsima.webp',
    alt: 'Website prezentare cabinet medical Dr. Sima, realizat de ADSNOW',
    services: ['site'],
  },
  {
    name: 'Mobarh',
    type: 'Web Development',
    url: 'https://mobarh.ro',
    img: '/assets/screenshot-mobarh.webp',
    alt: 'Website firma arhitectură Mobarh, web design de ADSNOW Brașov',
    services: ['site'],
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
