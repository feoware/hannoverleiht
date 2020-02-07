import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemCardComponent } from './item-card/item-card.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'conversations', component: ConversationsComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: '**', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemCardComponent,
    ConversationsComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
