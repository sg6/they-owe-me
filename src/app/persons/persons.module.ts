import {NgModule} from '@angular/core';
import {PersonsRoutingModule} from './persons-routing.module';
import {PersonListComponent} from './list/person-list.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PersonsRoutingModule
  ],
  declarations: [
    PersonListComponent
  ]
})
export class PersonsModule {

}
