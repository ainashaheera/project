import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Story } from '../modal/Story';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.page.html',
  styleUrls: ['./add-story.page.scss'],
})
export class AddStoryPage implements OnInit 
{
  story: Story=
  {
    description: '',
    //image: '',
    storyName: '' 
  };

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private sService: StoryService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {}

  addStory()
  {
    this.sService.addStory(this.story).then(() =>
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
