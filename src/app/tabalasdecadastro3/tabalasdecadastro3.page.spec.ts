import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tabalasdecadastro3Page } from './tabalasdecadastro3.page';

describe('Tabalasdecadastro3Page', () => {
  let component: Tabalasdecadastro3Page;
  let fixture: ComponentFixture<Tabalasdecadastro3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabalasdecadastro3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tabalasdecadastro3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
