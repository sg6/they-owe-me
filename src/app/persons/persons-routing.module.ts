import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonListComponent} from './components/persons/container/person-list.component';

const routes: Routes = [
  { path: '', component: PersonListComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule {

}
