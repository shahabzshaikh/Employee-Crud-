import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuariosService {

  private address: string;

  constructor(private http: Http) {
    this.address = 'https://reqres.in/api/';
  }

  getUsuarios(page: number): Observable<any> {
    return this.http
      .get(`${ this.address }users?page=${ page }`)
      .map(response => response.json());
  }
}