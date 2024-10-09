import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleService } from '../../services/schedule.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-mycourses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  // Hämta kurser från Local Storage
  loadCourses(): void {
    this.courses = this.scheduleService.getCoursesFromLocalStorage();
  }

  // Radera kurser från Local Storage
  deleteCourse(courseCode: string): void {
    this.scheduleService.deleteCourseFromLocalStorage(courseCode);
    this.loadCourses();
  }
}
