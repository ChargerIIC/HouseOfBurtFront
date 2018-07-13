import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from '../../model/product.model';
import { Version } from '../../model/version.model';

/**
 * Product Repository Provider is a service that manages the firebases connection and provides access to the 
 * data specific to the developer projects
 */
@Injectable()
export class ProductRepositoryProvider {

  /**
   * Navigates to new page as per navigation
   * @param fireStore  Angular Firestore service that provides access to the firestore backend.
   */
  constructor(private fireStore: AngularFirestore) {
  }

  /**
   * Gets a full list of the tracked products
   * @returns AngularFirestoreCollection<Product> of all products ordered by Title
   */
	public getListOfProducts(): AngularFirestoreCollection<Product> {    
    return this.fireStore.collection('/Products/', i => i.orderBy('Title'));
  }
  
    /**
   * Gets a full list of the tracked versions for a product
   * @param product Product that needs the versions fetched for.
   * @returns AngularFirestoreCollection<Version> of all versions for the product sorted by ReleaseId
   */
  public getVersionsForProduct(product: Product) : AngularFirestoreCollection<Version>{
    return this.fireStore.collection(product.DocumentRef.collection('/Versions/'), v => v.orderBy('ReleaseId', 'desc'));
  }

}
