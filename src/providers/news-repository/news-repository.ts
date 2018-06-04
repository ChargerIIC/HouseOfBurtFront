import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NewsItem } from '../../model/newsItem.model';

/*
  Generated class for the NewsRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsRepositoryProvider {

  constructor(private fireStore: AngularFirestore ) {
  }

  	///Gets a news article starting at a certain index and then so many forward
	public getPagedNews(start: number, count: number): AngularFirestoreCollection<NewsItem> {
    return this.fireStore.collection('/News/', i => i.orderBy('Date', 'desc'));
	}

}
