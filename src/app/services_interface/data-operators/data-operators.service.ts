import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class DataOperatorsService 
{
  abstract totalValue([]):number;
}
