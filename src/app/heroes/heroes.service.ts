import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroesService {

  private heroesUrl = 'api/heroes';


  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[]);
  }

  getHero(id: number): Promise<Hero> {
    return this.http.get(this.heroesUrl + "/" + id)
      .toPromise()
      .then(response => response.json().data as Hero);
  }

  

}
