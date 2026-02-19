import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'evento',
  title: 'Evento',
  type: 'document',
  fields: [
    defineField({
      name: 'macroCategoria',
      title: 'Macro Categoria',
      type: 'string',
      options: {
        list: [
          {title: 'Wedding', value: 'wedding'},
          {title: 'Corporate', value: 'corporate'},
          {title: 'Celebrations', value: 'celebrations'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titolo',
      title: 'Titolo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'titolo', maxLength: 96},
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'data',
      title: 'Data',
      type: 'date',
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      description: 'Sotto-categoria (es. Destination Wedding, Gala Dinner)',
    }),
    defineField({
      name: 'descrizioneBreve',
      title: 'Descrizione Breve',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'immagineCopertina',
      title: 'Immagine di Copertina',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'immagineHero',
      title: 'Immagine Hero (pagina dettaglio)',
      type: 'image',
      options: {hotspot: true},
      description: 'Foto orizzontale/panoramica per l\'hero della pagina evento. Se vuota, usa l\'immagine di copertina.',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Link Vimeo o YouTube',
    }),
    defineField({
      name: 'descrizione',
      title: 'Descrizione Completa',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'galleria',
      title: 'Galleria Foto',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'inEvidenza',
      title: 'In Evidenza',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ordine',
      title: 'Ordine',
      type: 'number',
      description: 'Ordine di visualizzazione (numero più basso = prima posizione)',
    }),
  ],
  orderings: [
    {title: 'Ordine', name: 'ordineAsc', by: [{field: 'ordine', direction: 'asc'}]},
    {title: 'Data (recenti)', name: 'dataDesc', by: [{field: 'data', direction: 'desc'}]},
  ],
  preview: {
    select: {
      title: 'titolo',
      subtitle: 'location',
      media: 'immagineCopertina',
    },
  },
})
