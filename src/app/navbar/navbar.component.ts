import { Component, OnInit } from '@angular/core';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faBaby = faBaby;
  menuVisible = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(bool: boolean): void {
    this.menuVisible = bool;
  }
}
