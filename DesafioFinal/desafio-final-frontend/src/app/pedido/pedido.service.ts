import { Injectable } from '@angular/core';
import { Produto } from '../produto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  itens: { produto: Produto, quantidade: number }[] = [];

  adicionaProduto(produto: Produto) {
    let item = this.itens.find(item => item.produto.descricao === produto.descricao);
    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({ produto, quantidade: 1 });
    }
  }

  limpaPedido() {
    this.itens = [];
  }

  get valorTotal() {
    let valor = 0;
    for (const item of this.itens) {
      valor += item.produto.preco * item.quantidade;
    }
    return valor;
  }

  get quantidadeTotal() {
    let quantidade = 0;
    for (const item of this.itens) {
      quantidade += item.quantidade;
    }
    return quantidade;
  }
}
