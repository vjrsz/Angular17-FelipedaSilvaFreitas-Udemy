import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'session04';
  inputText = "Valor alterado";
  inputType = "text";
  isDisabled = false;

  changeDisabledInput(){
    this.isDisabled = !this.isDisabled
  }

  changeTypeInput(){
    this.inputType = this.inputType === "password" ? "text" : "password";
  }

  handleInputKeyup($event: Event) {
    let target = $event.target as HTMLInputElement;
    console.log(target.value);
  }
}
