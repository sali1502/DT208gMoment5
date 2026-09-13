## Projektuppgift för kursen DT208G - Programmering i TypeScript
I projektuppgiften för kursen Programmering i TypeScript har en Angular-applikation skapats för ett enklare fiktivt lärosäte.
Applikationen har tre undersidor: startsidan, kurser och ramschema.

### Startsidan
På startsidan presenteras lärosätet med ett bildspel som användaren kan klicka sig genom.
Det  finns även en informationstext om lärosätet.

### Kurser
På sidan för kurser läses kurser ut från en JSON-fil till en tabell.
Det går att sortera kurser på kurskod, kursnamn, poäng och ämne i stigande och fallande ordning genom att klicka på rubrikerna i tabellen.
Det går att filtrera kurser på kurskod och kursnamn genom skriva in text i ett inputfält, och det går att filtrera kurser på ämne genom att välja ett ämne i en rullgardinsmeny.
Det går även att se antal kurser som visas på skärmen jämfört med samtliga kurser.
I varje tabellrad finns en knapp för att spara en kurs till localStorage för att bygga ett ramschema.

### Ramschema
På sidan för ramschema läses de sparade kurserna ut från localStorage och visas i en tabell.
En räknare visar antalet kurser i ramschemat och en annan räknare visar det sammanräknade antalet högskolepoäng för kurserna i ramschemat.
Det går också att radera kurser.

### Komponenter
Komponenter har gjorts för header och footer. I headern finns länkar till navigationsmenyn.
Komponenter har även gjorts för undersidorna startsidan, kurser, ramschema och sidan "not-found".

### Interface
Ett interface har gjorts (Courses) för kursdata som hämtas från JSON-filen.

### Services
Två services har gjorts:
CoursesService hämtar JSON-data med HttpClient genom metoden getCourses().
ScheduleService hämtar data från localStorage genom metoden getCoursesFromLocalStorage.
Här finns även metoden deleteCourseFromLocalStorage för att radera kurser från ramschemat.

### Responsivitet
Webbplatsen är responsiv. För att tabellerna på sidorna kurser och ramschema ska fungera på en liten skärm har fälten för rubrikerna kod, poäng och kursplan dolts för mindre skärmar.

### Publicering
Webbplatsen är publicerad på Netlify.
https://sali1502dt208gprojekt.netlify.app

### Validering
Webbplatsen är validerad för HTML och CSS i W3C valideringstjänster samt testad i webbläsarna Opera, Firefox och Chrome.
Testning har även skett i Wave och Lighthouse.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
