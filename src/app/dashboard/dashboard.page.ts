import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false

  constructor
  (
    //public authService: AuthenticationService,
    private afs: AngularFirestore,
    private user: UserService,
    private route: Router
  ) 
  {
    this.mainuser=afs.doc(`users/${user.getUID()}`)
    this.sub=this.mainuser.valueChanges().subscribe(event =>
      {
        this.username=event.username
        this.isAdmin=event.isAdmin
      })
  }

  ngOnInit() {}

  profilePage ()
  {
    this.route.navigate (['profile']);
  }

  registerCpgPage ()
  {
    this.route.navigate (['register-cpg']);
  }

  volunteerPage ()
  {
    this.route.navigate (['vlntr-list']);
  }

}
