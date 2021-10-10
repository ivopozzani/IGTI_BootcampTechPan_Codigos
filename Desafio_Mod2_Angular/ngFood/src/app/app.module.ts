import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CardapioComponent } from './cardapio/cardapio.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    CardapioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
