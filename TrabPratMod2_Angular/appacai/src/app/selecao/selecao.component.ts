import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css'],
})
export class SelecaoComponent {
  @Input() title: string = '';
  @Input() opcoes: string[] = [];
  @Input() escolhaAte: number = 0;

  escolhas: string[] = [];

  add(opcao: string) {
    if (this.escolhaAte === 1) {
      this.escolhas = [opcao];
    } else {
      if (this.escolhas.indexOf(opcao) === -1) {
        this.escolhas.push(opcao);
      } else {
        this.escolhas.splice(this.escolhas.indexOf(opcao), 1);
      }
    }
    console.log(this.escolhas);
  }

  isChecked(opcao: string): boolean {
    return this.escolhas.indexOf(opcao) == -1;
  }
}
