import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  private url = environment.apiUrl + '/users';
  registerForm: FormGroup;


  constructor(private authService: AuthService) {
   this.registerForm = new FormGroup({
    username: new FormControl(['', [Validators.required]]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.signUp({
      username: this.registerForm.value.username,
      email: this.registerForm.value.email, 
      password: this.registerForm.value.password
    }
      )
    .subscribe((data) => {
      console.log(data);
    })
  }
}

