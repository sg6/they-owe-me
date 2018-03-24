import {NgModule} from '@angular/core';
import {PersonsRoutingModule} from './persons-routing.module';
import {PersonListComponent} from './components/persons/container/person-list.component';
import {CommonModule} from '@angular/common';
import {PersonItemComponent} from './components/persons/container/person-item.component';
import {PersonEditComponent} from './components/persons/detail/person-edit.component';
import {PersonDetailComponent} from './components/persons/detail/person-detail.component';
import {DebtListComponent} from './components/debts/container/debt-list.component';
import {DebtItemComponent} from './components/debts/container/debt-item.component';
import {DebtDetailComponent} from './components/debts/detail/debt-detail.component';
import {DebtEditComponent} from './components/debts/detail/debt-edit.component';

@NgModule({
  imports: [
    CommonModule,
    PersonsRoutingModule
  ],
  declarations: [
    PersonListComponent,
    PersonItemComponent,
    PersonEditComponent,
    PersonDetailComponent,
    DebtListComponent,
    DebtItemComponent,
    DebtDetailComponent,
    DebtEditComponent
  ]
})
export class PersonsModule {

}
