import { Component, OnInit } from '@angular/core';
import { JoinVlntrService } from '../services/join-vlntr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { JoinVlntr } from '../modal/join-vlntr'

@Component({
  selector: 'app-joinvlntr-form',
  templateUrl: './joinvlntr-form.page.html',
  styleUrls: ['./joinvlntr-form.page.scss'],
})
export class JoinvlntrFormPage implements OnInit 
{
  joinvlntr: JoinVlntr =
  {
    name: '',
    email: '',
    location: '',
    phone: '',
  };

  constructor
  (
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

}
