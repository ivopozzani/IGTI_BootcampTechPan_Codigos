package com.pozzani.vendas.entities;

public class Cliente {
	private int id;
	private String nome;
	private String dn;
	
	public Cliente(int id, String nome, String dn) {
		this.id = id;
		this.nome = nome;
		this.dn = dn;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDn() {
		return dn;
	}

	public void setDn(String dn) {
		this.dn = dn;
	}
	
	
}
