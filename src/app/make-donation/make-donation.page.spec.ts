import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeDonationPage } from './make-donation.page';

describe('MakeDonationPage', () => {
  let component: MakeDonationPage;
  let fixture: ComponentFixture<MakeDonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeDonationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeDonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
