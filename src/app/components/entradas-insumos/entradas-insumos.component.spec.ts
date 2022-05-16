import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasInsumosComponent } from './entradas-insumos.component';

describe('EntradasInsumosComponent', () => {
  let component: EntradasInsumosComponent;
  let fixture: ComponentFixture<EntradasInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradasInsumosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
