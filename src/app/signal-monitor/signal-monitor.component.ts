import {Component, OnChanges, OnInit} from '@angular/core';
import {SignalMonitorService} from './signal-monitor.service';

@Component({
  selector: 'cc-signal-monitor',
  templateUrl: './signal-monitor.component.html',
  styleUrls: ['./signal-monitor.component.scss'],
  providers: [SignalMonitorService]
})
export class SignalMonitorComponent implements OnInit {
  signalMonitorData = {
    loading: true,
    data: [],
  };

  constructor(private signalMonitorService: SignalMonitorService) { }

  ngOnInit() {
    this.signalMonitorService.getSignalMonitorData('').subscribe(
      data => {
        console.log(data);
        this.signalMonitorData = {
          loading: false,
          data: data,
        };
      }
    );
  }

}
