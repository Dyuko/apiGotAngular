import { PathsComponent } from './modules/paths/paths.component';
import { HousesComponent } from './modules/houses/houses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './modules/character-locations/character-list/character-list.component';
import { SearchCharacterComponent } from './modules/character-locations/search-character/search-character.component';

const routes: Routes = [
  { path: 'character-locations-list', component: CharacterListComponent },
  { path: 'character-locations-search', component: SearchCharacterComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'paths', component: PathsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
