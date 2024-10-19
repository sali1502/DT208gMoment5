/* DT208G TypeScript, Moment 5 - Projekt. Åsa Lindskog sali1502@student.miun.se */

// Interface för JSON-data som hämtas från en fil
export interface Course {
    courseCode: string,
    subjectCode: string,
    level: string,
    progression: string,
    courseName: string,
    points: number,
    institutionCode: string,
    subject: string,
    syllabus: string
}