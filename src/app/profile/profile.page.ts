import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit 
{
  mainuser: AngularFirestoreDocument
  //userPosts
  sub
  //posts 
  username: string
  profilePic: string

  constructor
  (
    private authService: AuthService,
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

  ngOnInit() {}

  // updateProfile ()
  // {
  //   this.router.navigate (['update-profile']);
  // }

}
