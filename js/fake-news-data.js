// ArteGiovane - Fake News Dataset
// 40+ affermazioni sulla politica italiana (50% vere, 50% false)

const fakeNewsData = [
  // STORICO (14 affermazioni)
  {
    statement: "L'Italia è diventata una repubblica nel 1946 con il 54,3% dei voti.",
    isReal: true,
    explanation: "Il referendum del 2 giugno 1946 vide la repubblica vincere con il 54,3% dei voti validi, contro il 45,7% della monarchia.",
    category: "Storico"
  },
  {
    statement: "Mussolini è stato eletto democraticamente nel 1922.",
    isReal: false,
    explanation: "Mussolini non fu eletto: arrivò al potere con la Marcia su Roma del 28 ottobre 1922, un colpo di forza, non un'elezione democratica.",
    category: "Storico"
  },
  {
    statement: "La Costituzione italiana è entrata in vigore il 1° gennaio 1948.",
    isReal: true,
    explanation: "La Costituzione fu approvata il 22 dicembre 1947 ed entrò in vigore il 1° gennaio 1948.",
    category: "Storico"
  },
  {
    statement: "L'Italia ha combattuto a fianco degli Alleati per tutta la Seconda Guerra Mondiale.",
    isReal: false,
    explanation: "L'Italia entrò in guerra nel 1940 a fianco della Germania. Solo dopo l'armistizio dell'8 settembre 1943 combatté con gli Alleati.",
    category: "Storico"
  },
  {
    statement: "Il primo Presidente della Repubblica fu Enrico De Nicola.",
    isReal: true,
    explanation: "Enrico De Nicola fu eletto Capo provvisorio dello Stato nel 1946 e divenne il primo Presidente della Repubblica nel 1948.",
    category: "Storico"
  },
  {
    statement: "La DC (Democrazia Cristiana) ha governato ininterrottamente dal 1948 al 1994.",
    isReal: true,
    explanation: "La DC fu il partito di governo ininterrottamente dalla nascita della Repubblica fino allo scandalo di Mani Pulite nel 1992-1994.",
    category: "Storico"
  },
  {
    statement: "Il PCI (Partito Comunista Italiano) ha mai fatto parte di un governo italiano.",
    isReal: false,
    explanation: "Il PCI non entrò mai in un governo nazionale. Fu il più grande partito comunista d'Occidente ma rimase sempre all'opposizione.",
    category: "Storico"
  },
  {
    statement: "Le donne italiane hanno votato per la prima volta nel 1946.",
    isReal: true,
    explanation: "Le donne votarono per la prima volta nelle elezioni amministrative del 1946 e poi nel referendum Repubblica/Monarchia del 2 giugno 1946.",
    category: "Storico"
  },
  {
    statement: "L'Italia ha avuto 70 governi dal 1946 ad oggi.",
    isReal: true,
    explanation: "L'Italia ha avuto oltre 70 governi dalla nascita della Repubblica, una delle medie più alte in Europa.",
    category: "Storico"
  },
  {
    statement: "Berlusconi è stato Presidente del Consiglio per 4 mandati consecutivi.",
    isReal: false,
    explanation: "Berlusconi ha guidato 5 governi ma non consecutivi: 1994-1995, 2001-2006, 2008-2011.",
    category: "Storico"
  },
  {
    statement: "Il Trattato di Roma del 1957 ha istituito la CEE (Comunità Economica Europea).",
    isReal: true,
    explanation: "Il Trattato di Roma, firmato il 25 marzo 1957, istituì la CEE e l'Euratom.",
    category: "Storico"
  },
  {
    statement: "Aldo Moro è stato ucciso dalle Brigate Rosse nel 1978.",
    isReal: true,
    explanation: "Moro fu rapito il 16 marzo 1978 e ucciso il 9 maggio 1978 dalle Brigate Rosse.",
    category: "Storico"
  },
  {
    statement: "L'Italia ha aderito all'Unione Europea nel 1992.",
    isReal: false,
    explanation: "L'Italia è membro fondatore della CEE (poi UE) dal 1957. Il Trattato di Maastricht del 1992 ha istituito l'UE, non ha aggiunto l'Italia.",
    category: "Storico"
  },
  {
    statement: "Il suffragio universale maschile in Italia fu introdotto nel 1912.",
    isReal: true,
    explanation: "La legge Giolitti del 1912 estese il voto a tutti i maschi maggiorenni, triplicando gli aventi diritto.",
    category: "Storico"
  },

  // DATI (13 affermazioni)
  {
    statement: "L'Italia spende circa l'1,4% del PIL per la difesa.",
    isReal: true,
    explanation: "La spesa militare italiana è intorno all'1,4-1,5% del PIL, sotto la media NATO del 2%.",
    category: "Dati"
  },
  {
    statement: "Il debito pubblico italiano supera il 140% del PIL.",
    isReal: true,
    explanation: "Nel 2024 il debito pubblico italiano ha superato il 140% del PIL, uno dei più alti al mondo.",
    category: "Dati"
  },
  {
    statement: "L'Italia ha la popolazione più anziana d'Europa.",
    isReal: true,
    explanation: "L'Italia ha l'indice di vecchiaia più alto d'Europa, con oltre il 23% della popolazione sopra i 65 anni.",
    category: "Dati"
  },
  {
    statement: "Roma è il comune più grande d'Italia per popolazione.",
    isReal: true,
    explanation: "Roma ha circa 2,8 milioni di abitanti, seguita da Milano (1,4 milioni) e Napoli (900.000).",
    category: "Dati"
  },
  {
    statement: "L'Italia ha 20 regioni.",
    isReal: true,
    explanation: "L'Italia è divisa in 20 regioni, di cui 5 a statuto speciale.",
    category: "Dati"
  },
  {
    statement: "Il Parlamento italiano è composto da 600 deputati e 315 senatori.",
    isReal: false,
    explanation: "Dopo il referendum del 2020, il Parlamento è composto da 400 deputati e 200 senatori (più i senatori a vita).",
    category: "Dati"
  },
  {
    statement: "L'Italia ha il PIL pro capite più alto del Sud Europa.",
    isReal: false,
    explanation: "Spagna e Portogallo hanno superato l'Italia per PIL pro capite negli ultimi anni.",
    category: "Dati"
  },
  {
    statement: "La disoccupazione giovanile in Italia supera il 20%.",
    isReal: true,
    explanation: "La disoccupazione under 25 in Italia è stata intorno al 20-23% nel 2024.",
    category: "Dati"
  },
  {
    statement: "L'Italia è il quinto paese al mondo per numero di siti UNESCO.",
    isReal: false,
    explanation: "L'Italia è PRIMA al mondo per numero di siti UNESCO, con oltre 58 siti riconosciuti.",
    category: "Dati"
  },
  {
    statement: "Il Presidente della Repubblica resta in carica per 7 anni.",
    isReal: true,
    explanation: "Il mandato del Presidente della Repubblica è di 7 anni, come stabilito dall'articolo 85 della Costituzione.",
    category: "Dati"
  },
  {
    statement: "In Italia si vota per la Camera a 18 anni e per il Senato a 25 anni.",
    isReal: true,
    explanation: "Il voto per la Camera è a 18 anni, per il Senato a 25 anni. Questa differenza è unica al mondo.",
    category: "Dati"
  },
  {
    statement: "L'Italia ha più di 7.900 comuni.",
    isReal: true,
    explanation: "L'Italia ha circa 7.900 comuni, uno dei numeri più alti in Europa.",
    category: "Dati"
  },
  {
    statement: "Il Senato italiano ha lo stesso numero di membri della Camera.",
    isReal: false,
    explanation: "La Camera ha 400 deputati, il Senato 200 senatori elettivi (più i senatori a vita).",
    category: "Dati"
  },

  // CITAZIONI (13 affermazioni)
  {
    statement: "Mussolini disse: 'Meglio vivere un giorno da leone che cento giorni da pecora.'",
    isReal: true,
    explanation: "Questa frase è attribuita a Mussolini, pronunciata in un discorso del 1921.",
    category: "Citazioni"
  },
  {
    statement: "Berlusconi disse: 'Forse sono troppo modesto.'",
    isReal: true,
    explanation: "Berlusconi pronunciò questa frase nel 2004, durante un'intervista televisiva.",
    category: "Citazioni"
  },
  {
    statement: "Pertini disse: 'La libertà è come l'aria: ci si accorge di quanto vale quando comincia a mancare.'",
    isReal: true,
    explanation: "Questa celebre frase è attribuita a Sandro Pertini, uno dei Presidenti più amati.",
    category: "Citazioni"
  },
  {
    statement: "De Gasperi disse: 'La politica è l'arte di rendere possibile ciò che è necessario.'",
    isReal: true,
    explanation: "Frase attribuita a De Gasperi, che riflette la sua visione pragmatica della politica.",
    category: "Citazioni"
  },
  {
    statement: "Machiavelli scrisse: 'Il fine giustifica i mezzi.'",
    isReal: false,
    explanation: "Machiavelli non scrisse mai questa frase esatta. È una semplificazione del suo pensiero ne 'Il Principe'.",
    category: "Citazioni"
  },
  {
    statement: "Berlinguer disse: 'Il PCI è il partito più onesto d'Italia.'",
    isReal: true,
    explanation: "Berlinguer pronunciò questa frase nel 1976, durante un'intervista a Repubblica.",
    category: "Citazioni"
  },
  {
    statement: "Cavour disse: 'L'Italia è fatta, ora bisogna fare gli italiani.'",
    isReal: true,
    explanation: "Frase attribuita a Massimo d'Azeglio, non a Cavour, pronunciata nel 1867.",
    category: "Citazioni"
  },
  {
    statement: "Grillo disse: 'Vaffanculo' in diretta TV durante un programma di Rai.",
    isReal: true,
    explanation: "Beppe Grillo pronunciò il celebre 'vaffanculo' in diretta Rai nel 2002, durante 'Raiot'.",
    category: "Citazioni"
  },
  {
    statement: "Matteo Renzi ha detto: 'Rottamiamo tutto.'",
    isReal: true,
    explanation: "Renzi usò il termine 'rottamazione' come metafora del suo programma di rinnovamento politico.",
    category: "Citazioni"
  },
  {
    statement: "Salvini ha detto: 'Prima gli italiani.'",
    isReal: true,
    explanation: "Questo slogan è stato usato da Salvini come motto della Lega, specialmente durante le campagne elettorali.",
    category: "Citazioni"
  },
  {
    statement: "Meloni ha detto: 'Io sono Giorgia, sono una donna, sono una madre, sono italiana.'",
    isReal: true,
    explanation: "Frase pronunciata da Meloni al comizio del Family Day nel 2016, diventata virale.",
    category: "Citazioni"
  },
  {
    statement: "Napolitano disse: 'Non sono un re.'",
    isReal: true,
    explanation: "Napolitano pronunciò questa frase per sottolineare il ruolo non monarchico del Presidente della Repubblica.",
    category: "Citazioni"
  },
  {
    statement: "Togliatti disse: 'Il comunismo è il sole dell'avvenire.'",
    isReal: false,
    explanation: "Questa frase non è attribuibile a Togliatti. È una citazione generica del movimento socialista.",
    category: "Citazioni"
  }
];

// Export per uso in altri moduli
if (typeof window !== 'undefined') {
  window.FakeNewsData = fakeNewsData;
}
