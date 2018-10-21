/* Søker gjennom siden og returnerer overskriften(e) med den nærmeste tenksten som matcher. */
$(function () {
  'user strict'

  const Doc_Content = $('body');
  const Dest_Treff = $('#søke_treff');

  /* Gjør funksjonen "contains" case-insensitive
  https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
  https://github.com/jquery/sizzle/wiki#sizzleselectorscreatepseudofunction */
  $.expr[":"].def_contains = $.expr.createPseudo(function (arg) {
    return function (elem) {
      return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
  });

  // Viser søkeresultatene som matcher
  $('#search_doc').on('keyup', function () {
    let Search_Prase = $(this).val();
    
    console.log(Search_Prase);
    if (Search_Prase.length >= 3) {

      if ($(this).is(':contains(chrome)')) {
        console.log("OK")
      };

      //let Funnet = $('body:def_contains(chrome)');

    };
  });
});

/*    // Viser resultatene som matcher (oppdaterer søket etterhver)
   $('li:def_contains("' + Search_Prase + '"), .nav_clickable:def_contains("' + Search_Prase + '")')
   .show(); */