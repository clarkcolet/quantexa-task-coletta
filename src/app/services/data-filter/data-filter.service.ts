import { Injectable } from '@angular/core';
import {DataKey} from '../../data/data_key';
import {DataEPSR} from '../../data/data_epsrc';

@Injectable({
  providedIn: 'root'
})
export class DataFilterService {

      dataKey:DataKey;
  
      constructor() 
       {
       }

//This method enables to change the dataKey 
//in a global manner
  public setKey(dataKey:DataKey)
  {
      this.dataKey = dataKey;
  }


  //Associates the data with a key (Date, Expense Type...) by retrieving only one instance by iterating through all items
  //in the specified field (key)
  public filterKeys(data:DataEPSR[]):any[]
  {
    var keys = [];

    switch(this.dataKey)
    {
            case DataKey.date:
                 for (let entry of data) 
                   {
                    keys.push(entry.date);
                   }
            break;
            case DataKey.department:
                  for (let entry of data) 
                   {
                       keys.push(entry.department);
                   }
            break;
            case DataKey.entity:
                  for (let entry of data) 
                    {
                      keys.push(entry.entity);
                    }
            break;
            case DataKey.expenseArea:
                   for (let entry of data) 
                  {
                        keys.push(entry.expenseArea);
                  }
            break;
            case DataKey.expenseType:
                  for (let entry of data) 
                  {
                        keys.push(entry.expenseType);
                  }
            break;
            case DataKey.invoiceCurrency:
            for (let entry of data) 
               {
                keys.push(entry.invoiceCurrencyUnit);
               }
            break;
            case DataKey.supplier:
                  for (let entry of data) 
                  {
                  keys.push(entry.supplier);
                  }
            break;

    }
       return  Array.from(new Set(keys ));
  }


  //Returns the data based on the input key type (i.e: returns array with same provider, date...)
  public filterData(key,data:DataEPSR[]):DataEPSR[]
  { 
    var filteredWithKey:DataEPSR[] = [];
    switch(this.dataKey)
    {
        case DataKey.date:
              filteredWithKey = data.filter((entry: DataEPSR) => entry.date === key);
        break;
        case DataKey.department:
              filteredWithKey = data.filter((entry: DataEPSR) => entry.department === key);
        break;
        case DataKey.entity:
              filteredWithKey = data.filter((entry: DataEPSR) => entry.entity === key);
        break;
        case DataKey.expenseType:
              filteredWithKey = data.filter((entry: DataEPSR) => entry.expenseType === key);
        break;
        case DataKey.expenseArea:
              filteredWithKey = data.filter((entry: DataEPSR) => entry.expenseArea === key);
        break;
        case DataKey.supplier:
              filteredWithKey = data.filter((entry: DataEPSR) => entry.supplier === key);
        break;
        case DataKey.invoiceCurrency:
              filteredWithKey = data.filter((entry: DataEPSR) => entry.invoiceCurrencyUnit === key);
        break;
    }
    return filteredWithKey;
  }
}
