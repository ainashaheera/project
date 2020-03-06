import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CpgAppListPage } from './cpg-app-list.page';

describe('CpgAppListPage', () => {
  let component: CpgAppListPage;
  let fixture: ComponentFixture<CpgAppListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpgAppListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CpgAppListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
