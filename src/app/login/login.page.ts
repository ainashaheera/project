import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from "@angular/router";
//import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit 
{
  username: string = ""
  password: string = ""

  constructor
  (
    public afAuth: AngularFireAuth,
    public user: UserService,
    public router: Router
  ) {}

  ngOnInit () {}

  async login()
  {
    const {username, password } = this
    try
    {
      const res = await this.afAuth.auth.signInWithEmailAndPassword (username + '@gmail.com', password)
      
      if (res.user)
      {
        this.user.setUser
        ({
          username,
          uid: res.user.uid
        })
        this.router.navigate(['/dashboard'])
      }
    }
    catch (err)
    {
      console.dir(err)
      if (err.code === "auth/user-not-found")
      {
        console.log("User not found")
      }
    }
  }

  // constructor
  // (
  //   public authService: AuthenticationService,
  //   public router: Router
  // ) { }

  // ngOnInit() {}

  // logIn (email, password)
  // {
  //   this.authService.SignIn (email.value, password.value)
  //   .then ((res) =>
  //   {
  //     if (this.authService.isEmailVerified)
  //     {
  //       this.router.navigate (['dashboard']);
  //     }
  //     else
  //     {
  //       window.alert ('Email is not verified')
  //       return false;
  //     }
  //   })
  //   .catch ((error) =>
  //   {
  //     window.alert (error.message)
  //   })
  // }

}
