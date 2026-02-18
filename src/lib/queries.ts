export const impostazioniQuery = `*[_type == "impostazioni"][0]{
  nomeSito,
  descrizione,
  "logo": logo.asset->url,
  email,
  telefono,
  indirizzo,
  social { instagram, facebook, pinterest },
  statistiche { eventiRealizzati, anniEsperienza, locationPartner, fornitoriSelezionati },
  chiSono {
    titolo,
    testoPrincipale,
    testoSecondario,
    "foto": foto.asset->url,
    testoLink
  },
  heroHomepage {
    titolo,
    sottotitolo,
    "immagine": immagine.asset->url
  },
  paginaChiSono {
    "heroImmagine": heroImmagine.asset->url,
    heroTitolo,
    heroSottotitolo,
    "fotoRitratto": fotoRitratto.asset->url,
    biografiaTitolo,
    biografiaTesto1,
    biografiaTesto2,
    biografiaTesto3,
    citazione,
    valori[]{ titolo, descrizione, icona },
    timeline[]{ anno, titolo, descrizione }
  },
  paginaServizi {
    "heroImmagine": heroImmagine.asset->url,
    heroTitolo,
    heroSottotitolo,
    introTesto,
    citazione
  },
  paginaPortfolio {
    "heroImmagine": heroImmagine.asset->url,
    heroTitolo,
    heroSottotitolo,
    introTesto
  },
  portfolioCategorie {
    wedding { titolo, descrizione, "immagineCopertina": immagineCopertina.asset->url },
    corporate { titolo, descrizione, "immagineCopertina": immagineCopertina.asset->url },
    celebrations { titolo, descrizione, "immagineCopertina": immagineCopertina.asset->url }
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
  "immagineCopertina": immagineCopertina.asset->url,
  inEvidenza
}`;

export const recensioniQuery = `*[_type == "recensione" && attivo == true] | order(data desc){
  _id,
  autore,
  evento,
  data,
  testo,
  valutazione,
  "immagine": immagine.asset->url,
  inEvidenza
}`;

export const instagramGalleryQuery = `*[_type == "instagramGallery"][0]{
  immagini[0...8]{
    "url": image.asset->url,
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
  "immagine": immagine.asset->url
}`;
