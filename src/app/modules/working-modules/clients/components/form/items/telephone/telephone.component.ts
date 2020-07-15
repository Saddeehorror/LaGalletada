import { Component, OnInit, Input } from '@angular/core';
import { FormArray, Validators, Form, FormBuilder, FormGroup } from '@angular/forms';
import { FormValidators } from '../../../../../../../classes/formValidators';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements OnInit {
@Input() parentform;
@Input() validFormBySubmit;
office = false;
telephoneType= [
  {label:'-',value:null},
  {label:'Casa',value:'home'},
  {label:'Oficina',value:'office'},
  {label:'Movil',value:'movil'},
]
  constructor(private fb: FormBuilder, public val: FormValidators) { }

  ngOnInit() {
    this.add_telephone()
  }

  add_telephone(){
    let emails = this.parentform.get("telephone") as FormArray;
    emails.push(this.createTelephone());
  }

  createTelephone():FormGroup{
    return this.fb.group({
      telephoneType:["",Validators.required],
      telephoneNumber:["",Validators.required],
      extension:[""]
    })
  }

  removeTelephone(index){
    this.parentform['controls'].telephone['controls'].splice(index,1);
    console.log(index);
  }

  telephoneTypeSelected(event){
    if (event.value === 'office') {
      this.office = true;
    }else{
      this.office = false;
    }
  }

}
