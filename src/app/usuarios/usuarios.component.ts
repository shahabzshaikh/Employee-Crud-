import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;

  observador: Observable<any>;

  constructor(private usuariosService: UsuariosService) {
    this.page = 1;
  }

  ngOnInit() {
    this.getUsuarios(this.page);
  }

  getUsuarios(page: number) {
    this.usuariosService.getUsuarios(page)
      .subscribe(dados => {
        this.usuarios = dados.data;
        this.page = dados.page;
        this.total = dados.total;
        this.totalPages = dados.total_pages;
      });
    this.observador = this.usuariosService.getUsuarios(page);
  }

  mudouPagina(evento) {
    this.getUsuarios(evento.valor); 
  }

}