import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'cc-decision-dialog',
  templateUrl: './decision-dialog.component.html',
  styleUrls: ['./decision-dialog.component.scss']
})
export class DecisionDialogComponent implements OnInit {

  ngOnInit() {
  }

  constructor(public dialogRef: MatDialogRef<DecisionDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
