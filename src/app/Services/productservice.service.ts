import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
 

  status: string[] = ['ILLIMITE', 'FREE', 'INCLUDED'];
  productNames: string[]=[
    "Hébergement Basic",
    "Hébergement E-commerce",
    "Hébergement Pro"
   ];
  constructor(private http:HttpClient) { }
  getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return data; });
}
getProducts() {
    return this.http.get<any>('assets/products.json')
  .toPromise()
  .then(res => <Product[]>res.data)
  .then(data => { return data; });
}
getProductsWithOrdersSmall() {
  return this.http.get<any>('assets/products-orders-small.json')
  .toPromise()
  .then(res => <Product[]>res.data)
  .then(data => { return data; });
}

  generateProduct(): Product {
    const product:Product={
      id:this.generateId(),
      website:this.generateWebsite(),
      name:this.generateName(),
      price:this.generatePrice(),
      bandeWidth:this.generateStatus(),
      core:this.generateCore(),
      stockage:this.generateStockage(),
      domaine:this.generateStatus()

    };
    return product;
  }
  generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    
    return text;
  }
  generateWebsite(){
    return Math.floor(Math.random() * Math.floor(20)+1);
  }
  generateName() {
    return this.productNames[Math.floor(Math.random() * Math.floor(6))];
  }
  generatePrice() {
    return Math.floor(Math.random() * Math.floor(299)+1);
  }
  generateStatus(){
    return this.status[Math.floor(Math.random() * Math.floor(3))];
  }
  generateLicence(){
    return Math.floor(Math.random() * Math.floor(20)+1);
  }
  generateCore() {
    return Math.floor(Math.random() * Math.floor(15)+1);
  }
  generateStockage() {
     return this.productNames[Math.floor(Math.random() * Math.floor(6))];
  }
}

