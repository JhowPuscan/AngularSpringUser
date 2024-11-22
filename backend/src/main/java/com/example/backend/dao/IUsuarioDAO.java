package com.example.backend.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.backend.entidad.Usuario;

public interface IUsuarioDAO extends CrudRepository<Usuario, Integer> {
    
}
