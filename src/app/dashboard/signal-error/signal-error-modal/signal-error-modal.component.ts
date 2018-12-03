import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-signal-error-modal',
  templateUrl: './signal-error-modal.component.html',
  styleUrls: ['./signal-error-modal.component.scss']
})
export class SignalErrorModalComponent implements OnInit {
  activeLink = 'info';

  constructor() { }

  ngOnInit() {
  }

  activeState = (val) => {
    this.activeLink = val;
  };

}
