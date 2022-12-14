import { Component, OnInit } from '@angular/core';
import { CharacterLocation } from 'src/app/shared/models/character-locations';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characterDetail!: CharacterLocation;

  constructor() { }

  ngOnInit(): void {
  }

  displayCharacterDetail(characterDetail: CharacterLocation) {
    this.characterDetail = characterDetail;
  }
}
