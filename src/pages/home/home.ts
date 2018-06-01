import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { NewsItem } from '../../model/newsItem.model';
import { NewsRepositoryProvider } from '../../providers/news-repository/news-repository';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public newsList : Observable<NewsItem[]>;

  constructor(public navCtrl: NavController, private newsRepo: NewsRepositoryProvider) {
    this.newsList = this.newsRepo.getPagedNews(0,10).valueChanges();
  }

}
