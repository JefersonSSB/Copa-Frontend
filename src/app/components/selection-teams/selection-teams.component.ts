import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '../../models/team'
import { CupService } from '../../services/cup.service'
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/Shared/pop-up/pop-up.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-selection-teams',
  templateUrl: './selection-teams.component.html',
  styleUrls: ['./selection-teams.component.css']
})
export class SelectionTeamsComponent implements OnInit {

  teams: Team[];
  selectedTeams: Team[];
  debug = false;

  constructor(private cupService: CupService, public dialog: MatDialog, private router: Router) {

  }

  ngOnInit(): void {
    localStorage.setItem('header', "Fase de Seleção");
    localStorage.setItem('description', "Selecione 8 equipes que você deseja para a competição e depois pressione o botão Gerar Copa para prosseguir");
    this.selectedTeams = [];
    this.cupService.read().subscribe(teams => {
      this.teams = teams;
    })
  }

  selectedTeamsLentgh(): any {
    return this.selectedTeams.length;
  }

  generateCup() {
    if (this.selectedTeams.length != 8) {
      this.openDialog("Deverá ter exatamaneto 8 equipes para gerar a copa");
    } else {

      this.cupService.post(this.selectedTeams).subscribe(winners => {
        this.cupService.showMessage("Copa Gerada")
        localStorage.setItem('winners', JSON.stringify(winners));
        this.router.navigate(['winners']);
      });

    }
  }

  onChange(team: Team, isChecked: boolean) {
    if (isChecked) {

      this.selectedTeams.push(team);

    }
    else {
      const index = this.selectedTeams.indexOf(team);
      this.selectedTeams.splice(index, 1);

    }
  }

  openDialog(string: String) {
    this.dialog.open(PopUpComponent, {
      data: string
    });

  }

}
