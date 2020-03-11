import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service'
import { AlertController } from '@ionic/angular'
import { Router } from "@angular/router";
//import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit 
{
  username: string = ""
  password: string = ""
  cpassword: string = ""
  isAdmin: boolean = false

  constructor
  (
    public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router
  ) {}

  ngOnInit () {}

  async presentAlert (title: string, content: string)
  {
    const alert = await this.alertController.create
    ({
      header: title,
      message: content,
      buttons: ['OK']
    })
    await alert.present ()
  }

  async signup()
  {
    const {username, password, cpassword, isAdmin} = this
    if (password !== cpassword)
    {
      return console.error ("Password don't match")
    }
    try
    {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword (username + '@gmail.com', password)
      this.afstore.doc(`users/${res.user.uid}`).set
      ({
        username, isAdmin
      })
      this.user.setUser
      ({
        username,
        uid: res.user.uid
      })

      this.presentAlert('Success', 'You are registered!')
      this.router.navigate(['/dashboard'])
    }
    catch (error)
    {
      console.dir(error)
    }
  }

  // constructor
  // (
  //   public authService: AuthenticationService,
  //   public router: Router
  // ) { }

  // ngOnInit() {}

  // signup (email, password)
  // {
  //   this.authService.RegisterUser (email.value, password.value)
  //   .then ((res) =>
  //   {
  //     //do something here
  //     this.authService.SendVerificationMail()
  //     this.router.navigate(['verify-email']);
  //   })
  //   .catch ((error) =>
  //   {
  //     window.alert (error.message)
  //   })
  // }

}
