import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from '../modal/campaign';
import { FirebaseService } from '../services/firebase.service';

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
    private fbService: FirebaseService
  ) { }

  ngOnInit(): void 
  {
    this.campaigns=this.fbService.getCampaigns();
  }

}
