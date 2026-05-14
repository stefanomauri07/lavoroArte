// ArteGiovane - Quiz Politica Dataset
// 50+ domande sulla politica italiana, distribuite per categoria

const quizPoliticaData = [
  // STORIA (12 domande)
  {
    question: "In che anno è stata proclamata l'Unità d'Italia?",
    options: ["1848", "1861", "1870", "1882"],
    correct: "1861",
    category: "Storia",
    explanation: "Il Regno d'Italia fu proclamato il 17 marzo 1861, con Vittorio Emanuele II come primo re."
  },
  {
    question: "Chi fu il primo Presidente del Consiglio dell'Italia unita?",
    options: ["Giuseppe Garibaldi", "Camillo Benso di Cavour", "Giuseppe Mazzini", "Vittorio Emanuele II"],
    correct: "Camillo Benso di Cavour",
    category: "Storia",
    explanation: "Cavour fu il primo Presidente del Consiglio del Regno d'Italia nel 1861."
  },
  {
    question: "Quando avvenne la Marcia su Roma?",
    options: ["1920", "1921", "1922", "1923"],
    correct: "1922",
    category: "Storia",
    explanation: "La Marcia su Roma avvenne il 28 ottobre 1922, portando Mussolini al potere."
  },
  {
    question: "In che anno l'Italia entrò nella Seconda Guerra Mondiale?",
    options: ["1939", "1940", "1941", "1942"],
    correct: "1940",
    category: "Storia",
    explanation: "L'Italia entrò in guerra il 10 giugno 1940, a fianco della Germania nazista."
  },
  {
    question: "Quando fu liberata Roma durante la Seconda Guerra Mondiale?",
    options: ["4 giugno 1944", "25 aprile 1945", "8 settembre 1943", "2 giugno 1946"],
    correct: "4 giugno 1944",
    category: "Storia",
    explanation: "Roma fu liberata il 4 giugno 1944 dalle forze alleate."
  },
  {
    question: "Cosa festeggiamo il 25 aprile?",
    options: ["La Repubblica", "La Liberazione", "L'Unità d'Italia", "La Costituzione"],
    correct: "La Liberazione",
    category: "Storia",
    explanation: "Il 25 aprile 1945 segna la liberazione dell'Italia dal nazifascismo."
  },
  {
    question: "Chi era Alcide De Gasperi?",
    options: ["Un generale fascista", "Il primo Presidente della Repubblica", "Un padre fondatore della DC e del dopoguerra", "Il leader del PCI"],
    correct: "Un padre fondatore della DC e del dopoguerra",
    category: "Storia",
    explanation: "De Gasperi fu fondatore della Democrazia Cristiana e uno dei padri dell'Europa unita."
  },
  {
    question: "Quando cadde il muro di Berlino, evento che influenzò la politica italiana?",
    options: ["1987", "1989", "1991", "1993"],
    correct: "1989",
    category: "Storia",
    explanation: "Il muro di Berlino cadde il 9 novembre 1989, accelerando la fine della Guerra Fredda."
  },
  {
    question: "Cosa fu 'Mani Pulite'?",
    options: ["Una riforma sanitaria", "Un'inchiesta giudiziaria sulla corruzione", "Un movimento politico", "Una legge elettorale"],
    correct: "Un'inchiesta giudiziaria sulla corruzione",
    category: "Storia",
    explanation: "Mani Pulite (1992-1994) fu l'inchiesta che svelò Tangentopoli, cambiando la politica italiana."
  },
  {
    question: "In che anno nacque la Repubblica Sociale Italiana?",
    options: ["1941", "1942", "1943", "1944"],
    correct: "1943",
    category: "Storia",
    explanation: "La RSI, o Repubblica di Salò, fu fondata il 23 settembre 1943 dopo l'armistizio."
  },
  {
    question: "Chi guidò il governo di unità nazionale nel 1944-1945?",
    options: ["Palmiro Togliatti", "Ivanoe Bonomi", "Pietro Badoglio", "Ferruccio Parri"],
    correct: "Ivanoe Bonomi",
    category: "Storia",
    explanation: "Bonomi guidò il governo di unità nazionale durante la fase finale della guerra."
  },
  {
    question: "Quando l'Italia entrò nella NATO?",
    options: ["1947", "1949", "1951", "1955"],
    correct: "1949",
    category: "Storia",
    explanation: "L'Italia fu uno dei 12 membri fondatori della NATO nel 1949."
  },

  // PRESIDENTI (10 domande)
  {
    question: "Chi fu il primo Presidente della Repubblica Italiana?",
    options: ["Luigi Einaudi", "Enrico De Nicola", "Giovanni Gronchi", "Antonio Segni"],
    correct: "Enrico De Nicola",
    category: "Presidenti",
    explanation: "Enrico De Nicola fu il primo Presidente, in carica dal 1946 al 1948."
  },
  {
    question: "Quanti Presidenti della Repubblica ha avuto l'Italia fino a Mattarella?",
    options: ["10", "11", "12", "13"],
    correct: "12",
    category: "Presidenti",
    explanation: "Contando Mattarella come 12°, i Presidenti sono stati: De Nicola, Einaudi, Gronchi, Segni, Saragat, Leone, Pertini, Cossiga, Scalfaro, Ciampi, Napolitano, Mattarella."
  },
  {
    question: "Chi fu il Presidente della Repubblica che si dimise dopo soli 7 mesi?",
    options: ["Giovanni Leone", "Antonio Segni", "Giuseppe Saragat", "Francesco Cossiga"],
    correct: "Giovanni Leone",
    category: "Presidenti",
    explanation: "Leone si dimise nel 1978 dopo lo scandalo Lockheed."
  },
  {
    question: "Chi è stato il Presidente della Repubblica più longevo in carica?",
    options: ["Sandro Pertini", "Giorgio Napolitano", "Francesco Cossiga", "Carlo Azeglio Ciampi"],
    correct: "Giorgio Napolitano",
    category: "Presidenti",
    explanation: "Napolitano rimase in carica dal 2006 al 2015, quasi 9 anni, e fu il primo rieletto."
  },
  {
    question: "Chi era conosciuto come 'il Presidente dei partigiani'?",
    options: ["Sandro Pertini", "Giuseppe Saragat", "Oscar Luigi Scalfaro", "Carlo Azeglio Ciampi"],
    correct: "Sandro Pertini",
    category: "Presidenti",
    explanation: "Pertini, partigiano e socialista, fu Presidente dal 1978 al 1985, amatissimo dagli italiani."
  },
  {
    question: "Chi fu eletto Presidente della Repubblica nel 2015?",
    options: ["Giorgio Napolitano", "Sergio Mattarella", "Romano Prodi", "Pier Ferdinando Casini"],
    correct: "Sergio Mattarella",
    category: "Presidenti",
    explanation: "Mattarella fu eletto il 31 gennaio 2015, al quarto scrutinio."
  },
  {
    question: "Quale Presidente della Repubblica fu eletto due volte?",
    options: ["Francesco Cossiga", "Giorgio Napolitano", "Sergio Mattarella", "Carlo Azeglio Ciampi"],
    correct: "Giorgio Napolitano",
    category: "Presidenti",
    explanation: "Napolitano fu rieletto nel 2013, primo caso nella storia repubblicana."
  },
  {
    question: "Chi fu il Presidente della Repubblica durante il sequestro Moro?",
    options: ["Giovanni Leone", "Sandro Pertini", "Giuseppe Saragat", "Francesco Cossiga"],
    correct: "Sandro Pertini",
    category: "Presidenti",
    explanation: "Pertini fu eletto Presidente nel luglio 1978, durante la crisi del sequestro Moro."
  },
  {
    question: "Chi era il Presidente della Repubblica quando cadde il governo Berlusconi nel 2011?",
    options: ["Carlo Azeglio Ciampi", "Giorgio Napolitano", "Sergio Mattarella", "Oscar Luigi Scalfaro"],
    correct: "Giorgio Napolitano",
    category: "Presidenti",
    explanation: "Napolitano accettò le dimissioni di Berlusconi e incaricò Monti di formare un governo tecnico."
  },
  {
    question: "Quale Presidente della Repubblica era un magistrato prima della carica?",
    options: ["Sergio Mattarella", "Oscar Luigi Scalfaro", "Carlo Azeglio Ciampi", "Giorgio Napolitano"],
    correct: "Oscar Luigi Scalfaro",
    category: "Presidenti",
    explanation: "Scalfaro fu magistrato, poi deputato DC, e Presidente dal 1992 al 1999."
  },

  // PARTITI (10 domande)
  {
    question: "Cosa significava l'acronimo DC nella politica italiana?",
    options: ["Democrazia Costituzionale", "Democrazia Cristiana", "Democratici Cristiani", "Destra Cristiana"],
    correct: "Democrazia Cristiana",
    category: "Partiti",
    explanation: "La DC fu il partito dominante in Italia dal 1948 al 1994."
  },
  {
    question: "Chi fondò il Partito Comunista Italiano (PCI)?",
    options: ["Palmiro Togliatti", "Antonio Gramsci", "Enrico Berlinguer", "Giorgio Amendola"],
    correct: "Antonio Gramsci",
    category: "Partiti",
    explanation: "Il PCI fu fondato a Livorno nel 1921, con Gramsci tra i principali fondatori."
  },
  {
    question: "In che anno nacque il Movimento 5 Stelle?",
    options: ["2007", "2009", "2011", "2013"],
    correct: "2009",
    category: "Partiti",
    explanation: "Il M5S fu fondato da Beppe Grillo e Gianroberto Casaleggio nel 2009."
  },
  {
    question: "Chi fondò Forza Italia?",
    options: ["Silvio Berlusconi", "Matteo Salvini", "Giorgia Meloni", "Romano Prodi"],
    correct: "Silvio Berlusconi",
    category: "Partiti",
    explanation: "Berlusconi fondò Forza Italia nel gennaio 1994, entrando subito in politica."
  },
  {
    question: "Quando nacque il Partito Democratico (PD)?",
    options: ["2005", "2007", "2009", "2011"],
    correct: "2007",
    category: "Partiti",
    explanation: "Il PD nacque il 14 ottobre 2007 dalla fusione di DS e Margherita."
  },
  {
    question: "Chi era il segretario del PCI durante il 'compromesso storico'?",
    options: ["Palmiro Togliatti", "Enrico Berlinguer", "Alessandro Natta", "Achille Occhetto"],
    correct: "Enrico Berlinguer",
    category: "Partiti",
    explanation: "Berlinguer propose il compromesso storico con la DC negli anni '70."
  },
  {
    question: "Cosa era il MSI?",
    options: ["Movimento Sociale Italiano", "Movimento per la Sicurezza Interna", "Movimento Socialista Italiano", "Movimento per la Sovranità Italiana"],
    correct: "Movimento Sociale Italiano",
    category: "Partiti",
    explanation: "Il MSI fu il partito neofascista fondato nel 1946, sciolto nel 1995."
  },
  {
    question: "Chi fondò la Lega Nord?",
    options: ["Matteo Salvini", "Umberto Bossi", "Roberto Maroni", "Silvio Berlusconi"],
    correct: "Umberto Bossi",
    category: "Partiti",
    explanation: "Bossi fondò la Lega Nord nel 1991, diventandone il leader storico."
  },
  {
    question: "In che anno il PCI cambiò nome in PDS?",
    options: ["1989", "1991", "1993", "1995"],
    correct: "1991",
    category: "Partiti",
    explanation: "Il PCI divenne PDS (Partito Democratico della Sinistra) nel 1991 con Occhetto."
  },
  {
    question: "Chi è stata la prima donna a guidare un grande partito politico italiano?",
    options: ["Giorgia Meloni", "Emma Bonino", "Nilde Iotti", "Tina Anselmi"],
    correct: "Nilde Iotti",
    category: "Partiti",
    explanation: "Nilde Iotti fu la prima donna Presidente della Camera (1979-1992) e figura chiave del PCI."
  },

  // COSTITUZIONE (10 domande)
  {
    question: "Quando è entrata in vigore la Costituzione Italiana?",
    options: ["1 gennaio 1946", "1 gennaio 1948", "2 giugno 1946", "25 aprile 1945"],
    correct: "1 gennaio 1948",
    category: "Costituzione",
    explanation: "La Costituzione entrò in vigore il 1° gennaio 1948, dopo essere stata approvata il 22 dicembre 1947."
  },
  {
    question: "Quanti articoli è composta la Costituzione Italiana?",
    options: ["128", "139", "145", "152"],
    correct: "139",
    category: "Costituzione",
    explanation: "La Costituzione è composta da 139 articoli più 18 disposizioni transitorie e finali."
  },
  {
    question: "Cosa stabilisce l'articolo 1 della Costituzione?",
    options: ["L'Italia è una monarchia", "L'Italia è una Repubblica democratica fondata sul lavoro", "L'Italia è uno Stato federale", "L'Italia è membro dell'ONU"],
    correct: "L'Italia è una Repubblica democratica fondata sul lavoro",
    category: "Costituzione",
    explanation: "L'art. 1 recita: 'L'Italia è una Repubblica democratica, fondata sul lavoro.'"
  },
  {
    question: "Quale referendum sancì la nascita della Repubblica?",
    options: ["Referendum del 1945", "Referendum del 2 giugno 1946", "Referendum del 1948", "Referendum del 1953"],
    correct: "Referendum del 2 giugno 1946",
    category: "Costituzione",
    explanation: "Il 2 giugno 1946 gli italiani scelsero la Repubblica con il 54,3% dei voti."
  },
  {
    question: "Chi presiedette l'Assemblea Costituente?",
    options: ["Alcide De Gasperi", "Umberto Terracini", "Palmiro Togliatti", "Pietro Nenni"],
    correct: "Umberto Terracini",
    category: "Costituzione",
    explanation: "Terracini (PCI) fu eletto Presidente dell'Assemblea Costituente nel 1946."
  },
  {
    question: "Quale articolo della Costituzione ripudia la guerra?",
    options: ["Articolo 1", "Articolo 3", "Articolo 11", "Articolo 21"],
    correct: "Articolo 11",
    category: "Costituzione",
    explanation: "L'art. 11: 'L'Italia ripudia la guerra come strumento di offesa alla libertà degli altri popoli.'"
  },
  {
    question: "Cosa garantisce l'articolo 3 della Costituzione?",
    options: ["La libertà di stampa", "L'uguaglianza formale e sostanziale", "Il diritto al lavoro", "La libertà di religione"],
    correct: "L'uguaglianza formale e sostanziale",
    category: "Costituzione",
    explanation: "L'art. 3 sancisce l'uguaglianza di tutti i cittadini davanti alla legge."
  },
  {
    question: "Quanti referendum abrogativi sono stati indetti in Italia dal 1970 ad oggi?",
    options: ["Circa 50", "Circa 70", "Circa 100", "Circa 150"],
    correct: "Circa 70",
    category: "Costituzione",
    explanation: "Dal 1970 sono stati indetti circa 70 referendum abrogativi."
  },
  {
    question: "La Costituzione può essere modificata?",
    options: ["No, è immutabile", "Sì, con legge di revisione costituzionale", "Solo con referendum", "Solo dal Presidente della Repubblica"],
    correct: "Sì, con legge di revisione costituzionale",
    category: "Costituzione",
    explanation: "La Costituzione può essere modificata con la procedura di revisione (art. 138)."
  },
  {
    question: "Quale organo giudica sulla legittimità costituzionale delle leggi?",
    options: ["La Cassazione", "Il Consiglio di Stato", "La Corte Costituzionale", "Il Parlamento"],
    correct: "La Corte Costituzionale",
    category: "Costituzione",
    explanation: "La Corte Costituzionale giudica sulla legittimità costituzionale delle leggi."
  },

  // MISTO (10 domande)
  {
    question: "Chi è stato il Presidente del Consiglio che ha governato più a lungo?",
    options: ["Silvio Berlusconi", "Giulio Andreotti", "Benito Mussolini", "Alcide De Gasperi"],
    correct: "Benito Mussolini",
    category: "Misto",
    explanation: "Mussolini governò dal 1922 al 1943, per circa 21 anni."
  },
  {
    question: "Quale città italiana fu capitale dal 1865 al 1871?",
    options: ["Torino", "Milano", "Firenze", "Napoli"],
    correct: "Firenze",
    category: "Misto",
    explanation: "Firenze fu capitale del Regno d'Italia dal 1865 al 1871, prima di Roma."
  },
  {
    question: "Chi fu il primo Presidente del Consiglio della Repubblica Italiana?",
    options: ["Alcide De Gasperi", "Palmiro Togliatti", "Pietro Nenni", "Ivanoe Bonomi"],
    correct: "Alcide De Gasperi",
    category: "Misto",
    explanation: "De Gasperi fu il primo Presidente del Consiglio dopo la nascita della Repubblica."
  },
  {
    question: "In che anno l'Italia ha adottato l'Euro come moneta?",
    options: ["1999", "2000", "2001", "2002"],
    correct: "2002",
    category: "Misto",
    explanation: "L'Euro entrò in circolazione in Italia il 1° gennaio 2002."
  },
  {
    question: "Quale trattato ha istituito l'Unione Europea?",
    options: ["Trattato di Roma", "Trattato di Maastricht", "Trattato di Lisbona", "Trattato di Parigi"],
    correct: "Trattato di Maastricht",
    category: "Misto",
    explanation: "Il Trattato di Maastricht (1992) ha istituito l'Unione Europea."
  },
  {
    question: "Chi ha scritto 'Il Principe', trattato politico fondamentale?",
    options: ["Leonardo da Vinci", "Niccolò Machiavelli", "Francesco Guicciardini", "Dante Alighieri"],
    correct: "Niccolò Machiavelli",
    category: "Misto",
    explanation: "Machiavelli scrisse 'Il Principe' nel 1513, capolavoro del pensiero politico."
  },
  {
    question: "Quale legge elettorale è stata introdotta nel 1993?",
    options: ["Proporzionale puro", "Mattarellum", "Italicum", "Rosatellum"],
    correct: "Mattarellum",
    category: "Misto",
    explanation: "Il Mattarellum (1993) introdusse un sistema misto maggioritario-proporzionale."
  },
  {
    question: "Chi fu il leader delle Brigate Rosse?",
    options: ["Renato Curcio", "Mario Moretti", "Alberto Franceschini", "Tutti i precedenti"],
    correct: "Tutti i precedenti",
    category: "Misto",
    explanation: "Curcio, Moretti e Franceschini furono tutti leader delle BR in fasi diverse."
  },
  {
    question: "In che anno si tenne il primo referendum abrogativo in Italia?",
    options: ["1970", "1972", "1974", "1978"],
    correct: "1974",
    category: "Misto",
    explanation: "Il primo referendum abrogativo si tenne nel 1974 sul divorzio."
  },
  {
    question: "Quale regione italiana ha lo statuto speciale più antico?",
    options: ["Sicilia", "Sardegna", "Valle d'Aosta", "Trentino-Alto Adige"],
    correct: "Sicilia",
    category: "Misto",
    explanation: "La Sicilia ottenne lo statuto speciale nel 1946, prima delle altre regioni."
  }
];

// Export per uso in altri moduli
if (typeof window !== 'undefined') {
  window.QuizPoliticaData = quizPoliticaData;
}
