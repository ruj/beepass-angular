import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSliderComponent } from './password-slider.component';

describe('PasswordSliderComponent', () => {
  let component: PasswordSliderComponent;
  let fixture: ComponentFixture<PasswordSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
