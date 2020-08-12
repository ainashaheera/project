import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Fundraiser } from '../modal/Fundraiser';
import { ActivatedRoute, Router } from '@angular/router';
import { FundraiserService } from '../services/fundraiser.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-fund',
  templateUrl: './view-fund.page.html',
  styleUrls: ['./view-fund.page.scss'],
})
export class ViewFundPage implements OnInit, AfterViewInit  
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  fundraiser: Fundraiser =
  {
    status: 'Waiting',
    title: '',
    story: '',
    goal: '',
    periodS: '',
    image: '',
    total: '0'
  };

  constructor
  (
    private authService: AuthService,
    private afs: AngularFirestore,
    private user: UserService,
    private activatedRoute: ActivatedRoute,
    private frsService: FundraiserService,
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
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
    {
      this.frsService.getFundraiser(id).subscribe(fundraiserData =>
        {
          this.fundraiser=fundraiserData;
        });
    }
  }

  deleteFundraiser() 
  {
    this.frsService.deleteFundraiser(this.fundraiser.id)
    .then(() => 
    {
      this.router.navigate(['/fund-list']);
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
