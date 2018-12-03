import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'cc-unbound-suppress',
  templateUrl: './unbound-suppress.component.html',
  styleUrls: ['./unbound-suppress.component.scss']
})
export class UnboundSuppressComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UnboundSuppressComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('UnboundSuppressComponent : ', this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
