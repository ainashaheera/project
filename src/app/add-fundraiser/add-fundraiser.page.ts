import { Component, OnInit } from '@angular/core';
import { FundraiserService } from '../services/fundraiser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Fundraiser } from '../modal/Fundraiser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-fundraiser',
  templateUrl: './add-fundraiser.page.html',
  styleUrls: ['./add-fundraiser.page.scss'],
})
export class AddFundraiserPage implements OnInit 
{
  fundraiser: Fundraiser =
  {
    title: '',
    story: '',
    goal: '',
    periodS: '',
  };

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private frsService: FundraiserService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {}

  addFundraiser ()
  {
    this.frsService.addFundraiser(this.fundraiser)
    .then (() =>
    {
      this.router.navigate(['/fund-list']);
    }, err =>
    {});
  }

  onLogout ()
  {
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
