import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BuyList } from '../buyList.service';
import { IProduto } from '../produto';

@Component({
  selector: 'cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent implements OnInit {
  buyList: BuyList;
  constructor(private httpClient: HttpClient, buyList: BuyList) {
    this.buyList = buyList;
  }

  cardapio: IProduto[] = [];

  ngOnInit(): void {
    this.httpClient
      .get<IProduto[]>('http://localhost:3000/cardapio')
      .subscribe((cardapio) => {
        this.cardapio = cardapio;
      });
  }

  adicionaProduto(produto: IProduto) {
    this.buyList.add(produto);
  }

  get quantidadeTotal(): number {
    return this.buyList.getQuantidadeTotal();
  }

  get valorTotal(): number {
    return this.buyList.getValorTotal();
  }
}
