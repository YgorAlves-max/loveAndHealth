import { routes } from './../../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/auth.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;
  formSubmitted = false;
  credentialsInvalid = false;
  processing = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitForm(): void {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      let email = this.loginForm.get('email')?.value;
      let password = this.loginForm.get('password')?.value;

      // Chame o método login do AuthService para autenticar o usuário
      if (this.authService.login(email, password)) {
        console.log('Entrei', email, password);
        this.router.navigate(['/dashboard']);
      } else {
        // Se as credenciais forem inválidas, defina a variável credentialsInvalid como true para exibir uma mensagem de erro
        this.credentialsInvalid = true;
      }
    }
  }
}
