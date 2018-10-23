# Beskrivelse
Template for nettsider med sidenavigasjon på venstre og høyre side.
Prosjektet er laget for større dokumenter der det kan bli mye informasjon/scrolling.

F.eks. PDF dokumenter som skal overføres til web

# Navigasjon
Navigasjonen til venstre inneholder en liste over alle overskriftene i dokumenten.
Overskriftene er sortert med eget tema, default velges:
h1 angir tema med skillestrek
 h2 viser temaene

## Manøvrering
Hvis overskriften ikke har en id, eller referanse søkes det etter overskriften og tar brukeren til plasseringen som er nærmest.

## Søkefunksjon
Søkefunksjonen navigasjonen søker kun i overskriftene som ligger i navigasjonen.
Søket er case-insesitive ved at [":contains"](https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/) funksjonaliteten er utvidet.

Den nye funksjonen heter def_contains.

## Høyre navigasjon
Viser overskriftene i teksten på nivået du er nå.
Default er at navigasjonen viser overskriftene mellom to h1 typer og h1.

Du kan endre dette i modulen left_navbar.js

# Innhold
Sidestrukturen er delt opp i tre hoveddeler. I tillegg er det en top-navbar.

* Venstre navigasjonsbar viser overskriftene i dokumentet (siden)
  * id = left_navbar
* Høyre navigasjonsbar viser søkefunksjonen der du kan søke i dokumentet
  * id = right_navbar
* Midtedelen inneholder hovedinnholdet (main)
  * id = top_navbar
  * id = innhold


# Biblioteker
Siden bruker Bootstrap (Jasny versjon) og jquery