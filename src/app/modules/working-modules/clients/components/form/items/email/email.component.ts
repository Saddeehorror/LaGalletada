import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidators } from '../../../../../../../classes/formValidators';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
@Input() parentform;
@Input() validFormBySubmit;
  constructor(private fb: FormBuilder, public val: FormValidators) { }

  ngOnInit() {
    this.add_email();
  }

  add_email(){
    let emails = this.parentform.get("email") as FormArray;
    emails.push(this.createEmail());
  }

  createEmail():FormGroup{
    return this.fb.group({
      email:["",Validators.required]
    })
  }

  removeEmail(index){
    this.parentform['controls'].email['controls'].splice(index,1);
    console.log(index);
  }


}
