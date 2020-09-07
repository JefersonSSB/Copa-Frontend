import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackbar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'Close', {
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
}
