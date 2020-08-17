import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { Observable } from 'rxjs';
import { Campaign } from '../modal/campaign';
import { FirebaseService } from '../services/firebase.service';
import { Fundraiser } from '../modal/Fundraiser';
import { FundraiserService } from '../services/fundraiser.service';
import { Volunteer } from '../modal/Volunteer';
import { VolunteerService } from '../services/volunteer.service';
import { JoinVlntr } from '../modal/join-vlntr';
import { JoinVlntrService } from '../services/join-vlntr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit
{
  mainuser: AngularFirestoreDocument;
  //userPosts
  sub: any;
  //posts 
  username: string;
  profilePic: string;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  private campaigns: Observable<Campaign[]>;
  private fundraisers: Observable<Fundraiser[]>;
  private volunteers: Observable<Volunteer[]>;
  private joinvlntrs: Observable<JoinVlntr[]>;

  constructor
  (
    private authService: AuthService,
    private fbService: FirebaseService,
    private frsService: FundraiserService,
    private vlntrService: VolunteerService,
    private jvService: JoinVlntrService,
    private afs: AngularFirestore,
    private user: UserService,
    private router: Router
  ) 
  {
    this.mainuser=afs.doc(`users/${user.getUID()}`)
    this.sub=this.mainuser.valueChanges().subscribe (event =>
      {
        // this.posts=event.posts
        this.username=event.username
        this.profilePic=event.profilePic
        this.isAdmin=event.isAdmin
        this.isCustomer= event.isCustomer
      })
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe()
  }

  // goTo(postID: string)
  // {
  //   this.router.navigate(['/'])
  // }

  ngOnInit(): void 
  {
    this.fundraisers=this.frsService.getFundraisers();
    this.campaigns=this.fbService.getCampaigns();
    this.volunteers=this.vlntrService.getVolunteers();
    this.joinvlntrs=this.jvService.getJoinVlntrs();
  }

  // updateProfile ()
  // {
  //   this.router.navigate (['update-profile']);
  // }

}
