package igti.desafio.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import igti.desafio.modelo.Produto;

@RestController
@Transactional
public class ProdutoController {

	@GetMapping("/cardapio")
	public List<Produto> listaProdutos() {
		
		// TODO: Fazer a implementação real, buscando a lista de produtos do banco de dados. 
		Produto produto = new Produto();
		produto.setId(1);
		produto.setCategoria("Sanduíches");
		produto.setDescricao("Produto fake, busque os dados do banco");
		produto.setPreco(20.0);
		return Collections.singletonList(produto);
	} 
}
