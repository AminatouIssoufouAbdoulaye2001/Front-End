import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  status: string[]=["Illimité","Free","Included"];

  productNames: string[]=[
    "Hébergement basic",
    "Hébergement economique",
    "Hébergement pro",
    "Serveur dédier",
    "Vps linux",
    "Vps windows"
  ];
  constructor(private http:HttpClient) { }

  generateProduct(): Product {
    const product:Product={
      id:this.generateId(),
      website:this.generateWebsite(),
      name:this.generateName(),
      price:this.generatePrice(),
      category:"Produit Category",
      bandeWidth:this.generateStatus(),
      licence:this.generateLicence(),
      core:this.generateCore(),
      stockage:this.generateStockage(),
      se:this.generateSe(),
      domaine:this.generateDomain()

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
    return Math.floor(Math.random() * Math.floor(1000)+1);
  }
  generateSe(): string | undefined {
    throw new Error('Method not implemented.');
  }
  generateDomain(){
    return this.status[Math.floor(Math.random() * Math.floor(3))];
  }
}
