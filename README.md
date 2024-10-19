## Projektuppgift för kursen DT208G - Programmering i TypeScript
I projektuppgiften för kursen Programmering i TypeScript har en Angular-applikation skapats för ett enklare fiktivt lärosäte.<br>
Applikationen har tre undersidor: startsidan, kurser och ramschema.<br>

### Startsidan
På startsidan presenteras lärosätet med ett bildspel som användaren kan klicka sig genom.<br>
Det  finns även en informationstext om lärosätet.<br>

### Kurser
På sidan för kurser läses kurser ut från en JSON-fil till en tabell.<br>
Det går att sortera kurser på kurskod, kursnamn, poäng och ämne i stigande och fallande ordning genom att klicka på rubrikerna i tabellen.<br>
Det går att filtrera kurser på kurskod och kursnamn genom skriva in text i ett inputfält, och det går att filtrera kurser på ämne genom att välja ett ämne i en rullgardinsmeny.<br>
Det går även att se antal kurser som visas på skärmen jämfört med samtliga kurser.<br>
I varje tabellrad finns en knapp för att spara en kurs till localStorage för att bygga ett ramschema.<br>

### Ramschema
På sidan för ramschema läses de sparade kurserna ut från localStorage och visas i en tabell.<br>
En räknare visar antalet kurser i ramschemat och en annan räknare visar det sammanräknade antalet högskolepoäng för kurserna i ramschemat.<br>
Det går också att radera kurser.<br>

### Komponenter
Komponenter har gjorts för header och footer. I headern finns länkar till navigationsmenyn.<br>
Komponenter har även gjorts för undersidorna startsidan, kurser, ramschema och sidan "not-found".<br>

### Interface
Ett interface har gjorts (Courses) för kursdata som hämtas från JSON-filen.

### Services
Två services har gjorts:<br>
CoursesService hämtar JSON-data med HttpClient genom metoden getCourses().<br>
ScheduleService hämtar data från localStorage genom metoden getCoursesFromLocalStorage.<br>
Här finns även metoden deleteCourseFromLocalStorage för att radera kurser från ramschemat.<br>

### Responsivitet
Webbplatsen är responsiv. För att tabellerna på sidorna kurser och ramschema ska fungera på en liten skärm har fälten för rubrikerna kod, poäng och kursplan dolts för mindre skärmar.<br>

### Publicering
Webbplatsen är publicerad på Netlify.
https://sali1502dt208gprojekt.netlify.app

### Validering
Webbplatsen är validerad för HTML och CSS i W3C valideringstjänster samt testad i webbläsarna Opera, Firefox och Chrome.<br>
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
