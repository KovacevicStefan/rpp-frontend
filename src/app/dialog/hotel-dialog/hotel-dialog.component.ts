import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hotel } from 'src/app/model/hotel.model';
import { Destinacija } from 'src/app/model/destinacija.model';
import { HotelService } from 'src/app/service/hotel.service';
import { DestinacijaService } from 'src/app/service/destinacija.service';

@Component({
  selector: 'app-hotel-dialog',
  templateUrl: './hotel-dialog.component.html',
  styleUrls: ['./hotel-dialog.component.css']
})
export class HotelDialogComponent implements OnInit {

  public flag!: number;

  destinacije!: Destinacija[];

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<HotelDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Hotel,
    public hotelService: HotelService,
    public destinacijaService: DestinacijaService
  ) {}

  ngOnInit(): void {
    this.destinacijaService.getAllDestinacija().subscribe(destinacije => this.destinacije = destinacije);
  }

  public add(): void {
    this.hotelService.addHotel(this.data);
    this.snackBar.open('Uspešno dodat hotel ' + this.data.naziv, 'U redu', { duration: 2000 });
  }

  public update(): void {
    this.hotelService.updateHotel(this.data);
    this.snackBar.open('Uspešno izmenjen hotel ' + this.data.naziv, 'U redu', { duration: 2000 });
  }

  public delete(): void {
    this.hotelService.deleteHotel(this.data.id);
    this.snackBar.open('Uspešno obrisan hotel ' + this.data.id, 'U redu', { duration: 2000 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', { duration: 2000 });
  }

  compareTo(a: any, b: any) {
    return a.id === b.id;
  }

}
