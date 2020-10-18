import { Validators, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class MatchPassword implements Validators {

  validate(formGoup: FormGroup) {
    const { password, passwordConfirmation } = formGoup.value;
    if(password === passwordConfirmation) {
      return null;
    }
    return { passwordsDontMatch: true};
  }
} 
