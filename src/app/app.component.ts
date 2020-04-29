import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent 
{
  pages: any[]=[];

  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pages=
      [
        {
          pagename: "Profile",
          icon: "person-circle-outline",
          url: "/profile"
        },
        {
          pagename: "Campaigns",
          icon: "albums-outline",
          url: "/cpg-app-list"
        },
        {
          pagename: "Fundraisers",
          icon: "newspaper-outline",
          url: "/fund-list"
        },
        {
          pagename: "Volunteer",
          icon: "hand-left-outline",
          url: "/vlntr-list"
        },
        {
          pagename: "Events",
          icon: "calendar-outline",
          url: "/event-list"
        },
        {
          pagename: "Stories",
          icon: "list-circle-outline",
          url: "/story-list"
        },
      ]
    });
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

  Goto (page)
  {
    this.router.navigate([page.url]);
  }
}
