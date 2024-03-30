import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
    <p>
      inline works!
    </p>
  `,
  // styleUrl: './inline.component.scss'
  styles : [
    `.app-inline {
      font-size: 16px;
    }`
  ]
})
export class InlineComponent {

}
