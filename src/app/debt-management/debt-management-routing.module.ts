import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonListComponent} from './components/persons/container/person-list.component';
import {PersonEditComponent} from './components/persons/detail/person-edit.component';
import {PersonDetailComponent} from './components/persons/detail/person-detail.component';
import {DebtEditComponent} from './components/debts/detail/debt-edit.component';

const routes: Routes = [
  {path: '', component: PersonListComponent},
  {path: 'person/edit/:id', component: PersonEditComponent},
  {path: 'person/detail/:id', component: PersonDetailComponent},
  {path: 'person/detail/:personId/debt/edit/:debtId', component: DebtEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebtManagementRoutingModule {

}
