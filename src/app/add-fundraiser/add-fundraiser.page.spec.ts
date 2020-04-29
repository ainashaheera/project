import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFundraiserPage } from './add-fundraiser.page';

describe('AddFundraiserPage', () => {
  let component: AddFundraiserPage;
  let fixture: ComponentFixture<AddFundraiserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFundraiserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFundraiserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
