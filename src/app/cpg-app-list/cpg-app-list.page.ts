import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from '../modal/campaign';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cpg-app-list',
  templateUrl: './cpg-app-list.page.html',
  styleUrls: ['./cpg-app-list.page.scss'],
})
export class CpgAppListPage implements OnInit 
{
  private campaigns: Observable<Campaign[]>;

  constructor
  (
    private authService: AuthService,
    private fbService: FirebaseService,
    private route: Router
  ) { }

  ngOnInit(): void 
  {
    this.campaigns=this.fbService.getCampaigns();
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.route.navigateByUrl('/login');
  }

}
