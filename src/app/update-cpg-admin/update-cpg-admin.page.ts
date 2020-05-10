import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Campaign } from '../modal/Campaign';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-update-cpg-admin',
  templateUrl: './update-cpg-admin.page.html',
  styleUrls: ['./update-cpg-admin.page.scss'],
})
export class UpdateCpgAdminPage implements OnInit, AfterViewInit 
{
  campaign: Campaign =
  {
    status: '',
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
    donationTarget: ''
  };

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private router: Router,
    private http: Http
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
     this.router.navigate(['/cpg-app-list']);
    }, err => {
    });
  }

  updateProfilePic() 
  	{
		this.fileBtn.nativeElement.click()
	}

	uploadPic(event) 
	{
    const files = event.target.files

    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', '33ac01f36018c3e6ad38')

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      const uuid = event.json().file
      this.campaign.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
      // this.mainuser.update({
      // 	profilePic: uuid
      // })
    })
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
