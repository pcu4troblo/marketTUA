import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logedIn: boolean;
  user: any = {};

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.getuser();
  }

  async Onlogin(){
    this.userService.login();
    await (this.getuser());
  }

  Onlogout(){
    this.userService.logout();
    this.user = {};
  }

  async getuser(){
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  goOrders() {
    this.router.navigateByUrl("/pedidos/" + this.user.name );
  }
}
