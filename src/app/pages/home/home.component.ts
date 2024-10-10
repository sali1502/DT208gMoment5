import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

/* Klass med array, konstruktor och metod */ 
export class HomeComponent {
  images: string[] = [
    "images/university.jpg",
    "images/students.jpg",
    "images/library.jpg",
    "images/park.jpg"
  ];

  currentImageIndex: number = 0;
  welcomeImage: string;

  constructor() {
    this.welcomeImage = this.images[this.currentImageIndex];
  }

  // Funktion för att växla mellan bilder
  changeImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.welcomeImage = this.images[this.currentImageIndex];
  }
}
