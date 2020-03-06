import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Campaign } from '../modal/Campaign';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-view-cpg-admin',
  templateUrl: './view-cpg-admin.page.html',
  styleUrls: ['./view-cpg-admin.page.scss'],
})
export class ViewCpgAdminPage implements OnInit, AfterViewInit 
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

  deleteCampaign() 
  {
    this.fbService.deleteCampaign(this.campaign.id)
    .then(() => 
    {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}
