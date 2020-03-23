import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Event } from '../modal/Event';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit 
{
  event: Event=
  {
    description: '',
    //image: '',
    eventName: '' 
  };

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private eService: EventsService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {}

  addEvent()
  {
    this.eService.addEvent(this.event).then(() =>
    {
      this.router.navigate(['/event-list']);
    }, err =>
    {

    });
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
