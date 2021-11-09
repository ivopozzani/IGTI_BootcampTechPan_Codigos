package com.pozzani.vendas.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.pozzani.vendas.entities.Cliente;
import com.pozzani.vendas.repositories.ClienteRepository;

@Service
public class ClienteService implements ClienteRepository {
	
	List<Cliente>lista=new ArrayList<>();
	
	@Override
	public List<Cliente> findAll() {
		
		return null;
	}

	@Override
	public Cliente saveCliente() {
		Cliente c1=new Cliente(0, "", "");
		c1.setId(1);
		c1.setNome("Ricardo");
		c1.setDn("11/03/1989");
		
		Cliente c2=new Cliente(0, "", "");
		c2.setId(2);
		c2.setNome("Marilía");
		c2.setDn("21/05/1999");
		
		lista=Arrays.asList(c1,c2);
		return null;
	}

}
