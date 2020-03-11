import { Component } from '@angular/core';

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
          pagename: "Register Campaign",
          icon: "checkbox-outline",
          url: "/register-cpg"
        },
        {
          pagename: "Volunteer",
          icon: "hand-left-outline",
          url: "/vlntr-list"
        },
        {
          pagename: "Campaign Application",
          icon: "duplicate-outline",
          url: "/cpg-app-list"
        },
      ]
    });
  }

  Goto (page)
  {
    this.router.navigate([page.url]);
  }
}
