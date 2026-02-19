export const impostazioniQuery = `*[_type == "impostazioni"][0]{
  nomeSito,
  descrizione,
  "logo": logo.asset->url + "?w=800&fm=webp&q=80",
  email,
  telefono,
  indirizzo,
  social { instagram, facebook, pinterest },
  chiSono {
    titolo,
    testoPrincipale,
    testoSecondario,
    "foto": foto.asset->url + "?w=800&fm=webp&q=80",
    testoLink
  },
  heroHomepage {
    eyebrow,
    titolo,
    sottotitolo,
    "immagine": immagine.asset->url + "?w=800&fm=webp&q=80"
  },
  sezioneServizi { eyebrow, titolo },
  sezionePortfolio { eyebrow, titolo },
  sezioneCta { eyebrow, titolo, descrizione, testoBottone, linkBottone },
  sezioneChiSono { eyebrow, titolo },
  paginaChiSono {
    "heroImmagine": heroImmagine.asset->url + "?w=800&fm=webp&q=80",
    heroTitolo,
    heroSottotitolo,
    "fotoRitratto": fotoRitratto.asset->url + "?w=800&fm=webp&q=80",
    biografiaTitolo,
    biografiaTesto1,
    biografiaTesto2,
    biografiaTesto3,
    citazione,
    valori[]{ titolo, descrizione, icona },
    timeline[]{ anno, titolo, descrizione }
  },
  paginaServizi {
    "heroImmagine": heroImmagine.asset->url + "?w=800&fm=webp&q=80",
    heroTitolo,
    heroSottotitolo,
    introTesto,
    citazione
  },
  paginaPortfolio {
    "heroImmagine": heroImmagine.asset->url + "?w=800&fm=webp&q=80",
    heroTitolo,
    heroSottotitolo,
    introTesto
  },
  portfolioCategorie {
    wedding { titolo, descrizione, "immagineCopertina": immagineCopertina.asset->url + "?w=800&fm=webp&q=80" },
    corporate { titolo, descrizione, "immagineCopertina": immagineCopertina.asset->url + "?w=800&fm=webp&q=80" },
    celebrations { titolo, descrizione, "immagineCopertina": immagineCopertina.asset->url + "?w=800&fm=webp&q=80" }
  },
  paginaContatti {
    "heroImmagine": heroImmagine.asset->url + "?w=800&fm=webp&q=80",
    heroTitolo,
    heroSottotitolo
  },
  paginaDestinationWedding {
    "heroImmagine": heroImmagine.asset->url + "?w=800&fm=webp&q=80",
    heroEyebrow,
    heroTitolo,
    heroSottotitolo,
    heroCtaTesto,
    "aboutFoto": aboutFoto.asset->url + "?w=800&fm=webp&q=80",
    aboutEyebrow,
    aboutTitolo,
    aboutTesto1,
    aboutTesto2,
    aboutTesto3,
    aboutCtaTesto,
    serviziEyebrow,
    serviziTitolo,
    servizi[]{ icona, titolo, descrizione },
    destinazioniEyebrow,
    destinazioniTitolo,
    destinazioniFooter,
    destinazioni[]{ nome, descrizione, "immagine": immagine.asset->url + "?w=800&fm=webp&q=80" },
    processoEyebrow,
    processoTitolo,
    passi[]{ numero, titolo, descrizione },
    faqEyebrow,
    faqTitolo,
    faq[]{ domanda, risposta },
    testimonialEyebrow,
    testimonialCitazione,
    testimonialAutore,
    ctaEyebrow,
    ctaTitolo,
    ctaDescrizione,
    ctaTestoBottone,
    ctaEmail
  }
}`;

export const eventiQuery = `*[_type == "evento"] | order(ordine asc, data desc){
  _id,
  macroCategoria,
  titolo,
  slug,
  location,
  data,
  categoria,
  descrizioneBreve,
  videoUrl,
  "immagineCopertina": immagineCopertina.asset->url + "?w=800&fm=webp&q=80",
  inEvidenza
}`;

export const eventoBySlugQuery = `*[_type == "evento" && slug.current == $slug][0]{
  _id,
  macroCategoria,
  titolo,
  "slug": slug.current,
  location,
  data,
  categoria,
  descrizioneBreve,
  videoUrl,
  descrizione,
  "immagineCopertina": immagineCopertina.asset->url + "?w=800&fm=webp&q=80",
  "immagineHero": immagineHero.asset->url + "?w=800&fm=webp&q=80",
  "galleria": galleria[].asset->url + "?w=800&fm=webp&q=80",
  inEvidenza
}`;

export const recensioniQuery = `*[_type == "recensione" && attivo == true] | order(data desc){
  _id,
  autore,
  evento,
  data,
  testo,
  valutazione,
  "immagine": immagine.asset->url + "?w=800&fm=webp&q=80",
  inEvidenza
}`;

export const instagramGalleryQuery = `*[_type == "instagramGallery"][0]{
  immagini[]{
    mediaType,
    "url": image.asset->url + "?w=800&fm=webp&q=80",
    caption,
    instagramUrl
  }
}`;

export const serviziQuery = `*[_type == "servizio" && attivo == true] | order(ordine asc){
  _id,
  titolo,
  slug,
  sottotitolo,
  descrizione,
  caratteristiche,
  icona,
  "immagine": immagine.asset->url + "?w=800&fm=webp&q=80"
}`;

export const articoliBlogQuery = `*[_type == "articoloBlog" && attivo == true] | order(dataPubblicazione desc){
  _id,
  titolo,
  "slug": slug.current,
  metaDescrizione,
  estratto,
  categoria,
  dataPubblicazione,
  tempoLettura,
  "immagineCopertina": immagineCopertina.asset->url + "?w=800&fm=webp&q=80"
}`;

export const articoloBlogBySlugQuery = `*[_type == "articoloBlog" && slug.current == $slug && attivo == true][0]{
  _id,
  titolo,
  "slug": slug.current,
  metaDescrizione,
  estratto,
  categoria,
  dataPubblicazione,
  tempoLettura,
  "immagineCopertina": immagineCopertina.asset->url + "?w=800&fm=webp&q=80",
  contenuto
}`;

export const articoliBlogSlugsQuery = `*[_type == "articoloBlog" && attivo == true]{
  "slug": slug.current
}`;
