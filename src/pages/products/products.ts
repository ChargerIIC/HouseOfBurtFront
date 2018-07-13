import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductRepositoryProvider } from '../../providers/product-repository/product-repository';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})

/**
  Generated class for the ProductsPage class.
  Displays the available products and their summaries
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class ProductsPage {

  public productList : Observable<Product[]>;

    /**
   * Creates a new Instance of ProductsPage
   * @param navCtrl  NavController Dependency Injected Navigation Controller Service
   * @param navParams NavParams Dependency Injected Navigation Parameters Service
   * @param productRepo ProductRepositoryProvider Service to fetch available products
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private productRepo: ProductRepositoryProvider) {
  }

   /**
   * fires when the view loads for the user. Populates the product list.
   */
  ionViewDidLoad() {
    this.productList = this.productRepo.getListOfProducts().snapshotChanges().pipe(
      map(actions => actions.map(a => {
        var p = a.payload.doc.data() as Product;
        p.DocumentRef = a.payload.doc.ref;
        p.DocumentId = a.payload.doc.id;
        return p;
      }))
    );
  }

}
