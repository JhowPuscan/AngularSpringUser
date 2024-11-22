import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  @Input() listaUsuarios:Usuario[] = []

  @Output() idUsuarioEnvia = new EventEmitter()
  @Output() usuarioEditarEnvia = new EventEmitter()

  seleccionarUsuario(usuario:Usuario){
    this.usuarioEditarEnvia.emit(usuario);
  }

  eliminarUsuario(id:number){
      const rpta = confirm("¿Desea eliminar al usuario?")
      if(rpta){
        this.idUsuarioEnvia.emit(id)
      }
  }
}
