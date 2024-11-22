import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { TablaComponent } from '../tabla/tabla.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [TablaComponent, FormularioComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {
  listaUsuarios:Usuario[] = []
  usuarioSeleccionado:Usuario

  constructor(private usuarioServicio:UsuarioService){
    this.usuarioSeleccionado = new Usuario()
  }

  ngOnInit(): void {
      this.usuarioServicio.cargarUsuarios().subscribe(
        usuarios => this.listaUsuarios = usuarios
      )
  }

  agregarUsuario(usuario:Usuario){
    if(usuario.id > 0){
      //modificar
      this.usuarioServicio.actualizarUsuario(usuario).subscribe(usuarioActualizado =>{
        this.listaUsuarios = this.listaUsuarios.map(
          item => (item.id == usuarioActualizado.id) ? {...usuarioActualizado} :item)
      })
      /*this.listaUsuarios = this.listaUsuarios.map(
          item => (item.id == usuario.id) ? {...usuario} : item)*/
    }else{
      //nuevo
      this.usuarioServicio.registrarUsuario(usuario).subscribe(usuarioNuevo =>{
        this.listaUsuarios = [...this.listaUsuarios, {...usuarioNuevo}]
      })
      //this.listaUsuarios = [...this.listaUsuarios, {...usuario}]
    }
  }

  seleccionarUsuario(usuario:Usuario){
    this.usuarioSeleccionado = {...usuario}
  }

  eliminarUsuario(id:number){
    this.usuarioServicio.eliminarUsuario(id).subscribe(() => {
      this.listaUsuarios = this.listaUsuarios.filter(item => item.id != id)
    })
  }
}
