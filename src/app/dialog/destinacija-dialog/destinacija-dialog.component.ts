import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Destinacija } from 'src/app/model/destinacija.model';
import { DestinacijaService } from 'src/app/service/destinacija.service';

@Component({
selector: 'app-destinacija-dialog',
templateUrl: './destinacija-dialog.component.html',
styleUrls: ['./destinacija-dialog.component.css']
})
export class DestinacijaDialogComponent implements OnInit {

public flag!: number;

constructor(public snackBar: MatSnackBar,
public dialogRef: MatDialogRef<DestinacijaDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data: Destinacija,
public destinacijaService: DestinacijaService 
) { }

ngOnInit(): void {
}

public add(): void {
this.destinacijaService.addDestinacija(this.data);
this.snackBar.open('Uspešno dodata destinacija ' + this.data.mesto, 'U redu', {duration: 2000});
}

public update(): void {
this.destinacijaService.updateDestinacija(this.data);
this.snackBar.open('Uspešno izmenjena destinacija ' + this.data.mesto, 'U redu', {duration: 2000});
}

public delete(): void {
this.destinacijaService.deleteDestinacija(this.data);
this.snackBar.open('Uspešno obrisana destinacija ' + this.data.id, 'U redu', {duration: 2000});
}

public cancel(): void {
this.dialogRef.close();
this.snackBar.open('Odustali ste', 'U redu', {duration: 2000});
}

}