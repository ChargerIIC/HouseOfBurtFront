import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { BlogListComponent } from './blog-list/blog-list';

@NgModule({
	declarations: [BlogListComponent],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [BlogListComponent]
})
export class ComponentsModule {}
