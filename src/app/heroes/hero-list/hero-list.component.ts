import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];

  constructor(
    private heroesService: HeroesService,
    private router:        Router
  ) { }

  ngOnInit() {
    this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
    this.router.navigate(['/hero', hero.id]);
  }

}
