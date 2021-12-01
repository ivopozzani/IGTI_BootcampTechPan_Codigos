import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { PedidoService } from './pedido.service'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent {
  constructor(public pedidoService: PedidoService, private router: Router) {}

  realizaPedido() {
    this.pedidoService.realizaPedido().subscribe(pedido => {
      this.router.navigate(['/pedidos', pedido.id])
    })
  }
}
