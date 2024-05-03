import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.authService
      .register(
        this.registerForm.value.username,
        this.registerForm.value.password
      )
      .subscribe((response) => {
        console.log('Login effettuato con successo', response);
        // Puoi reindirizzare l'utente o eseguire altre azioni
        localStorage.setItem('JWT_TOKEN', response);
      });
  }

  onPasswordKeyDown(event: KeyboardEvent) {
    // Controlla se l'utente ha premuto il tasto Enter (codice 13)
    if (event.key === 'Enter') {
      // Previeni l'azione predefinita (premendo il tasto invio)
      event.preventDefault();

      // Invia il form
      this.onSubmit();
    }
  }
}
