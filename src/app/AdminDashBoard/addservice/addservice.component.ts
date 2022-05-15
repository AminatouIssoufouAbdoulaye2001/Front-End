import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Product } from 'src/app/Models/produits';
import { ProductserviceService } from 'src/app/Services/productservice.service';
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
export class AddserviceComponent implements OnInit {

    status= [
        {value:'ILLIMITE', label:'illimite'},
        {value: 'FREE', label:'free'} ,
        {vakue:'INCLUDED', label:'included'}
    ];

  productForm: FormGroup;

  productDialog!: boolean;

  products!: Product[];

  product!: Product;

  selectedProducts?: Product[] | any;

  submitted!: boolean;

  constructor(
    private productService: ProductserviceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder
    ) { 
        this.productForm = fb.group({
            
        })
    }

  ngOnInit() {
      this.productService.getProducts().then(data => this.products = data);

  }

  openNew() {
      this.product = {};
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
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Produits suprimer', life: 3000});
          }
      });
  }

  editProduct(product: Product) {
      this.product = {...product};
      this.productDialog = true;
  }

  deleteProduct(product: Product) {
      this.confirmationService.confirm({
          message: 'Êtes-vous sûr de vouloir supprimer ' + product.name + '?',
          header: 'Confirmer',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.products = this.products.filter(val => val.id !== product.id);
              this.product = {};
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Produit suprimer', life: 3000});
          }
      });
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  saveProduct() {
      this.submitted = true;

      if (this.product.name?.trim()) {
          if (this.product.id) {
              this.products[this.findIndexById(this.product.id)] = this.product;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Produit mis à jour', life: 3000});
          }
          else {
              this.product.id = this.createId();
              this.products.push(this.product);
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Produit créer', life: 3000});
          }

          this.products = [...this.products];
          this.productDialog = false;
          this.product = {};
      }
  }

  findIndexById(id: string): number {
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
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }
























  // productDialog!: boolean;

  // products: Product[] = [];

  // product!: Product ;

  // selectedProducts: Product[] | any;

  // submitted!: boolean;
  // statuses = [
  //   { label: 'Free', value: 'free' },
  //   { label: 'Illimité', value: 'illimité' },
  //   { label: 'Inclus', value: 'inclus' },
  // ];

  // constructor(
  //   //private productService: ProductserviceService,
  //   private messageService: MessageService,
  //   private confirmationService: ConfirmationService
  // ) {}

  // ngOnInit(): void {}

  // myForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   website: new FormControl('', [Validators.required]),
  //   stockage: new FormControl('', [Validators.required]),
  //   price: new FormControl('', [Validators.required]),
  //   core: new FormControl('', [Validators.required]),
  //   bandeWidth: new FormControl('', [Validators.required]),
  //   catalogue: new FormControl('', [Validators.required]),
  //   domaine: new FormControl('', [Validators.required]),
  // });

  // openNew() {
  //   this.product = {};
  //   this.submitted = false;
  //   this.productDialog = true;
  // }

  // deleteSelectedProducts() {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete the selected products?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',

  //     accept: () => {
  //       this.products = this.products.filter(
  //         (val) => this.selectedProducts.includes(val)
  //       );
  //       this.selectedProducts = null;
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Successful',
  //         detail: 'Products Deleted',
  //         life: 3000,
  //       });
  //     },
  //   });
  // }
  // editProduct(product: Product) {
  //   this.product = { ...product };
  //   this.productDialog = true;
  // }

  // deleteProduct(product: Product) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + product.name + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.products = this.products.filter((val) => val.id !== product.id);
  //       this.product = {};
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Successful',
  //         detail: 'Product Deleted',
  //         life: 3000,
  //       });
  //     },
  //   });
  // }
  // hideDialog() {
  //   this.productDialog = false;
  //   this.submitted = false;
  // }

  // saveProduct() {
  //   //this.submitted = true;
  //   let $product: Product = {
  //     name: this.myForm.get('name')?.value,
  //     website: this.myForm.get('website')?.value,
  //     stockage: this.myForm.get('stokage')?.value,
  //     price: this.myForm.get('price')?.value,
  //     core: this.myForm.get('core')?.value,
  //     bandeWidth: this.myForm.get('bandewidth')?.value,
  //     catalogue: this.myForm.get('catalogue')?.value,
  //     domaine: this.myForm.get('domaine')?.value,
  //   };

  //   console.table($product);
  //   this.products.unshift($product);
  // this.myForm.reset();
  // }
  // createId(): string {
  //   let id = '';
  //   var chars =
  //     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (var i = 0; i < 5; i++) {
  //     id += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   return id;
  // }
}
