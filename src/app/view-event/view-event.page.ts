import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Event } from '../modal/Event';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../services/events.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.page.html',
  styleUrls: ['./view-event.page.scss'],
})
export class ViewEventPage implements OnInit, AfterViewInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  event: Event=
  {
    description: '',
    //image: '',
    eventName: '' 
  };

  constructor
  (
    private authService: AuthService,
    private afs: AngularFirestore,
    private user: UserService,
    private activatedRoute: ActivatedRoute,
    private eService: EventsService,
    private router: Router
  ) 
  {
    this.mainuser=afs.doc(`users/${user.getUID()}`)
    this.sub=this.mainuser.valueChanges().subscribe(event =>
      {
        this.username=event.username
        this.isAdmin=event.isAdmin
        this.isCustomer= event.isCustomer
      })
  }

  ngOnInit() {}

  ngAfterViewInit(): void
  {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
    {
      this.eService.getEvent(id).subscribe(eventData =>
        {
          this.event=eventData;
        });
    }
  }

  deleteEvent()
  {
    this.eService.deleteEvent(this.event.id).then(()=>
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
