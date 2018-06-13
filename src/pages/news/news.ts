import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsRepositoryProvider } from '../../providers/news-repository/news-repository';
import { Observable } from 'rxjs';
import { NewsItem } from '../../model/newsItem.model';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public newsList : Observable<NewsItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsRepo: NewsRepositoryProvider) {
  }

  ionViewDidLoad() {
    this.newsList = this.newsRepo.getPagedNews(0,10).valueChanges();
  }

}
