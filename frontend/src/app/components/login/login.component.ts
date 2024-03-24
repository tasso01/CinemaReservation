import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  private url = environment.apiUrl + '/users';
  loginForm: FormGroup;

  constructor(private users: UsersService) {
    this.loginForm = new FormGroup({
      username: new FormControl(['', [Validators.required]]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  ngOnInit(): void {
   
  }
  onSubmit(){this.users.addUsers(this.url, {
    username: this.loginForm.value.username,
    email: this.loginForm.value.email, 
    password: this.loginForm.value.password
  })
  .subscribe((data) => {
    console.log(data);
  })
  }
}
