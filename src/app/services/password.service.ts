import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PasswordOptions } from '../interfaces/password-options';
import { PasswordResponse } from '../interfaces/password-response';
import { PasswordHistory } from '../interfaces/password-history';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  public generatePassword(input: PasswordOptions): Observable<PasswordResponse> {
    return this.http.post<PasswordResponse>(`${this.apiUrl}/generate-password`, input);
  }

  public passwordHistory(): Observable<PasswordHistory[]> {
    return this.http.get<PasswordHistory[]>(`${this.apiUrl}/password-history`);
  }
}
