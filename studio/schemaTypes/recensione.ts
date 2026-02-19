import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'recensione',
  title: 'Recensione',
  type: 'document',
  fields: [
    defineField({
      name: 'autore',
      title: 'Nome Autore',
      type: 'string',
      description: 'Nome della persona che ha lasciato la recensione (es. "Sara & Marco"). Appare sotto la citazione nella sezione Testimonianze',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'evento',
      title: 'Tipo Evento e Location',
      type: 'string',
      description: 'Tipo di evento e luogo (es. "Matrimonio — Villa Cetinale, Toscana"). Appare come sottotitolo nella sezione Testimonianze',
    }),
    defineField({
      name: 'data',
      title: 'Data Recensione',
      type: 'date',
      description: 'Data della recensione. Usata per ordinare le recensioni (più recenti prima)',
    }),
    defineField({
      name: 'testo',
      title: 'Testo della Recensione',
      type: 'text',
      rows: 5,
      description: 'Il testo completo della recensione. Appare come citazione nella sezione Testimonianze della Homepage e della pagina Chi Sono',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'valutazione',
      title: 'Valutazione (Stelle)',
      type: 'number',
      description: 'Valutazione da 1 a 5 stelle. Visualizzata come stelline dorate accanto alla recensione',
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
      title: 'Foto Autore',
      type: 'image',
      options: {hotspot: true},
      description: 'Foto opzionale dell\'autore. Se presente, appare accanto alla recensione nella sezione Testimonianze',
    }),
    defineField({
      name: 'inEvidenza',
      title: 'In Evidenza',
      type: 'boolean',
      initialValue: false,
      description: 'Se attivo, la recensione appare nella sezione Testimonianze della Homepage',
    }),
    defineField({
      name: 'attivo',
      title: 'Pubblicata',
      type: 'boolean',
      initialValue: true,
      description: 'Deseleziona per nascondere la recensione dal sito senza cancellarla',
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
