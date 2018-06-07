import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductRepositoryProvider } from '../../providers/product-repository/product-repository';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';


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
    this.productList = this.productRepo.getListOfProducts().valueChanges();
  }

}
