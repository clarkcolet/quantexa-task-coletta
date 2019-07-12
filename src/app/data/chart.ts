import {Series} from './series';

//Data format to create charts
export class ChartDataMulti
{
    name:string;
    series:Series[];

    constructor(name:string,seriesArray:Series[])
    {
            this.name = name;
            this.series = seriesArray;
    }
}