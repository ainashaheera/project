import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../modal/Story';
import { StoryService } from '../services/story.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.page.html',
  styleUrls: ['./story-list.page.scss'],
})
export class StoryListPage implements OnInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  private stories: Observable<Story[]>;

  constructor
  (
    private route: Router,
    private authService: AuthService,
    private afs: AngularFirestore,
    private user: UserService,
    private sService: StoryService
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
    this.stories=this.sService.getStories();
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.route.navigateByUrl('/login');
  }

}
