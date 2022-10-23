import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { ArtistsComponent } from './components/artists/artists.component';


const routes: Routes = [
  { path: 'artists', component: ArtistsComponent },
  { path: 'artwork', component: ArtworkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
