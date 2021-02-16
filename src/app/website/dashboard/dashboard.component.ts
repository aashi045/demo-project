import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
  returnUrl: any;
  ngOnInit(): void {}
  logout() {
    this.returnUrl = '';
    sessionStorage.removeItem('key1');
    localStorage.removeItem('key1');
    this.router.navigate([this.returnUrl]);
  }
}
