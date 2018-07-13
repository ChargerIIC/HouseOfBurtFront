import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { NewsItem } from '../../model/newsItem.model';
import { NewsRepositoryProvider } from '../../providers/news-repository/news-repository';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
/**
  Generated class for the NewsPage class.
  Displays ten articles with summaries
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class HomePage {

  public newsList : Observable<NewsItem[]>;

   /**
   * Creates a new Instance of NewsArticlePage
   * @remarks Article passed from navParams
   * @param navCtrl  NavController Dependency Injected Navigation Controller Service
   * @param navParams NavParams Dependency Injected Navigation Parameters Service
   * @param newsRepo NewsRepositoryProvider Dependency Injected service for fetching new articles
   */
  constructor(public navCtrl: NavController, private newsRepo: NewsRepositoryProvider) {
    this.newsList = this.newsRepo.getPagedNews(0,10).valueChanges();
  }

}
