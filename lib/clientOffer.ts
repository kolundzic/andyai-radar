export type ClientOffer = {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  clientQuestion: string;
  plainProblem: string;
  whatYouGet: string[];
  firstStep: string[];
  goodFor: string[];
  notFor: string[];
};

export const clientOffers: ClientOffer[] = [
  {
    slug: "ai-pregled-za-firmu",
    title: "AI Pregled za firmu",
    shortTitle: "AI Pregled",
    subtitle: "Jasan pregled gde AI može da pomogne vašem poslu — bez magle i bez forsiranja alata.",
    clientQuestion: "Šta nama AI uopšte može konkretno da pomogne?",
    plainProblem:
      "Mnogo je AI alata, saveta i obećanja. Teško je znati šta je korisno, šta je samo reklama, a šta može napraviti problem.",
    whatYouGet: [
      "pregled vašeg poslovanja iz AI ugla",
      "spisak mogućih AI primena",
      "3 najpametnija prva koraka",
      "osnovnu procenu rizika",
      "kratak izveštaj za vlasnika ili menadžera"
    ],
    firstStep: [
      "kratak razgovor o poslu",
      "popis glavnih problema i ponavljajućih zadataka",
      "izbor 3 oblasti gde AI ima najviše smisla",
      "predlog prvog sigurnog pilot-koraka"
    ],
    goodFor: [
      "vlasnike malih i srednjih firmi",
      "menadžere koji ne žele da bacaju novac na pogrešne alate",
      "timove koji žele jasan početak"
    ],
    notFor: [
      "firme koje traže magično rešenje bez promene procesa",
      "timove koji ne žele da odvoje vreme za osnovni pregled rada"
    ]
  },
  {
    slug: "ai-asistent-za-dokumente",
    title: "AI Asistent za vaše dokumente",
    shortTitle: "AI Dokumenti",
    subtitle: "Plan za AI asistenta koji radi sa vašim PDF-ovima, pravilnicima, katalozima, ugovorima i internim znanjem.",
    clientQuestion: "Možemo li da pitamo AI na osnovu naših dokumenata?",
    plainProblem:
      "Dokumenti postoje, ali su rasuti. Ljudi gube vreme tražeći informacije, a običan chatbot ne zna šta je provereno i odakle informacija dolazi.",
    whatYouGet: [
      "plan organizacije dokumenata",
      "predlog AI asistenta za pretragu i pitanja",
      "pravila za citiranje izvora",
      "osnovna pravila pristupa i privatnosti",
      "preporuku alata i narednih koraka"
    ],
    firstStep: [
      "izbor test grupe dokumenata",
      "procena osetljivosti podataka",
      "pravilo: odgovor mora imati izvor",
      "pilot plan za prvi AI dokument asistent"
    ],
    goodFor: [
      "firme sa puno PDF-ova i internih procedura",
      "konsultante i edukatore",
      "timove podrške i administracije"
    ],
    notFor: [
      "haotične dokumente bez vlasnika i pravila",
      "poverljive dokumente bez dogovorene politike pristupa"
    ]
  },
  {
    slug: "ai-automatizacija-posla",
    title: "AI Automatizacija posla",
    shortTitle: "AI Automatizacija",
    subtitle: "Mapiranje jednog poslovnog procesa i predlog kako AI može da smanji ručni rad, uz ljudsku kontrolu.",
    clientQuestion: "Može li AI da nam smanji ponavljanje istih zadataka?",
    plainProblem:
      "Emailovi, forme, Excel tabele, ručno prepisivanje i ponavljanje istih koraka troše vreme. Ali automatizacija bez kontrole može napraviti štetu.",
    whatYouGet: [
      "mapu jednog konkretnog poslovnog procesa",
      "predlog šta može da se automatizuje",
      "pravilo gde čovek mora da odobri rezultat",
      "osnovnu listu rizika",
      "plan prvog pilot-workflow-a"
    ],
    firstStep: [
      "izaberemo jedan proces",
      "nacrtamo korake",
      "označimo šta AI sme sam",
      "označimo gde čovek mora da potvrdi",
      "napravimo pilot plan"
    ],
    goodFor: [
      "administraciju",
      "prodaju i upite klijenata",
      "interne operacije",
      "male timove sa mnogo ponavljanja"
    ],
    notFor: [
      "kritične procese bez odobrenja čoveka",
      "automatizaciju finansijskih ili pravnih odluka bez kontrole"
    ]
  }
];

export const simpleTerms = [
  ["AI Stack Map", "Mapa AI alata za posao", "Prikaz koji AI alati postoje, čemu služe i gde mogu da pomognu."],
  ["Governance", "Pravila bezbednog korišćenja", "Dogovor ko sme šta da radi, gde treba odobrenje i šta se beleži."],
  ["Risk Register", "Lista rizika", "Spisak stvari koje mogu poći naopako i kako ih kontrolišemo."],
  ["Permission Matrix", "Ko sme šta da radi", "Tabela dozvola: čitanje, pisanje, automatizacija, pristup dokumentima i slično."],
  ["Red Zone", "Opasna zona automatizacije", "Sve što može da menja fajlove, pokreće komande, koristi naloge ili pravi štetu."],
  ["Registry", "Evidencija proverenih AI alata", "Mesto gde zapisujemo šta smo proverili, zašto je važno i šta je sledeći korak."],
  ["RAG / Context", "AI koji radi sa vašim dokumentima", "AI odgovara na osnovu izvora koje mu date, a ne samo iz opšteg znanja."],
  ["Local AI Lab", "Privatna AI radionica", "Testiranje AI alata lokalno ili kontrolisano, posebno kada su podaci osetljivi."]
];

export const clientSteps = [
  ["01", "Razgovor", "Kratko objasnite šta radite i gde gubite vreme ili novac."],
  ["02", "Pregled", "Mi razložimo problem i predložimo gde AI ima smisla, a gde ne."],
  ["03", "Prioritet", "Biramo jedan najpametniji prvi korak, ne deset stvari odjednom."],
  ["04", "Pilot", "Pravimo mali, siguran test sa jasnim pravilima i ljudskom kontrolom."],
  ["05", "Odluka", "Na osnovu rezultata biramo: širiti, menjati, zaustaviti ili arhivirati."]
];
