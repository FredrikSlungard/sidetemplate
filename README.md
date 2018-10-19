# Beskrivelse
Template for nettsider med sidenavigasjon på venstre og høyre side.
Prosjektet er laget for større dokumenter der det kan bli mye informasjon/scrolling.

# Navigasjon
Navigasjonen til venstre inneholder en liste over alle overskriftene i dokumenten.
Overskriftene er sortert med eget tema, default velges:
h1 angir tema med skillestrek
 h2 viser temaene

## Manøvrering
Hvis overskriften ikke har en id, eller referanse søkes det etter overskriften og tar brukeren til plasseringen.

## Søkefunksjon
Søkefunksjonen navigasjonen søker kun i overskriftene som ligger i navigasjonen.
Søket er case-insesitive ved at [":contains"](https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/) funksjonaliteten er utvidet.

## Høyre navigasjon
Viser overskriftene i teksten på nivået du er nå.
Default er at navigasjonen viser overskriftene mellom to h1 typer.

Denne oppdateres etterhvert som du scroller.
(Ikke implemenert enda)

# Biblioteker
Siden bruker Bootstrap (Jasny versjon) og jquery