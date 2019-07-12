import { Injectable } from '@angular/core';
import { DataOperatorsService } from 'src/app/services_interface/data-operators/data-operators.service';
import { DataEPSR } from 'src/app/data/data_epsrc';

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


}
