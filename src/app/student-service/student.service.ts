import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export type Student = {
  id: number | null,
  name: string,
  surname: string,
  birthDate: string,
  indexNumber: number,
  gradeAverage: number
}
let currentTime = new Date();
let dd = String(currentTime.getDate()).padStart(2, '0');
let mm = String(currentTime.getMonth() + 1).padStart(2, '0');
let yy = String(currentTime.getFullYear());
let today = yy + '-' + mm +'-' + dd;
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: Student[] = [];
  constructor(private http: HttpClient) {

  }

  public getDefaultStudentModel(): Student{
    return Object.assign({}, {
      id: null,
      name: '',
      surname: '',
      birthDate: today,
      indexNumber: 0,
      gradeAverage: 0
    })
  }
  public refreshStudentList(): void{
    this.http.get('http://localhost:8080/api/student')
      .subscribe(responseData => {
        let studentsFromResponse = responseData as Student[];
        this.studentList = studentsFromResponse;
      })
  }
  add(student: Student): Observable<Object>{
    return this.http.post('http://localhost:8080/api/student', student);
  }
  delete(id: number): Observable<Object>{
    return this.http.delete('http://localhost:8080/api/student/' + id);

  }
}

