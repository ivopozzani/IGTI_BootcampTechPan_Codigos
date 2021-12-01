package igti.desafio.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import igti.desafio.modelo.Pedido;
import igti.desafio.repository.PedidoRepository;

@RestController
public class PedidoController {
	
	@Autowired
	PedidoRepository pedidoRepository;
	
	@PostMapping("/pedidos")
	public Pedido realizaPedido(@RequestBody Pedido pedido) {
		
		pedido.setDataHora(LocalDateTime.now());
		pedido.setSituacao(Pedido.SITUACAO_AGUARDANDO);
		
		return pedidoRepository.save(pedido);
		
	}
		
	@GetMapping("/pedidos/{idPedido}")
	public Pedido obtemPedido(@PathVariable Integer idPedido) {
		return pedidoRepository.findById(idPedido).orElse(null);
		
	}

}