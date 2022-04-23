import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {
   shows =  new Subject<boolean>();
   shows2 =  new Subject<boolean>();
   reto =  new Subject<number>();
  constructor() {

   }
}
