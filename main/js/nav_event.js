
// Går til overskriften i dokumentet når noen tykker på overskriften i navigasjonen
// Hvis det er flere treff går den til den første overskriften
const  Overskrifter = $('h1,h2');

$('.nav_clickable').on('click', function () {
  'use strict'

  let Søk_Etter = $(this).text();
  let Destinasjon = 0;
  const windowHeight = $(window).height();

  // Søker etter overskriften og filterer ut verdiene som ikke treffer søkeverdien
  let Result = Overskrifter.filter(function () {
    return $(this).text() === Søk_Etter;
  });

  // Velger destinasjon utifra antall treff, ved flere treff velges den øverste
  if (Result.length === 1) {
    Destinasjon = $(Result).offset().top;
  }
  else {
    let Første_Overskrift = Result[0];
    Destinasjon = $(Første_Overskrift).offset().top;
  };

  // Gjør at den scroller til midten av siden hvis overskriften er lavere enn
  // høyden på vinduet
  if (Destinasjon < windowHeight) {
    Destinasjon -= (windowHeight / 2);
  };

  // Scroller til destinasjonen
  $('html, body').animate({
    scrollTop: (Destinasjon)
  }, 1000);

}); 