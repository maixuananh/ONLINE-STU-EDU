import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutGuard } from './guard/logout.guard';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: () => import('./view/login/login.module').then(m => m.LoginModule),
  //   canActivate: [LogoutGuard]
  // },
  {
    path: '',
    loadChildren: () => import('./view/middleware/middleware/middleware.module').then(m => m.MiddlewareModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./view/login/login/login.module').then(m => m.LoginModule),
    canActivate: [LogoutGuard]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
