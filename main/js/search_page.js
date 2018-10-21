/* Søker gjennom siden og returnerer overskriften(e) med den nærmeste tenksten som matcher. */
$(function() {
  // Viser søkeresultatene som matcher
  $('#søk_nav').on('keyup', function () {

    let Search_Prase = $("input:text").val();

    if (Search_Prase.length >= 3) {
      $('li').show();
      $('.nav_clickable').show();

      /* Gjør funksjonen "contains" case-insensitive
      https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
      https://github.com/jquery/sizzle/wiki#sizzleselectorscreatepseudofunction */
      $.expr[":"].def_contains = $.expr.createPseudo(function (arg) {
        return function (elem) {
          return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
      });

      $('li:not(:def_contains("' + Search_Prase + '")), .nav_clickable:not(:def_contains("' + Search_Prase + '"))')
        .hide();

      // Viser resultatene som matcher (oppdaterer søket etterhver)
      $('li:def_contains("' + Search_Prase + '"), .nav_clickable:def_contains("' + Search_Prase + '")')
        .show();

    };

  });
});