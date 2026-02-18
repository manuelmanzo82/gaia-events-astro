import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'instagramGallery',
  title: 'Galleria Instagram',
  type: 'document',
  fields: [
    defineField({
      name: 'titolo',
      title: 'Titolo',
      type: 'string',
      initialValue: 'Galleria Instagram',
    }),
    defineField({
      name: 'immagini',
      title: 'Immagini',
      type: 'array',
      validation: (rule) => rule.max(12),
      of: [
        {
          type: 'object',
          name: 'instagramImage',
          title: 'Immagine Instagram',
          fields: [
            defineField({
              name: 'image',
              title: 'Immagine',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Didascalia',
              type: 'string',
              description: 'Testo mostrato al hover sulla foto (opzionale)',
            }),
            defineField({
              name: 'instagramUrl',
              title: 'Link al Post Instagram',
              type: 'url',
              description: 'URL del post originale su Instagram (opzionale)',
              validation: (rule) =>
                rule.uri({scheme: ['https'], allowRelative: false}),
            }),
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image',
              subtitle: 'instagramUrl',
            },
            prepare({title, media, subtitle}) {
              return {
                title: title || 'Immagine senza didascalia',
                media,
                subtitle: subtitle || 'Nessun link',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'titolo',
      images: 'immagini',
    },
    prepare({title, images}) {
      return {
        title: title || 'Galleria Instagram',
        subtitle: `${images?.length || 0} immagini`,
      }
    },
  },
})
