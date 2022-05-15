import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Product} from 'src/app/Models/produits';
import {ProductserviceService} from 'src/app/Services/productservice.service';
import {map, Subscription, switchMap} from "rxjs";
import {data} from "jquery";

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  providers: [MessageService, ConfirmationService],
})
export class AddserviceComponent implements OnInit, OnDestroy {

  status: string[] = ['ILLIMITE', 'FREE', 'INCLUDED'];

  sub = new Subscription();

  productDialog!: boolean;

  products: Product[] = [];

  product: Product;

  selectedProducts?: Product[] | any;

  submitted!: boolean;

  constructor(
    private productService: ProductserviceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {

  }

  ngOnInit() {
    this.sub.add(
      this.productService.getProducts()
        .pipe(
          map(res => res.payload),
        )
        .subscribe(
          products => this.products = products
        )
    )
  }

  openNew() {
    this.product = new Product();
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: ' Êtes-vous sûr de vouloir supprimer les produits selectionnés??',
      header: 'Confirmer',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Produits suprimer', life: 3000});
      }
    });
  }

  editProduct(product: Product) {
    this.product = {...product};
    this.productDialog = true;
  }

  saveProduct() {
    this.submitted = true;
    if (this.product.name.trim()) {
      if (this.product.id) {
        this.sub.add(
          this.productService.editProduct(this.product)
            .subscribe(
              updatedProduct => {
                this.products[this.findIndexById(this.product.id)] = this.product;

                this.products = [...this.products];
                this.productDialog = false;
                this.messageService.add(
                  {
                    severity: 'success',
                    summary: 'Information',
                    detail: 'Le produit est mis à jour',
                    life: 3000
                  }
                );
              }
            )
        )
      } else {
        this.sub.add(
          this.productService.saveProduct(this.product)
            .pipe(
              map(res => res.payload)
            )
            .subscribe(
              newProduct => {
                this.products.push(this.product);
                this.products = [...this.products];
                this.productDialog = false;
                this.messageService.add({
                  severity: 'success',
                  summary: 'Information',
                  detail: 'Produit Ajouté avec Succès',
                  life: 3000
                });
              }
            )
        )
      }

    }
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }


  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer ' + product.name + '?',
      header: 'Confirmer',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: "Annuler",
      acceptLabel: "Valider",
      acceptButtonStyleClass: "p-button-rounded p-button-success btn",
      rejectButtonStyleClass: "p-button-rounded p-button-warning btn",
      accept: () => {
        this.sub.add(
          this.productService.deleteProduct(product.id)
            .subscribe(
              data => {
                this.products = this.products.filter(val => val.id !== product.id);
                this.messageService.add(
                  {
                    severity: 'success',
                    summary: 'Information',
                    detail: `Le produit ${product.name} est supprimé`,
                    life: 3000
                  });
              }
            )
        )

      }
    });
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
