import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private listaUsuarios:Usuario[] = []

  constructor(private http:HttpClient) { }

  cargarUsuarios():Observable<Usuario[]>{
    //return of(this.listaUsuarios)
    return this.http.get<Usuario[]>('http://localhost:8080/api/usuarios')
  }

  registrarUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/api/usuario', usuario)
  }

  actualizarUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>('http://localhost:8080/api/usuario/'+usuario.id, usuario)
  }

  eliminarUsuario(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8080/api/usuario/'+id)
  }
}
