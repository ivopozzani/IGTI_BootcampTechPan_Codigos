import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Pedido } from '../pedido'
import { PedidoService } from '../pedido/pedido.service'

@Component({
  selector: 'app-acompanhar-pedido',
  templateUrl: './acompanhar-pedido.component.html',
  styles: []
})
export class AcompanharPedidoComponent implements OnInit {
  idPedido: number = 0
  pedido: Pedido | null = null
  constructor(
    private route: ActivatedRoute,
    public pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.idPedido = parseInt(paramMap.get('idPedido') || '0')
      this.carregaPedido()
    })
  }

  carregaPedido() {
    this.pedidoService.carregaPedido(this.idPedido).subscribe(pedido => {
      this.pedido = pedido
    })
  }
}
