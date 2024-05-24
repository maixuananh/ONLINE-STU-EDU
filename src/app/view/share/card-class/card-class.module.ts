import { NgModule } from "@angular/core";
import { CardClassComponent } from "./card-class.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        CardClassComponent
    ],
    exports: [
        CardClassComponent
    ]
})
export class CardClassModule {}