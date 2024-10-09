/* DT208G TypeScript, Moment 5 - Projekt. Åsa Lindskog sali1502@student.miun.se */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent {
  // Egenskaper
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  subjects: string[] = [];
  inputValue: string = "";
  selectedSubject: string = "";
  loading: boolean = true;
  errorMessage: string = "";
  isAscending: boolean = true;
  notificationMessage: string = "";

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.filteredCourses = courses;
      this.extractSubjects();
      this.loading = false;
    });
  }

  // Hämta ämne från kurslistan
  extractSubjects(): void {
    const subjectSet = new Set(this.courses.map(course => course.subject));
    this.subjects = Array.from(subjectSet);
  }

  // Metod för att filtrera kurser baserat på inputfält och rullgardinsmeny
  filterCourses(): void {
    this.filteredCourses = this.courses.filter((course) => {
      const matchesInput = course.courseName.toLowerCase().includes(this.inputValue.toLowerCase()) ||
        course.courseCode.toLowerCase().includes(this.inputValue.toLowerCase());
      const matchesSubject = this.selectedSubject === "" || course.subject === this.selectedSubject;

      return matchesInput && matchesSubject;
    });

    // Kontroll för filtrering med felmeddelande
    if (this.filteredCourses.length === 0 && this.inputValue) {
      this.errorMessage = 'Inga kurser kunde hittas...';
    } else {
      this.errorMessage = '';
    }
  }

  filterBySubject(): void {
    this.filterCourses();
  }

  // Metod för att sortera efter kurskod, stigande och fallande ordning
  sortCode(): void {
    this.filteredCourses.sort((a, b) => {
      if (this.isAscending) {
        if (a.courseCode < b.courseCode) return -1;
        if (a.courseCode > b.courseCode) return 1;
        return 0;
      } else {
        if (a.courseCode > b.courseCode) return -1;
        if (a.courseCode < b.courseCode) return 1;
        return 0;
      }
    });
    this.isAscending = !this.isAscending;
  }

  // Metod för att sortera efter kursnamn, stigande och fallande ordning
  sortCourseName(): void {
    this.filteredCourses.sort((a, b) => {
      if (this.isAscending) {
        if (a.courseName < b.courseName) return -1;
        if (a.courseName > b.courseName) return 1;
        return 0;
      } else {
        if (a.courseCode > b.courseCode) return -1;
        if (a.courseCode < b.courseCode) return 1;
        return 0;
      }
    });
    this.isAscending = !this.isAscending;
  }

  // Metod för att sortera efter poäng, stigande och fallande ordning
  sortPoints(): void {
    this.filteredCourses.sort((n1, n2) => {
      if (this.isAscending) {
        if (n1.points < n2.points) return -1;
        if (n1.points > n2.points) return 1;
        return 0;
      } else {
        if (n1.points > n2.points) return -1;
        if (n1.points < n2.points) return 1;
        return 0;
      }
    });
    this.isAscending = !this.isAscending;
  }

  // Metod för att sortera efter ämne, stigande och fallande ordning
  sortSubject(): void {
    this.filteredCourses.sort((a, b) => {
      if (this.isAscending) {
        if (a.subject < b.subject) return -1;
        if (a.subject > b.subject) return 1;
        return 0;
      } else {
        if (a.courseCode > b.courseCode) return -1;
        if (a.courseCode < b.courseCode) return 1;
        return 0;
      }
    });
    this.isAscending = !this.isAscending;
  }

  // Lägg till och spara kurser i Local Storage 
  addCourseToLocalStorage(course: Course): void {
    let savedCourses = localStorage.getItem("savedCourses");

    let courses: Course[] = savedCourses ? JSON.parse(savedCourses) : [];

    // Finns kursen redan i Local Storage?
    const courseExists = courses.some(savedCourse => savedCourse.courseCode === course.courseCode);

    if (!courseExists) {
      courses.push(course);
      localStorage.setItem("savedCourses", JSON.stringify(courses));
      this.notificationMessage = `${course.courseName} har lagts till i ditt ramschema`;
    } else {
      this.notificationMessage = `${course.courseName} finns redan i ditt ramschema`;
    }
  }
}