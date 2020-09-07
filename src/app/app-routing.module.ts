import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectionTeamsComponent } from './components/selection-teams/selection-teams.component'

const routes: Routes = [{ path: "", component: SelectionTeamsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
