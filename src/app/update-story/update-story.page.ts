import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Story } from '../modal/Story';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../services/story.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-story',
  templateUrl: './update-story.page.html',
  styleUrls: ['./update-story.page.scss'],
})
export class UpdateStoryPage implements OnInit, AfterViewInit 
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
    private router: Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit(): void
  {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
    {
      this.sService.getStory(id).subscribe(storyData=>
        {
          this.story=storyData;
        });
    }
  }

  updateStory()
  {
    this.sService.updateStory(this.story).then(()=>
    {
      this.router.navigate(['/story-list']);
    }, err=>
    {

    })
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
