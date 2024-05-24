import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DialogConfirmTestComponent } from "./dialog-confirm-test.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTableModule
    ],
    declarations: [DialogConfirmTestComponent],
    exports: [DialogConfirmTestComponent]
})
export class DialogConfirmTestModule {}