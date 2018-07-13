import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NewsItem } from '../../model/newsItem.model';

/**
  Generated class for the NewsRepositoryProvider provider.
  Fetches Angular Fire data for News Articles
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsRepositoryProvider {

  /**
   * Creates a new Instance of NewsRepositoryProvider
   * @param fireStore  Angular Firestore service that provides access to the firestore backend.
   */
  constructor(private fireStore: AngularFirestore) {
  }

  /**
   * Gets a news article starting at a certain index and then so many forward. Sorts articles based on Date
   * @param start number Where to start the fetch 
   * @param count number Number of articles to fetch
   * @returns AngularFirestoreCollection<NewsItem> of all articles within the given confines
   */
	public getPagedNews(start: number, count: number): AngularFirestoreCollection<NewsItem> {
    return this.fireStore.collection('/News/', i => i.orderBy('Date', 'desc'));
	}

}
