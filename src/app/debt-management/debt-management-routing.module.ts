import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonListComponent} from './components/persons/container/person-list.component';
import {PersonEditComponent} from './components/persons/detail/person-edit.component';

const routes: Routes = [
  {path: '', component: PersonListComponent},
  {path: 'edit/:id', component: PersonEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebtManagementRoutingModule {

}
