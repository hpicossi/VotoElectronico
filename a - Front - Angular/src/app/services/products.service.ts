import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/Categoria';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    constructor(private http : HttpClient) { }

    getProducts () : Observable<Product[]> {
        return this.http.get<Product[]>(`${environment.API_URL}/api/products`);
    }

    getProduct (id : string) : Observable<Product> {
        return this.http.get<Product>(`${environment.API_URL}/api/products/${id}`);
    }

    createProduct (name: string, description: string, price: Number, image: any, category: Categoria): Observable<Product> {
        return this.http.post<Product>(`${environment.API_URL}/api/products`, {
            name,
            description,
            price,
            image,
            category
        });
    }

    updateProduct (id: string, name: string, description: string, price: Number, image: any, category: Categoria): Observable<Product> {
        return this.http.put<Product>(`${environment.API_URL}/api/products/${id}`, {
            id,
            name,
            description,
            price,
            image,
            category
        });
    }

    deleteProduct (id : number) : Observable<any> {
        return this.http.delete(`${environment.API_URL}/api/products/${id}`);
    }
}
