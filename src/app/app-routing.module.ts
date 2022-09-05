import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {StudentsListComponent} from "./students-list/students-list.component";
import {AddStudentFormComponent} from "./add-student-form/add-student-form.component";

const routes: Routes = [
  {path:"",redirectTo: "home", pathMatch: "full"},
  {path:"home", component: HomepageComponent},
  {path:"students", component: StudentsListComponent},
  {path:"add-student", component: AddStudentFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
