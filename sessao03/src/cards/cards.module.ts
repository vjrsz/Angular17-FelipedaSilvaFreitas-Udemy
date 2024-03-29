import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../app/card/card.component";
import {CardRoxoComponent} from "../app/card-roxo/card-roxo.component";
import {CardButtonComponent} from "../app/card-button/card-button.component";
import {CardRoxoButtonComponent} from "../app/card-roxo-button/card-roxo-button.component";

@NgModule({
    declarations: [
        CardComponent,
        CardRoxoComponent,
        CardButtonComponent,
        CardRoxoButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardComponent,
        CardRoxoComponent
    ]
})
export class CardsModule { }
