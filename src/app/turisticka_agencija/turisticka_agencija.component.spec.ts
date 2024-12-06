import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuristickaAgencijaComponent } from './turisticka_agencija.component';

describe('TuristickaAgencijaComponent', () => {
  let component: TuristickaAgencijaComponent;
  let fixture: ComponentFixture<TuristickaAgencijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuristickaAgencijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristickaAgencijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
