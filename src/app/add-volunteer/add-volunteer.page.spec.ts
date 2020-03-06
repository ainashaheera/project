import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVolunteerPage } from './add-volunteer.page';

describe('AddVolunteerPage', () => {
  let component: AddVolunteerPage;
  let fixture: ComponentFixture<AddVolunteerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVolunteerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVolunteerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
