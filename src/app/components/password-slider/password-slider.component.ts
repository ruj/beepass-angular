import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PasswordOptions } from '../../interfaces/password-options';

@Component({
  selector: 'app-password-slider',
  templateUrl: './password-slider.component.html',
  styleUrl: './password-slider.component.scss'
})
export class PasswordSliderComponent {
  @Input() options!: PasswordOptions;

  @Output() optionsChange = new EventEmitter<PasswordOptions>();

  public onSliderChange() {
    this.optionsChange.emit(this.options);
  }
}
