import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSecuenciaComponent } from './formulario-secuencia.component';

describe('FormularioSecuenciaComponent', () => {
  let component: FormularioSecuenciaComponent;
  let fixture: ComponentFixture<FormularioSecuenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSecuenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
