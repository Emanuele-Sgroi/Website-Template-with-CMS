export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nome del servizio',
      type: 'string',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'orderNumber',
      title: 'Ordine di apparizione',
      type: 'number',
    },
    {
      name: 'homeText',
      title: 'Frase introduttiva',
      type: 'text',
      description: 'Questa frase viene mostrata nella sezione "Servizi" nella schermata principale',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'text1',
      title: 'Frase sotto il titolo. (Pagina dettagli)',
      type: 'text',
      description: 'Questa frase viene mostrata nella sezione "Servizi" nella schermata principale',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'bulletPoints',
      title: 'Lista dettagli servizio',
      type: 'array',
      of: [{type: 'block'}], // Each bullet point is a block of text
    },
    {
      name: 'text2',
      title: 'Frase conclusiva. (Pagina dettagli)',
      type: 'text',
      description: 'Questa frase viene mostrata nella sezione "Servizi" nella schermata principale',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'image',
      title: 'Immagine di riferimento del servizio',
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
