import { Component, OnInit } from '@angular/core';
import {
   FormBuilder,
   FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Login_Response } from '../shared/auth.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;
  logincheck: boolean = false;
  public loginResponse: Login_Response[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  getLoginError(error) {
    switch (error) {
      case 'username':
        if (this.loginForm.get('username').hasError('required')) {
          return 'UserName is required';
        }

      case 'password':
        if (this.loginForm.get('password').hasError('required')) {
          return 'Password is required';
        }

        break;
      default:
        return '';
    }
  }
  login(values) {
    this.loading = true;
    this.authService.__login(values).subscribe((res) => {
      console.log(res);
      this.loginResponse = res.data;
      if (res.success == true) {
        this.storeAcesskey()
        this.router.navigate(['/welcome']);
      } else {
        this.logincheck = true;
      }
    });
  }
  storeAcesskey(){
    this.loginResponse.forEach(element => {
      if(element.auth_key){
        localStorage.setItem('accesskey',element.auth_key);
        localStorage.setItem('username',element.login_username)

      }
    
    });
  }
  }
