import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateJoinvlntrPage } from './update-joinvlntr.page';

describe('UpdateJoinvlntrPage', () => {
  let component: UpdateJoinvlntrPage;
  let fixture: ComponentFixture<UpdateJoinvlntrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJoinvlntrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateJoinvlntrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
