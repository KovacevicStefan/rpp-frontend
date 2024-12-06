import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel.model';
import { HotelService } from '../service/hotel.service';
import { MatDialog } from '@angular/material/dialog';
import { HotelDialogComponent } from '../dialog/hotel-dialog/hotel-dialog.component';
import { Destinacija } from '../model/destinacija.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'brojZvezdica', 'opis', 'destinacija', 'actions'];

  destinacija!: Destinacija;

  selektovanHotel!: Hotel;

  dataSource!: MatTableDataSource<Hotel>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public hotelService: HotelService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.hotelService.getAllHotels().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const accumulator = (currentTerm: string, key: string) => {
          return key === 'destinacija' ? currentTerm + data.destinacija.naziv : currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };

      this.dataSource.sortingDataAccessor = (data:any, property) =>{
        switch(property){
          case 'id': return data[property];
          case 'naziv': return data[property];
          case 'brojZvezdica': return data[property];
          case 'opis': return data[property];
          case 'destinacija': return data.destinacija.naziv;
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

public openDialog(flag: number, id: number, naziv: string, brojZvezdica: number, opis: string, destinacija: Destinacija) {
  const dialog = this.dialog.open(HotelDialogComponent, {data: {id: id, naziv: naziv, broj_zvezdica: brojZvezdica, opis: opis, destinacija: destinacija}});
  dialog.componentInstance.flag = flag;
  dialog.afterClosed().subscribe(result => {
    if (result === 1) {
      this.loadData();
    }
  })
}

public selectedRow(row: Hotel): void {
  this.selektovanHotel = row;
}

applyFilter(filterValue: string) {
  filterValue.trim();
  filterValue = filterValue.toLowerCase();
  this.dataSource.filter = filterValue;
}
}
