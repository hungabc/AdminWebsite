import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../lib/auth.guard';
import { Role } from '../models/role';
import { UnauthorizedComponent } from '../unauthorized/unauthorized.component';
import { FileNotFoundComponent } from '../file-not-found/file-not-found.component';
import { SanphamComponent } from './sanpham.component';
export const sanphamRoutes: Routes = [
  {
    path: '',
    component: SanphamComponent,
    children: [
      {
        path: 'not-found',
        component: FileNotFoundComponent,
      },
      {
        path: 'unauthorized',
        component: UnauthorizedComponent,
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
        canActivate: [RoleGuard],
        data: { roles: [Role.Admin] },
      },
      {
        path: 'san-pham',
        loadChildren: () =>
          import('./sanpham.module').then((m) => m.SanphamModule),
        canActivate: [RoleGuard],
        data: { roles: [Role.Admin, Role.User] },
      },
    ],
  },
];
@NgModule({
  declarations: [
  ],
  imports: [ CommonModule, RouterModule.forChild(sanphamRoutes)],
})
export class SanphamModule {}
