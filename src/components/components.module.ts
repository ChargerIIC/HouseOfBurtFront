import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { BlogListComponent } from './blog-list/blog-list';
import { ProductSummaryComponent } from './product-summary/product-summary';

@NgModule({
	declarations: [
		BlogListComponent,
		ProductSummaryComponent
	],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
		BlogListComponent,
		ProductSummaryComponent
	]
})
export class ComponentsModule {}
