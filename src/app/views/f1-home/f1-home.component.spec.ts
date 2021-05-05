import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1HomeComponent } from './f1-home.component';

describe('F1HomeComponent', () => {
  let component: F1HomeComponent;
  let fixture: ComponentFixture<F1HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F1HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
