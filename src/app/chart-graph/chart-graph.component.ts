import { Component, OnInit } from '@angular/core';
import { DataConverterService } from '../services/data-converter/data-converter.service';
import { DataRetrieverService } from '../services/data-retriever/data-retriever.service';
import { DataKey } from '../data/data_key';
import { MatTabChangeEvent } from '@angular/material';
import { OperatorsService } from '../services/data-operators/operators.service';


@Component({
  selector: 'app-chart-graph',
  templateUrl: './chart-graph.component.html',
  styleUrls: ['./chart-graph.component.scss']
})
export class ChartGraphComponent implements OnInit {

  constructor(private dataService:DataRetrieverService, 
              private dataConverter:DataConverterService,
              private dataOperator: OperatorsService) { }

  ngOnInit() 
  {
    this.dataService.getJSONEPSR().subscribe(data  =>
      {
       data = this.dataOperator.getDateFormat(data);
       this.multiDate = this.dataConverter.getGraphArray(DataKey.entity,DataKey.date,data);
       this.maxVal = this.dataOperator.getMaxVal(this.multiDate) + 500;
       this.multiType = this.dataConverter.getGraphArray(DataKey.supplier,DataKey.expenseType,data);
      });
  }

    //Data for Graphs
    view: any[] = [1500, 600];
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Date';
    
    showYAxisLabel = true;
    yAxisLabel = 'Total Amount (GBP)';
    timeline = false;
    autoScale = true;
    maxVal=0;

    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#0062A0', '#A15A28', '#C7142C', '#ABBAAA','#5BB454', '#A11A28', '#C7B52C', '#AFAFA' ]
    };
  
    public multiDate = [];
    public multiType = [];

    tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
      if(tabChangeEvent.index==0)
      {
        this.xAxisLabel = 'Date';
      } else if(tabChangeEvent.index==1)
      {
        this.xAxisLabel = 'Expense Type';
      }
    }

}
