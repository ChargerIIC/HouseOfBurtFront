import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from '../app.firebase.config';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BlogSummaryComponent } from '../components/blog-summary/blog-summary.component';
import { ProductSummaryComponent } from '../components/product-summary/product-summary';

//import { BlogSummaryComponent } from './blog-summary/blog-summary.component';
//import { ProductSummaryComponent } from './product-summary/product-summary.component';

@NgModule({
  declarations: [AppComponent, BlogSummaryComponent, ProductSummaryComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
		AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
