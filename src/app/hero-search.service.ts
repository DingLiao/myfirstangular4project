import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }       from './hero';

@Injectable()
export class HeroSearchService {
	constructor(private http: Http) {}

	search(term: string): Obserable<Hero[]> {
		return this.http
					.get(`app/heroes/?name=${term}`)
					.map(response => response.json().data as Hero[]);
	}
}