import { Component, OnInit } from '@angular/core';
import { EntityService } from 'src/app/shared/services/entity.service';
import { Entity } from 'src/app/shared/models/entity.model';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  standalone: true,
  imports: [MatIconModule, MatTableModule],
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
