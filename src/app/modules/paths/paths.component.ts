import { Component, OnInit } from '@angular/core';
import { CharacterPath } from 'src/app/shared/models/paths';
import { ApiGotService } from 'src/app/shared/services/api-got.service';

@Component({
  selector: 'app-paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.scss']
})
export class PathsComponent implements OnInit {
  paths: CharacterPath[] = [];
  selectedCharacterID = '';
  selectCharacterPath: CharacterPath | undefined;
  constructor(private _apiGotService: ApiGotService) { }

  ngOnInit(): void {
    this.getPaths();
  }

  selectCharacter(id: string) {
    this.selectCharacterPath = this.paths.find(x => x._id === id);
  }

  // TODO: mejorar manejo de errores, agregar spinner
  getPaths(){
    this._apiGotService.getCharacterPaths().subscribe(
      (data: CharacterPath[]) => {
        this.paths = data;
        this.selectedCharacterID = this.paths[0]._id;
        this.selectCharacterPath = this.paths[0];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
