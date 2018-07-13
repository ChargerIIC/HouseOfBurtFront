import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsItem } from '../../model/newsItem.model';

@Component({
  selector: 'page-news-article',
  templateUrl: 'news-article.html',
})
/**
  Generated class for the NewsArticlePage class.
  Displays the given Artivcle with the full text
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class NewsArticlePage {

  article : NewsItem;

  /**
   * Creates a new Instance of NewsArticlePage
   * @remarks Article passed from navParams
   * @param navCtrl  NavController Dependency Injected Navigation Controller Service
   * @param navParams NavParams Dependency Injected Navigation Parameters Service
   */
  constructor(public navCtrlr: NavController, public navParams: NavParams) {
    this.article = this.navParams.get('article');
  }

  ionViewDidLoad() {    
  }

}
