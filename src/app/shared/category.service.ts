import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }
  // getCategories() {
  //   return this.db.list('/categories').valueChanges()
  // }
  create(category) {
    return this.db.list('categories/').push({category:category});
  }
  delete(category) {
    return this.db.object('categories/'+ category).remove();
  }

  getCategory(category) {
    return this.db.object('categories/' + category).valueChanges();
  }
  getCategories() {
    return this.db.list('/categories'  , ref => (ref.orderByChild('category')))
    .snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({ key: a.key, ...<any>a.payload.val() }))
      )
    );
  }
}
