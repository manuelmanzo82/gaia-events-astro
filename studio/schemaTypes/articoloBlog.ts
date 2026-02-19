import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'articoloBlog',
  title: 'Articolo Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'titolo',
      title: 'Titolo Articolo',
      type: 'string',
      description: 'Titolo dell\'articolo del blog. Appare come intestazione principale nella pagina dell\'articolo e nelle card di anteprima nella pagina Blog',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      description: 'Parte finale dell\'URL dell\'articolo (es. "come-scegliere-la-venue" → /blog/come-scegliere-la-venue). Generato automaticamente dal titolo',
      options: {source: 'titolo', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaDescrizione',
      title: 'Meta Descrizione SEO',
      type: 'text',
      rows: 3,
      description: 'Descrizione per i motori di ricerca (max 160 caratteri). Appare nei risultati di Google sotto il titolo dell\'articolo',
    }),
    defineField({
      name: 'estratto',
      title: 'Estratto',
      type: 'text',
      rows: 3,
      description: 'Breve riassunto dell\'articolo (2-3 righe). Visibile nella card di anteprima nella pagina Blog',
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      description: 'Categoria tematica dell\'articolo. Usata come filtro nella pagina Blog e come etichetta sulla card di anteprima',
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
      description: 'Data di pubblicazione dell\'articolo. Usata per l\'ordinamento cronologico nella pagina Blog (più recenti prima) e visualizzata nella card',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tempoLettura',
      title: 'Tempo di Lettura',
      type: 'string',
      description: 'Stima del tempo di lettura (es. "8 min"). Appare nella card di anteprima e nell\'intestazione dell\'articolo',
    }),
    defineField({
      name: 'immagineCopertina',
      title: 'Immagine di Copertina',
      type: 'image',
      options: {hotspot: true},
      description: 'Foto principale dell\'articolo. Usata come copertina nella card di anteprima nella pagina Blog e come hero nella pagina dell\'articolo',
    }),
    defineField({
      name: 'contenuto',
      title: 'Contenuto Articolo',
      type: 'array',
      description: 'Corpo dell\'articolo con testo formattato e immagini. Supporta titoli (H2, H3), grassetto, corsivo, citazioni, link e immagini con didascalia',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normale', value: 'normal'},
            {title: 'Titolo H2', value: 'h2'},
            {title: 'Titolo H3', value: 'h3'},
            {title: 'Citazione', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Grassetto', value: 'strong'},
              {title: 'Corsivo', value: 'em'},
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
                    description: 'Indirizzo del link (es. https://esempio.com o /contatti)',
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
              title: 'Testo Alternativo',
              description: 'Descrizione dell\'immagine per accessibilità e SEO. Letto dai motori di ricerca e dagli screen reader',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Didascalia',
              description: 'Testo visualizzato sotto l\'immagine nel corpo dell\'articolo (opzionale)',
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
      description: 'Deseleziona per nascondere l\'articolo dal blog senza cancellarlo. Gli articoli non pubblicati non appaiono nella pagina Blog',
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
