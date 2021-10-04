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
  isDisabled: boolean = false;

  @HostListener('change', ['$event'])
  onChange(event: any) {
    if (event.target.checked) {
      this.escolhas.push(event.target.value);
      if (this.escolhaAte === this.escolhas.length) {
        this.isDisabled = true;
      } else {
        let index = this.escolhas.indexOf(event.target.value);
        this.escolhas.splice(index, 1);
      }
      console.log(event.target.value);
      console.log(this.escolhas);
    }
  }
}
