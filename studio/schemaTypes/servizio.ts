import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'servizio',
  title: 'Servizio',
  type: 'document',
  fields: [
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
      name: 'sottotitolo',
      title: 'Sottotitolo',
      type: 'string',
    }),
    defineField({
      name: 'descrizione',
      title: 'Descrizione',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'caratteristiche',
      title: 'Caratteristiche',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Lista delle caratteristiche del servizio',
    }),
    defineField({
      name: 'icona',
      title: 'Icona',
      type: 'string',
      description: 'Nome icona (es. calendar, users, palette, plane)',
    }),
    defineField({
      name: 'immagine',
      title: 'Immagine',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'attivo',
      title: 'Attivo',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'ordine',
      title: 'Ordine',
      type: 'number',
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
