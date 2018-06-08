import { Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductDetailPage } from '../../pages/product-detail/product-detail';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the ProductSummaryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-summary',
  templateUrl: 'product-summary.html'
})
export class ProductSummaryComponent {

  @Input() product: Product;

  constructor(public navCtlr: NavController) {
  }

  navigateToFullProduct(){
    this.navCtlr.push(ProductDetailPage, {
      product: this.product,
    });
  }
}
