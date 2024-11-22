package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.dao.IUsuarioDAO;
import com.example.backend.entidad.Usuario;

import jakarta.transaction.Transactional;

@Service
public class UsuarioService implements IUsuarioService {

    @Autowired
    private IUsuarioDAO usuarioDAO;

    @Override
    public List<Usuario> cargarUsuarios() {
        return (List<Usuario>)usuarioDAO.findAll();
    }

    @Transactional
    @Override
    public Usuario guardarUsuario(Usuario usuario) {
        return usuarioDAO.save(usuario);
    }

    @Override
    public Optional<Usuario> buscarUsuario(int id) {
        return usuarioDAO.findById(id);
    }

    @Override
    public void eliminarUsuario(int id) {
        usuarioDAO.deleteById(id);
    }
    
}
