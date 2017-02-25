import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Observable<Hero[]>;

  private selectedId : number;

  constructor(
    private heroesService: HeroesService,
    private router:        Router,
    private route:         ActivatedRoute
  ) { }

  ngOnInit() {
    //this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroes = this.route.params 
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.heroesService.getHeroes();
      })
  }

  onSelect(hero: Hero): void{
    this.router.navigate(['/hero', hero.id]);
  }

  isSelected(hero: Hero):  boolean {
    return this.selectedId === hero.id;
  }

}
