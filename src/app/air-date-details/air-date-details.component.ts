import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-air-date-details',
  templateUrl: './air-date-details.component.html',
  styleUrls: ['./air-date-details.component.scss']
})
export class AirDateDetailsComponent implements OnInit {
  selected = 'option2';

  constructor() { }

  ngOnInit() {
  }

}
