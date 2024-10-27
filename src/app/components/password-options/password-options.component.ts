import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PasswordOptions } from '../../interfaces/password-options';

@Component({
  selector: 'app-password-options',
  templateUrl: './password-options.component.html',
  styleUrl: './password-options.component.scss'
})
export class PasswordOptionsComponent {
  @Input() options!: PasswordOptions;

  @Output() optionsChange = new EventEmitter<PasswordOptions>();

  public onOptionsChange() {
      this.optionsChange.emit(this.options);
  }
}
