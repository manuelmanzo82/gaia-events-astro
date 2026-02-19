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

    // ── Statistiche ──
    defineField({
      name: 'statistiche',
      title: 'Statistiche',
      type: 'object',
      group: 'generale',
      fields: [
        defineField({name: 'eventiRealizzati', title: 'Eventi Realizzati', type: 'number'}),
        defineField({name: 'anniEsperienza', title: 'Anni di Esperienza', type: 'number'}),
        defineField({name: 'locationPartner', title: 'Location Partner', type: 'number'}),
        defineField({name: 'fornitoriSelezionati', title: 'Fornitori Selezionati', type: 'number'}),
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
  ],
  preview: {
    select: {title: 'nomeSito', media: 'logo'},
  },
})
