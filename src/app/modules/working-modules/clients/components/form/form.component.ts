import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientsService } from 'src/app/modules/shared/services/clients.service';
import { FormValidators } from '../../../../../classes/formValidators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() formdatavalue: EventEmitter<any> = new EventEmitter();
  formdata:FormGroup
  genders;
  es;
  telephoneType = [
    {label:'-',value:null},
    {label:'Casa',value:'home'},
    {label:'Oficina',value:'office'},
    {label:'Movil',value:'movil'},
  ]
  validFormBySubmit = false;
  office = false;

  center: google.maps.LatLngLiteral

  constructor(private fb:FormBuilder, public val: FormValidators) {
    this.genders = [
      {label: '', icon:'fa fa-female', value: 'F'},
      {label: '',icon:'fa fa-male', value: 'M'}
    ]
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","M","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }

    this.formdata = this.fb.group({
      name:['',Validators.required],
      fLastName:['',Validators.required],
      mLastName:[''],
      gender:['F',Validators.required],
      birthday:[''],
      email:this.fb.array([]),
      telephone:this.fb.array([]),
      address:this.fb.group({
        cp:[''],
        street:[''],
        suburb:[''],
        extNumber:[''],
        intNumber:[''],
        city:[''],
        state:[''],
        country:[''],
        // coords:[false,Validators.required],
        lat:[''],
        lng:[''],
        // latlng:['']
      })

    })
    // this.center = {
    //   lat: 22.250342,
    //   lng: -97.859515,
    // }
   }
  
  ngOnInit() {
  }

  telephoneTypeSelected(event){
    if (event.value === 'office') {
      this.office = true;
    }else{
      this.office = false;
      this.formdata['controls'].extension.reset();
    }
  }
  submit(){
    // console.log(this.formdata.value);
    // console.log(this.formdata);
    if (this.formdata.invalid) {
      this.validFormBySubmit = true; 
      return
    }
    console.log(this.formdata.value);
    this.formdatavalue.emit(this.formdata.value)
    // this.clientservice.createClient(this.formdata.value).subscribe(
    //   (response)=>{
    //     console.log(response);
    //   }
    // )
  }

  mapinfo(event:google.maps.MouseEvent){
    console.log(event);
  }
}
