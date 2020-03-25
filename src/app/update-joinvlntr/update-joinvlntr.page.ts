import { AfterViewInit, Component, OnInit } from '@angular/core';
import { JoinVlntr } from '../modal/join-vlntr';
import { ActivatedRoute, Router } from '@angular/router';
import { JoinVlntrService } from '../services/join-vlntr.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-joinvlntr',
  templateUrl: './update-joinvlntr.page.html',
  styleUrls: ['./update-joinvlntr.page.scss'],
})
export class UpdateJoinvlntrPage implements OnInit, AfterViewInit 
{
  joinvlntr: JoinVlntr =
  {
    status: '',
    name: '',
    email: '',
    location: '',
    phone: '',
  };

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private jvService: JoinVlntrService,
    private router: Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit(): void
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
    {
      this.jvService.getJoinVlntr(id).subscribe(joinvlntrData =>
        {
          this.joinvlntr=joinvlntrData;
        });
    }
  }

  updateJoinVlntr() {
    this.jvService.updateJoinVlntr(this.joinvlntr)
    .then(() => {
     this.router.navigate(['/joinvlntr-list']);
    }, err => {
    });
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
