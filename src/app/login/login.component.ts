import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  cookieValue!: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']

    })
  }
  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    if (email === "admin" && password === "admin") {
      this._snackBar.open("logged In", "", {
        duration: 2000,
      });
      {
        this.cookieService.set('Test', 'Hello World');
        this.cookieValue = this.cookieService.get('Test');
      }
      this.loginForm.reset();
      this.router.navigate(['navigation']);
    }
    else {
      this._snackBar.open("User not found", "", {
        duration: 2000,

      });
    }
  }
}
