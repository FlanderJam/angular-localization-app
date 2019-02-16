import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  private componentAlive = true;

  public selectedRoute = '';
  public faAngleLeft = faAngleLeft;

  constructor(private location: Location, private router: Router) {
    router.events.subscribe((routerVal: any) => {
      if (location.path() !== this.selectedRoute) {
        this.selectedRoute = location.path();
      }
    });
  }

  ngOnInit() {}

  onClickNavigateToPrevious() {
    const destination =
      this.selectedRoute === '/page-one' ? 'select-language' : 'page-one';
    this.router.navigate([`${destination}`]);
  }
}
