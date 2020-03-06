import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateVolunteerPage } from './update-volunteer.page';

describe('UpdateVolunteerPage', () => {
  let component: UpdateVolunteerPage;
  let fixture: ComponentFixture<UpdateVolunteerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVolunteerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateVolunteerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
