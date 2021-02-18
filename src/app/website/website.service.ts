import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginDetails, SignupDetails, ChangePassword } from './website';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class WebsiteService {
  public apiurl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  createUser(user): Observable<SignupDetails> {
    return this.http.post<SignupDetails>(
      'http://13.233.89.19:89/api/User',
      user
    );
  }
  login(user): Observable<loginDetails> {
    return this.http.post<loginDetails>(this.apiurl + 'login', user);
  }

  password(user): Observable<ChangePassword> {
    return this.http.put<ChangePassword>(
      'http://13.233.89.19:89/api/User',
      user
    );
  }
}
