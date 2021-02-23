import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsiteService } from '../website.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  errorMessage = 'Password does not match';
  invalidLogin = false;
  storage: any;
  alert1: boolean = false;
  public image = '/demo-project/assets/images/password.png';
  url: any;
  constructor(private service: WebsiteService, private router: Router) {}

  ngOnInit(): void {}

  onUpdate(form) {
    console.log(form.value);
    this.storage = window.sessionStorage.getItem('key1');
    console.log(this.storage);
    let details = {
      id: JSON.parse(localStorage.getItem('key1')),
      // id: sessionStorage.getItem(JSON.valueOf('key1')),
      // id: window.sessionStorage.getItem('key1'),
      oldPassword: form.value.current_password,
      newPassword: form.value.new_password,
    };
    console.log(details);
    this.service.password(details).subscribe(
      (data) => {
        this.invalidLogin = false;
      },
      (error) => {
        console.log(error);
        this.invalidLogin = true;
      }
    );

    this.alert1 = true;
  }
  logout() {
    this.url = '';
    sessionStorage.removeItem('key1');
    localStorage.removeItem('key1');
    this.router.navigate([this.url]);
  }
  closeAlert() {
    this.alert1 = false;
  }
}
