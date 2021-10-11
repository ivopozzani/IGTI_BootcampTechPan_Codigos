import { Injectable } from '@angular/core';

interface ItemToBuy {
  categoria: string;
  descricao: string;
  preco: number;
}

@Injectable({
  providedIn: 'root',
})
export class BuyList {
  buyList: ItemToBuy[] = [];
  total: number = 0;

  add(item: ItemToBuy) {
    this.buyList.push(item);
    this.total = this.total + item.preco;
    console.log(this.buyList);
    console.log(this.total);
  }

  clear() {
    this.buyList = [];
    this.total = 0;
  }
}
