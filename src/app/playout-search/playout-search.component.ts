import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {faDownload, faSearch} from '@fortawesome/free-solid-svg-icons';

import {PlayoutSearchService} from './playout-search.service';

@Component({
  selector: 'cc-playout-search',
  templateUrl: './playout-search.component.html',
  styleUrls: ['./playout-search.component.scss']
})
export class PlayoutSearchComponent implements OnInit {
  airDate = [
    {value: '2018-11-29', viewValue: '2018-11-29'},
    {value: '2018-11-28', viewValue: '2018-11-28'},
    {value: '2018-11-27', viewValue: '2018-11-27'},
    {value: '2018-11-26', viewValue: '2018-11-26'},
    {value: '2018-11-25', viewValue: '2018-11-25'},
    {value: '2018-11-24', viewValue: '2018-11-24'},
  ];
  markets = [
    {value: 'Albuquerque', viewValue: 'Albuquerque'},
  ];
  syscodes = [
    {value: '0868', viewValue: '0868'},
    {value: '0867', viewValue: '0867'},
    {value: '0866', viewValue: '0866'},
    {value: '0865', viewValue: '0865'},
    {value: '0864', viewValue: '0864'},
    {value: '0863', viewValue: '0863'},
  ];
  networks = [
    {value: 'AEN-HD', viewValue: 'AEN-HD'},
    {value: 'AMC-HD', viewValue: 'AMC-HD'},
    {value: 'APL-HD', viewValue: 'APL-HD'},
    {value: 'BET-HD', viewValue: 'BET-HD'},
    {value: 'ABC-HD', viewValue: 'ABC-HD'},
    {value: 'BCD-HD', viewValue: 'BCD-HD'},
  ];
  dateSelected: String;
  marketSelected: String;
  syscodeSelected: String;
  networkSelected: String;
  playoutSearchData: any;
  faSearch = faSearch; faDownload = faDownload;

  constructor(private playoutSearchService: PlayoutSearchService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  fetchPlayoutSearch = () => {
    if (this.dateSelected && this.marketSelected && this.syscodeSelected && this.networkSelected) {
      this.playoutSearchService.playoutSearchData('').subscribe(
        data => {
          console.log(data);
          this.playoutSearchData = data;
        }
      );
    } else {
      this.openSnackBar('Please select all the fields', 'Error');
    }
  };

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
