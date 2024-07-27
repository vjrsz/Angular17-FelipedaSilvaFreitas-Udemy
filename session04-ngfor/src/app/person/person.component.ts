import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  @Input({ required: true }) name: string|undefined;
  @Input({ required: true }) age: number|undefined;
  @Input({ required: true }) index: number|undefined;
  @Input({ required: true }) isFirst: boolean|undefined;
  @Input({ required: true }) isLast: boolean|undefined;
  @Input({ required: true }) isOdd: boolean|undefined;
  @Input({ required: true }) isSelected: boolean|undefined;

  @Output() onSelect: EventEmitter<number> = new EventEmitter();
  select(){
    this.onSelect.emit(this.index)
  }
}
