export default {
  name: 'general',
  title: 'Informazioni Generali',
  type: 'document',
  fields: [
    {
      name: 'linkedin',
      title: 'Linkedin',
      description: 'Inserisci il link di Linkedin',
      placeholder: 'Inserisci il link di Linkedin',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https', 'http'],
          allowRelative: false,
        }).required(),
    },
    {
      name: 'instagram',
      title: 'Instagram',
      description: 'Inserisci il link del profilo di Instagram',
      placeholder: 'Inserisci il link del profilo di Instagram',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https', 'http'],
          allowRelative: false,
        }).required(),
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp',
      description: 'Inserisci il link di WhatsApp',
      placeholder: 'Inserisci il link di WhatsApp',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https', 'http'],
          allowRelative: false,
        }).required(),
    },
    {
      name: 'myLink',
      title: 'Link del tuo sito',
      description: 'Inserisci il link del tuo sito. Esempio: www.martinavecchio.it',
      placeholder: 'Inserisci il link del tuo sito',
      type: 'string',
    },
    {
      name: 'emailAddress',
      title: 'Indirizzo email',
      placeholder: "Inserisci l'indirizzo email qua...",
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Numero di Telefono',
      description: 'Includi il prefisso',
      placeholder: 'Inserisci il tuo numero qua. Includi il prefisso',
      type: 'string',
    },
    {
      name: 'busName',
      title: 'Nome Impresa',
      description: 'Esempio: Martina Vecchio - MV Educazione Professionale',
      placeholder: 'Esempio: Martina Vecchio - MV Educazione Professionale',
      type: 'string',
    },
    {
      name: 'pIva',
      title: 'Partita IVA',
      description: "Inserire anche l'abbreviazione. Esempio: P.IVA: 1234567890 ",
      placeholder: "Inserire anche l'abbreviazione. Esempio: P.IVA: 1234567890 ",
      type: 'string',
    },
    {
      name: 'developer',
      title: 'Nome del Sviluppatore',
      type: 'string',
    },
    {
      name: 'textContact',
      title: 'Paragrafo della sezione "Contattami"',
      type: 'text',
      description: 'Questa é la frase sopra il form. Sezione "Contattami"',
    },
    {
      name: 'websiteDev',
      title: 'Sito del sviluppatore',
      type: 'string',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https', 'http'],
          allowRelative: false,
        }).required(),
    },
    {
      name: 'logo',
      title: 'Logo per la barra di navigazione',
      description: 'Assicurati che il logo sia con lo sfondo trasparente',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Il caricamento del logo é obbligatorio'),
    },
    {
      name: 'logoFooter',
      title: 'Logo per il footer',
      description: 'Assicurati che il logo sia con lo sfondo trasparente',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Il caricamento del logo é obbligatorio'),
    },
    {
      name: 'contactImg',
      title: 'Immagine Contatti',
      description: 'Immagine per la sezione contatti',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare(selection) {
      return {
        media: selection.media,
      }
    },
  },
}
