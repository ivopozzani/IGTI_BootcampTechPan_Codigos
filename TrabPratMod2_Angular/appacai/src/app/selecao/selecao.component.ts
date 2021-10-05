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

  setVol(event: any) {
    this.escolhas = [];
    this.escolhas.push(event.value);
  }

  setAdd(event: any) {
    if (event.checked) {
      this.escolhas.push(event.value);
      if (this.escolhaAte === this.escolhas.length) {
        document.querySelectorAll('input').forEach((el) => {
          !el.checked ? (el.disabled = true) : null;
        });
      }
    } else {
      this.escolhas.splice(this.escolhas.indexOf(event.value), 1);
      document.querySelectorAll('input').forEach((el) => {
        !el.checked ? (el.disabled = false) : null;
      });
    }
  }
}
