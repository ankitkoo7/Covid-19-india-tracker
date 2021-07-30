import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDataMatTableComponent } from './covid-data-mat-table.component';

describe('CovidDataMatTableComponent', () => {
  let component: CovidDataMatTableComponent;
  let fixture: ComponentFixture<CovidDataMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDataMatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDataMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
