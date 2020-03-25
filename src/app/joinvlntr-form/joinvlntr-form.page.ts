import { Component, OnInit } from '@angular/core';
import { JoinVlntrService } from '../services/join-vlntr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { JoinVlntr } from '../modal/join-vlntr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-joinvlntr-form',
  templateUrl: './joinvlntr-form.page.html',
  styleUrls: ['./joinvlntr-form.page.scss'],
})
export class JoinvlntrFormPage implements OnInit 
{
  joinvlntr: JoinVlntr =
  {
    status: 'Waiting',
    name: '',
    email: '',
    location: '',
    phone: '',
  };

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private joinvlntrService: JoinVlntrService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {}

  addJoinVlntr ()
  {
    this.joinvlntrService.addJoinVlntr(this.joinvlntr)
    .then (() =>
    {
      this.router.navigate(['/vlntr-list']);
    }, err =>
    {});
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
