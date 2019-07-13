import { Injectable } from '@angular/core';
import { DataOperatorsService } from 'src/app/services_interface/data-operators/data-operators.service';
import { DataEPSR } from 'src/app/data/data_epsrc';
import { ChartDataMultiDate } from 'src/app/data/chart';

@Injectable({
  providedIn: 'root'
})

//This class returns the summation of a given field.
//In this case, it is customised for the data's 'amount' property.
export class OperatorsService implements DataOperatorsService {

  constructor() 
   {
   }

  public totalValue(filteredWithKey:DataEPSR[])
  {
    
    var value = 0;
    for(let data of filteredWithKey)
    {
        value = value + data.amount;
    }
    return value;
  }

  
  //Converts from string to date. Swaps date and month
  //from the json since the Date object is set in US format
  public getDateFormat(data:DataEPSR[]):DataEPSR[]
  {
    var dataNew:DataEPSR[] = [];
    for(let singleData of data)
    {
      var dateString = singleData.date.toString();
      dateString = dateString.substr(6, 4)+"-"+dateString.substr(3, 2)+"-"+dateString.substr(0, 2);
      var date = new Date(dateString);
      singleData.date =date;
      dataNew.push(singleData);
    }
      return dataNew;
  }

  

  //Returns max value in array to display on line chart
  public getMaxVal(data:ChartDataMultiDate[])
  {
    var values:number[] = [];
    
      for(let dataSingle of data)
      {
          for(let value of dataSingle.series)
          {
                values.push(value.value);
          }
      }
      return Math.max(...values);
  }


}
