import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TuristickaAgencija } from 'src/app/model/turisticka.agencija.model';
import { Hotel } from 'src/app/model/hotel.model';
import { TuristickaAgencijaService } from 'src/app/service/turisticka.agencija.service';
import { HotelService } from 'src/app/service/hotel.service';
import { Aranzman } from './../../model/aranzman.model';
import { AranzmanService } from 'src/app/service/aranzman.service';

@Component({
  selector: 'app-aranzman-dialog',
  templateUrl: './aranzman-dialog.component.html',
  styleUrls: ['./aranzman-dialog.component.css']
})
export class AranzmanDialogComponent implements OnInit {

  public flag!: number;

  turistickeAgencije!: TuristickaAgencija[];
  hoteli!: Hotel[];

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AranzmanDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Aranzman,
    public aranzmanService: AranzmanService,
    public turistickaAgencijaService: TuristickaAgencijaService,
    public hotelService: HotelService ) { }

  ngOnInit(): void {
    this.turistickaAgencijaService.getAllTuristickaAgencija().subscribe(turistickeAgencije =>
    this.turistickeAgencije = turistickeAgencije);
    this.hotelService.getAllHotels().subscribe(hoteli =>
    this.hoteli = hoteli);
  }

  public add(): void {
    this.aranzmanService.addAranzman(this.data);
    this.snackBar.open('Uspešno dodat aranžman ' + this.data.id, 'U redu', { duration: 2000 });
  }

  public update(): void {
    this.aranzmanService.updateAranzman(this.data);
    this.snackBar.open('Uspešno izmenjen aranžman ' + this.data.id, 'U redu', { duration: 2000 });
  }

  public delete(): void {
    this.aranzmanService.deleteAranzman(this.data.id);
    this.snackBar.open('Uspešno obrisan aranžman ' + this.data.id, 'U redu', { duration: 2000 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', { duration: 2000 });
  }

  compareTo(a: any, b: any) {
    return a.id === b.id;
  }

}
