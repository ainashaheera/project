import { AfterViewInit, Component, OnInit } from '@angular/core';
import { JoinVlntr } from '../modal/join-vlntr';
import { ActivatedRoute, Router } from '@angular/router';
import { JoinVlntrService } from '../services/join-vlntr.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-joinvlntr',
  templateUrl: './view-joinvlntr.page.html',
  styleUrls: ['./view-joinvlntr.page.scss'],
})
export class ViewJoinvlntrPage implements OnInit, AfterViewInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  joinvlntr: JoinVlntr =
  {
    status: '',
    name: '',
    email: '',
    location: '',
    phone: '',
  };

  constructor
  (
    private activatedRoute: ActivatedRoute,
    private jvService: JoinVlntrService,
    private router: Router,
    private authService: AuthService,
    private afs: AngularFirestore,
    private user: UserService,
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
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
    {
      this.jvService.getJoinVlntr(id).subscribe(joinvlntrData =>
        {
          this.joinvlntr=joinvlntrData;
        });
    }
  }

  deleteJoinVlntr() 
  {
    this.jvService.deleteJoinVlntr(this.joinvlntr.id)
    .then(() => 
    {
      this.router.navigateByUrl('/joinvlntr-list');
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
