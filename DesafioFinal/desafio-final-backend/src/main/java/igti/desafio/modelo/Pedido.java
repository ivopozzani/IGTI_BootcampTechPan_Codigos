package igti.desafio.modelo;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OrderBy;
import javax.persistence.SequenceGenerator;

@Entity(name = "pedido")
public class Pedido {

	public static String SITUACAO_AGUARDANDO = "Aguardando";
	public static String SITUACAO_EM_PREPARACAO = "Em preparação";
	public static String SITUACAO_SAIU_PARA_ENTREGA = "Saiu para entrega";
	public static String SITUACAO_ENTREGUE = "Entregue";

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pedido_seq")
	@SequenceGenerator(name = "pedido_seq", sequenceName = "pedido_seq", allocationSize = 1)
	@Column(name = "id_pedido")
	private Integer id;

	@Column(name = "data_hora")
	private LocalDateTime dataHora;

	@Column(name = "situacao")
	private String situacao;

	@ElementCollection
	@CollectionTable(name = "item_pedido", joinColumns = { @JoinColumn(name = "id_pedido") })
	@OrderBy("produto")
	private List<ItemPedido> itens = new ArrayList<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDateTime getDataHora() {
		return dataHora;
	}

	public void setDataHora(LocalDateTime dataHora) {
		this.dataHora = dataHora;
	}

	public String getSituacao() {
		return situacao;
	}

	public void setSituacao(String situacao) {
		this.situacao = situacao;
	}

	public List<ItemPedido> getItens() {
		return itens;
	}

	public void setItens(List<ItemPedido> itens) {
		this.itens = itens;
	}

}
