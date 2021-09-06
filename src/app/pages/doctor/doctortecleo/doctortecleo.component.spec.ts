import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctortecleoComponent } from './doctortecleo.component';

describe('DoctortecleoComponent', () => {
  let component: DoctortecleoComponent;
  let fixture: ComponentFixture<DoctortecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctortecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctortecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
