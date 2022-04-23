import{Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'cutt'
})

export class cuttPipe implements PipeTransform{
    transform(value:string,limit?:number){
        if(!value)
        return null;

            let actualLimit = (limit)? limit : 10;
        return value.substr(0,actualLimit) + ' ...'


    }
}
