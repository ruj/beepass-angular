import { Component, ViewChild } from '@angular/core';
import { PasswordService } from '../../services/password.service';
import { PasswordOptions } from '../../interfaces/password-options';
import { PasswordResponse } from '../../interfaces/password-response';
import { PasswordHistoryComponent } from '../password-history/password-history.component';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss'
})
export class PasswordGeneratorComponent {
  @ViewChild(PasswordHistoryComponent) passwordHistoryComponent!: PasswordHistoryComponent;

  public password: string = '';
  public passwordOptions: PasswordOptions = {
    length: 12,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSpecialChars: true
  }

  constructor(private passwordService: PasswordService) { }

  public generatePassword() {
    this.passwordService.generatePassword(this.passwordOptions).subscribe((response: PasswordResponse) => {
      this.password = response.password;
    });
  }

  public copyPassword() {
    navigator.clipboard.writeText(this.password);
  }

  public refreshPasswordHistory() {
    if (this.passwordHistoryComponent) {
      this.passwordHistoryComponent.refreshPasswordHistory();
    }
  }
}
