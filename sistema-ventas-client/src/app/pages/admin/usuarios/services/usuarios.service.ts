import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Usuario } from '../../../../shared/models/usuario.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getUserById(cveUsuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${cveUsuario}`);
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url, {headers: {"requiereToken": "true"}})
    .pipe(catchError( (error)=> this.handleError(error)))
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/register`, usuario, {headers: {"requiereToken": "true"}})
    .pipe(catchError( (error)=> this.handleError(error)))
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/${usuario.cveuser}`, usuario, {headers: {"requiereToken": "true"}})
    .pipe(catchError( (error)=> this.handleError(error)))

  }  

  deleteUsuario(cveuser: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${cveuser}`);
  }

  private handleError(error: any){
    console.log("error", error)
    var message = 'Ocurrio un error';
    if (error.error){
      message = error.message;
      if(error.error) message = error.error.message;
    }else message = 'Ocurrio un error'
    this.snackBar.open(message, '',{
      duration:3000
    })
    return throwError(()=> new Error(message));
  }
}


/**
 * constructor(private snackBar: MatSnackBar, private http: HttpClient){}
 * 
 * listarUsuario(){}
 *   private handleError(error: any){
    console.log("error", error)
    var message = 'Ocurrio un error';
    if (error.error){
      message = error.message;
      if(error.error) message = error.error.message;
    }else message = 'Ocurrio un error'
    this.snackBar.open(message, '',{
      duration:3000
    })
    return throwError(()=> new Error(message));
  }
 */