import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'hannoverleiht';
  sideNavOpen = false;

  toggleSideNav() {
    this.sideNavOpen = !this.sideNavOpen;
  }
}