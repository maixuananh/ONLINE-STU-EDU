import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogConfirmOutTestComponent } from "./dialog-confirm-out-test.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule
    ],
    declarations: [
        DialogConfirmOutTestComponent
    ],
    exports: [
        DialogConfirmOutTestComponent
    ]
})
export class DialogConfirmOutTestModule {}