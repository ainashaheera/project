import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewJoinvlntrPage } from './view-joinvlntr.page';

describe('ViewJoinvlntrPage', () => {
  let component: ViewJoinvlntrPage;
  let fixture: ComponentFixture<ViewJoinvlntrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJoinvlntrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewJoinvlntrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
