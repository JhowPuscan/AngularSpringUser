package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entidad.Usuario;
import com.example.backend.service.IUsuarioService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class UsuarioController {

    @Autowired
    private IUsuarioService usuarioService;

    @GetMapping("/usuarios")
    public List<Usuario> listar(){
        return usuarioService.cargarUsuarios();
    }

    @PostMapping("/usuario")
    public ResponseEntity<Usuario> guardar(@RequestBody Usuario usuario){
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.guardarUsuario(usuario));
    }

    @PutMapping("/usuario/{id}")
    public ResponseEntity<Usuario> actualizar(@PathVariable int id, @RequestBody Usuario usuario){
        Optional<Usuario> usuarioBuscado = usuarioService.buscarUsuario(id);
        if(usuarioBuscado.isPresent()){
            Usuario usuarioBD = usuarioBuscado.get();
            usuarioBD.setNombre(usuario.getNombre());
            usuarioBD.setApellidos(usuario.getApellidos());
            usuarioBD.setCorreo(usuario.getCorreo());
            usuarioBD.setUsername(usuario.getUsername());
            usuarioBD.setPassword(usuario.getPassword());
            return ResponseEntity.ok(usuarioService.guardarUsuario(usuarioBD));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/usuario/{id}")
    public ResponseEntity<?> eliminar(@PathVariable int id){
        Optional<Usuario> usuarioBuscado = usuarioService.buscarUsuario(id);
        if(usuarioBuscado.isPresent()){
            usuarioService.eliminarUsuario(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
