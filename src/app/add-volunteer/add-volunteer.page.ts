import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../services/volunteer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Volunteer } from '../modal/Volunteer'

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
    //image: '',
    volunteerName: '' 
  };

  constructor
  (
    private activatedRoute: ActivatedRoute,
    private vlService: VolunteerService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {}

  addVolunteer ()
  {
    this.vlService.addVolunteer(this.volunteer)
    .then (() =>
    {
      this.router.navigateByUrl('/');
    }, err =>
    {});
  }

}
