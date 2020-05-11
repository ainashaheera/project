import { Component, OnInit, ViewChild } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Donation } from '../modal/Donation';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-make-donation',
  templateUrl: './make-donation.page.html',
  styleUrls: ['./make-donation.page.scss'],
})
export class MakeDonationPage implements OnInit 
{
  donation: Donation =
  {
    amount: '',
    name: ''
  }

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private dnService: DonationService,
    private toastCtrl: ToastController,
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() {}

  addDonation ()
  {
    this.dnService.addDonation(this.donation)
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

  fileChanged(event)
  {
    const files=event.target.files
    console.log(files)
  }

}
