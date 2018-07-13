import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { ProductsPage } from '../pages/products/products';
import { ApplicationsPage } from '../pages/applications/applications';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
/**
 * MyApp class represents the application itself and handles intrapage navigation
 */
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

   /**
   * creates a new instance of the application
   * @param platform  DI Loaded Ionic construct that provides access to native controls.
   * @param statusBar  DI Loaded Ionic construct that provides access to the Native Status Bar
   * @param splashScreen  DI Loaded Ionic construct that provides access to the Splash Screen
   */
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'News', component: NewsPage },
      { title: 'Products', component: ProductsPage },
      { title: 'Applications', component: ApplicationsPage },
      { title: 'Contact', component: ContactPage },

    ];

  }

   /**
   * Starts the application
   * @returns void
   */
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /**
   * Navigates to new page as per navigation
   * @param page  Page DTO contiaing component to navigate to.
   * @returns void
   */
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
