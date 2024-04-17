import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  hide = true;
  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  ngOnInit(): void {
   
  }
  onSubmit(){
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      response => {
        console.log('Login effettuato con successo', response);
        // Puoi reindirizzare l'utente o eseguire altre azioni
        localStorage.setItem('JWT_TOKEN', response);
      },
    );
  }
}
