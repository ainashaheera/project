import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Event } from '../modal/Event';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../services/events.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.page.html',
  styleUrls: ['./update-event.page.scss'],
})
export class UpdateEventPage implements OnInit, AfterViewInit
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
    private router: Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit(): void
  {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
    {
      this.eService.getEvent(id).subscribe(eventData=>
        {
          this.event=eventData;
        });
    }
  }

  updateEvent()
  {
    this.eService.updateEvent(this.event).then(()=>
    {
      this.router.navigate(['/']);
    }, err=>
    {

    })
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
