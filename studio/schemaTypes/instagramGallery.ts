import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'instagramGallery',
  title: 'Galleria Instagram',
  type: 'document',
  fields: [
    defineField({
      name: 'titolo',
      title: 'Titolo Galleria',
      type: 'string',
      initialValue: 'Galleria Instagram',
      description: 'Titolo interno per identificare questa galleria. Non visibile sul sito',
    }),
    defineField({
      name: 'immagini',
      title: 'Contenuti Instagram',
      type: 'array',
      description: 'Le foto e i video che appaiono nella sezione "Seguimi su Instagram" nella Homepage (massimo 12 elementi)',
      validation: (rule) => rule.max(12),
      of: [
        {
          type: 'object',
          name: 'instagramImage',
          title: 'Contenuto Instagram',
          fields: [
            defineField({
              name: 'mediaType',
              title: 'Tipo di Contenuto',
              type: 'string',
              initialValue: 'foto',
              description: 'Scegli se è una foto o un video. Per i video, carica il thumbnail come immagine',
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
              title: 'Immagine / Copertina Video',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
              description: 'Per le foto è la foto stessa. Per i video, carica il thumbnail/copertina che verrà mostrato nella griglia',
            }),
            defineField({
              name: 'caption',
              title: 'Didascalia',
              type: 'string',
              description: 'Testo che appare al passaggio del mouse sopra l\'immagine nella galleria Instagram (opzionale)',
            }),
            defineField({
              name: 'instagramUrl',
              title: 'Link al Post Instagram',
              type: 'url',
              description: 'URL del post originale su Instagram. Cliccando sull\'immagine nella galleria, si apre questo link (consigliato per i video)',
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
