import { Injectable } from '@angular/core';
import { IProduto } from './produto';

@Injectable({
  providedIn: 'root',
})
export class BuyList {
  buyList: IProduto[] = [];
  qntd: number[] = [];
  count: number = 0;
  total: number = 0;

  add(item: IProduto) {
    if (this.buyList.indexOf(item) == -1) {
      this.buyList.push(item);
      this.qntd.push(1);
      this.total = this.total + item.preco;
      this.count++;
    } else {
      const i = this.buyList.indexOf(item);
      this.qntd[i] = this.qntd[i] + 1;
      this.total = this.total + item.preco;
      this.count++;
    }
  }

  clear() {
    this.buyList = [];
    this.qntd = [];
    this.total = 0;
    this.count = 0;
  }
}
