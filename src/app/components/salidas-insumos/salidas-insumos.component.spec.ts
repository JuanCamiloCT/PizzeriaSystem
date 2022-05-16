import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasInsumosComponent } from './salidas-insumos.component';

describe('SalidasInsumosComponent', () => {
  let component: SalidasInsumosComponent;
  let fixture: ComponentFixture<SalidasInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidasInsumosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidasInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
