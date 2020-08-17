import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Campaign } from '../modal/Campaign';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-make-donation',
  templateUrl: './make-donation.page.html',
  styleUrls: ['./make-donation.page.scss'],
})
export class MakeDonationPage implements OnInit, AfterViewInit  
{
  campaign: Campaign =
  {
    status: 'Waiting',
    description: '',
    image: '',
    organizationName: '',
    campaignName: '',
    category: '',
    registrationNum: '',
    //document: '',
    //taxExmpNum: '',
    bankName: '',
    bankAccNum: '',
    website: '',
    email: '',
    phone: '',
    donationTarget: '',
    endDate: '',
    donate: '',
    total: ''
  };

  private campaigns: Observable<Campaign[]>;

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() 
  {
    this.campaigns=this.fbService.getCampaigns();
  }

  ngAfterViewInit(): void
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
    {
      this.fbService.getCampaign(id).subscribe(campaignData =>
        {
          this.campaign=campaignData;
        });
    }
  }

  updateCampaign() {
    this.campaign.total = parseInt(this.campaign.total) + parseInt(this.campaign.donate);
    console.log( this.campaign.total );
    this.fbService.updateCampaign(this.campaign)
    .then(() => {
     this.router.navigate(['/payment-method']);
    }, err => {
    });
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
