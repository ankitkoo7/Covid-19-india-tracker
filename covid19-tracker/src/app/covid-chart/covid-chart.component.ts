import { Component, OnInit } from '@angular/core';
import { CovidTrackService } from '../covid-track.service';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-covid-chart',
  templateUrl: './covid-chart.component.html',
  styleUrls: ['./covid-chart.component.css']
})
export class CovidChartComponent implements OnInit {
  dates: any;
  dailyconfirmed: any;
  deaths:any;
  chart = [];
  chart2 = [];
  
  constructor(private covidService: CovidTrackService) { }

  ngOnInit(): void {
    this.covidService.getStatewiseData()
      .subscribe(res => {
        this.dates = res['cases_time_series'].map((res: { date: any; }) => res.date);
        this.dailyconfirmed = res['cases_time_series'].map((res: { dailyconfirmed: any; }) => res.dailyconfirmed);
        this.deaths = res['cases_time_series'].map((res: { dailydeceased: any; })=> res.dailydeceased);

        /* activecase line graph */
        this.chart.push(new Chart('active_canvas', {
          type: 'line',
          data: {
            labels: this.dates,
            datasets: [
              {
                label:"Active Cases",
                data: this.dailyconfirmed,
                borderColor: "#ffc403",
                backgroundColor: "#db8a0f",
                fill: true
              },
            ]
          },
          options: {
            responsive:true,
            maintainAspectRatio:false,
            legend: {
              display: false
            },
            title: {
              display: true,
              fontColor: 'white',
              text: 'Active Cases'
          } ,
            scales: {
              xAxes: [{
                ticks:{
                  fontColor: 'white'
                },
                display: true
              }],
              yAxes: [{
                ticks:{
                  fontColor: 'white'
                },
                display: true
              }],
            }
          }
        }));

        /* deaths line graph */
        this.chart2.push(new Chart('death_canvas', {
          type: 'line',
          data: {
            labels: this.dates,
            datasets: [
              {
                label:"Deaths",
                data: this.deaths,
                borderColor: "#ed0707",
                backgroundColor: "#ed4e4e",
                fill: true
              },
            ]
          },
          options: {
            responsive:true,
            maintainAspectRatio:false,
            legend: {
              display: false
            },
            title: {
              display: true,
              fontColor: 'white',
              text: 'Death Cases'
          } ,
            scales: {
              xAxes: [{
                ticks:{
                  fontColor: 'white'
                },
                display: true
              }],
              yAxes: [{
              
                ticks:{
                  fontColor: 'white'
                },
                display: true
              }],
            }
          }
        }));
      })
  }
}


