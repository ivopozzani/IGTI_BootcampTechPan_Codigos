import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Produto } from '../produto'
import { PedidoService } from '../pedido/pedido.service'

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  produtos: Produto[] = []
  constructor(public pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.buscaProdutos().subscribe(produtos => {
      this.produtos = produtos
    })
  }
}
