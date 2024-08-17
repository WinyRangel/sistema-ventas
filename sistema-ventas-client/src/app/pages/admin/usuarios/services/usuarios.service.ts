import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../../../shared/models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  getUserById(cveUsuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${cveUsuario}`);
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/register`, usuario);
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/${usuario.cveuser}`, usuario);
  }  

  deleteUsuario(cveuser: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${cveuser}`);
  }
}
