import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
//import { Http } from '@angular/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})

export class UpdateProfilePage implements OnInit 
{
  mainuser: AngularFirestoreDocument
  sub
  username: string
  profilePic: string
  password: string
  newpassword: string
  busy: boolean = false

  // @ViewChild ('fileBtn') fileBtn:
  // {
  //   nativeElement: HTMLInputElement
  // }

  constructor
  (
    //private http: Http, 
    private authService: AuthService,
		private afs: AngularFirestore,
		private router: Router,
		private alertController: AlertController,
		private user: UserService
  ) 
  {
    this.mainuser=afs.doc(`users/${user.getUID()}`)
    this.sub=this.mainuser.valueChanges().subscribe(event =>
      {
        this.username=event.username
        this.profilePic=event.profilePic
      })
  }

  ngOnInit() {}

  ngOnDestroy()
  {
    this.sub.unsubscribe()
  }

  // updateProfilePic()
  // {
  //   this.fileBtn.nativeElement.click()
  // }

  // uploadPic (event)
  // {
  //   const files = event.target.files

  //   const data = new FormData()
  //   data.append('file')
  // }

  async presentAlert (title: string, content: string)
  {
    const alert = await this.alertController.create
    ({
      header: title,
      message: content,
      buttons: ['OK']
    })
    await alert.present()
  }

  async updateDetails()
  {
    this.busy=true

    if (!this.password)
    {
      this.busy=false
      return this.presentAlert('Error', 'You have to enter a password')
    }

    try
    {
      await this.user.reAuth(this.user.getUsername(), this.password)
    }
    catch (error)
    {
      this.busy=false
      return this.presentAlert('Error', 'Wrong password!')
    }

    if (this.newpassword)
    {
      await this.user.updatePassword(this.newpassword)
    }

    if (this.username !== this.user.getUsername())
    {
      await this.user.updateEmail(this.username)
      this.mainuser.update
      ({
        username: this.username
      })
    }

    this.password = ""
    this.newpassword = ""
    this.busy = false

    await this.presentAlert('Done!', 'Your profile was updated!')

    this.router.navigate(['/profile'])
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

  

}
