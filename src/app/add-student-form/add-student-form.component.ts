import { Component, OnInit } from '@angular/core';
import {Student, StudentService} from "../student-service/student.service";
import {Router} from "@angular/router";
import Utils from "../Utils";

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {
  student: Student
  constructor(private router : Router,
              private studentService: StudentService,
              private utils: Utils
              ) {
    this.student = studentService.getDefaultStudentModel();
  }

  ngOnInit(): void {
  }
  addStudent(): void{
    this.studentService.add(this.student)
      .subscribe({
        next: () => {
          this.utils.getSnackBar('Student added successfully.');
          this.router.navigate(['/students']);
          console.log(this.student);
        },
    error: (e) => {
          this.utils.getSnackBar('Failed to add student. ' + e.message)
    }
      })
  }

}
