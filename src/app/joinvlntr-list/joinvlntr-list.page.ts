import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JoinVlntr } from '../modal/join-vlntr';
import { JoinVlntrService } from '../services/join-vlntr.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Volunteer } from '../modal/Volunteer';
import { VolunteerService } from '../services/volunteer.service';

@Component({
  selector: 'app-joinvlntr-list',
  templateUrl: './joinvlntr-list.page.html',
  styleUrls: ['./joinvlntr-list.page.scss'],
})
export class JoinvlntrListPage implements OnInit 
{
  private joinvlntrs: Observable<JoinVlntr[]>;
  private volunteers: Observable<Volunteer[]>;

  constructor
  (
    private fbService: VolunteerService,
    private authService: AuthService,
    private jvService: JoinVlntrService,
    private route: Router
  ) { }

  ngOnInit(): void 
  {
    this.joinvlntrs=this.jvService.getJoinVlntrs();
    this.volunteers=this.fbService.getVolunteers();
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.route.navigateByUrl('/login');
  }

}
