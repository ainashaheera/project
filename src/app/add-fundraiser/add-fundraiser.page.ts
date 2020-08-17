import { Component, OnInit, ViewChild } from '@angular/core';
import { FundraiserService } from '../services/fundraiser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Fundraiser } from '../modal/Fundraiser';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Campaign } from '../modal/campaign';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-add-fundraiser',
  templateUrl: './add-fundraiser.page.html',
  styleUrls: ['./add-fundraiser.page.scss'],
})
export class AddFundraiserPage implements OnInit 
{
  statusForm: false;

  fundraiser: Fundraiser =
  {
    status: 'Waiting',
    title: '',
    story: '',
    goal: '',
    periodS: '',
    image: '',
    total: 0
  };

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

  private campaigns: Observable<Campaign[]>;

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private frsService: FundraiserService,
    private toastCtrl: ToastController,
    private router: Router,
    private http: Http,
    private fbService: FirebaseService,
  ) { }

  ngOnInit(): void 
  {
    this.campaigns=this.fbService.getCampaigns();
  }

  addFundraiser ()
  {
    this.frsService.addFundraiser(this.fundraiser)
    .then (() =>
    {
      this.router.navigate(['/fund-list']);
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
        this.fundraiser.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
				// this.mainuser.update({
				// 	profilePic: uuid
				// })
			})
		}

  onLogout ()
  {
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
