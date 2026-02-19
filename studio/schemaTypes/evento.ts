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
      description: 'Categoria principale dell\'evento. Determina in quale sezione appare nella pagina Portfolio',
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
      title: 'Titolo Evento',
      type: 'string',
      description: 'Nome dell\'evento (es. "Sara & Marco"). Appare come titolo nella card del Portfolio e nell\'hero della pagina dettaglio',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      description: 'Parte finale dell\'URL della pagina dettaglio (es. "sara-marco" → /portfolio/sara-marco). Generato automaticamente dal titolo',
      options: {source: 'titolo', maxLength: 96},
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Luogo dell\'evento (es. "Villa Cetinale, Toscana"). Appare sotto il titolo nella card del Portfolio',
    }),
    defineField({
      name: 'data',
      title: 'Data Evento',
      type: 'date',
      description: 'Data dell\'evento. Usata per l\'ordinamento cronologico nella pagina Portfolio',
    }),
    defineField({
      name: 'categoria',
      title: 'Sotto-categoria',
      type: 'string',
      description: 'Sotto-categoria specifica (es. "Destination Wedding", "Gala Dinner"). Appare come etichetta sulla card del Portfolio',
    }),
    defineField({
      name: 'descrizioneBreve',
      title: 'Descrizione Breve',
      type: 'text',
      rows: 3,
      description: 'Breve descrizione dell\'evento (2-3 righe). Visibile nella card di anteprima nella pagina Portfolio',
    }),
    defineField({
      name: 'immagineCopertina',
      title: 'Immagine di Copertina',
      type: 'image',
      options: {hotspot: true},
      description: 'Foto principale dell\'evento. Usata come copertina nella card del Portfolio e come fallback per l\'hero della pagina dettaglio',
    }),
    defineField({
      name: 'immagineHero',
      title: 'Immagine Hero (Pagina Dettaglio)',
      type: 'image',
      options: {hotspot: true},
      description: 'Foto panoramica/orizzontale per la sezione hero della pagina dettaglio evento. Se vuota, viene usata l\'immagine di copertina',
    }),
    defineField({
      name: 'videoUrl',
      title: 'URL Video',
      type: 'url',
      description: 'Link al video dell\'evento su Vimeo o YouTube. Se presente, appare nella pagina dettaglio evento',
    }),
    defineField({
      name: 'descrizione',
      title: 'Descrizione Completa',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Racconto completo dell\'evento con testo formattato. Appare nella pagina dettaglio sotto l\'hero',
    }),
    defineField({
      name: 'galleria',
      title: 'Galleria Fotografica',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      description: 'Foto della galleria nella pagina dettaglio evento. Appaiono in un layout a griglia sotto la descrizione',
    }),
    defineField({
      name: 'inEvidenza',
      title: 'In Evidenza',
      type: 'boolean',
      initialValue: false,
      description: 'Se attivo, l\'evento appare nella sezione "Portfolio" della Homepage come anteprima',
    }),
    defineField({
      name: 'ordine',
      title: 'Ordine di Visualizzazione',
      type: 'number',
      description: 'Numero per ordinare gli eventi nella pagina Portfolio. Numero più basso = prima posizione (es. 1, 2, 3...)',
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
