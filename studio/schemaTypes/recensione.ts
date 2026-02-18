import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'recensione',
  title: 'Recensione',
  type: 'document',
  fields: [
    defineField({
      name: 'autore',
      title: 'Autore',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'evento',
      title: 'Evento',
      type: 'string',
      description: 'Tipo di evento e location (es. Matrimonio — Villa Cetinale, Toscana)',
    }),
    defineField({
      name: 'data',
      title: 'Data',
      type: 'date',
    }),
    defineField({
      name: 'testo',
      title: 'Testo della Recensione',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'valutazione',
      title: 'Valutazione',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(5),
      options: {
        list: [
          {title: '1 stella', value: 1},
          {title: '2 stelle', value: 2},
          {title: '3 stelle', value: 3},
          {title: '4 stelle', value: 4},
          {title: '5 stelle', value: 5},
        ],
      },
    }),
    defineField({
      name: 'immagine',
      title: 'Immagine',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'inEvidenza',
      title: 'In Evidenza',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'attivo',
      title: 'Attivo',
      type: 'boolean',
      initialValue: true,
      description: 'Deseleziona per nascondere la recensione dal sito',
    }),
  ],
  preview: {
    select: {
      title: 'autore',
      subtitle: 'evento',
      media: 'immagine',
    },
  },
})
