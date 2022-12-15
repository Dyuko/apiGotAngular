import { Component, Input, OnInit } from '@angular/core';
import { CharacterPath, Path } from 'src/app/shared/models/paths';

@Component({
  selector: 'app-character-path-details',
  templateUrl: './character-path-details.component.html',
  styleUrls: ['./character-path-details.component.scss']
})
export class CharacterPathDetailsComponent implements OnInit {
  pathDetail!: CharacterPath;
  orderedPaths: Path[] | undefined;
  visitedCities: string[] = [];
  alive: boolean = true;
  deathPath: Path | undefined;
  @Input()
  set characterPathDetail(value: CharacterPath | undefined) {
    if(value === undefined) {
      return;
    }

    this.pathDetail = value;
    this.visitedCities = [];

    // Ordena los paths
    this.orderedPaths = this.pathDetail.path.sort(x => x.from);

    // Busca el path donde murió
    this.deathPath = this.orderedPaths.find(x => x.alive === false);
    this.alive = (this.deathPath === undefined);

    // Obtiene las ciudades visitadas
    this.getVisitedCities();
  }

  orderedCities: Path[] = [];
  constructor() { }

  ngOnInit(): void {

  }

  getVisitedCities() {
    if(this.orderedPaths != undefined) {
      for(let path of this.orderedPaths) {
        for(let subpath of path.path) {
          if(subpath.length === 3) {
            const cityName = subpath[2];
            if(!this.visitedCities.includes(cityName)) {
              this.visitedCities.push(cityName);
            }
          }
        }
      }
    }
  }
}
