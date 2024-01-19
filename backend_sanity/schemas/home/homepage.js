export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titolo della pagina',
      type: 'string',
      description: 'esempio: Martina Vecchio',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'subtitle',
      title: 'Sottotitolo',
      type: 'string',
      description: 'esempio: Educatrice Professionale e Consulente di Carriera',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'title2',
      title: 'Titolo 2 (in fondo)',
      type: 'string',
      description: 'esempio: Benvenuti su Saturno',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'text',
      title: 'Frase sotto al secondo titolo (in fondo)',
      type: 'text',
      description: 'Questa é la piccola frase sotto il titolo nella schermata iniziale',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'image1',
      title: 'Immagine in alto (Homepage)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image2',
      title: 'Immagine in basso (Homepage)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
