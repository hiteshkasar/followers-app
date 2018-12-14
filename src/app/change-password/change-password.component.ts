import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  // form: FormGroup;
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.matchOldPassword),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, PasswordValidators.passwordsShouldMatch1);
  constructor(fb: FormBuilder) {
    // this.form = fb.group({
    //   oldPassword: ['', Validators.required, PasswordValidators.matchOldPassword],
    //   newPassword: ['', Validators.required],
    //   confirmPassword: ['', Validators.required]
    // }, { validator: PasswordValidators.passwordsShouldMatch1});
  }

  ngOnInit() {
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
