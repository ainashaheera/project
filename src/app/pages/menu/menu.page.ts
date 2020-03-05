import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages =
  [
    {
      title: 'Login Page',
      url: '/menu/login'
    },
    {
      title: 'Signup Page',
      url: '/menu/signup'
    },
    {
      title: 'Profile Page',
      url: '/menu/profile'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) 
  {
    this.router.events.subscribe((event: RouterEvent) =>
    {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
