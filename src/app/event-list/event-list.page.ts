import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../modal/Event';
import { EventsService } from '../services/events.service';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  private events: Observable<Event[]>;

  constructor
  (
    private user: UserService,
    private route: Router,
    private authService: AuthService,
    private eService: EventsService,
    private afs: AngularFirestore,
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

  ngOnInit(): void 
  {
    this.events=this.eService.getEvents();
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.route.navigateByUrl('/login');
  }

}
