import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  @Output("buttonClick") buttonClickerEmitter = new EventEmitter<boolean>();
  onButtonClick() {
    this.buttonClickerEmitter.emit(true)
  }
}
