import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogJoinClassComponent } from "./dialog-join-class.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
    ],
    declarations: [
        DialogJoinClassComponent
    ],
    exports: [
        DialogJoinClassComponent
    ]
})
export class DialogJoinClassModule {}