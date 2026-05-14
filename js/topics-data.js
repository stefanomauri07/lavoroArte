// PoliticaPlay - Topics Dataset
// 10 topic infografiche sulla politica italiana

const topicsData = [
  {
    id: 0,
    title: "Elezioni Politiche 2022",
    subtitle: "La destra vince, Meloni Presidente del Consiglio",
    emoji: "🗳️",
    wikiTitle: "Elezioni politiche in Italia del 2022",
    color: "#1a5276",
    description: "Le elezioni del 25 settembre 2022 hanno segnato un punto di svolta nella politica italiana. La coalizione di centro-destra, guidata da Fratelli d'Italia, ha ottenuto la maggioranza in Parlamento. Giorgia Meloni è diventata la prima donna Presidente del Consiglio nella storia della Repubblica.",
    stats: [
      { label: "Affluenza", value: "63,9%", color: "#e63946" },
      { label: "Fratelli d'Italia", value: "26,0%", color: "#1a5276" },
      { label: "Centro-sinistra", value: "26,0%", color: "#e74c3c" },
      { label: "Movimento 5 Stelle", value: "15,4%", color: "#f39c12" }
    ],
    timeline: [
      { year: "Lug 2022", event: "Crisi del governo Draghi" },
      { year: "Ago 2022", event: "Mattarella scioglie le Camere" },
      { year: "25 Set 2022", event: "Voto: vince il centro-destra" },
      { year: "22 Ott 2022", event: "Meloni giura come Premier" }
    ],
    keyFacts: [
      "Prima donna alla guida del governo italiano",
      "Fratelli d'Italia: da 4% (2018) a 26% (2022)",
      "Astensionismo record: 36,1% non vota",
      "Riforma del taglio dei parlamentari applicata per la prima volta"
    ]
  },
  {
    id: 1,
    title: "Referendum Costituzionale 2016",
    subtitle: "Renzi perde: il NO vince col 59,1%",
    emoji: "📋",
    wikiTitle: "Referendum costituzionale in Italia del 2016",
    color: "#8e44ad",
    description: "Il referendum del 4 dicembre 2016 sulla riforma costituzionale proposta dal governo Renzi è stato uno dei momenti più cruciali della politica recente. Il NO ha vinto con il 59,1%, portando alle dimissioni di Matteo Renzi e aprendo una fase di instabilità politica.",
    stats: [
      { label: "Affluenza", value: "65,5%", color: "#8e44ad" },
      { label: "NO", value: "59,1%", color: "#e63946" },
      { label: "SI", value: "40,9%", color: "#27ae60" },
      { label: "Elettori", value: "50,7M", color: "#f4a261" }
    ],
    timeline: [
      { year: "Apr 2014", event: "Renzi annuncia la riforma" },
      { year: "Apr 2016", event: "Parlamento approva la riforma" },
      { year: "4 Dic 2016", event: "Referendum: vince il NO" },
      { year: "12 Dic 2016", event: "Renzi si dimette" }
    ],
    keyFacts: [
      "Riforma prevedeva superamento del bicameralismo perfetto",
      "Campagna elettorale molto polarizzata",
      "Il risultato ha indebolito il Partito Democratico",
      "Ha aperto la strada all'ascesa del Movimento 5 Stelle"
    ]
  },
  {
    id: 2,
    title: "Mani Pulite",
    subtitle: "L'inchiesta che ha cambiato l'Italia",
    emoji: "🔍",
    wikiTitle: "Mani pulite",
    color: "#2c3e50",
    description: "Mani Pulite è stata l'inchiesta giudiziaria che dal 1992 al 1994 ha svelato il sistema di corruzione politica noto come Tangentopoli. Ha portato alla fine della Prima Repubblica e alla scomparsa dei partiti storici come DC e PSI.",
    stats: [
      { label: "Indagati", value: "3.000+", color: "#2c3e50" },
      { label: "Condannati", value: "1.500+", color: "#e63946" },
      { label: "Partiti coinvolti", value: "7+", color: "#f4a261" },
      { label: "Anni", value: "1992-1994", color: "#1a5276" }
    ],
    timeline: [
      { year: "17 Feb 1992", event: "Arresto di Mario Chiesa a Milano" },
      { year: "1992", event: "Le inchieste si estendono a tutta Italia" },
      { year: "1993", event: "Crollo dei partiti storici" },
      { year: "1994", event: "Fine della Prima Repubblica" }
    ],
    keyFacts: [
      "Guidata dai pm Antonio Di Pietro e Gherardo Colombo",
      "Ha svelato il sistema delle tangenti sui lavori pubblici",
      "Ha portato alla nascita della Seconda Repubblica",
      "Berlusconi e Forza Italia emergono nel vuoto politico"
    ]
  },
  {
    id: 3,
    title: "Boom Economico",
    subtitle: "L'Italia che diventa potenza industriale",
    emoji: "🏭",
    wikiTitle: "Miracolo economico italiano",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Fiat_500_Nuova_%281957%29_Museo_Automobile_Torino.jpg/640px-Fiat_500_Nuova_%281957%29_Museo_Automobile_Torino.jpg",
    color: "#d4a017",
    description: "Il boom economico italiano (1958-1963) ha trasformato l'Italia da paese prevalentemente agricolo a potenza industriale. È stato un periodo di crescita straordinaria, con migrazioni interne dal Sud al Nord e la nascita della società dei consumi.",
    stats: [
      { label: "Crescita PIL annua", value: "6,3%", color: "#d4a017" },
      { label: "Auto prodotte (1963)", value: "1,4M", color: "#e63946" },
      { label: "Migranti interni", value: "9M", color: "#2c3e50" },
      { label: "Occupazione industriale", value: "+35%", color: "#27ae60" }
    ],
    timeline: [
      { year: "1958", event: "Inizio della crescita esplosiva" },
      { year: "1960", event: "Fiat 500: simbolo del boom" },
      { year: "1961", event: "Olimpiadi di Roma" },
      { year: "1963", event: "Fine del boom, inizia la recessione" }
    ],
    keyFacts: [
      "L'Italia diventa il 5° paese industriale al mondo",
      "Fiat 500 e Vespa: simboli della motorizzazione di massa",
      "Milano e Torino: capitali industriali del Nord",
      "Nasce la televisione italiana (RAI) e la pubblicità"
    ]
  },
  {
    id: 4,
    title: "Crisi Migratoria",
    subtitle: "L'Italia in prima linea nel Mediterraneo",
    emoji: "🚢",
    wikiTitle: "Crisi europea dei migranti",
    color: "#1e6091",
    description: "La crisi migratoria nel Mediterraneo ha visto l'Italia in prima linea nell'accoglienza dei migranti provenienti da Africa e Medio Oriente. Un tema che ha dominato il dibattito politico per oltre un decennio, dividendo l'opinione pubblica e l'Europa.",
    stats: [
      { label: "Arrivi (2014-2023)", value: "800.000+", color: "#1e6091" },
      { label: "Picco annuo (2016)", value: "181.000", color: "#e63946" },
      { label: "Morti in mare", value: "25.000+", color: "#2c3e50" },
      { label: "Richiedenti asilo", value: "130.000", color: "#f4a261" }
    ],
    timeline: [
      { year: "2013", event: "Operazione Mare Nostrum" },
      { year: "2015", event: "Crisi europea dei rifugiati" },
      { year: "2017", event: "Accordo Italia-Libia" },
      { year: "2023", event: "Piano Mattei per l'Africa" }
    ],
    keyFacts: [
      "L'Italia ha gestito il 40% degli arrivi via mare in UE",
      "Operazione Mare Nostrum ha salvato 150.000 vite",
      "Il tema ha alimentato l'ascesa della Lega di Salvini",
      "L'UE è stata criticata per la mancanza di solidarietà"
    ]
  },
  {
    id: 5,
    title: "Movimento 5 Stelle",
    subtitle: "Da fenomeno web a partito di governo",
    emoji: "⭐",
    wikiTitle: "Movimento 5 Stelle",
    color: "#f39c12",
    description: "Il Movimento 5 Stelle, fondato da Beppe Grillo e Gianroberto Casaleggio nel 2009, è diventato il primo partito alle elezioni del 2018 con il 32,7%. Un fenomeno politico unico, nato dal web e basato sulla democrazia diretta digitale.",
    stats: [
      { label: "Fondazione", value: "2009", color: "#f39c12" },
      { label: "Voti 2018", value: "32,7%", color: "#e63946" },
      { label: "Voti 2022", value: "15,4%", color: "#2c3e50" },
      { label: "Parlamentari (max)", value: "227", color: "#1a5276" }
    ],
    timeline: [
      { year: "2009", event: "Fondazione del M5S" },
      { year: "2013", event: "25,5% alle elezioni: shock politico" },
      { year: "2018", event: "Primo partito: 32,7%" },
      { year: "2022", event: "Crollo a 15,4%, crisi interna" }
    ],
    keyFacts: [
      "Primo partito anti-sistema a vincere in Europa occidentale",
      "Piattaforma Rousseau: democrazia diretta online",
      "Ha governato con Lega (2018) e PD (2019-2022)",
      "Conte e Di Maio: volti principali del movimento"
    ]
  },
  {
    id: 6,
    title: "Pandemia e Governo Conte",
    subtitle: "L'Italia primo paese occidentale colpito",
    emoji: "🦠",
    wikiTitle: "Pandemia di COVID-19 in Italia",
    color: "#c0392b",
    description: "La pandemia di COVID-19 ha colpito l'Italia come primo paese occidentale nel febbraio 2020. Il governo Conte ha gestito la crisi con lockdown, restrizioni e il piano vaccinale. Un periodo che ha cambiato la vita di 60 milioni di italiani.",
    stats: [
      { label: "Morti totali", value: "185.000+", color: "#c0392b" },
      { label: "Lockdown (giorni)", value: "230+", color: "#2c3e50" },
      { label: "Vaccinati (2022)", value: "90%", color: "#27ae60" },
      { label: "PIL -2020", value: "-8,9%", color: "#e63946" }
    ],
    timeline: [
      { year: "21 Feb 2020", event: "Primo caso a Codogno" },
      { year: "9 Mar 2020", event: "Lockdown nazionale" },
      { year: "27 Dic 2020", event: "Inizio campagna vaccinale" },
      { year: "2021", event: "Green Pass e ripresa" }
    ],
    keyFacts: [
      "Lombardia: epicentro della prima ondata",
      "Italia: primo paese al mondo a chiudere tutto",
      "Il Recovery Fund da 209 miliardi è stato negoziato",
      "Conte diventa il Premier più popolare della pandemia"
    ]
  },
  {
    id: 7,
    title: "PNRR",
    subtitle: "Next Generation EU: 209 miliardi per l'Italia",
    emoji: "💰",
    wikiTitle: "Piano nazionale di ripresa e resilienza",
    fallbackImage: "https://picsum.photos/seed/pnrr-eu/600/800",
    color: "#0066cc",
    description: "Il Piano Nazionale di Ripresa e Resilienza (PNRR) è il più grande investimento nella storia dell'Italia. Finanziato dall'UE con 209 miliardi di euro, mira a modernizzare il paese attraverso digitalizzazione, transizione ecologica e inclusione sociale.",
    stats: [
      { label: "Fondo totale", value: "209 Mld€", color: "#0066cc" },
      { label: "Missioni", value: "6", color: "#f4a261" },
      { label: "Obiettivo PIL", value: "+3,5%", color: "#27ae60" },
      { label: "Scadenza", value: "2026", color: "#e63946" }
    ],
    timeline: [
      { year: "2020", event: "Accordo europeo sul Recovery Fund" },
      { year: "Apr 2021", event: "Italia presenta il PNRR" },
      { year: "2022", event: "Prime erogazioni UE" },
      { year: "2026", event: "Scadenza per completare le riforme" }
    ],
    keyFacts: [
      "6 missioni: digitalizzazione, innovazione, competitività",
      "Draghi ha negoziato il piano, Meloni lo sta implementando",
      "Focus su Sud Italia, giovani e donne",
      "Obiettivo: colmare il divario con il Nord Europa"
    ]
  },
  {
    id: 8,
    title: "Anni di Piombo",
    subtitle: "Il terrorismo che ha insanguinato l'Italia",
    emoji: "💥",
    wikiTitle: "Anni di piombo",
    color: "#4a0e0e",
    description: "Gli Anni di Piombo (1969-1988) sono stati il periodo più buio della Repubblica Italiana. Terrorismo di estrema destra e sinistra ha causato centinaia di vittime, culminando nel sequestro e assassinio di Aldo Moro nel 1978.",
    stats: [
      { label: "Vittime", value: "400+", color: "#4a0e0e" },
      { label: "Attentati", value: "14.000+", color: "#e63946" },
      { label: "Anni di tensione", value: "1969-1988", color: "#2c3e50" },
      { label: "Sequestro Moro", value: "55 giorni", color: "#f4a261" }
    ],
    timeline: [
      { year: "1969", event: "Strage di Piazza Fontana a Milano" },
      { year: "1974", event: "Strage di Piazza della Loggia a Brescia" },
      { year: "1978", event: "Sequestro e uccisione di Aldo Moro" },
      { year: "1980", event: "Strage di Bologna: 85 morti" }
    ],
    keyFacts: [
      "Brigate Rosse: il gruppo terroristico più attivo",
      "Aldo Moro rapito il 16 marzo, ucciso il 9 maggio 1978",
      "Strage di Bologna: l'attentato più grave (85 morti)",
      "Il periodo si chiude con la sconfitta del terrorismo"
    ]
  },
  {
    id: 9,
    title: "Questione Meridionale",
    subtitle: "Il divario Nord-Sud che non si colma",
    emoji: "🗺️",
    wikiTitle: "Questione meridionale",
    fallbackImage: "https://picsum.photos/seed/questione-meridionale/600/800",
    color: "#6b4226",
    description: "La Questione Meridionale è il problema storico del divario economico e sociale tra Nord e Sud Italia. Nato con l'Unità d'Italia nel 1861, persiste ancora oggi con differenze drammatiche in termini di PIL, occupazione e servizi.",
    stats: [
      { label: "PIL Sud vs Nord", value: "-57%", color: "#6b4226" },
      { label: "Disoccupazione Sud", value: "18,5%", color: "#e63946" },
      { label: "Disoccupazione Nord", value: "5,2%", color: "#27ae60" },
      { label: "Anni di divario", value: "160+", color: "#2c3e50" }
    ],
    timeline: [
      { year: "1861", event: "Unità d'Italia: il divario nasce" },
      { year: "1950", event: "Cassa per il Mezzogiorno" },
      { year: "1992", event: "Fine della Cassa per il Mezzogiorno" },
      { year: "2024", event: "Il divario persiste nonostante i fondi UE" }
    ],
    keyFacts: [
      "Il Sud produce solo il 23% del PIL nazionale",
      "1 giovane su 3 al Sud non studia e non lavora",
      "La criminalità organizzata frena lo sviluppo",
      "Oltre 160 anni di politiche che non hanno risolto il problema"
    ]
  }
];

// Export per uso in altri moduli
if (typeof window !== 'undefined') {
  window.TopicsData = topicsData;
}
