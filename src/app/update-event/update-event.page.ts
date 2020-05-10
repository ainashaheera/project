import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Event } from '../modal/Event';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../services/events.service';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.page.html',
  styleUrls: ['./update-event.page.scss'],
})
export class UpdateEventPage implements OnInit, AfterViewInit
{
  event: Event=
  {
    description: '',
    image: '',
    eventName: ''
  };

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private eService: EventsService,
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() {}

  ngAfterViewInit(): void
  {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
    {
      this.eService.getEvent(id).subscribe(eventData=>
        {
          this.event=eventData;
        });
    }
  }

  updateEvent()
  {
    this.eService.updateEvent(this.event).then(()=>
    {
      this.router.navigate(['/event-list']);
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
      this.event.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
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
