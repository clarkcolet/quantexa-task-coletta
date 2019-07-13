import { Injectable } from '@angular/core';
import {DataEPSR} from '../../data/data_epsrc';
import {DataKey} from '../../data/data_key';
import { DataFilterService } from '../data-filter/data-filter.service';
import { OperatorsService } from '../data-operators/operators.service';
import { ChartDataMulti, ChartDataMultiDate } from 'src/app/data/chart';
import { Series, SeriesDate } from 'src/app/data/series';


@Injectable({
  providedIn: 'root'
})
export class DataConverterService {

  constructor(private filterService:DataFilterService, private operatorService:OperatorsService) { }

  //The data is filtered by Provider followed by either Date
  //or Supplier
  public getGraphArray(dataKey:DataKey, dataKeyGraph:DataKey,data:DataEPSR[])
  {

    switch(dataKey)
    {
        case DataKey.date:
             this.filterService.setKey(DataKey.date);
        break;
        case DataKey.department:
             this.filterService.setKey(DataKey.department);
        break;
        case DataKey.entity:
             this.filterService.setKey(DataKey.entity);
        break;
        case DataKey.expenseArea:
             this.filterService.setKey(DataKey.expenseArea);
         break;       
         case DataKey.expenseType:
             this.filterService.setKey(DataKey.expenseType);
         break;
         case DataKey.invoiceCurrency:
             this.filterService.setKey(DataKey.invoiceCurrency);
        break;
        case DataKey.supplier:
             this.filterService.setKey(DataKey.supplier);
        break;
    }

    switch(dataKeyGraph)
    {
     
      case DataKey.date:
          return this.generateChartDataDate(data);
      case DataKey.expenseType:
        return this.generateChartDataExpenseType(data);
    }
  }

  //Converts array to appropriate format for chart display
  public normaliseLineData(dataChartDataMulti:ChartDataMulti[])
  {
      var array = [];
      for(let dataChart of dataChartDataMulti)
      {
      
        var obj = {"name":dataChart.name,"series":dataChart.series};
        array.push(obj);
      }
      return array;
  }

  public normaliseLineDataDate(dataChartDataMulti:ChartDataMultiDate[])
  {
      var array = [];
      for(let dataChart of dataChartDataMulti)
      {
      
        var obj = {"name":dataChart.name,"series":dataChart.series};
        array.push(obj);
      }
      return array;
  }


  //Generates the data appropriate for the chart based on Date 
  private generateChartDataDate(data:DataEPSR[])
  {
    var keys:any[] = this.filterService.filterKeys(data);
    var lineChartArray:ChartDataMultiDate[] = [];
    for(let key of keys)
    {
        var filteredWithKey = this.filterService.filterData(key,data);
        this.filterService.setKey(DataKey.date);
        var seriesArray:SeriesDate[] = this.getSeriesDate(filteredWithKey);
        var lineChartsData:ChartDataMultiDate = new ChartDataMultiDate(filteredWithKey[0].entity,seriesArray);
        lineChartArray.push(lineChartsData);
        this.filterService.setKey(DataKey.entity);
    }
    return this.normaliseLineDataDate(lineChartArray); 
  }

  private getSeriesDate(filteredWithKey:DataEPSR[])
  {
    var seriesArray:SeriesDate[] = [];
    var keysIn:any[] = this.filterService.filterKeys(filteredWithKey);
    for(let keyIn of keysIn)
    {
      var filteredWithKeyIn = this.filterService.filterData(keyIn,filteredWithKey);
      var value = this.operatorService.totalValue(filteredWithKeyIn);
      var series:SeriesDate = new SeriesDate(filteredWithKeyIn[0].date,value);
      seriesArray.push(series);
    }
    return seriesArray;
  }


 //Generates the data appropriate for the chart based on Expense Type 
  private generateChartDataExpenseType(data:DataEPSR[])
  {
    var keys:any[] = this.filterService.filterKeys(data);
    var lineChartArray:ChartDataMulti[] = [];
    for(let key of keys)
    {
        var filteredWithKey = this.filterService.filterData(key,data);
        this.filterService.setKey(DataKey.expenseType);
        var seriesArray:Series[] = this.getSeriesExpenseType(filteredWithKey);
        var lineChartsData:ChartDataMulti = new ChartDataMulti(filteredWithKey[0].expenseType,seriesArray);
        lineChartArray.push(lineChartsData);
        this.filterService.setKey(DataKey.supplier);
    }
   
    return this.normaliseLineData(lineChartArray); 
  }

  private getSeriesExpenseType(filteredWithKey:DataEPSR[])
  {
    var seriesArray:Series[] = [];
    var keysIn:any[] = this.filterService.filterKeys(filteredWithKey);
    for(let keyIn of keysIn)
    {
      var filteredWithKeyIn = this.filterService.filterData(keyIn,filteredWithKey);
      var value = this.operatorService.totalValue(filteredWithKeyIn);
      var series:Series = new Series(filteredWithKeyIn[0].supplier,value);
      seriesArray.push(series);
    }
    return seriesArray;
  }

}

