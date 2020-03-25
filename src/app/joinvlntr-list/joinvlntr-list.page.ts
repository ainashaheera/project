import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JoinVlntr } from '../modal/join-vlntr';
import { JoinVlntrService } from '../services/join-vlntr.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joinvlntr-list',
  templateUrl: './joinvlntr-list.page.html',
  styleUrls: ['./joinvlntr-list.page.scss'],
})
export class JoinvlntrListPage implements OnInit 
{
  private joinvlntrs: Observable<JoinVlntr[]>;

  constructor
  (
    private authService: AuthService,
    private jvService: JoinVlntrService,
    private route: Router
  ) { }

  ngOnInit(): void 
  {
    this.joinvlntrs=this.jvService.getJoinVlntrs();
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.route.navigateByUrl('/login');
  }

}
