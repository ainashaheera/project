import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Campaign } from '../modal/Campaign';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-cpg',
  templateUrl: './register-cpg.page.html',
  styleUrls: ['./register-cpg.page.scss'],
})
export class RegisterCpgPage implements OnInit 
{
  statusForm: false;
  validations_form: FormGroup;
  errorMessage: string = '';

  campaign: Campaign =
  {
    status: 'Waiting',
    description: '',
    image: '',
    organizationName: '',
    campaignName: '',
    category: '',
    registrationNum: '',
    bankName: '',
    bankAccNum: '',
    website: '',
    email: '',
    phone: '',
    donationTarget: '',
    endDate: '',
    donate: 0,
    total: 0
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
    private formBuilder: FormBuilder,
    private http: Http,
    private alertController: AlertController,
    // status='waiting'
  ) { }

  ngOnInit() 
  {
    this.validations_form = this.formBuilder.group
    ({
        campaignName: new FormControl ('', Validators.compose([Validators.required])),
        description: new FormControl ('', Validators.compose([Validators.required])),
        category: new FormControl ('', Validators.compose([Validators.required])),
        organizationName: new FormControl ('', Validators.compose([Validators.required])),
        website: new FormControl ('', Validators.compose([Validators.required])),
        phone: new FormControl ('', Validators.compose([Validators.required])),
        email: new FormControl ('', Validators.compose([Validators.required])),
        registrationNum: new FormControl ('', Validators.compose([Validators.required])),
        bankName: new FormControl ('', Validators.compose([Validators.required])),
        bankAccNum: new FormControl ('', Validators.compose([Validators.required])),
        donationTarget: new FormControl ('', Validators.compose([Validators.required])),
        endDate: new FormControl ('', Validators.compose([Validators.required])),
    })
  }

  async presentAlert(title: string, content: string) 
  {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

  addCampaign (value)
  {
    this.campaign.campaignName=value.campaignName;
    this.campaign.description=value.description;
    this.campaign.category=value.category;
    this.campaign.organizationName=value.organizationName;
    this.campaign.website=value.website;
    this.campaign.phone=value.phone;
    this.campaign.email=value.email;
    this.campaign.registrationNum=value.registrationNum;
    this.campaign.bankName=value.bankName;
    this.campaign.bankAccNum=value.bankAccNum;
    this.campaign.donationTarget=value.donationTarget;
    this.campaign.endDate=value.endDate;

    this.fbService.addCampaign(this.campaign)
    .then (() =>
    {
      this.presentAlert('Done!', 'Please wait for confirmation from admin!')

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
