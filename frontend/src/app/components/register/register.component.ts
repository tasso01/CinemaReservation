import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService) {
   this.registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.register(this.registerForm.value.user, this.registerForm.value.password).subscribe(
      response => {
        console.log('Login effettuato con successo', response);
        // Puoi reindirizzare l'utente o eseguire altre azioni
        localStorage.setItem('JWT_TOKEN', response);
      }
    )
  }
}

