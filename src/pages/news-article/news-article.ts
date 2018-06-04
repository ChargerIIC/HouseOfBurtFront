import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsItem } from '../../model/newsItem.model';

/**
 * Generated class for the NewsArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
