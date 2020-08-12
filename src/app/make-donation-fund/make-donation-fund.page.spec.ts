import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeDonationFundPage } from './make-donation-fund.page';

describe('MakeDonationFundPage', () => {
  let component: MakeDonationFundPage;
  let fixture: ComponentFixture<MakeDonationFundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeDonationFundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeDonationFundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
