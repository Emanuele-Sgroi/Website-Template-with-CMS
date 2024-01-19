export default {
  name: 'about',
  title: 'Chi Sono',
  type: 'document',
  fields: [
    {
      name: 'title1',
      title: 'Titolo',
      type: 'string',
      description: 'esempio: Chi sono',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'text',
      title: 'Paragrafo della sezione "Chi Sono"',
      type: 'array', // Change type to array
      of: [{type: 'block'}], // Use block type for rich text
      description: 'Questa é la frase sotto il titolo. Sezione "Chi Sono"',
    },
    {
      name: 'title2',
      title: 'Secondo Titolo',
      type: 'string',
      description: 'esempio: Che cosa ho studiato',
      placeholder: 'Scrivi qua...',
    },
    {
      name: 'bulletPoints',
      title: 'Lista di quello che hai studiato',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Premi "Add item" per inserire contenuto alla lista',
    },
    {
      name: 'image',
      title: 'Foto per la sezione "Chi Sono"',
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
