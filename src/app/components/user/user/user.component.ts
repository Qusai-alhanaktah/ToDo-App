import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  helo: any;
  posts: any;
  isEdit: boolean = false;
  editButton: string = 'Edit User';
  showPosts: boolean = false;
  getDataBtn: string = 'Get Data';

  constructor(private dataService: DataService) {
   }

  ngOnInit(): void {
    this.name = 'Qusai';
    this.age = 23;
    this.email = 'qusaialhanaktah@gmail.com';
    this.address = {
      country :'Jordan',
      city: 'Amman',
      street: 'Unversity Of Jordan Street'
    };
    this.hobbies = ['swim', 'reading', 'coding'];
    this.helo = 'welcome in 2020' 
    this.dataService.getPost().subscribe((posts)=> {
      this.posts = posts;      
    });
  }
 
  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for (let i = 0; i < this.hobbies.length; i++) {
        if (this.hobbies[i] == hobby) this.hobbies.splice(i, 1);
    }      
  }
  editUser(){
    this.isEdit = !this.isEdit;
    if(this.editButton !== 'X') this.editButton = 'X';
    else this.editButton = 'Edit User';
  }
  getData(){
    this.showPosts = !this.showPosts
    if(this.getDataBtn !== 'X') this.getDataBtn = 'X';
    else this.getDataBtn = 'Get Data';
  }
}

interface Address {
  
    street: string,
    city: string,
    country: string
  
}
interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}