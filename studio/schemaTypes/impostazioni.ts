import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'impostazioni',
  title: 'Impostazioni Sito',
  type: 'document',
  groups: [
    {name: 'generale', title: 'Generale'},
    {name: 'contatti', title: 'Contatti'},
    {name: 'homepage', title: 'Homepage'},
    {name: 'chiSono', title: 'Chi Sono'},
    {name: 'servizi', title: 'Servizi'},
    {name: 'portfolio', title: 'Portfolio'},
    {name: 'destinationWedding', title: 'Destination Wedding (EN)'},
  ],
  fields: [
    // ── Generale ──
    defineField({
      name: 'nomeSito',
      title: 'Nome del Sito',
      type: 'string',
      group: 'generale',
      initialValue: 'Gaia Events',
      description: 'Nome del brand/sito. Appare nel tag <title> del browser, nei meta tag SEO e come fallback nel footer',
    }),
    defineField({
      name: 'descrizione',
      title: 'Descrizione del Sito',
      type: 'text',
      rows: 3,
      group: 'generale',
      description: 'Descrizione generale del sito per SEO. Usata come meta description di default nelle pagine che non hanno una descrizione propria',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'generale',
      options: {hotspot: true},
      description: 'Logo del sito. Usato nell\'header/navbar e come immagine di riferimento per le condivisioni social',
    }),

    // ── Contatti ──
    defineField({
      name: 'email',
      title: 'Indirizzo Email',
      type: 'string',
      group: 'contatti',
      description: 'Email di contatto principale. Appare nella pagina Contatti, nel footer e nei link "mailto:" dei bottoni CTA',
    }),
    defineField({
      name: 'telefono',
      title: 'Numero di Telefono',
      type: 'string',
      group: 'contatti',
      description: 'Numero di telefono/WhatsApp. Appare nella pagina Contatti, nel footer e nel bottone WhatsApp flottante',
    }),
    defineField({
      name: 'indirizzo',
      title: 'Indirizzo Fisico',
      type: 'string',
      group: 'contatti',
      description: 'Indirizzo dello studio/ufficio. Appare nella pagina Contatti e nel footer del sito',
    }),
    defineField({
      name: 'social',
      title: 'Link Social Media',
      type: 'object',
      group: 'contatti',
      description: 'URL dei profili social. Le icone con i link appaiono nel footer del sito',
      fields: [
        defineField({name: 'instagram', title: 'URL Profilo Instagram', type: 'url', description: 'Link al profilo Instagram (es. https://instagram.com/gaiaevents). Appare come icona nel footer'}),
        defineField({name: 'facebook', title: 'URL Pagina Facebook', type: 'url', description: 'Link alla pagina Facebook. Appare come icona nel footer'}),
        defineField({name: 'pinterest', title: 'URL Profilo Pinterest', type: 'url', description: 'Link al profilo Pinterest. Appare come icona nel footer'}),
      ],
    }),

    // ── Pagina Contatti ──
    defineField({
      name: 'paginaContatti',
      title: 'Pagina Contatti',
      type: 'object',
      group: 'contatti',
      description: 'Contenuti della sezione hero della pagina Contatti (/contatti)',
      fields: [
        defineField({name: 'heroImmagine', title: 'Immagine Hero', type: 'image', options: {hotspot: true}, description: 'Foto di sfondo della sezione hero nella pagina Contatti'}),
        defineField({name: 'heroTitolo', title: 'Titolo Hero', type: 'string', description: 'Titolo principale della pagina Contatti (es. "Raccontami del tuo evento")'}),
        defineField({name: 'heroSottotitolo', title: 'Sottotitolo Hero', type: 'string', description: 'Testo sotto il titolo nella sezione hero della pagina Contatti'}),
      ],
    }),

    // ── Homepage ──
    defineField({
      name: 'heroHomepage',
      title: 'Hero Homepage',
      type: 'object',
      group: 'homepage',
      description: 'Sezione hero principale della Homepage — la prima cosa che i visitatori vedono',
      fields: [
        defineField({name: 'eyebrow', title: 'Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo (es. "Wedding Planner & Event Manager"). Appare in maiuscolo dorato sopra il titolo hero'}),
        defineField({name: 'titolo', title: 'Titolo Hero', type: 'string', description: 'Titolo grande della Homepage (es. "Creiamo Insieme il Tuo Evento da Sogno"). Il testo più grande e visibile della pagina'}),
        defineField({name: 'sottotitolo', title: 'Sottotitolo Hero', type: 'text', rows: 2, description: 'Testo sotto il titolo hero. Breve descrizione di 1-2 righe che introduce il brand'}),
        defineField({name: 'immagine', title: 'Immagine di Sfondo Hero', type: 'image', options: {hotspot: true}, description: 'Foto a tutto schermo usata come sfondo della sezione hero della Homepage'}),
      ],
    }),
    defineField({
      name: 'sezioneServizi',
      title: 'Sezione Servizi Homepage',
      type: 'object',
      group: 'homepage',
      description: 'Intestazione della sezione "I Nostri Servizi" nella Homepage',
      fields: [
        defineField({name: 'eyebrow', title: 'Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo della sezione Servizi (es. "I Nostri Servizi")'}),
        defineField({name: 'titolo', title: 'Titolo Sezione', type: 'string', description: 'Titolo della sezione Servizi nella Homepage (es. "Ogni evento è unico")'}),
      ],
    }),
    defineField({
      name: 'sezionePortfolio',
      title: 'Sezione Portfolio Homepage',
      type: 'object',
      group: 'homepage',
      description: 'Intestazione della sezione "Portfolio" nella Homepage, che mostra gli eventi in evidenza',
      fields: [
        defineField({name: 'eyebrow', title: 'Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo della sezione Portfolio (es. "Portfolio")'}),
        defineField({name: 'titolo', title: 'Titolo Sezione', type: 'string', description: 'Titolo della sezione Portfolio nella Homepage (es. "I Nostri Eventi")'}),
      ],
    }),
    defineField({
      name: 'sezioneCta',
      title: 'Sezione CTA Homepage',
      type: 'object',
      group: 'homepage',
      description: 'Sezione Call to Action nella Homepage — il banner che invita a contattare o richiedere un preventivo',
      fields: [
        defineField({name: 'eyebrow', title: 'Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo CTA (es. "Inizia Ora")'}),
        defineField({name: 'titolo', title: 'Titolo CTA', type: 'string', description: 'Titolo della sezione CTA (es. "Pronta a Realizzare il Tuo Evento?")'}),
        defineField({name: 'descrizione', title: 'Descrizione CTA', type: 'text', rows: 2, description: 'Testo descrittivo sotto il titolo CTA. Breve invito all\'azione'}),
        defineField({name: 'testoBottone', title: 'Testo del Bottone', type: 'string', description: 'Testo del bottone CTA (es. "Richiedi un Preventivo")'}),
        defineField({name: 'linkBottone', title: 'Link del Bottone', type: 'string', description: 'URL di destinazione del bottone CTA (es. /contatti o /preventivo)'}),
      ],
    }),
    defineField({
      name: 'sezioneChiSono',
      title: 'Sezione Chi Sono Homepage',
      type: 'object',
      group: 'homepage',
      description: 'Intestazione della sezione "Chi Sono" nella Homepage — l\'anteprima che rimanda alla pagina completa',
      fields: [
        defineField({name: 'eyebrow', title: 'Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo della sezione Chi Sono (es. "Chi Sono")'}),
        defineField({name: 'titolo', title: 'Titolo Sezione', type: 'string', description: 'Titolo della sezione Chi Sono nella Homepage (es. "La Tua Wedding Planner")'}),
      ],
    }),

    // ── Chi Sono (anteprima homepage) ──
    defineField({
      name: 'chiSono',
      title: 'Contenuto Chi Sono (Anteprima Homepage)',
      type: 'object',
      group: 'chiSono',
      description: 'Contenuti del box "Chi Sono" mostrato nella Homepage — foto, testo breve e link alla pagina completa',
      fields: [
        defineField({name: 'titolo', title: 'Titolo', type: 'string', description: 'Titolo del box Chi Sono nella Homepage (es. "Gaia Trombetta")'}),
        defineField({name: 'testoPrincipale', title: 'Testo Principale', type: 'text', rows: 4, description: 'Primo paragrafo della presentazione nella Homepage. Breve biografia introduttiva'}),
        defineField({name: 'testoSecondario', title: 'Testo Secondario', type: 'text', rows: 4, description: 'Secondo paragrafo della presentazione nella Homepage. Continua la biografia'}),
        defineField({name: 'foto', title: 'Foto Profilo', type: 'image', options: {hotspot: true}, description: 'Foto ritratto mostrata nel box Chi Sono nella Homepage'}),
        defineField({name: 'testoLink', title: 'Testo del Link', type: 'string', description: 'Testo del link che rimanda alla pagina Chi Sono completa (es. "Scopri di più")'}),
      ],
    }),

    // ── Pagina Chi Sono ──
    defineField({
      name: 'paginaChiSono',
      title: 'Pagina Chi Sono',
      type: 'object',
      group: 'chiSono',
      description: 'Tutti i contenuti della pagina Chi Sono (/chi-sono) — hero, biografia, citazione, valori e timeline',
      fields: [
        defineField({name: 'heroImmagine', title: 'Immagine Hero', type: 'image', options: {hotspot: true}, description: 'Foto di sfondo della sezione hero nella pagina Chi Sono'}),
        defineField({name: 'heroTitolo', title: 'Titolo Hero', type: 'string', description: 'Titolo principale della pagina Chi Sono (es. "Chi Sono")'}),
        defineField({name: 'heroSottotitolo', title: 'Sottotitolo Hero', type: 'string', description: 'Testo sotto il titolo nella sezione hero (es. "Wedding Planner & Event Manager")'}),
        defineField({name: 'fotoRitratto', title: 'Foto Ritratto', type: 'image', options: {hotspot: true}, description: 'Foto ritratto nella sezione biografia. Appare a fianco del testo biografico'}),
        defineField({name: 'biografiaTitolo', title: 'Titolo Biografia', type: 'string', description: 'Titolo della sezione biografia (es. "La Mia Storia")'}),
        defineField({name: 'biografiaTesto1', title: 'Biografia — Paragrafo 1', type: 'text', rows: 4, description: 'Primo paragrafo della biografia completa nella pagina Chi Sono'}),
        defineField({name: 'biografiaTesto2', title: 'Biografia — Paragrafo 2', type: 'text', rows: 4, description: 'Secondo paragrafo della biografia completa'}),
        defineField({name: 'biografiaTesto3', title: 'Biografia — Paragrafo 3', type: 'text', rows: 4, description: 'Terzo paragrafo della biografia completa'}),
        defineField({name: 'citazione', title: 'Citazione', type: 'text', rows: 3, description: 'Frase/citazione in evidenza. Appare tra la biografia e i valori, con sfondo decorativo'}),
        defineField({
          name: 'valori',
          title: 'I Miei Valori',
          type: 'array',
          description: 'Lista dei valori professionali. Ogni valore appare come card con icona, titolo e descrizione nella pagina Chi Sono',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'titolo', title: 'Nome Valore', type: 'string', description: 'Nome del valore (es. "Eleganza", "Attenzione ai Dettagli")'}),
              defineField({name: 'descrizione', title: 'Descrizione Valore', type: 'text', rows: 2, description: 'Breve spiegazione del valore (1-2 righe)'}),
              defineField({name: 'icona', title: 'Nome Icona', type: 'string', description: 'Nome dell\'icona decorativa (es. crown, heart, star, sparkle)'}),
            ],
          }],
        }),
        defineField({
          name: 'timeline',
          title: 'Timeline / Percorso',
          type: 'array',
          description: 'Tappe del percorso professionale. Appaiono in ordine cronologico nella sezione timeline della pagina Chi Sono',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'anno', title: 'Anno', type: 'string', description: 'Anno della tappa (es. "2018", "2020-2022")'}),
              defineField({name: 'titolo', title: 'Titolo Tappa', type: 'string', description: 'Titolo breve della tappa (es. "Primo Destination Wedding")'}),
              defineField({name: 'descrizione', title: 'Descrizione Tappa', type: 'text', rows: 2, description: 'Descrizione di cosa è successo in quella tappa'}),
            ],
          }],
        }),
      ],
    }),

    // ── Pagina Servizi ──
    defineField({
      name: 'paginaServizi',
      title: 'Pagina Servizi',
      type: 'object',
      group: 'servizi',
      description: 'Contenuti della pagina Servizi (/servizi) — hero, testo introduttivo e citazione. Le card dei servizi vengono dallo schema "Servizio"',
      fields: [
        defineField({name: 'heroImmagine', title: 'Immagine Hero', type: 'image', options: {hotspot: true}, description: 'Foto di sfondo della sezione hero nella pagina Servizi'}),
        defineField({name: 'heroTitolo', title: 'Titolo Hero', type: 'string', description: 'Titolo principale della pagina Servizi (es. "I Miei Servizi")'}),
        defineField({name: 'heroSottotitolo', title: 'Sottotitolo Hero', type: 'string', description: 'Testo sotto il titolo nella sezione hero della pagina Servizi'}),
        defineField({name: 'introTesto', title: 'Testo Introduttivo', type: 'text', rows: 4, description: 'Paragrafo introduttivo sotto l\'hero, prima della lista dei servizi'}),
        defineField({name: 'citazione', title: 'Citazione', type: 'text', rows: 3, description: 'Frase in evidenza nella pagina Servizi. Appare con sfondo decorativo tra le sezioni'}),
      ],
    }),

    // ── Pagina Portfolio ──
    defineField({
      name: 'paginaPortfolio',
      title: 'Pagina Portfolio',
      type: 'object',
      group: 'portfolio',
      description: 'Contenuti della pagina Portfolio (/portfolio) — hero e testo introduttivo. Gli eventi vengono dallo schema "Evento"',
      fields: [
        defineField({name: 'heroImmagine', title: 'Immagine Hero', type: 'image', options: {hotspot: true}, description: 'Foto di sfondo della sezione hero nella pagina Portfolio'}),
        defineField({name: 'heroTitolo', title: 'Titolo Hero', type: 'string', description: 'Titolo principale della pagina Portfolio (es. "Il Mio Portfolio")'}),
        defineField({name: 'heroSottotitolo', title: 'Sottotitolo Hero', type: 'string', description: 'Testo sotto il titolo nella sezione hero della pagina Portfolio'}),
        defineField({name: 'introTesto', title: 'Testo Introduttivo', type: 'text', rows: 4, description: 'Paragrafo introduttivo sotto l\'hero, prima della griglia degli eventi'}),
      ],
    }),

    // ── Portfolio Categorie ──
    defineField({
      name: 'portfolioCategorie',
      title: 'Categorie Portfolio',
      type: 'object',
      group: 'portfolio',
      description: 'Configurazione delle tre macro-categorie del Portfolio (Wedding, Corporate, Celebrations) — titolo, descrizione e immagine di copertina per ciascuna',
      fields: [
        defineField({
          name: 'wedding',
          title: 'Categoria Wedding',
          type: 'object',
          description: 'Configurazione della sezione Wedding nel Portfolio',
          fields: [
            defineField({name: 'titolo', title: 'Titolo Categoria', type: 'string', description: 'Titolo della categoria Wedding (es. "Wedding")'}),
            defineField({name: 'descrizione', title: 'Descrizione Categoria', type: 'text', rows: 2, description: 'Breve descrizione della categoria Wedding. Appare sotto il titolo nella pagina Portfolio'}),
            defineField({name: 'immagineCopertina', title: 'Immagine di Copertina', type: 'image', options: {hotspot: true}, description: 'Foto rappresentativa della categoria Wedding'}),
          ],
        }),
        defineField({
          name: 'corporate',
          title: 'Categoria Corporate',
          type: 'object',
          description: 'Configurazione della sezione Corporate nel Portfolio',
          fields: [
            defineField({name: 'titolo', title: 'Titolo Categoria', type: 'string', description: 'Titolo della categoria Corporate (es. "Corporate Events")'}),
            defineField({name: 'descrizione', title: 'Descrizione Categoria', type: 'text', rows: 2, description: 'Breve descrizione della categoria Corporate. Appare sotto il titolo nella pagina Portfolio'}),
            defineField({name: 'immagineCopertina', title: 'Immagine di Copertina', type: 'image', options: {hotspot: true}, description: 'Foto rappresentativa della categoria Corporate'}),
          ],
        }),
        defineField({
          name: 'celebrations',
          title: 'Categoria Celebrations',
          type: 'object',
          description: 'Configurazione della sezione Celebrations nel Portfolio',
          fields: [
            defineField({name: 'titolo', title: 'Titolo Categoria', type: 'string', description: 'Titolo della categoria Celebrations (es. "Celebrations")'}),
            defineField({name: 'descrizione', title: 'Descrizione Categoria', type: 'text', rows: 2, description: 'Breve descrizione della categoria Celebrations. Appare sotto il titolo nella pagina Portfolio'}),
            defineField({name: 'immagineCopertina', title: 'Immagine di Copertina', type: 'image', options: {hotspot: true}, description: 'Foto rappresentativa della categoria Celebrations'}),
          ],
        }),
      ],
    }),

    // ── Destination Wedding (EN) ──
    defineField({
      name: 'paginaDestinationWedding',
      title: 'Pagina Destination Wedding (EN)',
      type: 'object',
      group: 'destinationWedding',
      description: 'Tutti i contenuti della pagina Destination Wedding in inglese (/en/destination-wedding). I testi sono in inglese perché la pagina è rivolta a clienti internazionali',
      fields: [
        // Hero
        defineField({name: 'heroImmagine', title: 'Hero — Immagine di Sfondo', type: 'image', options: {hotspot: true}, description: 'Foto a tutto schermo usata come sfondo della sezione hero'}),
        defineField({name: 'heroEyebrow', title: 'Hero — Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo hero (es. "Destination Wedding Planner")'}),
        defineField({name: 'heroTitolo', title: 'Hero — Titolo', type: 'string', description: 'Titolo principale della pagina (es. "Your Dream Italian Wedding")'}),
        defineField({name: 'heroSottotitolo', title: 'Hero — Sottotitolo', type: 'text', rows: 2, description: 'Testo sotto il titolo hero. Breve descrizione del servizio in inglese'}),
        defineField({name: 'heroCtaTesto', title: 'Hero — Testo Bottone CTA', type: 'string', description: 'Testo del bottone nella sezione hero (es. "Start Planning Your Wedding")'}),

        // About / Intro
        defineField({name: 'aboutFoto', title: 'About — Foto', type: 'image', options: {hotspot: true}, description: 'Foto ritratto nella sezione di presentazione personale'}),
        defineField({name: 'aboutEyebrow', title: 'About — Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo della sezione About (es. "About Me")'}),
        defineField({name: 'aboutTitolo', title: 'About — Titolo', type: 'string', description: 'Titolo della sezione About (es. "Your Italian Wedding Planner")'}),
        defineField({name: 'aboutTesto1', title: 'About — Paragrafo 1', type: 'text', rows: 4, description: 'Primo paragrafo della sezione About — presentazione personale in inglese'}),
        defineField({name: 'aboutTesto2', title: 'About — Paragrafo 2', type: 'text', rows: 4, description: 'Secondo paragrafo della sezione About'}),
        defineField({name: 'aboutTesto3', title: 'About — Paragrafo 3', type: 'text', rows: 4, description: 'Terzo paragrafo della sezione About'}),
        defineField({name: 'aboutCtaTesto', title: 'About — Testo Link CTA', type: 'string', description: 'Testo del link CTA nella sezione About (es. "Get in Touch")'}),

        // Services
        defineField({name: 'serviziEyebrow', title: 'Servizi — Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo della sezione Services (es. "Our Services")'}),
        defineField({name: 'serviziTitolo', title: 'Servizi — Titolo', type: 'string', description: 'Titolo della sezione Services (es. "Comprehensive Wedding Planning")'}),
        defineField({
          name: 'servizi',
          title: 'Servizi — Lista',
          type: 'array',
          description: 'Lista dei servizi offerti per destination wedding. Ogni servizio appare come card con icona, titolo e descrizione',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'icona', title: 'Nome Icona', type: 'string', description: 'Nome dell\'icona (es. map-pin, file-text, users, palette, heart, calendar)'}),
              defineField({name: 'titolo', title: 'Titolo Servizio', type: 'string', description: 'Nome del servizio in inglese (es. "Venue Selection")'}),
              defineField({name: 'descrizione', title: 'Descrizione Servizio', type: 'text', rows: 2, description: 'Breve descrizione del servizio in inglese'}),
            ],
          }],
        }),

        // Destinations
        defineField({name: 'destinazioniEyebrow', title: 'Destinazioni — Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo della sezione Destinations (es. "Destinations")'}),
        defineField({name: 'destinazioniTitolo', title: 'Destinazioni — Titolo', type: 'string', description: 'Titolo della sezione Destinations (es. "Dream Italian Destinations")'}),
        defineField({name: 'destinazioniFooter', title: 'Destinazioni — Testo Finale', type: 'string', description: 'Testo sotto la griglia delle destinazioni (es. "And many more beautiful locations across Italy...")'}),
        defineField({
          name: 'destinazioni',
          title: 'Destinazioni — Lista',
          type: 'array',
          description: 'Lista delle destinazioni italiane proposte. Ogni destinazione appare come card con foto, nome e descrizione',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'nome', title: 'Nome Destinazione', type: 'string', description: 'Nome della destinazione (es. "Tuscany", "Amalfi Coast")'}),
              defineField({name: 'descrizione', title: 'Descrizione Destinazione', type: 'text', rows: 2, description: 'Breve descrizione della destinazione in inglese'}),
              defineField({name: 'immagine', title: 'Foto Destinazione', type: 'image', options: {hotspot: true}, description: 'Foto rappresentativa della destinazione'}),
            ],
          }],
        }),

        // Process
        defineField({name: 'processoEyebrow', title: 'Processo — Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo della sezione Process (es. "The Process")'}),
        defineField({name: 'processoTitolo', title: 'Processo — Titolo', type: 'string', description: 'Titolo della sezione Process (es. "How We Work Together")'}),
        defineField({
          name: 'passi',
          title: 'Processo — Passi',
          type: 'array',
          description: 'I passi del processo di lavoro. Ogni passo appare con numero, titolo e descrizione in una timeline verticale',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'numero', title: 'Numero Passo', type: 'string', description: 'Numero del passo (es. "01", "02")'}),
              defineField({name: 'titolo', title: 'Titolo Passo', type: 'string', description: 'Titolo del passo (es. "Discovery Call")'}),
              defineField({name: 'descrizione', title: 'Descrizione Passo', type: 'text', rows: 2, description: 'Descrizione di cosa succede in questo passo'}),
            ],
          }],
        }),

        // FAQ
        defineField({name: 'faqEyebrow', title: 'FAQ — Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo della sezione FAQ (es. "FAQ")'}),
        defineField({name: 'faqTitolo', title: 'FAQ — Titolo', type: 'string', description: 'Titolo della sezione FAQ (es. "Frequently Asked Questions")'}),
        defineField({
          name: 'faq',
          title: 'FAQ — Domande e Risposte',
          type: 'array',
          description: 'Lista delle domande frequenti. Ogni FAQ appare come accordion espandibile nella pagina',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'domanda', title: 'Domanda', type: 'string', description: 'La domanda in inglese (es. "How far in advance should I start planning?")'}),
              defineField({name: 'risposta', title: 'Risposta', type: 'text', rows: 3, description: 'La risposta completa alla domanda in inglese'}),
            ],
          }],
        }),

        // Testimonial
        defineField({name: 'testimonialEyebrow', title: 'Testimonianza — Soprattitolo', type: 'string', description: 'Testo piccolo sopra la citazione (es. "Testimonial")'}),
        defineField({name: 'testimonialCitazione', title: 'Testimonianza — Citazione', type: 'text', rows: 4, description: 'Citazione/recensione in evidenza di un cliente internazionale'}),
        defineField({name: 'testimonialAutore', title: 'Testimonianza — Autore', type: 'string', description: 'Nome dell\'autore della testimonianza (es. "Sarah & James — Wedding in Tuscany")'}),

        // CTA
        defineField({name: 'ctaEyebrow', title: 'CTA — Soprattitolo', type: 'string', description: 'Testo piccolo sopra il titolo CTA (es. "Get Started")'}),
        defineField({name: 'ctaTitolo', title: 'CTA — Titolo', type: 'string', description: 'Titolo della sezione CTA finale (es. "Ready to Plan Your Italian Wedding?")'}),
        defineField({name: 'ctaDescrizione', title: 'CTA — Descrizione', type: 'text', rows: 2, description: 'Testo sotto il titolo CTA — invito a contattare'}),
        defineField({name: 'ctaTestoBottone', title: 'CTA — Testo Bottone', type: 'string', description: 'Testo del bottone email nella sezione CTA (es. "Email Us Today")'}),
        defineField({name: 'ctaEmail', title: 'CTA — Indirizzo Email', type: 'string', description: 'Indirizzo email usato nel link mailto del bottone CTA'}),
      ],
    }),
  ],
  preview: {
    select: {title: 'nomeSito', media: 'logo'},
  },
})
