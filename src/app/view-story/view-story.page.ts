import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Story } from '../modal/Story';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../services/story.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.page.html',
  styleUrls: ['./view-story.page.scss'],
})
export class ViewStoryPage implements OnInit, AfterViewInit
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  story: Story=
  {
    description: '',
    //image: '',
    storyName: '' 
  };


  constructor
  (
    private authService: AuthService,
    private afs: AngularFirestore,
    private user: UserService,
    private activatedRoute: ActivatedRoute,
    private sService: StoryService,
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
      this.sService.getStory(id).subscribe(storyData =>
        {
          this.story=storyData;
        });
    }
  }

  deleteStory()
  {
    this.sService.deleteStory(this.story.id).then(()=>
    {
      this.router.navigate(['/story-list']);
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
