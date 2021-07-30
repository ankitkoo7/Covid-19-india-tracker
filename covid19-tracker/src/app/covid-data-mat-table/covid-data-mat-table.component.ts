import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { CovidTrackService } from '../covid-track.service';
import { CovidReport } from 'src/CovidReport';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx'; 
import { ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-covid-data-mat-table',
  templateUrl: './covid-data-mat-table.component.html',
  styleUrls: ['./covid-data-mat-table.component.css']
})
export class CovidDataMatTableComponent implements OnInit {

 

  ELEMENT_DATA : CovidReport[] = [];
displayedColumns: string[]=['state','confirmed','active','recovered','deaths','lastupdatedtime'];
dataSource = new MatTableDataSource<CovidReport>(this.ELEMENT_DATA);

@ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
@ViewChild(MatSort, {static:true}) sort: MatSort;

@ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
title = 'Excel';  
ExportTOExcel() {  
  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
  const wb: XLSX.WorkBook = XLSX.utils.book_new();  
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
  XLSX.writeFile(wb, 'covid19Report.xlsx');  
}  

@ViewChild('htmlData') htmlData:ElementRef;
public openPDF():void {
  let DATA = document.getElementById('htmlData');
    
  html2canvas(DATA).then(canvas => {
      
      let fileWidth = 100;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      
      PDF.save('covid19report.pdf');
  });     
}
  
  constructor(private Covidservice:CovidTrackService) { }

  ngOnInit(){
   
    this.Covidservice.getStatewiseData().subscribe((report)=>this.dataSource.data=report.statewise as CovidReport[]);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filtervalue : string){
    
    this.dataSource.filter = filtervalue.trim().toLowerCase();
  }

}
