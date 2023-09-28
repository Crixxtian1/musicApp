import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tabalasdecadastro5Page } from './tabalasdecadastro5.page';

describe('Tabalasdecadastro5Page', () => {
  let component: Tabalasdecadastro5Page;
  let fixture: ComponentFixture<Tabalasdecadastro5Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabalasdecadastro5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tabalasdecadastro5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
