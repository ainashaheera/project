import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewCpgAdminPage } from './view-cpg-admin.page';

describe('ViewCpgAdminPage', () => {
  let component: ViewCpgAdminPage;
  let fixture: ComponentFixture<ViewCpgAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCpgAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCpgAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
