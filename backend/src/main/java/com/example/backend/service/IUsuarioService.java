package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import com.example.backend.entidad.Usuario;

public interface IUsuarioService {
    public List<Usuario> cargarUsuarios();
    public Usuario guardarUsuario(Usuario usuario);
    public Optional<Usuario> buscarUsuario(int id);
    public void eliminarUsuario(int id);
}
