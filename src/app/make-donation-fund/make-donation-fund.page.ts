import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Fundraiser } from '../modal/Fundraiser';
import { ActivatedRoute, Router } from '@angular/router';
import { FundraiserService } from '../services/fundraiser.service';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-make-donation-fund',
  templateUrl: './make-donation-fund.page.html',
  styleUrls: ['./make-donation-fund.page.scss'],
})
export class MakeDonationFundPage implements OnInit, AfterViewInit
 {
  fundraiser: Fundraiser =
  {
    status: 'Waiting',
    title: '',
    story: '',
    goal: '',
    periodS: '',
    image: '',
    total: 0
  };

  private fundraisers: Observable<Fundraiser[]>

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private frsService: FundraiserService,
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() 
  {
    this.fundraisers=this.frsService.getFundraisers();
  }

  ngAfterViewInit(): void
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
    {
      this.frsService.getFundraiser(id).subscribe(fundraiserData =>
        {
          this.fundraiser=fundraiserData;
        });
    }
  }

  updateFundraiser() {
    this.fundraiser.total += this.fundraiser.total;
    this.frsService.updateFundraiser(this.fundraiser)
    .then(() => {
     this.router.navigate(['/payment-method']);
    }, err => {
    });
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

  fileChanged(event)
  {
    const files=event.target.files
    console.log(files)
  }

}
