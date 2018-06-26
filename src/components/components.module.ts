import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductSummaryComponent } from './product-summary/product-summary';
import { BlogSummaryComponent } from './blog-summary/blog-summary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  exports: [
    BlogSummaryComponent,
		ProductSummaryComponent
  ],
  declarations: [
    BlogSummaryComponent,
		ProductSummaryComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
