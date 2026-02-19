import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'servizio',
  title: 'Servizio',
  type: 'document',
  fields: [
    defineField({
      name: 'titolo',
      title: 'Nome Servizio',
      type: 'string',
      description: 'Nome del servizio (es. "Wedding Planning Completo"). Appare come titolo nella card della pagina Servizi e nella sezione Servizi della Homepage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      description: 'Parte finale dell\'URL (generato automaticamente dal titolo). Usato internamente per identificare il servizio',
      options: {source: 'titolo', maxLength: 96},
    }),
    defineField({
      name: 'sottotitolo',
      title: 'Sottotitolo',
      type: 'string',
      description: 'Breve frase sotto il titolo (es. "Dalla proposta al grande giorno"). Appare nella card del servizio nella pagina Servizi',
    }),
    defineField({
      name: 'descrizione',
      title: 'Descrizione Completa',
      type: 'text',
      rows: 5,
      description: 'Testo descrittivo del servizio. Appare espanso nella card della pagina Servizi e come anteprima nella Homepage',
    }),
    defineField({
      name: 'caratteristiche',
      title: 'Caratteristiche',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Lista puntata delle caratteristiche incluse nel servizio (es. "Ricerca e selezione venue", "Coordinamento fornitori"). Appare nella card della pagina Servizi',
    }),
    defineField({
      name: 'icona',
      title: 'Nome Icona',
      type: 'string',
      description: 'Nome dell\'icona da mostrare nella card (es. calendar, users, palette, plane). Appare nel cerchio dorato accanto al titolo nella pagina Servizi e Homepage',
    }),
    defineField({
      name: 'immagine',
      title: 'Immagine Servizio',
      type: 'image',
      options: {hotspot: true},
      description: 'Foto rappresentativa del servizio. Appare nella card della pagina Servizi come sfondo o immagine di accompagnamento',
    }),
    defineField({
      name: 'attivo',
      title: 'Pubblicato',
      type: 'boolean',
      initialValue: true,
      description: 'Deseleziona per nascondere il servizio dal sito senza cancellarlo',
    }),
    defineField({
      name: 'ordine',
      title: 'Ordine di Visualizzazione',
      type: 'number',
      description: 'Numero per ordinare i servizi nella pagina Servizi e nella Homepage. Numero più basso = prima posizione',
    }),
  ],
  orderings: [
    {title: 'Ordine', name: 'ordineAsc', by: [{field: 'ordine', direction: 'asc'}]},
  ],
  preview: {
    select: {
      title: 'titolo',
      subtitle: 'sottotitolo',
      media: 'immagine',
    },
  },
})
