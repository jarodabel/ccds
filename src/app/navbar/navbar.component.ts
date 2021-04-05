import { Component, OnInit } from '@angular/core';
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faBaby = faBaby;
  menuVisible = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
  toggleMenuOff(): void {
    this.menuVisible = false;
  }
  login(): void{
    this.userService.googleSignInPopup();
  }
}
