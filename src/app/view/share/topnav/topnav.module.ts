import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from "@angular/common";
import { TopnavComponent } from "./topnav.component";
import { RouterModule } from "@angular/router";
import {MatMenuModule} from '@angular/material/menu';
import { DialogCreateTestModule } from "../dialog-create-test/dialog-create-test.module";
import { DialogJoinClassModule } from "../dialog-join-class/dialog-join-class.module";
import { DialogCreateClassModule } from "../dialog-create-class/dialog-create-class.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        DialogCreateTestModule,
        DialogJoinClassModule,
        DialogCreateClassModule
    ],
    declarations: [
        TopnavComponent
    ],
    exports: [TopnavComponent]
})
export class TopNavModule {}