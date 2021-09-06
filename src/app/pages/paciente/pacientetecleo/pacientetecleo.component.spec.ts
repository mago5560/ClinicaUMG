import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientetecleoComponent } from './pacientetecleo.component';

describe('PacientetecleoComponent', () => {
  let component: PacientetecleoComponent;
  let fixture: ComponentFixture<PacientetecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientetecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientetecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
