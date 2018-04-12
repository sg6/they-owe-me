import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dm-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isScreenSmall() {
    // temporary false, later will be replaced with MatchMedia-Service
    return false;
  }

}
