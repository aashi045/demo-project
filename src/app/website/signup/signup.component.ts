import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { WebsiteService } from '../website.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  alert: boolean = false;
  Message: any = '';
  missingField = true;
  form: any;
  constructor(
    private http: HttpClient,
    private service: WebsiteService,
    private route: Router
  ) {}
  data;
  ngOnInit(): void {
    // this.userForm = new FormGroup({
    //   firstName: new FormControl('', Validators.required),
    //   lastName: new FormControl('', Validators.required),
    //   email: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required]),
    //   address: new FormControl('', Validators.required),
    //   mobile: new FormControl('', [Validators.required]),
    //   city: new FormControl('', Validators.required),
    //   state: new FormControl('', Validators.required),
    //   zip: new FormControl('', Validators.required),
    // });
  }
  addUser(form) {
    console.log(form.value);
    let newUser = {
      firstName: form.value.first_name,
      lastName: form.value.last_name,
      address: form.value.address,
      city: form.value.city,
      zip: form.value.zip,
      state: form.value.state,
      email: form.value.email,
      password: form.value.password,
      mobile: form.value.mobile_no,
    };
    console.log(newUser);
    this.service.createUser(newUser).subscribe(
      (data) => {
        this.missingField = false;
      }

      // (error) => {
      //   if (error.error.email === 'duplicated') {
      //     this.missingField = true;
      //     this.Message =
      //       'The email address you have used is already registered!';
      //   }
      //   console.log(error);
      //   this.missingField = true;
      // },
      // () => {
      //   this.missingField = false;
      //   this.route.navigate(['../']);
      // }
    );
    this.alert = true;
  }
  closeAlert() {
    this.alert = false;
  }
}
