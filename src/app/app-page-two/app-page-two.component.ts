import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-page-two',
  templateUrl: './app-page-two.component.html',
  styleUrls: ['./app-page-two.component.scss']
})
export class AppPageTwoComponent implements OnInit {
  public rowOneNumber = 7.312;
  public rowTwoNumber = 4.205;
  constructor() {}

  ngOnInit() {}
}
