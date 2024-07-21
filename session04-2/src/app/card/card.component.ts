import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input({alias:"planTypeAlias", transform: (value: string) => value.toUpperCase()}) planType : string = '';
  @Input({ required: true, "alias" : "planPrice"}) planPrice: number = 0;

  buttonClicked($event: boolean) {
    console.log($event);
  }

}
