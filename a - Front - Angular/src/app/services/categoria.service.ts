import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/Categoria';

@Injectable({
    providedIn: 'root'
  })

  export class CategoriaService {

    constructor(private http : HttpClient) { }

    getCategorias (): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(`${environment.API_URL}/api/category`);
    }
  }
