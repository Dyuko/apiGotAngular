import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGotService {
  baseUrl = 'https://api.got.show/api/book';
  constructor(private httpClient: HttpClient) { }

  getCharacterLocations(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/characterlocations`);
  }

  getCharacterLocationsByName(name: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/characterlocations/${name}`);
  }

  getHouses(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/houses`);
  }

  getCharacterPaths(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/characterpaths`);
  }
}
