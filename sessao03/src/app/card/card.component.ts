import { Component } from '@angular/core';


interface IPlan {
    infos: IInfos
}

interface IInfos {
    type: String,
    price: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
    plan: IPlan = {
        infos: {
            type: 'Simples',
            price: 100
        }
    }

    getFullPrice(){
        return `R$ ${this.plan.infos?.price}/mês`;
    }
}
