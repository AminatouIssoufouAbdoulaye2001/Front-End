import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../Models/produits';
import {environment} from "../../environments/environment";
import {catchError, Observable, of} from "rxjs";
import {APIRequestResponse} from "../Models/api-response.model";

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private Products: Product [] = [];

  status: string[] = ['ILLIMITE', 'FREE', 'INCLUDED'];
  productNames: string[] = [
    "Hébergement Basic",
    "Hébergement E-commerce",
    "Hébergement Pro"
  ];

  constructor(private http: HttpClient) {
  }

  saveProduct(produit: Product): Observable<APIRequestResponse> {
    return this.http.post<APIRequestResponse>(environment.SERVER_URL + 'services', produit).pipe(
      catchError(err => {
        console.log(err);
        throw err;
      })
    )
  }

  editProduct(produit: Product): Observable<APIRequestResponse> {
    return this.http.patch<APIRequestResponse>(environment.SERVER_URL + `services/${produit.id}`, produit)
      .pipe(
        catchError(err => {
          console.log(err);
          throw err;
        })
      )
  }

  deleteProduct(produitId: number): Observable<APIRequestResponse> {
    return this.http.delete<APIRequestResponse>(environment.SERVER_URL + `services/${produitId}`)
      .pipe(
        catchError(err => {
          console.log(err);
          throw err;
        })
      )
  }

  getProducts() {
    return this.http.get<APIRequestResponse>(environment.SERVER_URL + 'services')
      .pipe(
        catchError(err => {
          console.log(err);
          throw err;
        })
      )
  }

  getProduct(productId: number) {
    return this.http.get<APIRequestResponse>(
      environment.SERVER_URL + `services/${productId}`
    ).pipe(
      catchError(err => {
        console.log(err);
        throw err;
      })
    )
  }

  subscribeToServices(productIds: number[]) {
    return this.http.post<APIRequestResponse>(environment.SERVER_URL + 'services/subscribe', productIds)
      .pipe(
        catchError(err => {
          console.log(err);
          throw err;
        })
      )
  }

  getsubscribeToServices() {
    return this.http.get<APIRequestResponse>(environment.SERVER_URL + 'services/subscribe')
      .pipe(
        catchError(err => {
          console.log(err);
          throw err;
        })
      )
  }

  getSelectedProducts() {
    return of(this.Products)
  }

  addSelectedProduct(product: Product): Product[] {
    if (!this.Products.find(el => el.id === product.id)) {
      this.Products.push(product)
    }
    return this.Products
  }

  removeProduct(productId: number): Product[] {
    this.Products = this.Products.filter(
      product => product.id !== productId
    )
    console.log(this.Products)
    return this.Products;
  }

  generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  generateName() {
    return this.productNames[Math.floor(Math.random() * Math.floor(6))];
  }

  generatePrice() {
    return Math.floor(Math.random() * Math.floor(299) + 1);
  }

  generateStatus() {
    return this.status[Math.floor(Math.random() * Math.floor(3))];
  }

  generateLicence() {
    return Math.floor(Math.random() * Math.floor(20) + 1);
  }

  generateCore() {
    return Math.floor(Math.random() * Math.floor(15) + 1);
  }

  generateStockage() {
    return this.productNames[Math.floor(Math.random() * Math.floor(6))];
  }
}

