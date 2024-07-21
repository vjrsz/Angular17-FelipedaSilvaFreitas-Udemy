import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  private _planType: string = '';

  @Input("planTypeAlias")
  set planType(value: string){
    this._planType = value.toUpperCase();
  };
  get planType(): string {
    return this._planType;
  }
  @Input({ required: true, "alias" : "planPrice"}) planPrice: number = 0;

  buttonClicked($event: boolean) {
    console.log($event);
  }

}
