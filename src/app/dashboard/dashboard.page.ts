import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor
  (
    public authService: AuthenticationService,
    private route: Router
  ) { }

  ngOnInit() {}

  profilePage ()
  {
    this.route.navigate (['profile']);
  }

  registerCpgPage ()
  {
    this.route.navigate (['register-cpg']);
  }

  volunteerPage ()
  {
    this.route.navigate (['vlntr-list']);
  }

}
