// PoliTikTok - Chat Data
// Hardcoded topics, users, and simulated messages

const chatData = {
  moderators: [
    { id: "mod1", name: "GeoPop Bot", color: "#e63946", badge: "MOD" },
    { id: "mod2", name: "Redazione", color: "#f4a261", badge: "MOD" },
    { id: "mod3", name: "Fact Checker", color: "#2a9d8f", badge: "MOD" }
  ],

  topics: [
    {
      id: "topic1",
      emoji: "🌍",
      title: "Perché l'Italia è a rischio alluvione",
      url: "https://www.youtube.com/@geopop",
      source: "GeoPop"
    },
    {
      id: "topic2",
      emoji: "📰",
      title: "Crisi di governo: gli ultimi sviluppi",
      url: "https://www.corriere.it/politica/",
      source: "Corriere della Sera"
    },
    {
      id: "topic3",
      emoji: "🎥",
      title: "Il problema dei rifiuti in Italia spiegato bene",
      url: "https://www.youtube.com/@geopop",
      source: "GeoPop"
    },
    {
      id: "topic4",
      emoji: "📊",
      title: "PIL Italia: i dati dell'ultimo trimestre",
      url: "https://www.ilsole24ore.com/",
      source: "Il Sole 24 Ore"
    },
    {
      id: "topic5",
      emoji: "🌊",
      title: "Come funziona il PNRR in 10 minuti",
      url: "https://www.youtube.com/@geopop",
      source: "GeoPop"
    },
    {
      id: "topic6",
      emoji: "🗳️",
      title: "Elezioni regionali: cosa cambia per i cittadini",
      url: "https://www.repubblica.it/politica/",
      source: "La Repubblica"
    }
  ],

  messages: [
    // TOPIC 1 - Alluvioni
    {
      id: "m1",
      userId: "mod1",
      isModerator: true,
      topicId: "topic1",
      text: "🌍 Nuovo video di GeoPop: \"Perché l'Italia è a rischio alluvione\" — Un video fondamentale per capire il dissesto idrogeologico del nostro paese.\n▶️ https://www.youtube.com/@geopop",
      timestamp: Date.now() - 10800000,
      reactions: { "👍": 12, "❤️": 5, "🔥": 3 }
    },
    {
      id: "m2",
      userId: "Marco_92",
      isModerator: false,
      topicId: "topic1",
      text: "Grande video come sempre! Dovrebbero farlo vedere a scuola, la gente non ha idea di quanto siamo a rischio.",
      timestamp: Date.now() - 7200000,
      reactions: { "👍": 4 }
    },
    {
      id: "m3",
      userId: "LuciaPolitica",
      isModerator: false,
      topicId: "topic1",
      text: "Il problema è che nessuno ascolta gli scienziati. Ogni anno le stesse alluvioni e non si fa nulla di strutturale.",
      timestamp: Date.now() - 5400000,
      reactions: { "👍": 7, "😂": 1 }
    },
    {
      id: "m4",
      userId: "Giovanni_Napoli",
      isModerator: false,
      topicId: "topic1",
      text: "A Napoli siamo messi malissimo. Basta un temporale forte e si allaga tutto. Il sistema fognario è del 1960.",
      timestamp: Date.now() - 3600000,
      reactions: { "👍": 6, "😢": 2 }
    },

    // TOPIC 2 - Crisi di governo
    {
      id: "m5",
      userId: "mod2",
      isModerator: true,
      topicId: "topic2",
      text: "📰 Aggiornamento sulla crisi di governo — Gli ultimi sviluppi da Corriere della Sera.\n🔗 https://www.corriere.it/politica/",
      timestamp: Date.now() - 9000000,
      reactions: { "👍": 8, "🔥": 4 }
    },
    {
      id: "m6",
      userId: "StefanoRoma",
      isModerator: false,
      topicId: "topic2",
      text: "Ma siamo sicuri che cadrà il governo? Secondo me è solo una manovra per fare pressione.",
      timestamp: Date.now() - 7800000,
      reactions: { "👍": 3 }
    },
    {
      id: "m7",
      userId: "AnnaMilano",
      isModerator: false,
      topicId: "topic2",
      text: "Ormai cambia governo ogni anno, non mi stupisco più. Il problema è che le riforme non le fa nessuno.",
      timestamp: Date.now() - 6000000,
      reactions: { "👍": 11, "😂": 5 }
    },
    {
      id: "m8",
      userId: "ChiaraTorino",
      isModerator: false,
      topicId: "topic2",
      text: "Io vorrei solo che pensassero alla scuola e alla sanità invece di litigare sempre in TV.",
      timestamp: Date.now() - 4200000,
      reactions: { "❤️": 9, "👍": 7 }
    },
    {
      id: "m9",
      userId: "mod3",
      isModerator: true,
      topicId: "topic2",
      text: "⚠️ Fact Check: La voce sulle dimissioni del premier è FAKE. Nessuna comunicazione ufficiale è stata rilasciata. Verificate sempre le fonti.",
      timestamp: Date.now() - 3000000,
      reactions: { "👍": 15, "❤️": 3 }
    },

    // TOPIC 3 - Rifiuti
    {
      id: "m10",
      userId: "mod1",
      isModerator: true,
      topicId: "topic3",
      text: "🎥 GeoPop ha pubblicato un video sul problema dei rifiuti in Italia — Spiegato benissimo, da non perdere.\n▶️ https://www.youtube.com/@geopop",
      timestamp: Date.now() - 8400000,
      reactions: { "👍": 10, "🔥": 6 }
    },
    {
      id: "m11",
      userId: "LucaBologna",
      isModerator: false,
      topicId: "topic3",
      text: "La situazione al Sud è drammatica. A Campania e Sicilia la raccolta differenziata è ancora un miraggio per molti comuni.",
      timestamp: Date.now() - 6600000,
      reactions: { "👍": 5 }
    },
    {
      id: "m12",
      userId: "SaraFirenze",
      isModerator: false,
      topicId: "topic3",
      text: "A Firenze la differenziata funziona bene, ma il problema è il riciclo. Separare non basta se poi non si ricicla.",
      timestamp: Date.now() - 4800000,
      reactions: { "👍": 8, "❤️": 2 }
    },
    {
      id: "m13",
      userId: "Marco_92",
      isModerator: false,
      topicId: "topic3",
      text: "Secondo me dovremmo copiare il modello tedesco. Lì la differenziata è al 70%+ da anni.",
      timestamp: Date.now() - 3000000,
      reactions: { "👍": 6 }
    },

    // TOPIC 4 - PIL
    {
      id: "m14",
      userId: "mod2",
      isModerator: true,
      topicId: "topic4",
      text: "📊 I dati del PIL dell'ultimo trimestre dal Sole 24 Ore — Crescita lenta ma positiva.\n🔗 https://www.ilsole24ore.com/",
      timestamp: Date.now() - 7200000,
      reactions: { "👍": 7, "🔥": 2 }
    },
    {
      id: "m15",
      userId: "AnnaMilano",
      isModerator: false,
      topicId: "topic4",
      text: "Crescita dello 0,3%? Ma siamo seri? Con l'inflazione al 5% siamo praticamente in recessione.",
      timestamp: Date.now() - 5400000,
      reactions: { "👍": 13, "😂": 4 }
    },
    {
      id: "m16",
      userId: "StefanoRoma",
      isModerator: false,
      topicId: "topic4",
      text: "Il vero problema è il debito pubblico. Siamo a 2.900 miliardi, come pensiamo di crescer con questo peso?",
      timestamp: Date.now() - 3600000,
      reactions: { "👍": 9 }
    },
    {
      id: "m17",
      userId: "LuciaPolitica",
      isModerator: false,
      topicId: "topic4",
      text: "Confrontatevi con la Germania: PIL pro capite 52k vs i nostri 35k. Abbiamo un problema strutturale enorme.",
      timestamp: Date.now() - 2400000,
      reactions: { "👍": 11, "😢": 3 }
    },

    // TOPIC 5 - PNRR
    {
      id: "m18",
      userId: "mod1",
      isModerator: true,
      topicId: "topic5",
      text: "🌊 GeoPop spiega il PNRR in 10 minuti — Finalmente qualcuno che lo rende comprensibile a tutti!\n▶️ https://www.youtube.com/@geopop",
      timestamp: Date.now() - 6000000,
      reactions: { "👍": 14, "❤️": 6, "🔥": 5 }
    },
    {
      id: "m19",
      userId: "Giovanni_Napoli",
      isModerator: false,
      topicId: "topic5",
      text: "209 miliardi sono tanti, ma se non c'è chi li spende bene... abbiamo visto come vanno le cose con i fondi UE.",
      timestamp: Date.now() - 4800000,
      reactions: { "👍": 10, "😂": 3 }
    },
    {
      id: "m20",
      userId: "ChiaraTorino",
      isModerator: false,
      topicId: "topic5",
      text: "La parte sulla digitalizzazione della PA è fondamentale. Non è possibile che nel 2025 dobbiamo ancora fare code in ufficio.",
      timestamp: Date.now() - 3600000,
      reactions: { "👍": 8, "❤️": 4 }
    },
    {
      id: "m21",
      userId: "mod3",
      isModerator: true,
      topicId: "topic5",
      text: "📌 Ricordate: il PNRR ha scadenze precise. Entro il 2026 tutti i progetti devono essere completati. Non c'è margine per ritardi.",
      timestamp: Date.now() - 2400000,
      reactions: { "👍": 12, "🔥": 4 }
    },
    {
      id: "m22",
      userId: "LucaBologna",
      isModerator: false,
      topicId: "topic5",
      text: "Spero che i soldi arrivino anche al Sud. Troppo spesso i fondi si fermano al Centro-Nord.",
      timestamp: Date.now() - 1800000,
      reactions: { "👍": 7, "❤️": 3 }
    },

    // TOPIC 6 - Elezioni regionali
    {
      id: "m23",
      userId: "mod2",
      isModerator: true,
      topicId: "topic6",
      text: "🗳️ Elezioni regionali in arrivo — Cosa cambia per i cittadini? Analisi completa da La Repubblica.\n🔗 https://www.repubblica.it/politica/",
      timestamp: Date.now() - 4200000,
      reactions: { "👍": 9, "🔥": 3 }
    },
    {
      id: "m24",
      userId: "SaraFirenze",
      isModerator: false,
      topicId: "topic6",
      text: "Le regionali contano più di quanto pensiamo. Sanità, trasporti, scuola: sono tutte competenze regionali.",
      timestamp: Date.now() - 3000000,
      reactions: { "👍": 11, "❤️": 5 }
    },
    {
      id: "m25",
      userId: "Marco_92",
      isModerator: false,
      topicId: "topic6",
      text: "Il problema è l'astensionismo. Alle regionali vota il 40% e poi ci lamentiamo che la politica non ci rappresenta.",
      timestamp: Date.now() - 2400000,
      reactions: { "👍": 14, "😂": 2 }
    },
    {
      id: "m26",
      userId: "StefanoRoma",
      isModerator: false,
      topicId: "topic6",
      text: "Io voto sempre. Non capire come funzionano le regionali è il motivo per cui poi i politici fanno quello che vogliono.",
      timestamp: Date.now() - 1800000,
      reactions: { "👍": 8, "❤️": 3 }
    },
    {
      id: "m27",
      userId: "AnnaMilano",
      isModerator: false,
      topicId: "topic6",
      text: "Voi cosa ne pensate del voto ai 16 anni? In Austria funziona, forse dovremmo provarlo anche qui.",
      timestamp: Date.now() - 1200000,
      reactions: { "👍": 5, "😂": 4 }
    },
    {
      id: "m28",
      userId: "mod3",
      isModerator: true,
      topicId: "topic6",
      text: "📌 Promemoria: per votare alle regionali serve la residenza nella regione. Verificate la vostra iscrizione alle liste elettorali!",
      timestamp: Date.now() - 600000,
      reactions: { "👍": 6, "❤️": 2 }
    }
  ]
};

// Export
if (typeof window !== 'undefined') {
  window.ChatData = chatData;
}
