import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TableGraphComponent } from './table-graph/table-graph.component';

import { MatTabsModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule, MatInputModule } from '@angular/material'  ;
import {MatGridListModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material';

import {MatExpansionModule} from '@angular/material/expansion';

import { HttpClientModule } from '@angular/common/http';
import { DataRetrieverService } from './services/data-retriever/data-retriever.service';
import { DataConverterService } from './services/data-converter/data-converter.service';
import { DataFilterService } from './services/data-filter/data-filter.service';
import { OperatorsService } from './services/data-operators/operators.service';
import { ChartGraphComponent } from './chart-graph/chart-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    TableGraphComponent,
    ChartGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule ,
    MatInputModule,
    MatExpansionModule
  ],
  providers: [DataRetrieverService, DataConverterService, DataFilterService,OperatorsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
