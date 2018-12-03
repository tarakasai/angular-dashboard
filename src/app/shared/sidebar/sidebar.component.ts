import { Component, OnInit } from '@angular/core';
import { faChartLine,
  faCalendarAlt,
  faSignal,
  faThumbsUp,
  faBriefcase,
  faSearch,
  faChartBar,
  faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faChartLine = faChartLine; faCalendarAlt = faCalendarAlt; faThumbsUp = faThumbsUp; faCog = faCog;
  faSignal = faSignal; faBriefcase = faBriefcase; faSearch = faSearch; faChartBar = faChartBar;

  constructor() { }

  ngOnInit() {
  }

}
