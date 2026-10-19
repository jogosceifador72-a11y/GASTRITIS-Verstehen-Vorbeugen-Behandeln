import { ChapterItem, FaqItem, SocialContact } from '../types';

export const CHECKOUT_URL = 'https://pay.hotmart.com/H108024232R';
export const PRICE = '29,39';
export const ORIGINAL_PRICE = '49,00';
export const CURRENCY = '€';

export const PRODUCT_INFO = {
  title: 'GASTRITIS – Verstehen, Vorbeugen, Behandeln',
  subtitle: 'Der verständliche Ratgeber, mit dem Sie Ursachen, Warnzeichen und Behandlung Ihrer Gastritis sicher einordnen.',
  pagesCount: 30,
  format: 'PDF (lesbar auf Smartphone, Tablet und Computer)',
  delivery: 'Sofortiger digitaler Download per E-Mail nach Zahlungsbestätigung',
  price: '29,39 €',
  hotmartUrl: CHECKOUT_URL,
};

export const CHAPTERS: ChapterItem[] = [
  {
    number: '01',
    title: 'Was im Magen passiert',
    subtitle: 'Die Magenschleimhaut & ihre Schutzbarriere verstehen',
    summary: 'Wie Salzsäure, Magenschleimhaut und Schutzbarriere im gesunden Zustand zusammenspielen – und was genau bei einer akuten oder chronischen Entzündung aus dem Gleichgewicht gerät.',
    takeaways: [
      'Unterschied zwischen akuter und chronischer Gastritis (Typ A, B, C)',
      'Warum Schmerzen nach bestimmten Speisen oder auf nüchternen Magen entstehen',
      'Wie sich die Schleimhaut regenerieren kann'
    ]
  },
  {
    number: '02',
    title: 'Die wahren Auslöser & Risikofaktoren',
    subtitle: 'Von Helicobacter pylori bis Schmerzmittel und Alltagsstress',
    summary: 'Entdecken Sie die häufigsten Ursachen, um nicht nur Symptome zu dämpfen, sondern die eigentliche Ursache an der Wurzel zu packen.',
    takeaways: [
      'Helicobacter pylori: Symptome, Diagnostik und Therapiemöglichkeiten',
      'Medikamente als Schleimhaut-Trigger (z.B. Ibuprofen, Aspirin, Diclofenac)',
      'Einfluss von anhaltendem Stress, Kaffee, Alkohol und Nikotin auf die Magensäure'
    ]
  },
  {
    number: '03',
    title: 'Symptome richtig deuten & Warnzeichen',
    subtitle: 'Wann ist es harmlos – und wann müssen Sie sofort zum Arzt?',
    summary: 'Erkennen Sie typische Alltagsbeschwerden wie Völlegefühl, Brennen und Aufstoßen – und lernen Sie die entscheidenden Warnzeichen kennen, die eine umgehende ärztliche Abklärung erfordern.',
    takeaways: [
      'Typische Beschwerden vs. Alarmsignale (z.B. Teerstuhl, Bluterbrechen, unerklärlicher Gewichtsverlust)',
      'Klarheit und innere Ruhe statt ständiger Angst vor Komplikationen',
      'Vorbereitungs-Checkliste für Ihr nächstes Arztgespräch'
    ]
  },
  {
    number: '04',
    title: 'Ärztliche Diagnose & Behandlungsschritte',
    subtitle: 'Magenspiegelung, Atemtests und Medikamente verständlich erklärt',
    summary: 'Schluss mit unübersichtlichen medizinischen Fachbegriffen. Erfahren Sie, welche Untersuchungen wirklich sinnvoll sind und wie Protonenpumpenhemmer (PPI) oder Antazida korrekt eingesetzt werden.',
    takeaways: [
      'Ablauf und Sinn einer Magenspiegelung (Gastroskopie) ohne Panik',
      'Magensäureblocker (PPI): Wirkung, richtige Einnahmezeit und schonendes Ausschleichen',
      'Eradikationstherapie bei bakteriellem Befall'
    ]
  },
  {
    number: '05',
    title: 'Magenfreundliche Ernährung im Alltag',
    subtitle: 'Konkrete Lebensmittel-Ampel & schonende Zubereitung',
    summary: 'Sparen Sie sich mühsames Herumprobieren. Ein klarer Überblick über magenberuhigende Speisen, schonende Kochmethoden und versteckte Reizstoffe.',
    takeaways: [
      'Die praktische Ja/Nein-Lebensmittelliste für den Alltag',
      'Warum Mahlzeitengröße und Temperatur entscheidend sind',
      'Wohltuende Kräutertees (Kamille, Fenchel) und natürliche Schleimhauthelfer'
    ]
  },
  {
    number: '06',
    title: 'Vorbeugung & Magenfrieden auf Dauer',
    subtitle: 'Rückfälle verhindern und langfristig beschwerdefrei bleiben',
    summary: 'Strategien für stressfreies Essen, Nervensystem-Beruhigung und Routinen, die Ihren Magen auch in hektischen Phasen zuverlässig schützen.',
    takeaways: [
      'Stressmanagement für den Vagusnerv (die direkte Magen-Hirn-Achse)',
      'Schonender Umgang mit Genussmitteln im Alltag',
      'Notfall-Plan bei ersten Anzeichen eines Wiederaufflammens'
    ]
  }
];

export const CORE_SOLUTIONS = [
  {
    id: 'symptoms',
    icon: 'AlertTriangle',
    title: 'Unsicherheit bei Symptomen',
    problem: 'Ist das nur Sodbrennen, ein Magengeschwür oder ein Notfall? Ständige Angst und Ungewissheit belasten den Alltag.',
    solution: 'Sie erfahren präzise, welche Beschwerden typisch sind und welche konkreten Warnzeichen sofort ärztlich abgeklärt werden müssen.'
  },
  {
    id: 'causes',
    icon: 'HelpCircle',
    title: 'Unklarheit über Ursachen',
    problem: 'Oft werden nur Säureblocker geschluckt, ohne den eigentlichen Auslöser der Entzündung zu kennen.',
    solution: 'Sie lernen die realen Ursachen kennen – von Helicobacter pylori über Schmerzmittel (NSAR) bis hin zu Alkohol, Nikotin und Stress.'
  },
  {
    id: 'diet',
    icon: 'BookOpen',
    title: 'Fehler bei Ernährung und Alltag',
    problem: 'Widersprüchliche Internet-Tipps führen zu radikalem Hungern oder unbedachtem Verzehr versteckter Reizstoffe.',
    solution: 'Sie sparen sich nervenaufreibendes Ausprobieren dank praxiserprobter Hinweise, was der Magen gut verträgt und was ihn reizt.'
  },
  {
    id: 'result',
    icon: 'ShieldCheck',
    title: 'Klares Endergebnis & Souveränität',
    problem: 'Überforderung nach kurzen Arztgesprächen mit lateinischen Fachbegriffen und vielen offenen Fragen.',
    solution: 'Sie wissen nach der Lektüre genau, wie eine Gastritis diagnostiziert und behandelt wird und was Sie selbst zur Vorbeugung tun können.'
  }
];

export const AUDIENCE_YES = [
  'Sie möchten Ihre Magenbeschwerden ohne komplizierte Fachtexte oder Fachchinesisch verstehen.',
  'Sie sind Betroffene(r), Angehörige(r) oder gesundheitsbewusst und suchen verlässliche Orientierung.',
  'Sie suchen einen kompakten, praxisnahen 30-Seiten-Leitfaden, den Sie sofort im Alltag umsetzen können.',
  'Sie möchten sich optimal auf das Gespräch mit Ihrem behandelnden Arzt vorbereiten.',
  'Sie wollen wissen, welche Lebensmittel Ihrem Magen wirklich guttun und welche Reizstoffe Sie meiden sollten.'
];

export const AUDIENCE_NO = [
  'Sie erwarten eine angebliche „Wunderheilung“ über Nacht, ohne selbst etwas an Ihren Alltagsgewohnheiten anzupassen.',
  'Sie bevorzugen hunderte Seiten trockene wissenschaftliche Abhandlungen statt eines direkten, lesefreundlichen Ratgebers.',
  'Sie suchen einen Ersatz für eine notwendige ärztliche Konsultation (dieser Ratgeber ergänzt und orientiert, ersetzt aber keinen Arztbesuch).'
];

export const FAQS: FaqItem[] = [
  {
    question: 'Wie und wann erhalte ich das E-Book nach dem Kauf?',
    answer: 'Direkt nach erfolgreicher Zahlungsbestätigung über unseren sicheren Zahlungsanbieter Hotmart erhalten Sie eine E-Mail mit Ihrem persönlichen Download-Link. Sie können das E-Book sofort als PDF herunterladen und ohne Wartezeit lesen.'
  },
  {
    question: 'Auf welchen Geräten kann ich das PDF lesen?',
    answer: 'Das E-Book ist universell im PDF-Format formatiert und lässt sich auf jedem handelsüblichen Smartphone (iPhone & Android), Tablet (iPad, etc.), Computer (PC & Mac) oder E-Reader mit PDF-Unterstützung öffnen. Sie können es auch bequem zuhause ausdrucken.'
  },
  {
    question: 'Wie viele Seiten umfasst der Ratgeber?',
    answer: 'Das E-Book umfasst genau 30 sorgfältig auf den Punkt gebrachte Seiten – ohne langes Herumreden, Fülltexte oder unverständliche Fachbegriffe, sondern mit maximalem praktischem Nutzen für Ihren Alltag.'
  },
  {
    question: 'Welche Zahlungsmethoden stehen zur Verfügung?',
    answer: 'Der Kauf wird sicher und verschlüsselt über Hotmart abgewickelt. Es stehen alle gängigen und sicheren Zahlungsmethoden wie PayPal, Kreditkarte, Klarna / Sofortüberweisung und weitere landesspezifische Zahlungsarten zur Verfügung.'
  },
  {
    question: 'Ersetzt dieses E-Book meinen Arztbesuch?',
    answer: 'Nein, und das betont der Ratgeber ganz ausdrücklich: Dieses E-Book ersetzt keine ärztliche Untersuchung, Diagnose oder Beratung. Es dient dazu, Ihnen medizinisches Grundwissen verständlich zu vermitteln, damit Sie Beschwerden sicher einordnen, Warnzeichen rechtzeitig erkennen und auf Augenhöhe mit Ihrem Arzt sprechen können.'
  },
  {
    question: 'Gibt es eine Zufriedenheitsgarantie?',
    answer: 'Ja! Dank der Hotmart-Käuferschutz-Garantie können Sie den Ratgeber völlig risikofrei erwerben. Wenn Sie nicht zufrieden sind, gilt das Hotmart-Rückgaberecht.'
  }
];

export const SOCIAL_CONTACTS: SocialContact[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    label: '@karinzeit',
    url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
    iconType: 'instagram',
    color: 'from-[#E1306C] to-[#F77737]'
  },
  {
    id: 'facebook',
    name: 'Facebook Profil',
    label: 'Karin Zeit auf Facebook',
    url: 'https://www.facebook.com/share/1c8J76URqe/',
    iconType: 'facebook',
    color: 'from-[#1877F2] to-[#0D65D9]'
  },
  {
    id: 'facebook-page',
    name: 'Facebook Seite',
    label: 'Offizielle Facebook Seite',
    url: 'https://www.facebook.com/share/1DzZyfFWRL/',
    iconType: 'facebook',
    color: 'from-[#1877F2] to-[#166FE5]'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    label: '@karinzeit',
    url: 'https://www.tiktok.com/@karinzeit',
    iconType: 'tiktok',
    color: 'from-[#000000] to-[#25F4EE]'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    label: '@karinzeit Kanal',
    url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
    iconType: 'youtube',
    color: 'from-[#FF0000] to-[#CC0000]'
  },
  {
    id: 'threads',
    name: 'Threads',
    label: '@karinzeit auf Threads',
    url: 'https://www.threads.com/@karinzeit',
    iconType: 'threads',
    color: 'from-[#101010] to-[#303030]'
  },
  {
    id: 'kwai',
    name: 'Kwai',
    label: '@kariningrid673',
    url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
    iconType: 'kwai',
    color: 'from-[#FF5000] to-[#FF8500]'
  }
];

export const PURCHASE_NOTIFICATIONS: { text: string; time: string; subtext: string }[] = [
  {
    text: 'Kauf bestätigt • E-Book heruntergeladen',
    subtext: 'Gastritis – Verstehen, Vorbeugen, Behandeln (PDF)',
    time: 'vor 2 Minuten'
  },
  {
    text: 'Kauf bestätigt • Sofortzugang versendet',
    subtext: 'Gastritis – Ratgeber (30 Seiten PDF)',
    time: 'vor 4 Minuten'
  },
  {
    text: 'Kauf bestätigt • Bestellung erfolgreich',
    subtext: 'Gastritis – Verstehen, Vorbeugen, Behandeln',
    time: 'vor 8 Minuten'
  },
  {
    text: 'Kauf bestätigt • Download aktiv',
    subtext: '30-Seiten Ratgeber für Smartphone & Tablet',
    time: 'vor 11 Minuten'
  },
  {
    text: 'Kauf bestätigt • E-Mail versendet',
    subtext: 'Gastritis – Verstehen, Vorbeugen, Behandeln',
    time: 'vor 16 Minuten'
  }
];
