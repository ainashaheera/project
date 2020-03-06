import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule) },
  { path: 'verify-email', loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule) },
  {
    path: 'cpg-app-list',
    loadChildren: () => import('./cpg-app-list/cpg-app-list.module').then( m => m.CpgAppListPageModule)
  },
  {
    path: 'register-cpg',
    loadChildren: () => import('./register-cpg/register-cpg.module').then( m => m.RegisterCpgPageModule)
  },
  {
    path: 'view-cpg-admin',
    loadChildren: () => import('./view-cpg-admin/view-cpg-admin.module').then( m => m.ViewCpgAdminPageModule)
  },
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
