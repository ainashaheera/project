import { Component, OnInit, ViewChild } from '@angular/core';
import { VolunteerService } from '../services/volunteer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Volunteer } from '../modal/Volunteer';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-volunteer',
  templateUrl: './add-volunteer.page.html',
  styleUrls: ['./add-volunteer.page.scss'],
})
export class AddVolunteerPage implements OnInit 
{
  validations_form: FormGroup;
  errorMessage: string = '';

  volunteer: Volunteer =
  {
    //status: '',
    description: '',
    image: '',
    volunteerName: '' 
  };

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private vlService: VolunteerService,
    private toastCtrl: ToastController,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: Http,
    private alertController: AlertController,
  ) { }

  ngOnInit() 
  {
    this.validations_form = this.formBuilder.group
    ({
        volunteerName: new FormControl ('', Validators.compose([Validators.required])),
        description: new FormControl ('', Validators.compose([Validators.required])),
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

  addVolunteer (value)
  {
    this.volunteer.volunteerName=value.volunteerName;
    this.volunteer.description=value.description;

    this.vlService.addVolunteer(this.volunteer)
    .then (() =>
    {
      this.presentAlert('Done!', 'New volunteer event added!')

      this.router.navigate(['/vlntr-list']);
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
        this.volunteer.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
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
