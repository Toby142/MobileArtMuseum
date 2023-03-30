import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtworkProfileComponent } from './components/artwork-profile/artwork-profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistProfileComponent,
    ArtworkComponent,
    ArtistsComponent,
    ArtworkProfileComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
