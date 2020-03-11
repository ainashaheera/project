import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule) },
  { path: 'verify-email', loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule) },
  { path: 'cpg-app-list', loadChildren: () => import('./cpg-app-list/cpg-app-list.module').then( m => m.CpgAppListPageModule) },
  { path: 'register-cpg', loadChildren: () => import('./register-cpg/register-cpg.module').then( m => m.RegisterCpgPageModule) },
  { path: 'view-cpg-admin/:id', loadChildren: () => import('./view-cpg-admin/view-cpg-admin.module').then( m => m.ViewCpgAdminPageModule) },
  { path: 'update-cpg-admin/:id', loadChildren: () => import('./update-cpg-admin/update-cpg-admin.module').then( m => m.UpdateCpgAdminPageModule) },
  { path: 'vlntr-list', loadChildren: () => import('./vlntr-list/vlntr-list.module').then( m => m.VlntrListPageModule) },
  { path: 'add-volunteer', loadChildren: () => import('./add-volunteer/add-volunteer.module').then( m => m.AddVolunteerPageModule) },
  { path: 'view-volunteer/:id', loadChildren: () => import('./view-volunteer/view-volunteer.module').then( m => m.ViewVolunteerPageModule) },
  { path: 'update-volunteer/:id', loadChildren: () => import('./update-volunteer/update-volunteer.module').then( m => m.UpdateVolunteerPageModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule) },
  {
    path: 'joinvlntr-form',
    loadChildren: () => import('./joinvlntr-form/joinvlntr-form.module').then( m => m.JoinvlntrFormPageModule)
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
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
