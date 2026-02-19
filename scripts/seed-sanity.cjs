/**
 * Seed Sanity CMS con tutti i contenuti hardcoded del sito.
 *
 * Uso:
 *   SANITY_TOKEN=sk-... node scripts/seed-sanity.js
 *
 * Il token deve avere permessi di scrittura sul dataset "production".
 * Puoi crearlo da: https://www.sanity.io/manage/project/yfcp9735/api#tokens
 *
 * ⚠️  NON carica immagini — i campi immagine restano vuoti.
 *     Le immagini andranno caricate manualmente dallo Studio.
 *
 * Usa patch per impostazioni (preserva immagini e campi esistenti).
 * Usa createOrReplace per servizi, recensioni, eventi (idempotente).
 */

const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'yfcp9735',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// ═══════════════════════════════════════════════════════════
// 1. IMPOSTAZIONI — patch (preserva logo, foto, immagini)
// ═══════════════════════════════════════════════════════════

const impostazioniPatch = {
  // Hero Homepage — aggiunge eyebrow e sottotitolo (titolo e immagine già esistono)
  'heroHomepage.eyebrow': 'Wedding Planner & Event Manager',
  'heroHomepage.sottotitolo': 'Esclusività e ricercatezza per il giorno più importante della tua vita',

  // Sezioni Homepage
  sezioneServizi: {
    eyebrow: 'Servizi',
    titolo: 'Come Posso Aiutarti',
  },
  sezionePortfolio: {
    eyebrow: 'Portfolio',
    titolo: 'Eventi Realizzati',
  },
  sezioneCta: {
    eyebrow: 'Iniziamo Insieme',
    titolo: 'Pronta a Realizzare<br /><em class="italic">il Tuo Sogno?</em>',
    descrizione: 'Raccontami la tua visione e insieme creeremo qualcosa di indimenticabile',
    testoBottone: 'Parliamone Insieme',
  },

  // Chi Sono (preview homepage) — aggiorna testo, preserva foto
  'chiSono.titolo': 'Ciao, sono Gaia',
  'chiSono.testoPrincipale': 'Da oltre 10 anni trasformo i sogni in eventi indimenticabili. Ho organizzato matrimoni in location esclusive in tutta Italia e all\'estero, curando ogni dettaglio con passione. Ho avuto anche l\'onore di collaborare con brand prestigiosi come Calzedonia, BNL e Zurich.',
  'chiSono.testoSecondario': 'Il mio obiettivo è rendere il vostro giorno speciale unico e senza stress, curando ogni dettaglio con passione e professionalità.',
  'chiSono.testoLink': 'Scopri la mia storia',

  // Statistiche — corregge nomi campi (schema usa nomi diversi dai dati esistenti)
  statistiche: {
    eventiRealizzati: 150,
    anniEsperienza: 10,
    locationPartner: 50,
    fornitoriSelezionati: 100,
  },

  // Pagina Chi Sono
  paginaChiSono: {
    heroTitolo: 'Chi Sono',
    heroSottotitolo: 'La passione per i matrimoni perfetti',
    biografiaTitolo: 'Ciao, sono Gaia',
    biografiaTesto1: 'Da oltre dieci anni dedico la mia vita alla realizzazione di matrimoni da sogno. La mia storia con gli eventi è iniziata quasi per caso, organizzando il matrimonio di una cara amica, e da quel momento ho capito che questa era la mia vocazione.',
    biografiaTesto2: 'Ogni coppia che incontro porta con sé una storia unica, sogni e desideri che meritano di essere ascoltati e realizzati. Il mio approccio è basato sull\'ascolto attento e sulla comprensione profonda di ciò che rende speciale ogni storia d\'amore.',
    biografiaTesto3: 'Roma, con la sua bellezza senza tempo, è la cornice perfetta per i matrimoni che organizzo. Ma la mia esperienza si estende ben oltre i confini della città eterna, abbracciando location mozzafiato in tutta Italia e all\'estero.',
    citazione: 'Il mio obiettivo è trasformare la vostra visione in realtà, curando ogni dettaglio con passione e dedizione per creare un giorno che superi ogni aspettativa.',
    valori: [
      { _key: 'eleganza', titolo: 'Eleganza', descrizione: 'Ogni dettaglio curato con raffinatezza e gusto impeccabile.', icona: 'crown' },
      { _key: 'passione', titolo: 'Passione', descrizione: 'Dedizione totale per rendere ogni evento un\'esperienza unica.', icona: 'heart' },
      { _key: 'eccellenza', titolo: 'Eccellenza', descrizione: 'Standard elevati e fornitori selezionati per risultati impeccabili.', icona: 'star' },
      { _key: 'creativita', titolo: 'Creatività', descrizione: 'Idee originali e concept unici che riflettono la vostra personalità.', icona: 'sparkles' },
    ],
    timeline: [
      { _key: 't2014', anno: '2014', titolo: 'L\'Inizio del Viaggio', descrizione: 'Il primo matrimonio organizzato per una cara amica. La scintilla che ha acceso una passione inarrestabile.' },
      { _key: 't2016', anno: '2016', titolo: 'Prima Collaborazione Corporate', descrizione: 'Il primo grande evento aziendale. La collaborazione con brand prestigiosi apre nuovi orizzonti professionali.' },
      { _key: 't2018', anno: '2018', titolo: 'Destination Weddings', descrizione: 'L\'avventura si allarga oltre i confini italiani. Matrimoni da sogno in Toscana, Puglia, Costiera Amalfitana e oltre.' },
      { _key: 't2022', anno: '2022', titolo: '150+ Eventi', descrizione: 'Un traguardo importante: oltre 150 eventi realizzati con successo, ognuno unico e indimenticabile.' },
    ],
  },

  // Pagina Servizi
  paginaServizi: {
    heroTitolo: 'I Miei Servizi',
    heroSottotitolo: 'Soluzioni su misura per ogni esigenza',
    introTesto: 'Scoprite i servizi pensati per accompagnarvi verso il giorno più bello della vostra vita. Che desideriate un supporto completo o solo una guida esperta per il grande giorno, troveremo insieme la soluzione perfetta per voi.',
    citazione: 'Il mio obiettivo è trasformare la vostra visione in realtà, curando ogni dettaglio con passione e dedizione per creare un giorno che superi ogni aspettativa.',
  },

  // Pagina Portfolio
  paginaPortfolio: {
    heroTitolo: 'Storie ed Emozioni',
    heroSottotitolo: 'Ogni evento racconta una storia unica. Scoprite alcuni dei momenti magici creati per i miei clienti.',
  },

  // Portfolio Categorie
  portfolioCategorie: {
    wedding: {
      titolo: 'Matrimoni',
      descrizione: 'Matrimoni indimenticabili, curati in ogni dettaglio. Dal primo incontro fino all\'ultimo ballo.',
    },
    corporate: {
      titolo: 'Eventi Aziendali',
      descrizione: 'Conferenze, gala dinner, team building e celebrazioni corporate che lasciano il segno.',
    },
    celebrations: {
      titolo: 'Feste Private',
      descrizione: 'Compleanni speciali, battesimi e anniversari. Ogni celebrazione merita di essere indimenticabile.',
    },
  },

  // Pagina Contatti
  paginaContatti: {
    heroTitolo: 'Iniziamo a Conoscerci',
    heroSottotitolo: 'Sono qui per ascoltare i vostri sogni e trasformarli in realtà',
  },
};

// ═══════════════════════════════════════════════════════════
// 2. SERVIZI — 4 documenti
// ═══════════════════════════════════════════════════════════

const servizi = [
  {
    _id: 'servizio-planning',
    _type: 'servizio',
    titolo: 'Wedding Planning Completo',
    slug: { _type: 'slug', current: 'planning' },
    sottotitolo: 'Full Service',
    descrizione: 'Un servizio a 360 gradi che vi accompagna dalla prima idea fino all\'ultimo ballo. Mi occupo di ogni aspetto dell\'organizzazione, permettendovi di vivere il periodo del fidanzamento senza stress.',
    caratteristiche: [
      'Consulenza iniziale e definizione del concept',
      'Ricerca e selezione delle location',
      'Gestione budget e contratti fornitori',
      'Coordinamento catering, fiori, musica',
      'Design personalizzato degli allestimenti',
      'Gestione inviti e RSVP',
      'Timeline dettagliata della giornata',
      'Coordinamento completo il giorno del matrimonio',
    ],
    icona: 'calendar',
    attivo: true,
    ordine: 1,
  },
  {
    _id: 'servizio-coordinamento',
    _type: 'servizio',
    titolo: 'Coordinamento del Giorno',
    slug: { _type: 'slug', current: 'coordinamento' },
    sottotitolo: 'Day-of',
    descrizione: 'Avete già organizzato tutto ma desiderate un professionista che gestisca la giornata? Questo servizio è pensato per garantire che tutto proceda perfettamente mentre voi vi godete ogni istante.',
    caratteristiche: [
      'Incontri pre-matrimonio per conoscere i dettagli',
      'Verifica e coordinamento con tutti i fornitori',
      'Gestione della timeline',
      'Supervisione allestimenti',
      'Punto di riferimento per ospiti e fornitori',
      'Gestione imprevisti',
      'Presenza dal setup alla chiusura',
    ],
    icona: 'users',
    attivo: true,
    ordine: 2,
  },
  {
    _id: 'servizio-design',
    _type: 'servizio',
    titolo: 'Design & Styling',
    slug: { _type: 'slug', current: 'design' },
    sottotitolo: 'Creative',
    descrizione: 'La bellezza sta nei dettagli. Creo concept unici e allestimenti che trasformano qualsiasi location in uno spazio magico, riflettendo la vostra personalità e il vostro stile.',
    caratteristiche: [
      'Creazione mood board e concept visivo',
      'Progettazione allestimenti personalizzati',
      'Selezione palette colori e materiali',
      'Coordinamento con fioristi e fornitori',
      'Styling tavoli e aree cerimonia',
      'Elementi decorativi personalizzati',
      'Supervisione montaggio e smontaggio',
    ],
    icona: 'palette',
    attivo: true,
    ordine: 3,
  },
  {
    _id: 'servizio-destination',
    _type: 'servizio',
    titolo: 'Destination Wedding',
    slug: { _type: 'slug', current: 'destination' },
    sottotitolo: 'Worldwide',
    descrizione: 'Sognate un matrimonio in una location lontana da casa? Organizzo destination wedding in tutta Italia e all\'estero, gestendo ogni aspetto logistico con la stessa cura di un evento locale.',
    caratteristiche: [
      'Ricerca location esclusive',
      'Gestione logistica viaggi e alloggi',
      'Selezione e coordinamento fornitori locali',
      'Supporto burocratico e permessi',
      'Organizzazione attività per gli ospiti',
      'Welcome dinner e farewell brunch',
      'Presenza in loco per tutto il soggiorno',
    ],
    icona: 'plane',
    attivo: true,
    ordine: 4,
  },
];

// ═══════════════════════════════════════════════════════════
// 3. RECENSIONI — 6 documenti
// ═══════════════════════════════════════════════════════════

const recensioni = [
  {
    _id: 'recensione-francesca-luca',
    _type: 'recensione',
    autore: 'Francesca & Luca',
    evento: 'Matrimonio — Villa Cetinale, Toscana',
    testo: 'Gaia ha trasformato il nostro sogno in realtà. Ogni dettaglio era perfetto, dalla scelta dei fiori alla musica. Non avremmo potuto desiderare niente di meglio per il nostro giorno speciale.',
    valutazione: 5,
    attivo: true,
    inEvidenza: true,
    data: '2024-06-15',
  },
  {
    _id: 'recensione-sara-marco',
    _type: 'recensione',
    autore: 'Sara & Marco',
    evento: 'Matrimonio — Palazzo Brancaccio, Roma',
    testo: 'Professionalità, creatività e un\'attenzione maniacale per i dettagli. Gaia ha reso il nostro matrimonio un evento da sogno. Tutti gli ospiti sono rimasti a bocca aperta.',
    valutazione: 5,
    attivo: true,
    inEvidenza: false,
    data: '2024-05-20',
  },
  {
    _id: 'recensione-elena-andrea',
    _type: 'recensione',
    autore: 'Elena & Andrea',
    evento: 'Matrimonio — Borgo Egnazia, Puglia',
    testo: 'Abbiamo scelto Gaia per il coordinamento del giorno e siamo stati felicissimi. Ha gestito tutto con calma e competenza, permettendoci di goderci ogni momento.',
    valutazione: 5,
    attivo: true,
    inEvidenza: false,
    data: '2024-04-10',
  },
  {
    _id: 'recensione-maria-rossi',
    _type: 'recensione',
    autore: 'Maria Rossi',
    evento: 'Corporate Event — Hotel de Russie, Roma',
    testo: 'L\'evento aziendale organizzato da Gaia ha superato ogni aspettativa. Elegante, impeccabile e perfettamente in linea con i valori del nostro brand.',
    valutazione: 5,
    attivo: true,
    inEvidenza: false,
    data: '2024-03-05',
  },
  {
    _id: 'recensione-sophie-james',
    _type: 'recensione',
    autore: 'Sophie & James',
    evento: 'Destination Wedding — Ravello, Costiera',
    testo: 'Il nostro destination wedding in Costiera Amalfitana è stato perfetto grazie a Gaia. Ha gestito ogni aspetto logistico e ci ha fatto sentire come se fossimo a casa.',
    valutazione: 5,
    attivo: true,
    inEvidenza: false,
    data: '2024-02-18',
  },
  {
    _id: 'recensione-giulia-andrea',
    _type: 'recensione',
    autore: 'Giulia & Andrea',
    evento: 'Matrimonio — Villa Aurelia, Roma',
    testo: 'Gaia è stata la nostra guida in un percorso meraviglioso. Ha capito subito il nostro stile e ha creato un\'atmosfera magica. La consigliamo a tutti!',
    valutazione: 5,
    attivo: true,
    inEvidenza: false,
    data: '2024-01-22',
  },
];

// ═══════════════════════════════════════════════════════════
// 4. EVENTI — 6 documenti
// ═══════════════════════════════════════════════════════════

const eventi = [
  {
    _id: 'evento-sara-marco',
    _type: 'evento',
    macroCategoria: 'wedding',
    titolo: 'Sara & Marco',
    slug: { _type: 'slug', current: 'sara-marco' },
    location: 'Villa Cetinale, Toscana',
    categoria: 'Destination Wedding',
    descrizioneBreve: 'Un matrimonio da sogno nella campagna toscana, tra cipressi e tramonti dorati.',
    inEvidenza: true,
    ordine: 1,
    data: '2024-06-15',
  },
  {
    _id: 'evento-giulia-alessandro',
    _type: 'evento',
    macroCategoria: 'wedding',
    titolo: 'Giulia & Alessandro',
    slug: { _type: 'slug', current: 'giulia-alessandro' },
    location: 'Borgo Egnazia, Puglia',
    categoria: 'Matrimonio',
    descrizioneBreve: 'Eleganza pugliese tra ulivi secolari e il bianco della pietra locale.',
    inEvidenza: false,
    ordine: 2,
    data: '2024-05-20',
  },
  {
    _id: 'evento-elena-francesco',
    _type: 'evento',
    macroCategoria: 'wedding',
    titolo: 'Elena & Francesco',
    slug: { _type: 'slug', current: 'elena-francesco' },
    location: 'Ravello, Costiera Amalfitana',
    categoria: 'Matrimonio',
    descrizioneBreve: 'Una cerimonia con vista mozzafiato sul mare della Costiera Amalfitana.',
    inEvidenza: false,
    ordine: 3,
    data: '2024-04-10',
  },
  {
    _id: 'evento-maria-angelo',
    _type: 'evento',
    macroCategoria: 'wedding',
    titolo: 'Maria & Angelo',
    slug: { _type: 'slug', current: 'maria-angelo' },
    location: "Val d'Orcia, Toscana",
    categoria: 'Matrimonio',
    descrizioneBreve: 'Un matrimonio intimo immerso nelle colline patrimonio UNESCO.',
    inEvidenza: false,
    ordine: 4,
    data: '2024-03-05',
  },
  {
    _id: 'evento-corporate-gala',
    _type: 'evento',
    macroCategoria: 'corporate',
    titolo: 'Corporate Gala',
    slug: { _type: 'slug', current: 'corporate-gala' },
    location: 'Palazzo Brancaccio, Roma',
    categoria: 'Gala Dinner',
    descrizioneBreve: 'Una serata di gala aziendale nel cuore di Roma, tra affreschi e chandelier.',
    inEvidenza: true,
    ordine: 5,
    data: '2024-02-18',
  },
  {
    _id: 'evento-festa-privata',
    _type: 'evento',
    macroCategoria: 'celebrations',
    titolo: 'Festa Privata',
    slug: { _type: 'slug', current: 'festa-privata' },
    location: 'Villa Borghese, Roma',
    categoria: 'Anniversario',
    descrizioneBreve: 'Una celebrazione privata elegante nel parco più bello di Roma.',
    inEvidenza: true,
    ordine: 6,
    data: '2024-01-22',
  },
];

// ═══════════════════════════════════════════════════════════
// ESECUZIONE
// ═══════════════════════════════════════════════════════════

async function seed() {
  if (!process.env.SANITY_TOKEN) {
    console.error('❌ Manca SANITY_TOKEN. Usa: SANITY_TOKEN=sk-... node scripts/seed-sanity.js');
    process.exit(1);
  }

  console.log('🌱 Inizio seed Sanity CMS...\n');

  // 1. Patch impostazioni (preserva immagini esistenti)
  console.log('📝 Aggiornamento impostazioni...');
  await client
    .patch('impostazioni')
    .set(impostazioniPatch)
    .commit();
  console.log('   ✅ Impostazioni aggiornate\n');

  // 2-4. Crea servizi, recensioni, eventi in una transazione
  console.log('📝 Creazione servizi, recensioni, eventi...');
  let transaction = client.transaction();

  for (const s of servizi) {
    transaction = transaction.createOrReplace(s);
  }
  for (const r of recensioni) {
    transaction = transaction.createOrReplace(r);
  }
  for (const e of eventi) {
    transaction = transaction.createOrReplace(e);
  }

  await transaction.commit();

  console.log(`   ✅ ${servizi.length} servizi creati`);
  console.log(`   ✅ ${recensioni.length} recensioni create`);
  console.log(`   ✅ ${eventi.length} eventi creati`);

  console.log('\n🎉 Seed completato! Tutti i contenuti sono ora in Sanity.');
  console.log('   Apri lo Studio per verificare: npx sanity dev (nella cartella studio/)');
}

seed().catch((err) => {
  console.error('❌ Errore:', err.message);
  process.exit(1);
});
