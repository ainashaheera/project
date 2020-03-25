import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinvlntrListPage } from './joinvlntr-list.page';

describe('JoinvlntrListPage', () => {
  let component: JoinvlntrListPage;
  let fixture: ComponentFixture<JoinvlntrListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinvlntrListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinvlntrListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
