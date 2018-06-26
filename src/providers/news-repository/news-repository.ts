import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NewsItem } from '../../model/newsItem.model';

@Injectable({
  providedIn: 'root'
})
export class NewsRepositoryService {

  constructor(private fireStore: AngularFirestore) {
  }

  	///Gets a news article starting at a certain index and then so many forward
	public getPagedNews(start: number, count: number): AngularFirestoreCollection<NewsItem> {
    return this.fireStore.collection('/News/', i => i.orderBy('Date', 'desc'));
	}
}
