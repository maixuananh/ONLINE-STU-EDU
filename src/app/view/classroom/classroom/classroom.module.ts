import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClassroomComponent } from "./classroom.component";
import { RouterModule } from "@angular/router";
import { DialogConfirmTestModule } from "../ui/dialog-confirm-test/dialog-confirm-test.module";

@NgModule({
    imports: [
        CommonModule,
        DialogConfirmTestModule,
        RouterModule.forChild([{
            path: '',
            component: ClassroomComponent
        }])
    ],
    declarations: [
        ClassroomComponent
    ],
    exports: [
        ClassroomComponent
    ]
})
export class ClassRoomModule {}