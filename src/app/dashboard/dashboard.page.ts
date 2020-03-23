import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Campaign } from '../modal/campaign';
import { FirebaseService } from '../services/firebase.service';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';

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
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  private campaigns: Observable<Campaign[]>;

  constructor
  (
    private route: Router,
    private authService: AuthService,
    private fbService: FirebaseService,

    private afs: AngularFirestore,
    private user: UserService,
    // private storage: NativeStorage
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
    this.campaigns=this.fbService.getCampaigns();

    // this.storage.setItem('username', this.username);
    // this.storage.setItem('isAdmin', this.isAdmin);
    // this.storage.setItem('isCustomer', this.isCustomer);
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.route.navigateByUrl('/login');
  }

}
