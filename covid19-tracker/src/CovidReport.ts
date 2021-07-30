export interface CovidReport{
    active:number;
    confirmed:number;
    deaths:number;
    deltaconfirmed:number;
    deltadeaths:number;
    deltarecovered:number;
    lastupdatedtime:Date;
    recovered:number;
    state:string;
}
