import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Volunteer } from '../modal/Volunteer';
import { ActivatedRoute, Router } from '@angular/router';
import { VolunteerService } from '../services/volunteer.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-volunteer',
  templateUrl: './view-volunteer.page.html',
  styleUrls: ['./view-volunteer.page.scss'],
})
export class ViewVolunteerPage implements OnInit, AfterViewInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false

  volunteer: Volunteer =
  {
    //status: '',
    description: '',
    //image: '',
    volunteerName: '' 
  };

  constructor
  (
    private afs: AngularFirestore,
    private user: UserService,
    private activatedRoute: ActivatedRoute,
    private vlService: VolunteerService,
    private router: Router
  ) 
  {
    this.mainuser=afs.doc(`users/${user.getUID()}`)
    this.sub=this.mainuser.valueChanges().subscribe(event =>
      {
        this.username=event.username
        this.isAdmin=event.isAdmin
      })
  }

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

  deleteVolunteer() 
  {
    this.vlService.deleteVolunteer(this.volunteer.id)
    .then(() => 
    {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

  joinvlntrForm ()
  {
    this.router.navigate (['joinvlntr-form']);
  }

}
