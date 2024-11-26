import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temperature',
    standalone: true
})

export class TemperaturePipe implements PipeTransform{
// the PipeTransform interface requires the transform method

 //without the transform method, the pipe won't work
 transform(value: string | number , ...args: any[]): any {
    //it must return the transformed value
    return value + 'value transformed';
 }
}