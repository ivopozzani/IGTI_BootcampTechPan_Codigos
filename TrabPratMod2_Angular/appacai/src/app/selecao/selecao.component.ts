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

  setChange(event: any) {
    if (event.checked && this.escolhaAte != 1) {
      this.escolhas.push(event.value);
      if (this.escolhaAte === this.escolhas.length) {
        const checked = document.querySelectorAll('input');
        console.log(checked);
        checked.forEach(function (el) {
          if (!el.checked) {
            el.disabled = true;
          }
        });
      }
    } else {
      let index = this.escolhas.indexOf(event.value);
      this.escolhas.splice(index, 1);
      const checked = document.querySelectorAll('input');
      console.log(checked);
      checked.forEach(function (el) {
        if (!el.checked) {
          el.disabled = false;
        }
      });
    }
    //console.log(event);
    console.log(this.escolhas);
    //console.log(this.isChecked);
  }
}
