import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorAlertService {
  private error = new Subject<string>();
  constructor() { }

  setError(mensaje: string) {
    this.error.next(mensaje);
  }

  getError(): Observable<string> {
    return this.error.asObservable();
  }
}
