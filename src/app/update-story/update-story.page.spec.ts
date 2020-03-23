import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateStoryPage } from './update-story.page';

describe('UpdateStoryPage', () => {
  let component: UpdateStoryPage;
  let fixture: ComponentFixture<UpdateStoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateStoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
