import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.models';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

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

  users: User[]= [];

  roles = ['Administrateur', 'Whatever it is!'];

  myForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
  });
  constructor() {}

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
}
