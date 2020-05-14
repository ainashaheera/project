import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {

  constructor
  (
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  onLogout ()
  {
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
