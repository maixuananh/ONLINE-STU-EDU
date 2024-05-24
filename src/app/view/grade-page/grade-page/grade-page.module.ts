import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonModule } from "@angular/common";
import { GradePageComponent } from "./grade-page.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations: [
        GradePageComponent,
    ],
    exports: [
        GradePageComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        RouterModule.forChild([
            {
                path: '',
                component: GradePageComponent
            }
        ])
    ]
})
export class GradePageModule {}