import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fundraiser } from '../modal/Fundraiser';
import { FundraiserService } from '../services/fundraiser.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.page.html',
  styleUrls: ['./fund-list.page.scss'],
})
export class FundListPage implements OnInit 
{
  private fundraisers: Observable<Fundraiser[]>

  constructor
  (
    private authService: AuthService,
    private frsService: FundraiserService,
    private route: Router
  ) { }

  ngOnInit(): void 
  {
    this.fundraisers=this.frsService.getFundraisers();
  }

  onLogout()
  {
    this.authService.logout;
    this.route.navigateByUrl('/login');
  }

}
