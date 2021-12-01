import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AcompanharPedidoComponent } from './acompanhar-pedido/acompanhar-pedido.component'
import { AtualizarPedidoComponent } from './atualizar-pedido/atualizar-pedido.component'
import { CardapioComponent } from './cardapio/cardapio.component'
import { PedidoComponent } from './pedido/pedido.component'
import { PedidosComponent } from './pedidos/pedidos.component'

const routes: Routes = [
  { path: 'cardapio', component: CardapioComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'pedidos/:idPedido', component: AcompanharPedidoComponent },
  { path: 'pedidos/:idPedido/atualizar', component: AtualizarPedidoComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: '', redirectTo: 'cardapio', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
