import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ alias : 'planType', required: true}) planType : string = '';
  @Input({ alias : 'planPrice', required: true }) planPrice: number = 0;
  @Input({ alias: "style", required: true }) cardStyle: "orange"|"purple" = "orange";
  protected readonly console = console;
}
