import {Component, OnInit} from '@angular/core';
import {Student, StudentService} from "../student-service/student.service";
import Utils from "../Utils";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  studentList: Student[] = [];
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'birthDate',
    'indexNumber',
    'gradeAverage',
    'deleteButton'
  ]

  constructor(public studentService: StudentService,
              private utils: Utils) {
  }

  ngOnInit(): void {
    this.studentService.refreshStudentList();
  }

  handleDelete(id: number): void {
    this.studentService.delete(id)
      .subscribe({
        next: () => {
          this.utils.getSnackBar('Student deleted successfully.');
          this.studentService.refreshStudentList();
        },
        error: (e) => {
          this.utils.getSnackBar('Failed to delete student. ' + e.message);
          this.studentService.refreshStudentList();
        }
      })

  }
}
