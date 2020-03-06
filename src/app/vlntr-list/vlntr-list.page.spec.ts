import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VlntrListPage } from './vlntr-list.page';

describe('VlntrListPage', () => {
  let component: VlntrListPage;
  let fixture: ComponentFixture<VlntrListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlntrListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VlntrListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
