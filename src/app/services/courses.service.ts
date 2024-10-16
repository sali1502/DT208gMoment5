/* DT208G TypeScript, Moment 5 - Projekt. Åsa Lindskog sali1502@student.miun.se */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  // Egenskaper
  url: string = "https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json";

  constructor(private http: HttpClient) { }

  // Metod för att hämta kurser
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}

