import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/*
  Generated class for the NewsRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsRepositoryProvider {

  constructor(private firebase: AngularFireDatabase) {
  }

  	///Gets a news article starting at a certain index and then so many forward
	public getPagedNews(start: number, count: number): AngularFireList<any> {
		return this.firebase.list('/News/');
	}

}
