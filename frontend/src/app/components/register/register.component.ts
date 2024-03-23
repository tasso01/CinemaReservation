import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  private url = 'http://localhost:3306/cinema/users';
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private users: UsersService) {
   this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    
  }
  ngOnInit(): void {
    this.users.addUsers(this.url, {
      email: this.registerForm.value.email, password: this.registerForm.value.password
    })
  }

  onSubmit(){
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    //TODO CHIAMA AUTHSERVICE
  }
}

