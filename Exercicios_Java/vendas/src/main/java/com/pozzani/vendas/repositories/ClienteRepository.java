package com.pozzani.vendas.repositories;


import java.util.List;

import org.springframework.stereotype.Repository;

import com.pozzani.vendas.entities.Cliente;

@Repository
public interface ClienteRepository{
	
	public List<Cliente>findAll();
	
	public Cliente saveCliente();
 
}
