import { NgModule } from "@angular/core";
import { DialogCreateTestComponent } from "./dialog-create-test.component";
import { CommonModule } from "@angular/common";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from "@angular/forms";

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
        DialogCreateTestComponent
    ],
    exports: [
        DialogCreateTestComponent
    ]
})
export class DialogCreateTestModule {}