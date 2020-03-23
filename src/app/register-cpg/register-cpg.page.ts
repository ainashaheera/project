import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Campaign } from '../modal/Campaign';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-cpg',
  templateUrl: './register-cpg.page.html',
  styleUrls: ['./register-cpg.page.scss'],
})
export class RegisterCpgPage implements OnInit 
{
  campaign: Campaign =
  {
    //status: '',
    description: '',
    //image: '',
    organizationName: '',
    campaignName: '',
    category: '',
    registrationNum: '',
    //document: '',
    //textExmpNum: '',
    bankName: '',
    bankAccNum: '',
    website: '',
    email: '',
    phone: '',
    donationTarget: ''
  };

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {}

  addCampaign ()
  {
    this.fbService.addCampaign(this.campaign)
    .then (() =>
    {
      this.router.navigate(['/dashboard']);
    }, err =>
    {});
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
