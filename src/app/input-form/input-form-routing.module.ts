import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InputFormComponent } from './input-form.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { CourseFormAssignmentComponent } from '../course-form-assignment/course-form-assignment.component';
// import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";

const routes: Routes = [
  {
    path: '',
    component: InputFormComponent,
    children: [
      {
        path: '',
        component: ContactFormComponent
      },
      {
        path: 'form',
        component: CourseFormAssignmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputFormRoutingModule {}

export const inputFormRoutingComponents = [ InputFormComponent,
                                            ContactFormComponent,
                                            CourseFormAssignmentComponent
                                          ];
