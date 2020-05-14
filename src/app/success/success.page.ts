import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

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
