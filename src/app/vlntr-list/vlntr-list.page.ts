import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from '../modal/Volunteer';
import { VolunteerService } from '../services/volunteer.service';

@Component({
  selector: 'app-vlntr-list',
  templateUrl: './vlntr-list.page.html',
  styleUrls: ['./vlntr-list.page.scss'],
})
export class VlntrListPage implements OnInit 
{
  private volunteers: Observable<Volunteer[]>;

  constructor
  (
    private fbService: VolunteerService
  ) { }

  ngOnInit(): void 
  {
    this.volunteers=this.fbService.getVolunteers();
  }

}
