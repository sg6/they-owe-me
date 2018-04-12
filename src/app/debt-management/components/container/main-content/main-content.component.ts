import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'dm-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}
