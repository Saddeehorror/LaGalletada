import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/modules/shared/services/clients.service';
import { Dates } from 'src/app/classes/dates';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  header = {
    title : 'GA016',
    subtitle:'Listado de clientes.'
  }
  sexTypes;
  sexFilter = 'all';
  
  
  clients;
  
    constructor(private clientservice:ClientsService, public dates:Dates) {
    this.get_clients();
  
    this.clients = [
      // {birthday:true,id:'GA0001', name:'Jorge Alberto',f_LastN:'Pérez', m_LastN:'Ponce', F:true,bday:'03/07/1980',email:'ldg.ponce@gmail.com',movil:true,telphone:'(833)3410280',ext:'',date:'17/06/2020',time:'17:12:32'}
    ]
  
      this.sexTypes = [
        {label: '', icon:'fa fa-female', value: 'female'},
        {label: '',icon:'fa fa-transgender', value: 'all'},
        {label: '',icon:'fa fa-male', value: 'male'}
      ]
    }
  
    
  
  
    ngOnInit() {
    }
  
    // get_clients(){
    //   this.clientservice.getClients().subscribe(
    //     (Response)=>{
    //       this.clients = Response;
    //       console.log(Response);
    //     }
    //   )
    // }
  
  
    get_clients(){
     this.clientservice.getClients().subscribe(
        (array: any) =>{
          return array.map(
            (row: any) =>{
              row = {
                id:row.id,
                fullname:row.name+" "+row.flastname+" "+row.mlastname,
                birthday:row.birthday,
                gender:row.gender,
                createDay:row.createDay,
                createTime:row.createTime,
                }
                this.clients.push(row);
            }   
      )
    }
      )
  }
      // getClients(){
    //   return this.http.get(this.url(),this.authService.getOptions()).pipe(
    //     map(
    //       (array: any[]) =>{
    //         return array.map(
    //           (row: any) =>{
    //             return {
    //               id:row.id,
    //               fullname:row.name+" "+row.flastname+" "+row.mlastname,
    //               // flastname:row.flastname,
    //               // mlastname:row.mlastname,
    //               birthday:row.birthday,
    //               gender:row.gender,
    //               createDay:row.createDay,
    //               createTime:row.createTime,
    //             }
    //           }
    //         )
    //       }
    //     )
    //   )
    // }
  
  
  
}
