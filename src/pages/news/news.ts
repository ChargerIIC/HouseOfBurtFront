import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsRepositoryProvider } from '../../providers/news-repository/news-repository';
import { Observable } from 'rxjs';
import { NewsItem } from '../../model/newsItem.model';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
/**
  Generated class for the NewsPage class.
  Displays ten articles with summaries
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class NewsPage {

  public newsList : Observable<NewsItem[]>;

    /**
   * Creates a new Instance of NewsArticlePage
   * @remarks Article passed from navParams
   * @param navCtrl  NavController Dependency Injected Navigation Controller Service
   * @param navParams NavParams Dependency Injected Navigation Parameters Service
   * @param newsRepo NewsRepositoryProvider Dependency Injected service for fetching new articles
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private newsRepo: NewsRepositoryProvider) {
  }

     /**
   * fires when the view loads for the user. Populates the product list.
   */
  ionViewDidLoad() {
    this.newsList = this.newsRepo.getPagedNews(0,10).valueChanges();
  }

}
