import { Component, OnInit, ViewChild } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Event } from '../modal/Event';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit 
{
  validations_form: FormGroup;
  errorMessage: string = '';

  event: Event=
  {
    description: '',
    image: '',
    eventName: '' 
  };

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private eService: EventsService,
    private toastCtrl: ToastController,
    private router: Router,
    private http: Http,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
  ) { }

  ngOnInit() 
  {
    this.validations_form = this.formBuilder.group
    ({
        eventName: new FormControl ('', Validators.compose([Validators.required])),
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

  addEvent(value)
  {
    this.event.eventName=value.eventName;
    this.event.description=value.description;

    this.eService.addEvent(this.event).then(() =>
    {
      this.presentAlert('Done!', 'New event added!')
      
      this.router.navigate(['/event-list']);
    }, err =>
    {

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
        this.event.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
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
