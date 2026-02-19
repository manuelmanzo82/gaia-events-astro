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
          title: 'Media Instagram',
          fields: [
            defineField({
              name: 'mediaType',
              title: 'Tipo',
              type: 'string',
              initialValue: 'foto',
              options: {
                list: [
                  {title: 'Foto', value: 'foto'},
                  {title: 'Video', value: 'video'},
                ],
                layout: 'radio',
              },
            }),
            defineField({
              name: 'image',
              title: 'Immagine / Thumbnail Video',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
              description: 'Per le foto è la foto stessa, per i video è il thumbnail/copertina',
            }),
            defineField({
              name: 'caption',
              title: 'Didascalia',
              type: 'string',
              description: 'Testo mostrato al hover (opzionale)',
            }),
            defineField({
              name: 'instagramUrl',
              title: 'Link al Post Instagram',
              type: 'url',
              description: 'URL del post su Instagram (consigliato per i video)',
              validation: (rule) =>
                rule.uri({scheme: ['https'], allowRelative: false}),
            }),
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image',
              subtitle: 'mediaType',
            },
            prepare({title, media, subtitle}) {
              const icon = subtitle === 'video' ? '🎬 ' : '📷 '
              return {
                title: icon + (title || 'Senza didascalia'),
                media,
                subtitle: subtitle === 'video' ? 'Video' : 'Foto',
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
