import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewVolunteerPage } from './view-volunteer.page';

describe('ViewVolunteerPage', () => {
  let component: ViewVolunteerPage;
  let fixture: ComponentFixture<ViewVolunteerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVolunteerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewVolunteerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
