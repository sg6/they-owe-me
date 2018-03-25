import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'debt-management', pathMatch: 'full' },
  { path: 'debt-management', loadChildren: 'app/debt-management/debt-management.module#DebtManagementModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
