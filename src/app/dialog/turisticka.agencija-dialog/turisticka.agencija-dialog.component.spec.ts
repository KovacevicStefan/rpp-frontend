import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TuristickaAgencijaDialogComponent } from './turisticka.agencija-dialog.component';

describe('TuristickaAgencijaDialogComponent', () => {
  let component: TuristickaAgencijaDialogComponent;
  let fixture: ComponentFixture<TuristickaAgencijaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuristickaAgencijaDialogComponent],
      providers: [
        { provide: MatSnackBar, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristickaAgencijaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
