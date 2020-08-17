import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule) },
  { path: 'verify-email', loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule) },
  { path: 'forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule) },
  { path: 'update-profile', loadChildren: () => import('./update-profile/update-profile.module').then( m => m.UpdateProfilePageModule) },

  { path: 'register-cpg', loadChildren: () => import('./register-cpg/register-cpg.module').then( m => m.RegisterCpgPageModule) },
  { path: 'cpg-app-list', loadChildren: () => import('./cpg-app-list/cpg-app-list.module').then( m => m.CpgAppListPageModule) },
  { path: 'view-cpg-admin/:id', loadChildren: () => import('./view-cpg-admin/view-cpg-admin.module').then( m => m.ViewCpgAdminPageModule) },
  { path: 'update-cpg-admin/:id', loadChildren: () => import('./update-cpg-admin/update-cpg-admin.module').then( m => m.UpdateCpgAdminPageModule) },

  { path: 'add-volunteer', loadChildren: () => import('./add-volunteer/add-volunteer.module').then( m => m.AddVolunteerPageModule) },
  { path: 'vlntr-list', loadChildren: () => import('./vlntr-list/vlntr-list.module').then( m => m.VlntrListPageModule) },
  { path: 'view-volunteer/:id', loadChildren: () => import('./view-volunteer/view-volunteer.module').then( m => m.ViewVolunteerPageModule) },
  { path: 'update-volunteer/:id', loadChildren: () => import('./update-volunteer/update-volunteer.module').then( m => m.UpdateVolunteerPageModule) },
  
  { path: 'add-event', loadChildren: () => import('./add-event/add-event.module').then( m => m.AddEventPageModule) },
  { path: 'event-list', loadChildren: () => import('./event-list/event-list.module').then( m => m.EventListPageModule) },
  { path: 'view-event/:id', loadChildren: () => import('./view-event/view-event.module').then( m => m.ViewEventPageModule) },
  { path: 'update-event/:id', loadChildren: () => import('./update-event/update-event.module').then( m => m.UpdateEventPageModule) },

  { path: 'add-story', loadChildren: () => import('./add-story/add-story.module').then( m => m.AddStoryPageModule) },
  { path: 'story-list', loadChildren: () => import('./story-list/story-list.module').then( m => m.StoryListPageModule) },
  { path: 'view-story/:id', loadChildren: () => import('./view-story/view-story.module').then( m => m.ViewStoryPageModule) },
  { path: 'update-story/:id', loadChildren: () => import('./update-story/update-story.module').then( m => m.UpdateStoryPageModule) },

  { path: 'joinvlntr-form', loadChildren: () => import('./joinvlntr-form/joinvlntr-form.module').then( m => m.JoinvlntrFormPageModule) },
  { path: 'joinvlntr-list', loadChildren: () => import('./joinvlntr-list/joinvlntr-list.module').then( m => m.JoinvlntrListPageModule) },
  { path: 'view-joinvlntr/:id', loadChildren: () => import('./view-joinvlntr/view-joinvlntr.module').then( m => m.ViewJoinvlntrPageModule) },
  { path: 'update-joinvlntr/:id', loadChildren: () => import('./update-joinvlntr/update-joinvlntr.module').then( m => m.UpdateJoinvlntrPageModule) },
  
  { path: 'add-fundraiser', loadChildren: () => import('./add-fundraiser/add-fundraiser.module').then( m => m.AddFundraiserPageModule) },
  { path: 'fund-list', loadChildren: () => import('./fund-list/fund-list.module').then( m => m.FundListPageModule) },
  { path: 'view-fund/:id', loadChildren: () => import('./view-fund/view-fund.module').then( m => m.ViewFundPageModule) },
  { path: 'update-fund/:id', loadChildren: () => import('./update-fund/update-fund.module').then( m => m.UpdateFundPageModule) },

  { path: 'make-donation/:id', loadChildren: () => import('./make-donation/make-donation.module').then( m => m.MakeDonationPageModule) },
  { path: 'make-donation-fund/:id', loadChildren: () => import('./make-donation-fund/make-donation-fund.module').then( m => m.MakeDonationFundPageModule) },
  { path: 'payment-method', loadChildren: () => import('./payment-method/payment-method.module').then( m => m.PaymentMethodPageModule) },
  { path: 'success', loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule) },
  
  
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
