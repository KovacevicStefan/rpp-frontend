import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Aranzman } from '../model/aranzman.model';
import { AranzmanService } from '../service/aranzman.service';
import { MatDialog } from '@angular/material/dialog';
import { AranzmanDialogComponent } from '../dialog/aranzman-dialog/aranzman-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { TuristickaAgencija } from '../model/turisticka.agencija.model';
import { Hotel } from '../model/hotel.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-aranzman',
  templateUrl: './aranzman.component.html',
  styleUrls: ['./aranzman.component.css']
})
export class AranzmanComponent implements OnInit {

  displayedColumns = ['id', 'ukupnaCena', 'placeno', 'datumRealizacije', 'hotel', 'agencija', 'actions'];

  dataSource!: MatTableDataSource<Aranzman>;

  turistickaAgencija!: TuristickaAgencija;

  hotel!: Hotel;

  today: Date = new Date();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  @Input()
  selektovanHotel!: Hotel;
  
  constructor(public aranzmanService: AranzmanService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(): void {
    if(this.selektovanHotel.id) {
      this.loadData();
    }
  }

  public loadData(){
    this.aranzmanService.getAranzmaniZaHotel(this.selektovanHotel.id).subscribe( data => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const accumulator = (currentTerm: string, key: string) => {
          return key === 'hotel' ? currentTerm + data.hotel.naziv : currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };

      this.dataSource.sortingDataAccessor = (data:any, property) =>{
        switch(property){
          case 'id': return data[property];
          case 'ukupnaCena': return data[property];
          case 'placeno': return data[property];
          case 'datumRealizacije': return data[property];
          case 'hotel': return data.hotel.naziv.toLocaleLowerCase();
          case 'agencija': return data.turistickaAgencija.naziv.toLocaleLowerCase();
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
 }

  public openDialog(flag: number, id: number, ukupnaCena: number, placeno: boolean, datumRealizacije: Date, hotel: Hotel, agencija: TuristickaAgencija) {
    const dialog = this.dialog.open(AranzmanDialogComponent, {data: {id: id, ukupnaCena: ukupnaCena, placeno: placeno, datumRealizacije: datumRealizacije, hotel: hotel, agencija: agencija}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

  applyFilter(filterValue: string) {
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
