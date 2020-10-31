import { NgModule } from '@angular/core';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { AuthGuard } from './lib/auth.guard';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./sanpham/Sanpham.module').then((m) => m.SanphamModule)
  // ,canActivate: [AuthGuard]
},
{path: 'don-hang', loadChildren: () => import('./donhang/donhang.module').then((m) => m.DonhangModule)
// ,canActivate: [AuthGuard]
},
{path: 'hoa-don-ban', loadChildren: () => import('./hoadonban/hoadonban.module').then((m) => m.HoadonbanModule)
// ,canActivate: [AuthGuard]
},
  {
    path: '**',
    component: FileNotFoundComponent,
  }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
