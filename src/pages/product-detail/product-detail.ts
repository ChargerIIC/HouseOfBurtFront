import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductRepositoryProvider } from '../../providers/product-repository/product-repository';

import { Product } from '../../model/product.model';
import { Version } from '../../model/version.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  product: Product;
  versions: Observable<Version[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private productRepo: ProductRepositoryProvider) {
    this.product = this.navParams.get('product');
    this.versions = this.productRepo.getVersionsForProduct(this.product).valueChanges();
  }

  ionViewDidLoad() {
  }

}
