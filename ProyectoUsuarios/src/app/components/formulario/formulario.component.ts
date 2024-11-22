import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
    @Input() usuario:Usuario
    @Output() usuarioEnvia:EventEmitter<Usuario> = new EventEmitter()

    constructor(){
      this.usuario = new Usuario()
    }

    enviarUsuario(){
      this.usuarioEnvia.emit(this.usuario)
      this.limpiarFormulario()
    }

    limpiarFormulario(){
      this.usuario = new Usuario()
    }
}
