import { ErrorAlertService } from 'src/app/shared/services/error-alert.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss']
})
export class ErrorAlertComponent implements OnInit, OnDestroy {
  textError = '';
  showError = false;
  subscription: Subscription;
  constructor(private errorAlerService: ErrorAlertService) {
    this.subscription = this.errorAlerService.getError().subscribe(data => {
      this.textError = data;
      this.displayErrorMessage();
    })
  }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    displayErrorMessage() {
      this.showError = true;
    }

    hideAlert() {
      this.showError = false;
    }

}
