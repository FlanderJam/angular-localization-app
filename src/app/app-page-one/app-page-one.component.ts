import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-page-one',
  templateUrl: './app-page-one.component.html',
  styleUrls: ['./app-page-one.component.scss']
})
export class AppPageOneComponent implements OnInit {
  private timezone = new Date()
    .toLocaleTimeString('en-us', { timeZoneName: 'short' })
    .split(' ')[2];

  public currentTime =
    moment().format('MMMM Do YYYY, h:mm:ss A z') + this.timezone;
  public itemCount = 5;

  constructor(private router: Router) {}

  ngOnInit() {}

  public onClickNext() {
    this.router.navigate(['/page-two']);
  }
}
