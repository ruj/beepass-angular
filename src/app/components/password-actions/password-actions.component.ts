import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password-actions',
  templateUrl: './password-actions.component.html',
  styleUrl: './password-actions.component.scss'
})
export class PasswordActionsComponent {
  @Output() generate = new EventEmitter<void>();
  @Output() copy = new EventEmitter<void>();

  onGenerate() {
    this.generate.emit();
  }

  onCopy() {
    this.copy.emit();
  }
}
