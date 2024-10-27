import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordOptionsComponent } from './password-options.component';

describe('PasswordOptionsComponent', () => {
  let component: PasswordOptionsComponent;
  let fixture: ComponentFixture<PasswordOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
