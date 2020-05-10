import { Component, OnInit, ViewChild } from '@angular/core';
import { VolunteerService } from '../services/volunteer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Volunteer } from '../modal/Volunteer';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-volunteer',
  templateUrl: './add-volunteer.page.html',
  styleUrls: ['./add-volunteer.page.scss'],
})
export class AddVolunteerPage implements OnInit 
{
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
    private http: Http
  ) { }

  ngOnInit() {}

  addVolunteer ()
  {
    this.vlService.addVolunteer(this.volunteer)
    .then (() =>
    {
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
