import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Volunteer } from '../modal/Volunteer';
import { ActivatedRoute, Router } from '@angular/router';
import { VolunteerService } from '../services/volunteer.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-volunteer',
  templateUrl: './update-volunteer.page.html',
  styleUrls: ['./update-volunteer.page.scss'],
})
export class UpdateVolunteerPage implements OnInit, AfterViewInit 
{
  volunteer: Volunteer =
  {
    //status: '',
    description: '',
    //image: '',
    volunteerName: '' 
  };

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private vlService: VolunteerService,
    private router: Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit(): void
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
    {
      this.vlService.getVolunteer(id).subscribe(volunteerData =>
        {
          this.volunteer=volunteerData;
        });
    }
  }

  updateVolunteer() 
  {
    this.vlService.updateVolunteer(this.volunteer)
    .then(() => {
     this.router.navigate(['/']);
    }, err => {
    });
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
