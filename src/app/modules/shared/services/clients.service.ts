import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ClientModel } from '../models/Request/client.model.request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

constructor(private http: HttpClient, private authService: AuthService) { }

private url(query: string = '' ) {
  return environment.auth + '/clients'+query;
}

// private url = `${environment.auth}/clients`;
// userToken: string;


createClient(data) {
  const clientModel:ClientModel = this.clientModel(data);
  console.log(clientModel);
  return this.http.post(this.url(), clientModel, this.authService.getOptions()).pipe(
    map(
      (resp:any) => {
        console.log(resp);
          // alert("cliente guardado");
          const token = resp.body;
          // console.log(TOKEN);
          return resp;
        },
    ),
    catchError((err, caught) => {
      return of(err);
    })
  );
}


// createClient(data) {
//   const clientModel:ClientModel = this.clientModel(data);
//   console.log(clientModel);
//   return this.http.post(this.url(), clientModel, { observe: 'response' })
//     .pipe(
//       map(
//         (resp:any) => {
//           // alert("cliente guardado");
//           const token = resp.body;
//           // console.log(TOKEN);
//           return resp;
//         },
//     ),
//     catchError((err, caught) => {
//       return of(err);
//     })
//   );
// }

clientModel(data):ClientModel{
const email = [];
const telephone = [];

  for (let index = 0; index < data.email.length; index++) {
    email.push({EMAIL: data.email[index].email});
  }

  for (let index = 0; index < data.telephone.length; index++) {
    telephone.push(
      { EXTENSION: data.telephone[index].extension,
        TELEPHONENUMBER: data.telephone[index].telephoneNumber,
        TELEPHONETYPE: data.telephone[index].telephoneType
      });
  }

  return  {
    NAME: data.name,
    FLASTNAME: data.fLastName,
    MLASTNAME: data.mLastName,
    GENDER: data.gender,
    BIRTHDAY: data.birthday,
    ADDRESS: {
      CITY: data.address.city,
      COUNTRY: data.address.country,
      CP: data.address.cp,
      EXTNUMBER: data.address.extNumber,
      INTNUMBER: data.address.intNumber,
      STATE: data.address.state,
      STREET: data.address.street,
      SUBURB: data.address.suburb.name,
      LAT:data.address.lat,
      LNG:data.address.lng,
    },
    EMAIL : email,
    TELEPHONE : telephone
  }
}


  // getClients(){
  //   return this.http.get(this.url, { observe: 'response' })
  //   .pipe(
  //     map(
  //       (resp:any) => {
  //         // alert("cliente guardado");
  //         const token = resp.body;
  //         // console.log(TOKEN);
  //         return resp.body;
  //       },
  //   ),
  //   catchError((err, caught) => {
  //     return of(err);
  //   })
  // );    
  // }
  getClients(){
    return this.http.get<any[]>(this.url(),this.authService.getOptions());
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
