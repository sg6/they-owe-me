import {Component, NgZone, OnInit} from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'dm-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(private zone: NgZone) {

  }

  ngOnInit() {
    this.mediaMatcher.addListener(mql =>
      this.zone.run(() => this.mediaMatcher = mql));
  }

  isScreenSmall() {
    return this.mediaMatcher.matches;
  }

}
