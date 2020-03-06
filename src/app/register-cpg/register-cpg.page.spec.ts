import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterCpgPage } from './register-cpg.page';

describe('RegisterCpgPage', () => {
  let component: RegisterCpgPage;
  let fixture: ComponentFixture<RegisterCpgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCpgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterCpgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
