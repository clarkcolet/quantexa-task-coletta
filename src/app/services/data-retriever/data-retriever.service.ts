import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {DataEPSR} from '../../data/data_epsrc';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

  private _jsonURL = 'assets/data.json';;


  constructor(private http: HttpClient) {  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  public getJSONEPSR():Observable<DataEPSR[]>
  {
   
    return this.http.get<DataEPSR[]>(this._jsonURL);
  }


  public consoler()
  {
    this.getJSON().subscribe(data => {
      console.log(data);
     });
  }
}
