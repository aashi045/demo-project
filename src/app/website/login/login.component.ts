import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsiteService } from '../website.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  storage: any;
  result: any;
  returnUrl: any;
  constructor(
    private httpClient: HttpClient,
    private service: WebsiteService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  userLogin(form) {
    console.log(form.value);
    let UserLoginDetail = {
      email: form.value.email,
      password: form.value.password,
    };
    this.returnUrl = '/dashboard';
    this.service.login(UserLoginDetail).subscribe(
      (data) => {
        console.log(data);
        this.result = data;
        this.router.navigate([this.returnUrl]);
        this.invalidLogin = false;
        localStorage.setItem('key1', JSON.stringify(this.result.id));
        // const res = window.localStorage.getItem('key1');
        // console.log(res);
        sessionStorage.setItem('key1', JSON.stringify(this.result.id));
      },
      (error) => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }
}
