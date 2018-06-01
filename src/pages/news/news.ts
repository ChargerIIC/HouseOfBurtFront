import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsRepositoryProvider } from '../../providers/news-repository/news-repository';
import { Observable } from 'rxjs';
import { NewsItem } from '../../model/newsItem.model';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
    this.newsList.forEach(n => console.log(n));
  }

  convertDate(timestamp){
    console.log(timestamp);
    return new Date(timestamp.seconds * 1000);
  }
}
