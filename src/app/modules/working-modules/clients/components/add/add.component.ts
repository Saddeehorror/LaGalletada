import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/modules/shared/services/clients.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  header = {
    title : 'Agregar Clientes',
    subtitle:'Por favor, llena el siguiente formulario.'
  }
  show: boolean = false;

  constructor(private clientservice:ClientsService) { }

  ngOnInit() {
  }

  submit(event){
    this.show = true;
    // console.log(event);
        this.clientservice.createClient(event).subscribe(
      (response)=>{
        var that = this;

        setTimeout(()=>{ 
          that.show = false;
     }, 3000);
        
        console.log(response);
      }
    )
  }

}
