package igti.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import igti.desafio.modelo.Produto;

public interface ProdutoRepository  extends JpaRepository<Produto, Integer> {

}
