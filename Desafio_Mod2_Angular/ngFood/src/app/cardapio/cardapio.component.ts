import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BuyList } from '../buyList.service';

interface Cardapio {
  categoria: string;
  descricao: string;
  preco: number;
}

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

  cardapio: Cardapio[] = [];

  ngOnInit(): void {
    this.httpClient
      .get<Cardapio[]>('http://localhost:3000/cardapio')
      .subscribe((cardapio) => {
        this.cardapio = cardapio;
        console.log(this.cardapio);
      });
  }
}
