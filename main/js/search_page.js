/* Søker gjennom siden og returnerer overskriften(e) med den nærmeste tenksten som matcher. */
$(function () {
  'user strict'

  const Doc_Content = $('p')
  const Headings = $(':header[id=innhold]');
  const Dest_Treff = $('#søke_treff');

    /* Gjør funksjonen "contains" case-insensitive
  https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
  https://github.com/jquery/sizzle/wiki#sizzleselectorscreatepseudofunction */
  $.expr[":"].def_contains = $.expr.createPseudo(function (arg) {
    return function (elem) {
      return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
  });

  let Result = Doc_Content.filter(function () {
    if ($(this).is(':def_contains(' + 'Chrome' + ')')) {
      return $(this).text()
    };
  });

  $.each()

  Dest_Treff.append(Result);

  // Viser søkeresultatene som matcher
  $('#search_doc').on('keyup', function () {
    let Search_Prase = $(this).val();

    if (Search_Prase.length >= 3) {
      // Ikke søk før det er over 3 bokstaver
    }

    // Fjern innholdet hvis det er mindre enn 3 bokstaver
    else {
      Dest_Treff.empty();
    };
  });
});