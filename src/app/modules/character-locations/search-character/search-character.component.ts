import { Component, OnInit } from '@angular/core';
import { CharacterLocation } from 'src/app/shared/models/character-locations';
import { ApiGotService } from 'src/app/shared/services/api-got.service';
import { ErrorAlertService } from 'src/app/shared/services/error-alert.service';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {
  inputSearch: string = '';
  characterDetail!: CharacterLocation;
  constructor(private _errorAlertService: ErrorAlertService, private _apiGotService: ApiGotService) { }

  ngOnInit(): void {
  }

  search() {
    if(this.inputSearch === '') {
      this._errorAlertService.setError('Please add a search text');
      return;
    }

    this.getCharacterLocationsByName(this.inputSearch);
  }

  // TODO: mejorar manejo de errores, agregar spinner
  getCharacterLocationsByName(name: string){
    this._apiGotService.getCharacterLocationsByName(name).subscribe(
      (data: CharacterLocation) => {
        this.characterDetail = data;
      },
      (error) => {
        this._errorAlertService.setError('Result empty');
      }
    );
  }
}
