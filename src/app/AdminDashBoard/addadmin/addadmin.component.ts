import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.scss'],
})
export class AddadminComponent implements OnInit {
  // administrateur: User = {
  //   fullName: '',
  //   username: '',
  //   role: '',
  // };
  productDialog!: boolean;

  users!: User[];

  user!: User ;

  selectedUsers?: User[] | any;

  submitted!: boolean;
  roles=['Administrateur','Agent technique','Agent commericial'];

  myForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
  });
  constructor(  private messageService: MessageService,
    private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}

  loadData() {
    let $user: User = {
      fullName: this.myForm.get('fullName')?.value,
      role: this.myForm.get('role')?.value,
      username: this.myForm.get('username')?.value,
    };
    console.table($user);
    this.users.unshift($user);
    this.myForm.reset();

  }

  openNew() {
    //this.user = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      
      accept: () => {
        this.users = this.users.filter(
          (val) => this.selectedUsers.includes(val)
        );
        this.selectedUsers = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }
  editProduct(user: User) {
    this.user = { ...user };
    this.productDialog = true;
  }

  deleteProduct(user: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.fullName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter((val) => val.id !== user.id);
      // this.user = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
