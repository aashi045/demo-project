import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginDetails, SignupDetails, ChangePassword } from './website';
@Injectable({
  providedIn: 'root',
})
export class WebsiteService {
  constructor(private http: HttpClient) {}

  createUser(user): Observable<SignupDetails> {
    return this.http.post<SignupDetails>(
      'http://13.233.89.19:89/api/User',
      user
    );
  }
  login(user): Observable<loginDetails> {
    return this.http.post<loginDetails>(
      'http://13.233.89.19:89/api/login',
      user
    );
  }

  password(user): Observable<ChangePassword> {
    return this.http.put<ChangePassword>(
      'http://13.233.89.19:89/api/User',
      user
    );
  }
}
