import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductRepositoryProvider } from '../../providers/product-repository/product-repository';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  public productList : Observable<Product[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productRepo: ProductRepositoryProvider) {
  }

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
