import { Component, OnInit } from '@angular/core';
import { PasswordHistory } from '../../interfaces/password-history';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-password-history',
  templateUrl: './password-history.component.html',
  styleUrl: './password-history.component.scss'
})
export class PasswordHistoryComponent implements OnInit {
  public passwords: PasswordHistory[] = [];

  constructor(private passwordService: PasswordService) { }

  public ngOnInit() {
    this._getPasswordHistory()
  }

  private _getPasswordHistory() {
    this.passwordService.passwordHistory().subscribe((passwords: PasswordHistory[]) => {
      this.passwords = passwords.reverse();
    });
  }
}
