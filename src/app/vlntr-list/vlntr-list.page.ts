import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from '../modal/Volunteer';
import { VolunteerService } from '../services/volunteer.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vlntr-list',
  templateUrl: './vlntr-list.page.html',
  styleUrls: ['./vlntr-list.page.scss'],
})
export class VlntrListPage implements OnInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  private volunteers: Observable<Volunteer[]>;

  constructor
  (
    private fbService: VolunteerService,
    private route: Router,
    private authService: AuthService,
    private afs: AngularFirestore,
    private user: UserService,
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
    this.volunteers=this.fbService.getVolunteers();
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.route.navigateByUrl('/login');
  }

}
