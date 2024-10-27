import { Component, OnInit } from '@angular/core';
import { PasswordHistory } from '../../interfaces/password-history';
import { PasswordService } from '../../services/password.service';
import { formatDistanceToNow } from 'date-fns';

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

  public refreshPasswordHistory() {
    this._getPasswordHistory();
  }

  public getTimeAgo(createdAt: string) {
    return formatDistanceToNow(createdAt, { addSuffix: true });
  }

  private _getPasswordHistory() {
    this.passwordService.passwordHistory().subscribe((passwords: PasswordHistory[]) => {
      this.passwords = passwords.reverse();
    });
  }
}
