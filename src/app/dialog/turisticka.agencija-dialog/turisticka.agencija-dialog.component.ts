import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TuristickaAgencija } from 'src/app/model/turisticka.agencija.model';
import { TuristickaAgencijaService } from 'src/app/service/turisticka.agencija.service';

@Component({
  selector: 'app-turisticka.agencija-dialog',
  templateUrl: './turisticka.agencija-dialog.component.html',
  styleUrls: ['./turisticka.agencija-dialog.component.css']
})
export class TuristickaAgencijaDialogComponent implements OnInit {

  public flag!: number;

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<TuristickaAgencijaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TuristickaAgencija,
    public turistickaAgencijaService: TuristickaAgencijaService
  ) {}

  ngOnInit(): void {}

  public add(): void {
    this.turistickaAgencijaService.addTuristickaAgencija(this.data);
    this.snackBar.open('Uspešno dodata turistička agencija ' + this.data.naziv, 'U redu', { duration: 2000 });
  }

  public update(): void {
    this.turistickaAgencijaService.updateTuristickaAgencija(this.data);
    this.snackBar.open('Uspešno izmenjena turistička agencija ' + this.data.naziv, 'U redu', { duration: 2000 });
  }

  public delete(): void {
    this.turistickaAgencijaService.deleteTuristickaAgencija(this.data);
    this.snackBar.open('Uspešno obrisana turistička agencija ' + this.data.id, 'U redu', { duration: 2000 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', { duration: 2000 });
  }

}
