import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanphamComponent } from './sanpham.component';
import { GiaodiensuaComponent } from './giaodiensua/giaodiensua.component';
import { SharedModule } from '../shared/shared.module';
import { UnauthorizedComponent } from '../unauthorized/unauthorized.component';
import { FileNotFoundComponent } from '../file-not-found/file-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const sanphamRoutes: Routes = [
  {
    path: '',
    component: SanphamComponent
    // ,children: [
    //   {
    //     path: 'not-found',
    //     component: FileNotFoundComponent,
    //   },
    //   {
    //     path: 'unauthorized',
    //     component: UnauthorizedComponent,
    //   },
    //   {
    //     path: 'user',
    //     loadChildren: () =>
    //       import('../user/user.module').then((m) => m.UserModule),
    //     // canActivate: [RoleGuard],
    //     // data: { roles: [Role.Admin] },
    //   },
    //   {
    //     path: 'san-pham',
    //     loadChildren: () =>
    //       import('./sanpham.module').then((m) => m.SanphamModule),
    //     // canActivate: [RoleGuard],
    //     // data: { roles: [Role.Admin, Role.User] },
    //   },
    // ],
  },
];

@NgModule({
  declarations: [SanphamComponent,GiaodiensuaComponent],
  imports: [
    CommonModule,
    SharedModule, RouterModule.forChild(sanphamRoutes)
  ]
})
export class SanphamModule { }
