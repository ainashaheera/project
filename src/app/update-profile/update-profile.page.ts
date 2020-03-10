import { Component, OnInit, NgZone } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { User } from "src/app/shared/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit 
{

  constructor
  (
    public authService: AuthenticationService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() 
  {
  }

  

}
