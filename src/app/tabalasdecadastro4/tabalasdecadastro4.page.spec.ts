import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tabalasdecadastro4Page } from './tabalasdecadastro4.page';

describe('Tabalasdecadastro4Page', () => {
  let component: Tabalasdecadastro4Page;
  let fixture: ComponentFixture<Tabalasdecadastro4Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabalasdecadastro4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tabalasdecadastro4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
