import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsItem } from '../../model/newsItem.model';

@Component({
  selector: 'page-news-article',
  templateUrl: 'news-article.html',
})
export class NewsArticlePage {

  article : NewsItem;

  constructor(public navCtrlr: NavController, public navParams: NavParams) {
    this.article = this.navParams.get('article');
  }

  ionViewDidLoad() {    
  }

}
