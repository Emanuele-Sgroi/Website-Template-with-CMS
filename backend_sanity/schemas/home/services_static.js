export default {
  name: 'services_static',
  title: 'Servizi Statici',
  type: 'document',
  fields: [
    {
      name: 'title1',
      title: 'Titolo sezione servizi',
      type: 'string',
      description: 'esempio: Servizi',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'text1',
      title: 'Frase introduttiva. Sezione "Servizi"',
      type: 'text',
      description: 'Questa é la piccola frase sotto il titolo. Sezione "Servizi"',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'text2',
      title: 'Frase conclusiva. Sezione "Servizi"',
      type: 'text',
      description: 'Questa é la piccola frase in fondo la sezione',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'image',
      title: 'Immagine di sfondo, sotto il titolo. Sezione Servizi',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
