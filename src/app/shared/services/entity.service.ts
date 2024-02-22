import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entity } from '../models/entity.model';

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  // Simulando dados de entidades
  entidades: Entity[] = [
    {
      razaoSocial: 'Empresa A',
      nomeFantasia: 'Empresa A',
      cnpj: '12345678901234',
      regional: 'Regional A',
    },
    {
      razaoSocial: 'Empresa B',
      nomeFantasia: 'Empresa B',
      cnpj: '56789012345678',
      regional: 'Regional B',
    },
    {
      razaoSocial: 'Empresa C',
      nomeFantasia: 'Empresa C',
      cnpj: '90123456789012',
      regional: 'Regional C',
    },
  ];

  constructor() {}

  getEntidades(): Observable<Entity[]> {
    // Simulando uma requisição HTTP
    return of(this.entidades);
  }
}
