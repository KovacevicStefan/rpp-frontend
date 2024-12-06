import { AranzmanComponent } from './../../aranzman/aranzman.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('AranzmanComponent', () => {
  let component: AranzmanComponent;
  let fixture: ComponentFixture<AranzmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AranzmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AranzmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
