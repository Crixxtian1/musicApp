import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tabalasdecadastro2Page } from './tabalasdecadastro2.page';

describe('Tabalasdecadastro2Page', () => {
  let component: Tabalasdecadastro2Page;
  let fixture: ComponentFixture<Tabalasdecadastro2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabalasdecadastro2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tabalasdecadastro2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
