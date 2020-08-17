import { Component, OnInit, ViewChild } from '@angular/core';
import { StoryService } from '../services/story.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Story } from '../modal/Story';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.page.html',
  styleUrls: ['./add-story.page.scss'],
})
export class AddStoryPage implements OnInit 
{
  validations_form: FormGroup;
  errorMessage: string = '';

  story: Story=
  {
    description: '',
    image: '',
    storyName: '' 
  };

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private sService: StoryService,
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
        storyName: new FormControl ('', Validators.compose([Validators.required])),
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

  addStory(value)
  {
    this.story.storyName=value.storyName;
    this.story.description=value.description;

    this.sService.addStory(this.story).then(() =>
    {
      this.presentAlert('Done!', 'New story added!')

      this.router.navigate(['/story-list']);
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
        this.story.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
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
