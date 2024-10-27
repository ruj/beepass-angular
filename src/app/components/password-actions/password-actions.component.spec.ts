import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordActionsComponent } from './password-actions.component';

describe('PasswordActionsComponent', () => {
  let component: PasswordActionsComponent;
  let fixture: ComponentFixture<PasswordActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
