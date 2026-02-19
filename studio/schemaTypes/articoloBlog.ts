import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'articoloBlog',
  title: 'Articolo Blog',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaDescrizione',
      title: 'Meta Descrizione',
      type: 'text',
      rows: 3,
      description: 'Descrizione per SEO (max 160 caratteri)',
    }),
    defineField({
      name: 'estratto',
      title: 'Estratto',
      type: 'text',
      rows: 3,
      description: 'Breve riassunto visibile nelle anteprime',
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          {title: 'Location', value: 'Location'},
          {title: 'Ispirazioni', value: 'Ispirazioni'},
          {title: 'Destination', value: 'Destination'},
          {title: 'Organizzazione', value: 'Organizzazione'},
          {title: 'Tendenze', value: 'Tendenze'},
        ],
      },
    }),
    defineField({
      name: 'dataPubblicazione',
      title: 'Data di Pubblicazione',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tempoLettura',
      title: 'Tempo di Lettura',
      type: 'string',
      description: 'Es. "8 min"',
    }),
    defineField({
      name: 'immagineCopertina',
      title: 'Immagine di Copertina',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'contenuto',
      title: 'Contenuto',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (rule) =>
                      rule.uri({allowRelative: true, scheme: ['http', 'https']}),
                  }),
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Testo alternativo',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Didascalia',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'attivo',
      title: 'Pubblicato',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {title: 'Data (recenti)', name: 'dataDesc', by: [{field: 'dataPubblicazione', direction: 'desc'}]},
  ],
  preview: {
    select: {
      title: 'titolo',
      subtitle: 'categoria',
      media: 'immagineCopertina',
    },
  },
})
