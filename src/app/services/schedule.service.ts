import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private storageKey = 'savedCourses';

  constructor() { }

  // Metod för att hämta kurser till ramschema från Local Storage
  getCoursesFromLocalStorage(): Course[] {
    const savedCourses = localStorage.getItem(this.storageKey);
    return savedCourses ? JSON.parse(savedCourses) : [];
  }

  // Metod för att radera kurser i ramschema från Local Storage
  deleteCourseFromLocalStorage(courseCode: string): void {
    let courses = this.getCoursesFromLocalStorage();
    courses = courses.filter(course => course.courseCode !== courseCode);
    localStorage.setItem(this.storageKey, JSON.stringify(courses));
  }
}