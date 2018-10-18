/* Viser den lokale navigasjonen til høyre. Denne viser kun overskriftene
som er under den nærmeste h1 overskriften. 

Programmet søker etter den nærmeste overskriften etter scrollingen eller klikk og setter inn enn ny liste hvis brukeren kommer til neste hoveddel. */
$('#innhold').on('click', function ( event ) {
  'use strict'

  let Closest_Header = $(event.target).prev().find('h1');

  console.log(event.target)
  //Closest_Header.css('font-weight', 'bold')

});


