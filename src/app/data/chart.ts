import {Series,SeriesDate} from './series';

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

export class ChartDataMultiDate
{
    name:string;
    series:SeriesDate[];

    constructor(name:string,seriesArray:SeriesDate[])
    {
            this.name = name;
            this.series = seriesArray;
    }
}