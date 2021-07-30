import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateUt'
})
export class StateUtPipe implements PipeTransform {

  transform(value: any, sutname: string): any {
    if(sutname===""){
      return value;
    }
    const stateUtArray:any[]=[];
    for(let i=0;i<value.length;i++){

      sutname=sutname[0].toUpperCase()+sutname.slice(1);
      
      let stutName:string=value[i].state;
      if(stutName.startsWith(sutname)){
        stateUtArray.push(value[i]);
      }
    }
    return stateUtArray;
  }

}
