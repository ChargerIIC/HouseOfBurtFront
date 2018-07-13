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
/**
  Generated class for the ProductDetailPage class.
  Displays the given product, it's details, and offical versions
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class ProductDetailPage {

  product: Product;
  versions: Observable<Version[]>;
  
  /**
   * Creates a new Instance of ProductsPage
   * @remarks Product passed from navParams
   * @param navCtrl  NavController Dependency Injected Navigation Controller Service
   * @param navParams NavParams Dependency Injected Navigation Parameters Service
   * @param productRepo ProductRepositoryProvider Service to fetch available products
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private productRepo: ProductRepositoryProvider) {
    this.product = this.navParams.get('product');
    this.versions = this.productRepo.getVersionsForProduct(this.product).valueChanges();
  }

  ionViewDidLoad() {
  }

}
