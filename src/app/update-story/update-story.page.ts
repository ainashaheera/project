import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Story } from '../modal/Story';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../services/story.service';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';

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
    image: '',
    storyName: ''
  };

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private sService: StoryService,
    private router: Router,
    private http: Http
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

  updateProfilePic() 
  	{
		this.fileBtn.nativeElement.click()
	}

	uploadPic(event) 
	{
    const files = event.target.files

    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', '33ac01f36018c3e6ad38')

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      const uuid = event.json().file
      this.story.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
      // this.mainuser.update({
      // 	profilePic: uuid
      // })
    })
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
