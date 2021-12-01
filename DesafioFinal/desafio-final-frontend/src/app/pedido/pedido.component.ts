import { Component } from '@angular/core'
import { PedidoService } from './pedido.service'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent {
  constructor(public pedidoService: PedidoService) {}

  realizaPedido() {
    this.pedidoService.realizaPedido().subscribe(pedido => {
      console.log(pedido)
    })
  }
}
