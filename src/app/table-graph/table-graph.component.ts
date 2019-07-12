import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {DataRetrieverService} from '../services/data-retriever/data-retriever.service';
import {DataEPSR} from '../data/data_epsrc';
import { DataConverterService } from '../services/data-converter/data-converter.service';

@Component({
  selector: 'app-table-graph',
  templateUrl: './table-graph.component.html',
  styleUrls: ['./table-graph.component.scss']
})
export class TableGraphComponent implements OnInit 
{

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['department', 'entity', 'date', 'expenseType', 'expenseArea', 'supplier', 'transactionNumber', 'amount', 'invoiceCurrencyUnit'];
  dataArray = [];
  dataSource = new MatTableDataSource<DataEPSR>([]);


  constructor(private dataService:DataRetrieverService, private dataConverter:DataConverterService) 
  {
   
  }

  ngOnInit() 
  {   
      this.dataService.getJSONEPSR().subscribe(data=>
                    {
                      this.dataSource = new MatTableDataSource<DataEPSR>(data); 
                      this.dataSource.paginator = this.paginator;
                    });
  }

  applyFilter(filterValue: string) 
  {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
