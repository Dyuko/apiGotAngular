import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/shared/models/houses';
import { ApiGotService } from 'src/app/shared/services/api-got.service';
const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {
  houses: House[] = [];
  slicedHouses: House[] = [];
  page = 1;
	pageSize = 4;
  collectionSize = 0;
  constructor(private _apiGotService: ApiGotService) { }

  ngOnInit(): void {
    this.getHouses();
  }

  // TODO: mejorar manejo de errores, agregar spinner
  getHouses(){
    this._apiGotService.getHouses().subscribe(
      (data: House[]) => {
        this.houses = data;
        this.collectionSize = this.houses.length;
        this.refreshHouses();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectPage(page: string) {
		this.page = parseInt(page, 10) || 1;
    this.refreshHouses();
	}

	formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}

  refreshHouses() {
		this.slicedHouses = this.houses.slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
  }

}
