import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
}
)

export class FormValidators {

      /* validaciones en el formulario*/
   validRequired(form, name): boolean {
    return this.control(form, name).errors.required;
  }

  valid(form, name,itsinvalid:boolean): boolean {
    return (!this.control(form, name).valid && this.control(form, name).dirty) ||
      (!this.control(form, name).valid && this.control(form, name).touched) ||
      (this.control(form, name).untouched && itsinvalid);
  }

 control(form,name) {
    if (form.get(name).errors) {
        return form.get(name);
      }else{
        return false;
      }
 }

}
