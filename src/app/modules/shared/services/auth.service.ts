import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable, empty, of } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//End Point
private url = `${environment.auth}/auth`;
userToken: string;

constructor(private http: HttpClient) { }

  /**
   * remueve el token almacenado
   */
  logout() {
    localStorage.removeItem('globalToken');
  }
  /**
   * autentifica al usuario
   * @param usuario: instancia que almacena los datos del usuario
   */
  login(usuario: UserModel) {
    console.log("entro a login");
    const AUTHDATA = {
      ...usuario
    };
    return this.http.post(this.url, AUTHDATA, { observe: 'response' })
      .pipe(
        map(
          (resp:any) => {
            
            const token = resp.body;
            // console.log(TOKEN);
            this.saveUserToken(token);
            return resp;
          },
      ),
      catchError((err, caught) => {
        return of(err);
      })
    );
  }

    /**
   * Almacena el token en el localStorage
   * @param idToken: token del usuario
   */
  private saveUserToken(idToken: string) {
    localStorage.setItem('globalToken', idToken);
    this.getUserToken();
  }

    /**
   * Obtiene el token del usuario almacenado en el localstorage
   * @returns retorna el token del usuario
   */
  private getUserToken() {
    if (localStorage.getItem('globalToken')) {
      this.userToken = localStorage.getItem('globalToken');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  /**
   * Verifica si esta auntentificado el usuario
   * @returns retorna si esta auntentificado o no
   */
  public isAuthenticated(): boolean {
    // console.log('today');
    // console.log(new Date());
    // console.log(this.getUserToken());
    if (this.getUserToken().length < 2) {
      // console.log('token less than 2');
      return false;
    }
    if (this.getTokenExpirationDate(this.getUserToken()) <= new Date()) {
      console.log('tdate');
      return false;
    } else {
      console.log('true');
      return true;
    }

  }

    /**
   * Obtiene la fecha en que expira el token del usuario
   * @param token : token del usuario
   * @returns retorna la fecha de expiracion
   */
  private getTokenExpirationDate(token: string): Date {

    const DECODED = jwt_decode(token);

    if (DECODED.exp === undefined) {
      return null;
    }

    const DATE = new Date(0);

    DATE.setUTCSeconds(DECODED.exp);

    console.log('expDate');
    console.log(DATE);
    return DATE;
  }


  public getOptions(): any {
    const httpOptions = new HttpHeaders({
        // 'Content-Type':  'application/json',
        Authorization: 'Bearer ' + this.userToken,
        // 'Access-Control-Allow-Origin': '*',
        // Accept: 'application/json'
      });
 
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     Authorization: 'Bearer ' + this.userToken,
    //     // 'Access-Control-Allow-Origin': '*',
    //     // Accept: 'application/json'
    //   }),
    //   observe: 'response'
    // };
    return httpOptions;
  }

}

