import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuristickaAgencijaComponent } from './turisticka_agencija/turisticka_agencija.component';
import { DestinacijaComponent } from './destinacija/destinacija.component';
import { HotelComponent } from './hotel/hotel.component';
import { AranzmanComponent } from './aranzman/aranzman.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { AuthorComponent } from './core/author/author.component';
import { Routes, RouterModule } from '@angular/router';
import { TuristickaAgencijaService } from './service/turisticka.agencija.service';
import { AranzmanService } from './service/aranzman.service';
import { TuristickaAgencijaDialogComponent } from './dialog/turisticka.agencija-dialog/turisticka.agencija-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DestinacijaDialogComponent } from './dialog/destinacija-dialog/destinacija-dialog.component';
import { AranzmanDialogComponent } from './dialog/aranzman-dialog/aranzman-dialog.component';
import { DestinacijaService } from './service/destinacija.service';
import { HotelService } from './service/hotel.service';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HotelDialogComponent } from './dialog/hotel-dialog/hotel-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'turisticka_agencija', component: TuristickaAgencijaComponent },
  { path: 'destinacija', component: DestinacijaComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'aranzman', component: AranzmanComponent },
  { path: 'home', component: HomeComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TuristickaAgencijaComponent,
    DestinacijaComponent,
    HotelComponent,
    AranzmanComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    TuristickaAgencijaDialogComponent,
    DestinacijaDialogComponent,
    HotelDialogComponent,
    AranzmanDialogComponent
  ],
  imports: [
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    TuristickaAgencijaService,
    AranzmanService,
    DestinacijaService,
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
