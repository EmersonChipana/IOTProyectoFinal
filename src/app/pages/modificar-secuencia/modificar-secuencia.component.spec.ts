import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSecuenciaComponent } from './modificar-secuencia.component';

describe('ModificarSecuenciaComponent', () => {
  let component: ModificarSecuenciaComponent;
  let fixture: ComponentFixture<ModificarSecuenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSecuenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarSecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
