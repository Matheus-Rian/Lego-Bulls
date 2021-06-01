import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAwardComponent } from './card-award.component';

describe('CardAwardComponent', () => {
  let component: CardAwardComponent;
  let fixture: ComponentFixture<CardAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
