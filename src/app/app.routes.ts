import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MycoursesComponent } from './pages/mycourses/mycourses.component';

export const routes: Routes = [
    { path: "pages/home", component: HomeComponent, title: "Startsidan" },
    { path: "pages/courses", component: CoursesComponent, title: "Kurser" },
    { path: "pages/mycourses", component: MycoursesComponent, title: "Ramschema"},
    { path: "", redirectTo: "pages/home", pathMatch: "full" },
    { path: "404", component: NotFoundComponent },
    { path: "**", component: NotFoundComponent }
];
