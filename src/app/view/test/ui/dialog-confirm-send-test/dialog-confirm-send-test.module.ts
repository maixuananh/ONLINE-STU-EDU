import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogConfirmSendTestComponent } from "./dialog-confirm-send-test.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule
    ],
    declarations: [
        DialogConfirmSendTestComponent
    ],
    exports: [
        DialogConfirmSendTestComponent
    ]
})
export class DialogConfirmSendTestModule {}