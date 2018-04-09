import {Component, Input} from '@angular/core';
import {Debt} from '../../../models/debt';

@Component({
  selector: 'app-debt-item',
  templateUrl: './debt-item.component.html'
})
export class DebtItemComponent {
  @Input() debt: Debt;
}
