import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGiftFormComponent } from './new-gift-form.component';

describe('NewGiftFormComponent', () => {
  let component: NewGiftFormComponent;
  let fixture: ComponentFixture<NewGiftFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGiftFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGiftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
