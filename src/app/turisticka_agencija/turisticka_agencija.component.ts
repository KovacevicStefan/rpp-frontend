import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { TuristickaAgencija } from '../model/turisticka.agencija.model';
import { TuristickaAgencijaService } from '../service/turisticka.agencija.service';
import { MatDialog } from '@angular/material/dialog';
import { TuristickaAgencijaDialogComponent } from '../dialog/turisticka.agencija-dialog/turisticka.agencija-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-turisticka_agencija',
  templateUrl: './turisticka_agencija.component.html',
  styleUrls: ['./turisticka_agencija.component.css']
})
export class TuristickaAgencijaComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'adresa', 'kontakt', 'actions'];

  dataSource!: MatTableDataSource<TuristickaAgencija>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public turistickaAgencijaService: TuristickaAgencijaService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.turistickaAgencijaService.getAllTuristickaAgencija().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data: any, property) => {
        switch(property) {
          case 'id' : return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  public openDialog(flag: number, id: number, naziv: string, adresa: string, kontakt: string) {

    const dialog = this.dialog.open(TuristickaAgencijaDialogComponent, {data: {id: id, naziv: naziv, adresa: adresa, kontakt: kontakt}});

    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

  applyFilter(filterValue : string) {
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
