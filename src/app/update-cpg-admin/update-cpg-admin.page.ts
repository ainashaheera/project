import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Campaign } from '../modal/Campaign';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-cpg-admin',
  templateUrl: './update-cpg-admin.page.html',
  styleUrls: ['./update-cpg-admin.page.scss'],
})
export class UpdateCpgAdminPage implements OnInit, AfterViewInit 
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
    private router: Router
  ) { }

  ngOnInit() {}

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
    this.fbService.updateCampaign(this.campaign)
    .then(() => {
     this.router.navigate(['/']);
    }, err => {
    });
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
