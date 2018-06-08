import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from '../../model/product.model';
import { Version } from '../../model/version.model';

@Injectable()
export class ProductRepositoryProvider {

  constructor(private fireStore: AngularFirestore) {
  }

  ///Gets a full list of the tracked products
	public getListOfProducts(): AngularFirestoreCollection<Product> {    
    return this.fireStore.collection('/Products/', i => i.orderBy('Title'));
  }
  
  public getVersionsForProduct(product: Product) : AngularFirestoreCollection<Version>{
    return this.fireStore.collection(product.DocumentRef.collection('/Versions/'), v => v.orderBy('ReleaseId', 'desc'));
  }

}
