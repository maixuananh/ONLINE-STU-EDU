import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from "@angular/forms";
import { DialogCreateClassComponent } from "./dialog-create-class.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule
    ],
    declarations: [
        DialogCreateClassComponent
    ],
    exports: [
        DialogCreateClassComponent
    ]
})
export class DialogCreateClassModule {}