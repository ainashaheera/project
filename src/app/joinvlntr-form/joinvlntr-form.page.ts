import { Component, OnInit } from '@angular/core';
import { JoinVlntrService } from '../services/join-vlntr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { JoinVlntr } from '../modal/join-vlntr';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Volunteer } from '../modal/Volunteer';
import { VolunteerService } from '../services/volunteer.service';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-joinvlntr-form',
  templateUrl: './joinvlntr-form.page.html',
  styleUrls: ['./joinvlntr-form.page.scss'],
})
export class JoinvlntrFormPage implements OnInit 
{
  validations_form: FormGroup;
  errorMessage: string = '';

  joinvlntr: JoinVlntr =
  {
    status: 'Waiting',
    name: '',
    email: '',
    location: '',
    phone: '',
  };

  private volunteers: Observable<Volunteer[]>;

  constructor
  (
    private fbService: VolunteerService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private joinvlntrService: JoinVlntrService,
    private toastCtrl: ToastController,
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void 
  {
    this.validations_form = this.formBuilder.group
    ({
        name: new FormControl ('', Validators.compose([Validators.required])),
        email: new FormControl ('', Validators.compose([Validators.required])),
        location: new FormControl ('', Validators.compose([Validators.required])),
        phone: new FormControl ('', Validators.compose([Validators.required])),
    })

    this.volunteers=this.fbService.getVolunteers();
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

  addJoinVlntr (value)
  {
    this.joinvlntr.name=value.name;
    this.joinvlntr.email=value.email;
    this.joinvlntr.location=value.location;
    this.joinvlntr.phone=value.phone;

    this.joinvlntrService.addJoinVlntr(this.joinvlntr)
    .then (() =>
    {
      this.presentAlert('Done!', 'Please wait for confirmation from admin!')

      this.router.navigate(['/vlntr-list']);
    }, err =>
    {});
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
