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
    this.loggedIn();
  }

  Onlogin(){
    this.userService.login();
    this.user = this.userService.usuario;
    console.log(this.user);
  }

  Onlogout(){
    this.userService.logout();
    this.user = {};
  }

  loggedIn(){
    this.logedIn = this.userService.logedIn();
  }

  goOrders() {
    this.router.navigateByUrl("/pedidos");
  }
}
