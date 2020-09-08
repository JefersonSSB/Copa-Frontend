import { Component, OnInit, Input } from '@angular/core';
import { Winner } from 'src/app/models/winner';

@Component({
  selector: 'app-winner-teams',
  templateUrl: './winner-teams.component.html',
  styleUrls: ['./winner-teams.component.css']
})
export class WinnerTeamsComponent implements OnInit {

  winner: Winner[];

  first: Winner;
  second: Winner;
  constructor() { }

  ngOnInit(): void {
    this.winner = JSON.parse(localStorage.getItem('winners'));

    if (this.winner[0].position === 1) {
      this.first = this.winner[0];
      this.second = this.winner[1];
    } else {
      this.first = this.winner[1];
      this.second = this.winner[0];
    }
  }
}

