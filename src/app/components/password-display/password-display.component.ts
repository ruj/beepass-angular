import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-display',
  templateUrl: './password-display.component.html',
  styleUrl: './password-display.component.scss'
})
export class PasswordDisplayComponent {
  @Input() password: string = '';
}
