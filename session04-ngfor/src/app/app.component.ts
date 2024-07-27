import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  personSelectedIndex: number | undefined;
  listPeople = [
    {name: "thiago", age: 30},
    {name: "felipe", age: 20},
    {name: "paulo", age: 25}
  ]

  selectPerson(index: number) {
    this.personSelectedIndex = index
  }
}
