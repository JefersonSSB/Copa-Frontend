import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinnerTeamsComponent } from './components/winner-teams/winner-teams.component'
import { SelectionTeamsComponent } from './components/selection-teams/selection-teams.component'

const routes: Routes = [{ path: "", component: SelectionTeamsComponent },
{ path: "winners", component: WinnerTeamsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
