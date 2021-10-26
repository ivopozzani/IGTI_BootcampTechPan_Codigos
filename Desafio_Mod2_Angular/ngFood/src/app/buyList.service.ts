import { Injectable } from '@angular/core';
import { IProduto } from './produto';

interface IItemPedido {
  quantidade: number;
  produto: IProduto;
}

@Injectable({
  providedIn: 'root',
})
export class BuyList {
  private buyList: IItemPedido[] = [];

  add(produto: IProduto) {
    const item = this.buyList.find(
      (item) => item.produto.descricao === produto.descricao
    );
    if (item) {
      item.quantidade++;
    } else {
      this.buyList.push({
        quantidade: 1,
        produto,
      });
    }
  }

  getQuantidadeTotal(): number {
    let total = 0;
    for (const item of this.buyList) {
      total += item.quantidade;
    }
    return total;
  }

  getValorTotal(): number {
    let total = 0;
    for (const item of this.buyList) {
      total += item.quantidade * item.produto.preco;
    }
    return total;
  }

  getItens() {
    return this.buyList;
  }

  clear() {
    this.buyList = [];
  }
}
