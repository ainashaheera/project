import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewFundPage } from './view-fund.page';

describe('ViewFundPage', () => {
  let component: ViewFundPage;
  let fixture: ComponentFixture<ViewFundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewFundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
