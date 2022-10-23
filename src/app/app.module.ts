import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { ArtworkProfileComponent } from './components/artwork-profile/artwork-profile.component';
import { ArtworkComponent } from './components/artwork/artwork.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistProfileComponent,
    ArtworkProfileComponent,
    ArtworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
