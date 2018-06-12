import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from '../app.firebase.config';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { ProductsPage } from '../pages/products/products';
import { ApplicationsPage } from '../pages/applications/applications';
import { ContactPage } from '../pages/contact/contact';

import { NewsRepositoryProvider } from '../providers/news-repository/news-repository';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ComponentsModule } from '../components/components.module';
import { NewsArticlePage } from '../pages/news-article/news-article';
import { ProductRepositoryProvider } from '../providers/product-repository/product-repository';
import { ProductDetailPage } from '../pages/product-detail/product-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    NewsArticlePage,
    ProductsPage,
    ProductDetailPage,
    ApplicationsPage,
    ContactPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
		AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    NewsArticlePage,
    ProductsPage,
    ProductDetailPage,
    ApplicationsPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsRepositoryProvider,
    ProductRepositoryProvider
  ]
})
export class AppModule {}
