import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SepomexService {

constructor(private http: HttpClient) { }
url(query: string = '' ) {
  return environment.sepomex + '' + query;
}

getCpData(cp): Observable<any> {
  return this.http.get(this.url('query/info_cp/'+cp)).pipe(
    map(
      // (data:any[]) => {
      //   console.log(data);
      //   return data;
      // }

      (data:any[]) => 
        data.map(
          (row: any) => {
            return { 
              asentamiento : row.response.asentamiento,
              ciudad: row.response.ciudad,
              cp: row.response.cp,
              estado: row.response.estado,
              municipio: row.response.municipio,
              pais: row.response.pais,
              tipo_asentamiento: row.response.tipo_asentamiento
                     };
          }
        )

       ),
       catchError((err, caught) => {
         return of(err);
       }));
    }


}
