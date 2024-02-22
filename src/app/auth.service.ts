import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(email: any, password: any): boolean {
    console.log(email, password);

    // if (email != '' && password != '') return true;
    // else
    return true;
    // throw new Error('Method not implemented.');
  }

  get(email: string, password: string): boolean {
    // Lógica de autenticação aqui (pode ser uma chamada HTTP para um backend, etc.)
    // Se a autenticação for bem-sucedida, retorne true, senão retorne false
    return true; // apenas um exemplo
  }

  logout(): void {
    // Lógica de logout aqui
  }

  isLoggedIn(): boolean {
    // Verifique se o usuário está autenticado (por exemplo, verificando se há um token JWT válido)
    return true; // apenas um exemplo
  }
}
