/* DT208G TypeScript, Moment 5 - Projekt. Åsa Lindskog sali1502@student.miun.se */

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: "pages/home", component: HomeComponent, title: "Startsidan" },
    { path: "pages/courses", component: CoursesComponent, title: "Kurser" },
    { path: "pages/my-courses", component: MyCoursesComponent, title: "Ramschema" },
    { path: "", redirectTo: "pages/home", pathMatch: "full" },
    { path: "404", component: NotFoundComponent },
    { path: "**", component: NotFoundComponent }
];
