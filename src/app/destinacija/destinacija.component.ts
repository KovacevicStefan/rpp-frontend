import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { DestinacijaDialogComponent } from '../dialog/destinacija-dialog/destinacija-dialog.component';
import { Destinacija } from './../model/destinacija.model';
import { DestinacijaService } from './../service/destinacija.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-destinacija',
  templateUrl: './destinacija.component.html',
  styleUrls: ['./destinacija.component.css']
})
export class DestinacijaComponent implements OnInit {

  displayedColumns = ['id', 'drzava', 'mesto', 'opis', 'actions'];

  dataSource!: MatTableDataSource<Destinacija>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public destinacijaService: DestinacijaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.destinacijaService.getAllDestinacija().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data:any, property) =>{
        switch(property){
          case 'id': return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, drzava: string, mesto: string, opis: string) {
    const dialog = this.dialog.open(DestinacijaDialogComponent, {data: {id: id, drzava: drzava, mesto: mesto, opis: opis}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

  applyFilter(filterValue: string) {
    filterValue.trim()
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
