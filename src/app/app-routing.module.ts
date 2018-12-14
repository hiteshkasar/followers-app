import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';

import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ContactFormPracticeComponent } from './contact-form-practice/contact-form-practice.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { MyFollowersComponent } from './my-followers/my-followers.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'input-form', loadChildren: './input-form/input-form.module#InputFormModule' },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'contact-form', component: ContactFormPracticeComponent },
  { path: 'course', loadChildren: './input-form/input-form.module#InputFormModule' },
  { path: 'sign-up', component: SignupFormComponent },
  { path: 'new-course-form', component: NewCourseFormComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'posts', component: PostsComponent},
  { path: 'home', component: HomeComponent },
  { path: 'followers/:id', component: MyFollowersComponent },
  { path: 'followers/:id/:username', component: MyProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
  // { path: '**', redirectTo: 'input-form' }        commented to display not found component
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
