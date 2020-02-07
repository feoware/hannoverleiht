import { Component } from '@angular/core';

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

  toggleSideNav() {
    this.sideNavOpen = !this.sideNavOpen;
  }

  toggleSearch() {
    this.searchActive = !this.searchActive;
  }

}
