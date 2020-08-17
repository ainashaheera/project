import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Fundraiser } from '../modal/Fundraiser';
import { ActivatedRoute, Router } from '@angular/router';
import { FundraiserService } from '../services/fundraiser.service';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-update-fund',
  templateUrl: './update-fund.page.html',
  styleUrls: ['./update-fund.page.scss'],
})
export class UpdateFundPage implements OnInit, AfterViewInit
 {
  fundraiser: Fundraiser =
  {
    status: '',
    title: '',
    story: '',
    goal: '',
    periodS: '',
    image: '',
    total: 0
  };

  @ViewChild('fileBtn', {static: false}) fileBtn: 
  {
		nativeElement: HTMLInputElement
  }

  constructor
  (
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private frsService: FundraiserService,
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() {}

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

  updateCampaign() {
    this.frsService.updateFundraiser(this.fundraiser)
    .then(() => {
     this.router.navigate(['/fund-list']);
    }, err => {
    });
  }

  uploadPic(event) 
	{
    const files = event.target.files

    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', '33ac01f36018c3e6ad38')

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      const uuid = event.json().file
      this.fundraiser.image=`https://ucarecdn.com/${uuid}/-/scale_crop/150x150/center/`;
      // this.mainuser.update({
      // 	profilePic: uuid
      // })
    })
  }

  onLogout()
  {
    //tslint:disable-next-line:no-unused-expression
    this.authService.logout;
    this.router.navigateByUrl('/login');
  }

}
