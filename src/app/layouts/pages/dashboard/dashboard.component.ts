import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/shared/models/entity.model';
import { EntityService } from 'src/app/shared/services/entity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  entidades: Entity[] = [];

  constructor(private entidadeService: EntityService) {}

  ngOnInit(): void {
    this.carregarEntidades();
  }

  carregarEntidades(): void {
    this.entidadeService
      .getEntidades()
      .subscribe((entidades) => (this.entidades = entidades));
  }
}
