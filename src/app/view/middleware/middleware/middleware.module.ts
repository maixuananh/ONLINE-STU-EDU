import { NgModule } from "@angular/core";
import { MiddlewareComponent } from "./middleware.component";
import { TopNavModule } from "../../share/topnav/topnav.module";
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        TopNavModule,
        RouterModule.forChild([
            {
                path: '',
                component: MiddlewareComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../../home/home/home.module').then(m => m.HomeModule),
                    },
                    {
                        path: 'classroom/:id',
                        loadChildren: () => import('../../classroom/classroom/classroom.module').then(m => m.ClassRoomModule)
                    },
                    {
                        path: 'test/:id',
                        loadChildren: () => import('../../test/test/test.module').then(m => m.TestModule)
                    },
                    {
                        path: 'grade-page',
                        loadChildren: () => import('../../grade-page/grade-page/grade-page.module').then(m => m.GradePageModule)
                    }
                ]
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home',
            }
        ]),
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
    ],
    declarations: [
        MiddlewareComponent
    ],
    exports: [
        MiddlewareComponent
    ]
})
export class MiddlewareModule {}