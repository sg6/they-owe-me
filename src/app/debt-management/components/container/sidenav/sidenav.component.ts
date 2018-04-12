import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'dm-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(private zone: NgZone, private router: Router) {

  }

  ngOnInit() {
    this.mediaMatcher.addListener(mql =>
      this.zone.run(() => this.mediaMatcher = mql));

    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall() {
    return this.mediaMatcher.matches;
  }

}
