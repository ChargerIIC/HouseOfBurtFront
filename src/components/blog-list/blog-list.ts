import { Component, Input } from '@angular/core';
import { NewsItem } from '../../model/newsItem.model';

/**
 * Generated class for the BlogListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'blog-list',
  templateUrl: 'blog-list.html'
})
export class BlogListComponent {

  @Input() entry : NewsItem;

  constructor() {
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
}
