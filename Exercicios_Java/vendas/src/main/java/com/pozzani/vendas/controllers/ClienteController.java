package com.pozzani.vendas.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import com.pozzani.vendas.services.ClienteService;
import com.pozzani.vendas.entities.Cliente;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

	@Autowired
	private ClienteService clienteService;
	
	@GetMapping
	public ResponseEntity<List<Cliente>>findAll(){
		clienteService.saveCliente();
		List<Cliente>lista=clienteService.findAll();
		return ResponseEntity.ok(lista);
	}
}
