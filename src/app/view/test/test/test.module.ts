import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TestComponent } from "./test.component";
import { RouterModule } from "@angular/router";
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from "@angular/material/button";
import { DialogConfirmSendTestModule } from "../ui/dialog-confirm-send-test/dialog-confirm-send-test.module";
import { DialogConfirmOutTestModule } from "../ui/dialog-confirm-out-test/dialog-confirm-out-test.module";

@NgModule({
    imports: [
        CommonModule,
        MatRadioModule,
        MatButtonModule,
        DialogConfirmSendTestModule,
        DialogConfirmOutTestModule,
        RouterModule.forChild([{
            path: '',
            component: TestComponent
        }])
    ],
    declarations: [TestComponent],
    exports: [TestComponent]
})
export class TestModule {}