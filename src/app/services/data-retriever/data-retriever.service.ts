import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {DataEPSR} from '../../data/data_epsrc';


@Injectable({
  providedIn: 'root'
})

//This class retrieves the data from the .json file
export class DataRetrieverService {

  private _jsonURL = 'assets/data.json';;

  constructor(private http: HttpClient) {  }

  //Option to get any object for further implementations
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }


  //Get the object data for the custom table
  public getJSONEPSR():Observable<DataEPSR[]>
  {
    return this.http.get<DataEPSR[]>(this._jsonURL);
  }


}
