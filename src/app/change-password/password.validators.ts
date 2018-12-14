import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static matchOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      if (control.value === '1234') {
        resolve(null);
      } else {
        resolve({invalidOldPassword: true});
      }
    });
  }

  static passwordsShouldMatch1(control: AbstractControl) {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');
    if (newPassword.value !== confirmPassword.value) {
      return {passwordsShouldMatch: true};
    }

    return null;
  }
}
