import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatesService {
key = new Subject()
rate = new Subject()
  constructor(private http:HttpClient) { }

// product key && rate
// this.rate <= from emited rrate with next subj

  fn(key,rate){
    this.http.patch('https://bis-store.firebaseio.com/products/'+key+'.json',
    {rate:rate}).subscribe(l=>{
      console.log(l)
    });
  }

}
