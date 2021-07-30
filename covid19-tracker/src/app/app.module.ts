import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CovidTrackService } from './covid-track.service';
import { StateUtPipe } from './state-ut.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { CovidDataMatTableComponent } from './covid-data-mat-table/covid-data-mat-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CovidChartComponent } from './covid-chart/covid-chart.component';
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    StateUtPipe,
    CovidDataMatTableComponent,
    CovidChartComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
  ChartsModule

  ],
  providers: [CovidTrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
