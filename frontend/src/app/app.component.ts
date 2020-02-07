import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'hannoverleiht';
  sideNavOpen = false;
  searchActive = false;
  searchterm = '';

  constructor(
    private router: Router
  ) {}

  toggleSideNav() {
    this.sideNavOpen = !this.sideNavOpen;
  }

  toggleSearch() {
    this.searchActive = !this.searchActive;
  }

  toMessaging() {
    this.router.navigate(['conversations'])
  }

  toFavourites() {
    this.router.navigate(['favourites']);
  }

  toHome() {
    this.router.navigate(['dashboard']);
  }

}
