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
    }),
    defineField({
      name: 'descrizione',
      title: 'Descrizione del Sito',
      type: 'text',
      rows: 3,
      group: 'generale',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'generale',
      options: {hotspot: true},
    }),

    // ── Contatti ──
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contatti',
    }),
    defineField({
      name: 'telefono',
      title: 'Telefono',
      type: 'string',
      group: 'contatti',
    }),
    defineField({
      name: 'indirizzo',
      title: 'Indirizzo',
      type: 'string',
      group: 'contatti',
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      group: 'contatti',
      fields: [
        defineField({name: 'instagram', title: 'Instagram URL', type: 'url'}),
        defineField({name: 'facebook', title: 'Facebook URL', type: 'url'}),
        defineField({name: 'pinterest', title: 'Pinterest URL', type: 'url'}),
      ],
    }),

    // ── Homepage ──
    defineField({
      name: 'heroHomepage',
      title: 'Hero Homepage',
      type: 'object',
      group: 'homepage',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string', description: 'Testo piccolo sopra il titolo (es. Wedding Planner & Event Manager)'}),
        defineField({name: 'titolo', title: 'Titolo', type: 'string'}),
        defineField({name: 'sottotitolo', title: 'Sottotitolo', type: 'text', rows: 2}),
        defineField({name: 'immagine', title: 'Immagine di Sfondo', type: 'image', options: {hotspot: true}}),
      ],
    }),
    defineField({
      name: 'sezioneServizi',
      title: 'Sezione Servizi',
      type: 'object',
      group: 'homepage',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'titolo', title: 'Titolo', type: 'string'}),
      ],
    }),
    defineField({
      name: 'sezionePortfolio',
      title: 'Sezione Portfolio',
      type: 'object',
      group: 'homepage',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'titolo', title: 'Titolo', type: 'string'}),
      ],
    }),
    defineField({
      name: 'sezioneCta',
      title: 'Sezione CTA (Call to Action)',
      type: 'object',
      group: 'homepage',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'titolo', title: 'Titolo', type: 'string'}),
        defineField({name: 'descrizione', title: 'Descrizione', type: 'text', rows: 2}),
        defineField({name: 'testoBottone', title: 'Testo Bottone', type: 'string'}),
        defineField({name: 'linkBottone', title: 'Link Bottone', type: 'string', description: 'es. /preventivo'}),
      ],
    }),
    defineField({
      name: 'sezioneChiSono',
      title: 'Sezione Chi Sono (Anteprima)',
      type: 'object',
      group: 'homepage',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'titolo', title: 'Titolo', type: 'string'}),
      ],
    }),

    // ── Chi Sono (preview homepage) ──
    defineField({
      name: 'chiSono',
      title: 'Chi Sono (Anteprima Homepage)',
      type: 'object',
      group: 'chiSono',
      fields: [
        defineField({name: 'titolo', title: 'Titolo', type: 'string'}),
        defineField({name: 'testoPrincipale', title: 'Testo Principale', type: 'text', rows: 4}),
        defineField({name: 'testoSecondario', title: 'Testo Secondario', type: 'text', rows: 4}),
        defineField({name: 'foto', title: 'Foto', type: 'image', options: {hotspot: true}}),
        defineField({name: 'testoLink', title: 'Testo del Link', type: 'string'}),
      ],
    }),

    // ── Pagina Chi Sono ──
    defineField({
      name: 'paginaChiSono',
      title: 'Pagina Chi Sono',
      type: 'object',
      group: 'chiSono',
      fields: [
        defineField({name: 'heroImmagine', title: 'Hero Immagine', type: 'image', options: {hotspot: true}}),
        defineField({name: 'heroTitolo', title: 'Hero Titolo', type: 'string'}),
        defineField({name: 'heroSottotitolo', title: 'Hero Sottotitolo', type: 'string'}),
        defineField({name: 'fotoRitratto', title: 'Foto Ritratto', type: 'image', options: {hotspot: true}}),
        defineField({name: 'biografiaTitolo', title: 'Biografia Titolo', type: 'string'}),
        defineField({name: 'biografiaTesto1', title: 'Biografia Paragrafo 1', type: 'text', rows: 4}),
        defineField({name: 'biografiaTesto2', title: 'Biografia Paragrafo 2', type: 'text', rows: 4}),
        defineField({name: 'biografiaTesto3', title: 'Biografia Paragrafo 3', type: 'text', rows: 4}),
        defineField({name: 'citazione', title: 'Citazione', type: 'text', rows: 3}),
        defineField({
          name: 'valori',
          title: 'Valori',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'titolo', title: 'Titolo', type: 'string'}),
              defineField({name: 'descrizione', title: 'Descrizione', type: 'text', rows: 2}),
              defineField({name: 'icona', title: 'Icona', type: 'string', description: 'Nome icona (es. crown, heart, star, sparkle)'}),
            ],
          }],
        }),
        defineField({
          name: 'timeline',
          title: 'Timeline',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'anno', title: 'Anno', type: 'string'}),
              defineField({name: 'titolo', title: 'Titolo', type: 'string'}),
              defineField({name: 'descrizione', title: 'Descrizione', type: 'text', rows: 2}),
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
      fields: [
        defineField({name: 'heroImmagine', title: 'Hero Immagine', type: 'image', options: {hotspot: true}}),
        defineField({name: 'heroTitolo', title: 'Hero Titolo', type: 'string'}),
        defineField({name: 'heroSottotitolo', title: 'Hero Sottotitolo', type: 'string'}),
        defineField({name: 'introTesto', title: 'Testo Introduttivo', type: 'text', rows: 4}),
        defineField({name: 'citazione', title: 'Citazione', type: 'text', rows: 3}),
      ],
    }),

    // ── Pagina Portfolio ──
    defineField({
      name: 'paginaPortfolio',
      title: 'Pagina Portfolio',
      type: 'object',
      group: 'portfolio',
      fields: [
        defineField({name: 'heroImmagine', title: 'Hero Immagine', type: 'image', options: {hotspot: true}}),
        defineField({name: 'heroTitolo', title: 'Hero Titolo', type: 'string'}),
        defineField({name: 'heroSottotitolo', title: 'Hero Sottotitolo', type: 'string'}),
        defineField({name: 'introTesto', title: 'Testo Introduttivo', type: 'text', rows: 4}),
      ],
    }),

    // ── Portfolio Categorie ──
    defineField({
      name: 'portfolioCategorie',
      title: 'Categorie Portfolio',
      type: 'object',
      group: 'portfolio',
      fields: [
        defineField({
          name: 'wedding',
          title: 'Wedding',
          type: 'object',
          fields: [
            defineField({name: 'titolo', title: 'Titolo', type: 'string'}),
            defineField({name: 'descrizione', title: 'Descrizione', type: 'text', rows: 2}),
            defineField({name: 'immagineCopertina', title: 'Immagine Copertina', type: 'image', options: {hotspot: true}}),
          ],
        }),
        defineField({
          name: 'corporate',
          title: 'Corporate',
          type: 'object',
          fields: [
            defineField({name: 'titolo', title: 'Titolo', type: 'string'}),
            defineField({name: 'descrizione', title: 'Descrizione', type: 'text', rows: 2}),
            defineField({name: 'immagineCopertina', title: 'Immagine Copertina', type: 'image', options: {hotspot: true}}),
          ],
        }),
        defineField({
          name: 'celebrations',
          title: 'Celebrations',
          type: 'object',
          fields: [
            defineField({name: 'titolo', title: 'Titolo', type: 'string'}),
            defineField({name: 'descrizione', title: 'Descrizione', type: 'text', rows: 2}),
            defineField({name: 'immagineCopertina', title: 'Immagine Copertina', type: 'image', options: {hotspot: true}}),
          ],
        }),
      ],
    }),

    // ── Pagina Contatti ──
    defineField({
      name: 'paginaContatti',
      title: 'Pagina Contatti',
      type: 'object',
      group: 'contatti',
      fields: [
        defineField({name: 'heroImmagine', title: 'Hero Immagine', type: 'image', options: {hotspot: true}}),
        defineField({name: 'heroTitolo', title: 'Hero Titolo', type: 'string'}),
        defineField({name: 'heroSottotitolo', title: 'Hero Sottotitolo', type: 'string'}),
      ],
    }),

    // ── Destination Wedding (EN) ──
    defineField({
      name: 'paginaDestinationWedding',
      title: 'Pagina Destination Wedding (EN)',
      type: 'object',
      group: 'destinationWedding',
      fields: [
        // Hero
        defineField({name: 'heroImmagine', title: 'Hero Image', type: 'image', options: {hotspot: true}}),
        defineField({name: 'heroEyebrow', title: 'Hero Eyebrow', type: 'string', description: 'Small text above the title (e.g. Destination Wedding Planner)'}),
        defineField({name: 'heroTitolo', title: 'Hero Title', type: 'string'}),
        defineField({name: 'heroSottotitolo', title: 'Hero Subtitle', type: 'text', rows: 2}),
        defineField({name: 'heroCtaTesto', title: 'Hero CTA Button Text', type: 'string'}),

        // About / Intro
        defineField({name: 'aboutFoto', title: 'About Photo', type: 'image', options: {hotspot: true}}),
        defineField({name: 'aboutEyebrow', title: 'About Eyebrow', type: 'string'}),
        defineField({name: 'aboutTitolo', title: 'About Title', type: 'string'}),
        defineField({name: 'aboutTesto1', title: 'About Paragraph 1', type: 'text', rows: 4}),
        defineField({name: 'aboutTesto2', title: 'About Paragraph 2', type: 'text', rows: 4}),
        defineField({name: 'aboutTesto3', title: 'About Paragraph 3', type: 'text', rows: 4}),
        defineField({name: 'aboutCtaTesto', title: 'About CTA Text', type: 'string'}),

        // Services
        defineField({name: 'serviziEyebrow', title: 'Services Eyebrow', type: 'string'}),
        defineField({name: 'serviziTitolo', title: 'Services Title', type: 'string'}),
        defineField({
          name: 'servizi',
          title: 'Services',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'icona', title: 'Icon', type: 'string', description: 'Icon name: map-pin, file-text, users, palette, heart, calendar'}),
              defineField({name: 'titolo', title: 'Title', type: 'string'}),
              defineField({name: 'descrizione', title: 'Description', type: 'text', rows: 2}),
            ],
          }],
        }),

        // Destinations
        defineField({name: 'destinazioniEyebrow', title: 'Destinations Eyebrow', type: 'string'}),
        defineField({name: 'destinazioniTitolo', title: 'Destinations Title', type: 'string'}),
        defineField({name: 'destinazioniFooter', title: 'Destinations Footer Text', type: 'string'}),
        defineField({
          name: 'destinazioni',
          title: 'Destinations',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'nome', title: 'Name', type: 'string'}),
              defineField({name: 'descrizione', title: 'Description', type: 'text', rows: 2}),
              defineField({name: 'immagine', title: 'Image', type: 'image', options: {hotspot: true}}),
            ],
          }],
        }),

        // Process
        defineField({name: 'processoEyebrow', title: 'Process Eyebrow', type: 'string'}),
        defineField({name: 'processoTitolo', title: 'Process Title', type: 'string'}),
        defineField({
          name: 'passi',
          title: 'Steps',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'numero', title: 'Number', type: 'string'}),
              defineField({name: 'titolo', title: 'Title', type: 'string'}),
              defineField({name: 'descrizione', title: 'Description', type: 'text', rows: 2}),
            ],
          }],
        }),

        // FAQ
        defineField({name: 'faqEyebrow', title: 'FAQ Eyebrow', type: 'string'}),
        defineField({name: 'faqTitolo', title: 'FAQ Title', type: 'string'}),
        defineField({
          name: 'faq',
          title: 'FAQ Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'domanda', title: 'Question', type: 'string'}),
              defineField({name: 'risposta', title: 'Answer', type: 'text', rows: 3}),
            ],
          }],
        }),

        // Testimonial
        defineField({name: 'testimonialEyebrow', title: 'Testimonial Eyebrow', type: 'string'}),
        defineField({name: 'testimonialCitazione', title: 'Testimonial Quote', type: 'text', rows: 4}),
        defineField({name: 'testimonialAutore', title: 'Testimonial Author', type: 'string'}),

        // CTA
        defineField({name: 'ctaEyebrow', title: 'CTA Eyebrow', type: 'string'}),
        defineField({name: 'ctaTitolo', title: 'CTA Title', type: 'string'}),
        defineField({name: 'ctaDescrizione', title: 'CTA Description', type: 'text', rows: 2}),
        defineField({name: 'ctaTestoBottone', title: 'CTA Button Text', type: 'string'}),
        defineField({name: 'ctaEmail', title: 'CTA Email', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {title: 'nomeSito', media: 'logo'},
  },
})
