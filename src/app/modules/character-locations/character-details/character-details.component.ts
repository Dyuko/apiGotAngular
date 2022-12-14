import { Component, Input, OnInit } from '@angular/core';
import { CharacterLocation } from 'src/app/shared/models/character-locations';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  @Input() characterDetail!: CharacterLocation;
  constructor() { }

  ngOnInit(): void {
  }

}
