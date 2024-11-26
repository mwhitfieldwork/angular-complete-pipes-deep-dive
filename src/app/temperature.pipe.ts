import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temperature',
    standalone: true,
    pure:false //disallow caching so that you dont have to replace the array
                // it might have a performance impact because it mihgt be called a lot
})

export class TemperaturePipe implements PipeTransform{
// the PipeTransform interface requires the transform method

 //without the transform method, the pipe won't work
 //Example: {{ currentTemperaturs.newYork | temperature }} 
 //the value is the currentTemperaturs.newYork
 transform(
    value: string | number | null,
     inputType:'cel'|'fah',
      outputType?:'cel'|'fah'): any {

     if(!value) {
        return value;
     }

    //it must return the transformed value
    let val:number;

if (typeof value === 'string') {
    val = parseFloat(value);
    } else {
        val = value;
    }

    let outputTemp:number;

    if(inputType === 'cel' && outputType === 'fah') {
         outputTemp= val * (9/5) + 32;
    }else if(inputType === 'fah' && outputType === 'cel') {
        outputTemp= (val - 32) * (5/9);
    }else{
        outputTemp = val;
    }

     outputTemp= val * (9/5) + 32;

     let symbol: 'C' | 'F';

     if(!outputType){
        symbol=inputType === 'cel' ? 'C' : 'F';
     }else{
        symbol=outputType === 'cel' ? 'C' : 'F';
     }

    return `${outputTemp.toFixed(2)} ${symbol}`;
 }
}