import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { FIN_DATA_KEY } from 'src/app/shared/constants';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css'],
})
export class TitleBarComponent {
  constructor(public dialog: MatDialog) {}

  showPurgeWarning(): void {
    this.dialog.open(PurgeDataModalComponent, {
      width: '500px',
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms',
    });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  template: `
    <h1 mat-dialog-title>Are you Sure ?</h1>
    <div mat-dialog-content>
      Data once purged, cannot be recovered. Proceed ?
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-button mat-dialog-close cdkFocusInitial (click)="purgeData()">
        Yes
      </button>
    </div>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatSnackBarModule],
})
export class PurgeDataModalComponent {
  constructor(public dialogRef: MatDialogRef<PurgeDataModalComponent>,
    private _snackBar: MatSnackBar) {}
  public purgeData() {
    if (!localStorage.getItem(FIN_DATA_KEY)) return;
    localStorage.removeItem(FIN_DATA_KEY);
    this._snackBar.open('Data has been purged successfully.', 'Okay');
  }
}
