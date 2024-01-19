export const myStructure = (S) => {
  const GeneralList = S.list()
    .title('Universale')
    .items([
      S.listItem()
        .title('Informazioni Generali')
        .child(S.document().schemaType('general').documentId('general')),
    ])

  const HomeList = S.list()
    .title('Parte Statica')
    .items([
      S.listItem().title('Chi Sono').child(S.document().schemaType('about').documentId('about')),
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.listItem().title('Mission').child(S.document().schemaType('mission').documentId('mission')),
      S.listItem()
        .title('Servizi - parte statica')
        .child(S.document().schemaType('services_static').documentId('services_static')),
    ])

  const ServicesList = S.list()
    .title('Servizi - Dinamica')
    .items([
      S.listItem()
        .title('Servizi (parte dinamica)')
        .child(S.documentTypeList('services').title('Servizi (parte dinamica)')),
    ])

  // Main Structure
  return S.list()
    .title('Contenuto sito web "Martina Vecchio"')
    .items([
      S.listItem().title('Generale').child(GeneralList),
      S.listItem().title('Home').child(HomeList),
      S.listItem().title('Servizi').child(ServicesList),
    ])
}
