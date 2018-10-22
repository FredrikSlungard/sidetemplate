/* Søker gjennom siden og returnerer overskriften(e) med den nærmeste tenksten som matcher. 

Navn lagrer posisjonen til itemet, når brukeren trykker på scrolles siden ned til plasseringen. Antar at de fleste søker og trykker raskt, dermed vil posisjonen være gyldig*/
$(function () {
  'user strict'

  // Konstanter som ikke endres underveis
  const Doc_Content = $('p, :header');
  const Dest_Treff = $('#søke_treff');

  // Viser søkeresultatene som matcher
  $('#search_doc').on('keyup', function () {
    let Search_Prase = $(this).val();
    let New_Phrase = '';

    if (Search_Prase.length >= 3) {
      let Result = Doc_Content.filter(function (index, value) {
        if ($(value).is(':def_contains(' + Search_Prase + ')')) {

          $(value).attr('name', $(value).offset().top);
          New_Phrase = '<a name=' + $(value).attr('name') + '>' + $(value).text() + '</a>';

          return New_Phrase;

        };
      });

      // Limer inn søkeresultatet
      Dest_Treff.empty();
      Result.clone().appendTo(Dest_Treff);
      Dest_Treff.highlight(Search_Prase);

    }

    // Fjern innholdet hvis det er mindre enn 3 bokstaver
    else {
      Dest_Treff.empty();
    };
  });


  // Tar brukeren til lokasjonen som har søketeksten
  $('#søke_treff').on('click', function (event) {
    let windowHeight = $(window).height();
    let Item = $(event.target);

    
    if (Item != undefined) {
      // Gjør at den scroller til midten av siden hvis overskriften er lavere enn høyden på vinduet
      let Destinasjon = Item.attr('name');
      if (Destinasjon < windowHeight) {
        Destinasjon -= (windowHeight / 2);
      };

      // Scroller til destinasjonen
      $('html, body').animate({
        scrollTop: (Destinasjon)
      }, 1000);

    }
  });
});


