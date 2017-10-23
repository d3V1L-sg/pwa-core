import { Validators } from '@angular/forms';

export class UsernameValidation {

  private usernameMaxLength = 255;

  getValidations(value?: string) {
    return [
      value || '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$|^[a-zA-Z0-9.-_]*$/),
        Validators.maxLength(this.usernameMaxLength)
      ])
    ];
  }
}
