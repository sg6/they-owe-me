import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonListComponent} from './components/persons/container/person-list.component';
import {PersonEditComponent} from './components/persons/detail/person-edit.component';
import {PersonDetailComponent} from './components/persons/detail/person-detail.component';

const routes: Routes = [
  {path: '', component: PersonListComponent},
  {path: 'edit/:id', component: PersonEditComponent},
  {path: 'debt-management/detail/:id', component: PersonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebtManagementRoutingModule {

}
