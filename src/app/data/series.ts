//Field required for creating the charts
export class Series
{
    name:string;
    value:number;

    constructor(name:string, value:number)
    {
        this.name = name;
        this.value = value;
    }
}

export class SeriesDate
{
    name:Date;
    value:number;

    constructor(name:Date, value:number)
    {
        this.name = name;
        this.value = value;
    }
}