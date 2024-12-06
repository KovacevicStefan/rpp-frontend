import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinacijaDialogComponent } from './destinacija-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('DestinacijaDialogComponent', () => {
let component: DestinacijaDialogComponent;
let fixture: ComponentFixture<DestinacijaDialogComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinacijaDialogComponent],
      providers: [
        { provide: MatSnackBar, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinacijaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});