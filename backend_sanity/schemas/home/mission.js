export default {
  name: 'mission',
  title: 'Mission',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titolo della sezione',
      type: 'string',
      description: 'esempio: Mission',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'text1',
      title: 'Paragrafo in corsivo',
      type: 'text',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'text2',
      title: 'Paragrafo 2',
      type: 'text',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'text3',
      title: 'Paragrafo 3',
      type: 'text',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'image',
      title: 'Foto sezione "Mission"',
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
