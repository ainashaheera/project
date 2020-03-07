import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinvlntrFormPage } from './joinvlntr-form.page';

describe('JoinvlntrFormPage', () => {
  let component: JoinvlntrFormPage;
  let fixture: ComponentFixture<JoinvlntrFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinvlntrFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinvlntrFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
