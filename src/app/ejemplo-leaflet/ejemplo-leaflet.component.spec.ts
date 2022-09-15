import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploLeafletComponent } from './ejemplo-leaflet.component';

describe('EjemploLeafletComponent', () => {
  let component: EjemploLeafletComponent;
  let fixture: ComponentFixture<EjemploLeafletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploLeafletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
