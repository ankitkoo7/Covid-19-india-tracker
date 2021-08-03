import { Component } from '@angular/core';
import { CovidTrackService } from '../app/covid-track.service';
import { } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalconfirmed: number;
  totaldeceased: number;
  totalrecovered: number;
  dailyrecovered: number;
  dailyconfirmed: number;
  dailydeceased: number;
  active: number;
  dated: Date;
  firstDoseVacci: number;
  secondDoseVacci: number;
  totalDoseVacci: number;
  searchStUt: string = "";
  mydate = new Date();
  stateut: any;

  constructor(private corona: CovidTrackService) { }

  ngOnInit() {
    this.corona.getTotalData().subscribe((data) => {
      this.totalconfirmed = data.TT.total.confirmed;
      this.totaldeceased = data.TT.total.deceased;
      this.totalrecovered = data.TT.total.recovered;
      this.dailyconfirmed = data.TT.delta.confirmed;
      this.dailydeceased = data.TT.delta.deceased;
      this.dailyrecovered = data.TT.delta.recovered;
      this.active = this.totalconfirmed - this.totalrecovered;
      this.dated = data.TT.meta.last_updated;
      /* vaccination details */
      this.firstDoseVacci = data.TT.total.vaccinated1;
      this.secondDoseVacci = data.TT.total.vaccinated2;
      this.totalDoseVacci = this.firstDoseVacci + this.secondDoseVacci;
    })

    this.corona.getStatewiseData().subscribe((data) => this.stateut = data.statewise);
  }
}
