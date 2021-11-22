import { Component } from '@angular/core';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent {

  constructor(public pedidoService: PedidoService) { }

}
