import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CharacterListComponent } from './modules/character-locations/character-list/character-list.component';
import { SearchCharacterComponent } from './modules/character-locations/search-character/search-character.component';
import { CharacterDetailsComponent } from './modules/character-locations/character-details/character-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTableComponent } from './modules/character-locations/character-list/list-table/list-table.component';
import { FormsModule } from '@angular/forms';
import { ErrorAlertComponent } from './shared/components/error-alert/error-alert.component';
import { HousesComponent } from './modules/houses/houses.component';
import { PathsComponent } from './modules/paths/paths.component';
import { CharacterPathDetailsComponent } from './modules/paths/character-path-details/character-path-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterListComponent,
    SearchCharacterComponent,
    CharacterDetailsComponent,
    ListTableComponent,
    ErrorAlertComponent,
    HousesComponent,
    PathsComponent,
    CharacterPathDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
