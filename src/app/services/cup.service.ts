import { Injectable, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Team } from '../models/team'
import { Winner } from '../models/winner';

@Injectable({
  providedIn: 'root'
})
export class CupService {
  baseUrl = "https://localhost:5001/v1/copa"

  showWinners = new EventEmitter<any>();

  eventEmit(result: Observable<any>): void {
    this.showWinners.emit(result);
  }

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  read(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  post(team: Team[]): Observable<Winner[]> {
    return this.http.post<Team[]>(this.baseUrl, team).pipe(
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
