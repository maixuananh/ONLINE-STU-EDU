import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AlertDynamicService } from '../../share/alert-dynamic/alert-dynamic.service';
import { CookieUtils } from 'src/app/utils/cookie.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(protected ls: LoginService, protected ads: AlertDynamicService, protected router: Router) {}
  isLoginForm: boolean = true;

  login_form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required])),
  });

  register_form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    name: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required])),
    confirm_password: new FormControl('', Validators.compose([Validators.required]))
  });

  ngOnInit(): void {
  }

  clickEventChangeStatusAuth(): void {
    this.isLoginForm = !this.isLoginForm;
  }

  clickEventLogin(): void {
    if (!this.login_form.valid) return;
    this.ls.login(this.login_form.value.email || '', this.login_form.value.password || '').subscribe(response => {
      if (!response.status) {
        this.ads.alert({
          title: 'LOGIN FAIL',
          message: 'Email or password wrong',
          state: 'error'
        });
        return;
      }
      CookieUtils.setCookieAuthToken(response.data);
      this.ads.alert({
        title: 'LOGIN SUCCESS',
        message: 'Happy shopping',
        state: 'success'
      });
      this.router.navigate(['/']);
    });
  }

  clickEventRegister(): void {
    if (!this.register_form.valid) return;
    if (this.register_form.value.confirm_password !== this.register_form.value.password) {
      this.ads.alert({
        title: 'REGISTER FAIL',
        message: 'Confirm password not same with password',
        state: 'error'
      });
      return;
    }
    this.ls.register(this.register_form.value.email || '', this.register_form.value.password || '', this.register_form.value.name || '').subscribe(response => {
      if (!response.status) {
        this.ads.alert({
          title: 'REGISTER FAIL',
          message: 'Email is exists',
          state: 'error'
        });
        return;
      }
      
      CookieUtils.setCookieAuthToken(response.data);
      this.ads.alert({
        title: 'REGISTER SUCCESS',
        message: 'Happy shopping',
        state: 'success'
      });
      this.router.navigate(['/']);
    });
  }

}
