import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CovidTrackService {

  constructor(private http:HttpClient) { }

  getTotalData():Observable<any>{
   
    const url = "https://api.covid19india.org/v4/min/data.min.json";
    return this.http.get<any>(url);
  }

  getStatewiseData():Observable<any>{

    const url = "https://api.covid19india.org/data.json";
    return this.http.get<any>(url);
  }

  
}

