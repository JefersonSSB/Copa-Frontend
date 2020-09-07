import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team'
import { CupService } from '../../services/cup.service'
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-selection-teams',
  templateUrl: './selection-teams.component.html',
  styleUrls: ['./selection-teams.component.css']
})
export class SelectionTeamsComponent implements OnInit {
  check: [];
  teamArray: FormArray;
  teams: Team[];
  teamForm: FormGroup;
  selectedTeams: Team[];

  constructor(private cupService: CupService, private formBuilder: FormBuilder) {
    this.teamForm = this.formBuilder.group({
      teamArray: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.selectedTeams = [];
    this.cupService.read().subscribe(teams => {
      this.teams = teams;
    })
  }

  selectedTeamsLentgh(): any {
    return this.selectedTeams.length;
  }

  generateCup() {
    this.teamForm = this.formBuilder.group({
      teamArray: this.formBuilder.array(this.selectedTeams)
    });
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

}

