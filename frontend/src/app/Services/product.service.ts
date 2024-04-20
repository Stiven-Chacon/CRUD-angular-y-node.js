import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Url_base = 'http://localhost:3000/';
  private myApiUrl: String;

  constructor(private http: HttpClient) {
    this.myApiUrl = 'api/productos';

   }

   getListProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.Url_base}${this.myApiUrl}`);
   }
 
   deleteProduct(id: number): Observable<void> {
     return this.http.delete<void>(`${this.Url_base}${this.myApiUrl}${id}`)
   }
 
   saveProduct(product: Products): Observable<void> {
     return this.http.post<void>(`${this.Url_base}${this.myApiUrl}`,product)
   }
 
   getProduct(id: number): Observable<Products> {
     return this.http.get<Products>(`${this.Url_base}${this.myApiUrl}${id}`)
   }
 
   updateProduct(id: number, product: Products): Observable<void> {
     return this.http.put<void>(`${this.Url_base}${this.myApiUrl}${id}`, product);
   }
}
