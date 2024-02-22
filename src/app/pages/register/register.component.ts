import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// import { passwordMatchValidator } from './password-match.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class RegisterComponent implements OnInit {
  event: any;
  isEqual: boolean = false;
  submit: boolean = false;
  hide = true;
  hideConfirm = true;
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  submitForm() {
    this.submit = true;
    let password = this.registerForm.get('password')?.value;
    let confirmPassword = this.registerForm.get('confirmPassword')?.value;
    if (password === confirmPassword) this.isEqual = true;
    else this.isEqual = false;

    if (this.registerForm.valid && this.isEqual) {
      console.log(
        'Formulário válido! Dados submetidos:',
        this.registerForm.value
      );
    } else {
      console.log('Formulário inválido! Verifique os campos.');
    }
  }
}
