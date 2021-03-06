import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DebtManagementRoutingModule} from './debt-management-routing.module';
import {PersonListComponent} from './components/persons/container/person-list.component';
import {PersonEditComponent} from './components/persons/detail/person-edit.component';
import {PersonDetailComponent} from './components/persons/detail/person-detail.component';
import {DebtListComponent} from './components/debts/container/debt-list.component';
import {DebtDetailComponent} from './components/debts/detail/debt-detail.component';
import {DebtEditComponent} from './components/debts/detail/debt-edit.component';
import {DebtManagementService} from './providers/debt-management.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {debtManagementReducer} from './store/reducers/debtManagement.reducer';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MaterialModule} from '../shared/material.module';
import { MainContentComponent } from './components/container/main-content/main-content.component';
import { SidenavComponent } from './components/container/sidenav/sidenav.component';
import { DebtsPaymentStatePipe } from './pipes/debts-payment-state.pipe';
import {SnackbarService} from './providers/snackbar.service';

@NgModule({
  imports: [
    CommonModule,
    DebtManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot({debtManagement: debtManagementReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  declarations: [
    PersonListComponent,
    PersonEditComponent,
    PersonDetailComponent,
    DebtListComponent,
    DebtDetailComponent,
    DebtEditComponent,
    MainContentComponent,
    SidenavComponent,
    DebtsPaymentStatePipe
  ],
  providers: [
    DebtManagementService,
    SnackbarService
  ]
})
export class DebtManagementModule {

}
