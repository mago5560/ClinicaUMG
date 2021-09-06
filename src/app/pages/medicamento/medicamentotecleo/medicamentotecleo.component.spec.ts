import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentotecleoComponent } from './medicamentotecleo.component';

describe('MedicamentotecleoComponent', () => {
  let component: MedicamentotecleoComponent;
  let fixture: ComponentFixture<MedicamentotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
