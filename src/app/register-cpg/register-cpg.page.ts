import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Campaign } from '../modal/Campaign';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-register-cpg',
  templateUrl: './register-cpg.page.html',
  styleUrls: ['./register-cpg.page.scss'],
})
export class RegisterCpgPage implements OnInit 
{
  statusForm: false;

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
    total: '0'
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
    private toastCtrl: ToastController,
    private router: Router,
    private http: Http
    // status='waiting'
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
        this.campaign.image=`https://ucarecdn.com/${uuid}/-/scale_crop/400x400/center/`;
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

  fileChanged(event)
  {
    const files=event.target.files
    console.log(files)
  }

}
