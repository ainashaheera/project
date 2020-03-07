import { Component, OnInit, NgZone } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { User } from "src/app/shared/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit 
{
  constructor
  (
    public authService: AuthenticationService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {}

}
