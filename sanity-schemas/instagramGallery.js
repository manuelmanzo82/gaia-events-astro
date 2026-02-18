// Schema da aggiungere al Sanity Studio
// Copia questo oggetto nell'array schemas del tuo sanity.config.ts

export default {
  name: 'instagramGallery',
  title: 'Galleria Instagram',
  type: 'document',
  fields: [
    {
      name: 'titolo',
      title: 'Titolo',
      type: 'string',
      initialValue: 'Galleria Instagram',
    },
    {
      name: 'immagini',
      title: 'Immagini',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'instagramImage',
          title: 'Immagine Instagram',
          fields: [
            {
              name: 'image',
              title: 'Immagine',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Didascalia',
              type: 'string',
              description: 'Testo mostrato al hover sulla foto (opzionale)',
            },
            {
              name: 'instagramUrl',
              title: 'Link al Post Instagram',
              type: 'url',
              description: 'URL del post originale su Instagram (opzionale)',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['https'],
                  allowRelative: false,
                }),
            },
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image',
              subtitle: 'instagramUrl',
            },
            prepare({ title, media, subtitle }) {
              return {
                title: title || 'Immagine senza didascalia',
                media,
                subtitle: subtitle || 'Nessun link',
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(12),
    },
  ],
  preview: {
    select: {
      title: 'titolo',
      images: 'immagini',
    },
    prepare({ title, images }) {
      return {
        title: title || 'Galleria Instagram',
        subtitle: `${images?.length || 0} immagini`,
      };
    },
  },
};
