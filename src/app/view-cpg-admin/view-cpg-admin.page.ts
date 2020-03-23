import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Campaign } from '../modal/Campaign';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-cpg-admin',
  templateUrl: './view-cpg-admin.page.html',
  styleUrls: ['./view-cpg-admin.page.scss'],
})
export class ViewCpgAdminPage implements OnInit, AfterViewInit 
{
  sub: any;
  username: string;
  mainuser: AngularFirestoreDocument;
  isAdmin: boolean = false;
  isCustomer: boolean = true;

  campaign: Campaign =
  {
    //status: '',
    description: '',
    //image: '',
    organizationName: '',
    campaignName: '',
    category: '',
    registrationNum: '',
    //document: '',
    //textExmpNum: '',
    bankName: '',
    bankAccNum: '',
    website: '',
    email: '',
    phone: '',
    donationTarget: ''
  };

  constructor
  (
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
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
      this.fbService.getCampaign(id).subscribe(campaignData =>
        {
          this.campaign=campaignData;
        });
    }
  }

  deleteCampaign() 
  {
    this.fbService.deleteCampaign(this.campaign.id)
    .then(() => 
    {
      this.router.navigateByUrl('/');
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
