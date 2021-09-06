import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichamedicaComponent } from './fichamedica.component';

describe('FichamedicaComponent', () => {
  let component: FichamedicaComponent;
  let fixture: ComponentFixture<FichamedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichamedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichamedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
