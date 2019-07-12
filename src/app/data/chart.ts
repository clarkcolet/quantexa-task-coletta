import {Series} from './series';

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