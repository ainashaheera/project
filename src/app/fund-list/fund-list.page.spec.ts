import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FundListPage } from './fund-list.page';

describe('FundListPage', () => {
  let component: FundListPage;
  let fixture: ComponentFixture<FundListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FundListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
