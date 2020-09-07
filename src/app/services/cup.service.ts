import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Team } from '../models/team'

@Injectable({
  providedIn: 'root'
})
export class CupService {
  baseUrl = "https://raw.githubusercontent.com/delsonvictor/testetecnico/master/equipes.json"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  read(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: isError ? ['msg-error'] : ['msg-success']

    })
  }
}
