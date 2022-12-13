import { Component, OnInit } from '@angular/core';
import { CharacterLocations } from 'src/app/shared/models/character-locations';
import { ApiGotService } from 'src/app/shared/services/api-got.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  characterLocations!: CharacterLocations;

  constructor(private _apiGotService: ApiGotService) { }

  ngOnInit(): void {
    this.getCharacterLocations();
  }

  getCharacterLocations(){
    this._apiGotService.getCharacterLocations().subscribe(
      (data: CharacterLocations) => {
        this.characterLocations = data;
      },
      (error) => {
        console.log(error); // TODO: manejo de error
      }
    );
  }
}
