import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  foods = [
    { value: 'lsa', viewValue: 'LSA' },
    { value: 'psd', viewValue: 'PSD' },
  ];
  selectedOption = 'lsa'; faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit() { }

}
