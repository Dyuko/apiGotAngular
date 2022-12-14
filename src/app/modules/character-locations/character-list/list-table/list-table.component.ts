import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CharacterLocation, CharacterLocations } from 'src/app/shared/models/character-locations';
import { ApiGotService } from 'src/app/shared/services/api-got.service';
const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  characterLocations!: CharacterLocations;
  slicedCharacterLocations: CharacterLocation[] = [];
  currentSelectedRowIndex: number = -1;
  page = 1;
	pageSize = 4;
  collectionSize = 0;

  @Output() characterDetailEvent = new EventEmitter<CharacterLocation>();
  constructor(private _apiGotService: ApiGotService) { }

  ngOnInit(): void {
    this.getCharacterLocations();
  }

  // TODO: manejo de error, agregar spinner
  getCharacterLocations(){
    this._apiGotService.getCharacterLocations().subscribe(
      (data: CharacterLocations) => {
        this.characterLocations = data;
        this.collectionSize = this.characterLocations.data.length;
        this.refreshCharacterLocations();
        this.displayFirstCharacterDetail();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshCharacterLocations() {
		this.slicedCharacterLocations = this.characterLocations.data.slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
    this.currentSelectedRowIndex = -1;
  }

  selectPage(page: string) {
		this.page = parseInt(page, 10) || 1;
    this.refreshCharacterLocations();
	}

	formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}

  displayCharacterDetail(characterLocation: CharacterLocation, index: number) {
    this.characterDetailEvent.emit(characterLocation);
    this.currentSelectedRowIndex = index;
  }

  displayFirstCharacterDetail() {
    this.characterDetailEvent.emit(this.characterLocations.data[0]);
    this.currentSelectedRowIndex = 0;
  }

}
