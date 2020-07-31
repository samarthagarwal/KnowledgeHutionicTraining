import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverflowMenuPage } from './overflow-menu.page';

describe('OverflowMenuPage', () => {
  let component: OverflowMenuPage;
  let fixture: ComponentFixture<OverflowMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverflowMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverflowMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
