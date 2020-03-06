import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor
  (
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {}

  signup (email, password)
  {
    this.authService.RegisterUser (email.value, password.value)
    .then ((res) =>
    {
      //do something here
      this.authService.SendVerificationMail()
      this.router.navigate(['verify-email']);
    })
    .catch ((error) =>
    {
      window.alert (error.message)
    })
  }

}