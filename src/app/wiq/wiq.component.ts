import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-wiq',
  templateUrl: './wiq.component.html',
  styleUrls: ['./wiq.component.scss']
})
export class WiqComponent implements OnInit {
  activeState = 'alerts';

  constructor() { }

  ngOnInit() { }

  changeState = (val) => {
    this.activeState = val;
  }

}
