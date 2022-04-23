import{Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'cut'
})

export class cutPipe implements PipeTransform{
    transform(value:string,limit?:number){
        if(!value)
        return null;

            let actualLimit = (limit)? limit : 10;
        return value.substr(0,actualLimit)


    }
}
