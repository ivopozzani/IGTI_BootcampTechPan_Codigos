import { Component, OnInit } from '@angular/core';
import { BuyList } from '../buyList.service';

@Component({
  selector: 'pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  buyList: BuyList;
  constructor(buyList: BuyList) {
    this.buyList = buyList;
  }
  ngOnInit(): void {}
}
