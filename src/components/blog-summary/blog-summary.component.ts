import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from '../../model/newsItem.model';
import { NavController } from 'ionic-angular';
import { NewsArticlePage } from '../../pages/news-article/news-article';

@Component({
  selector: 'app-blog-summary',
  templateUrl: './blog-summary.component.html',
  styleUrls: ['./blog-summary.component.css']
})
export class BlogSummaryComponent {

  @Input() entry : NewsItem;

  constructor(public navCtlr: NavController) {
  }

  convertDate(timestamp){
    return new Date(timestamp.seconds * 1000);
  }

  summarizeContent(content: string, sliceAmount: number){
    var offSet = content.indexOf(" ",sliceAmount);
    if(offSet < 0){
      return content;
    }

    return content.slice(0, offSet);
  }

  navigateToFullArticle(){
    this.navCtlr.push(NewsArticlePage, {
      article: this.entry,
    });
  }

}
