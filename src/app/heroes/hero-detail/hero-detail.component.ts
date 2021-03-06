import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { HeroesService } from '../heroes.service';
import { Hero } from '../hero';

import { slideInDownAnimation } from '../../animations';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [ slideInDownAnimation ]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
@HostBinding('style.display')   display = 'block';
@HostBinding('style.position')  position = 'absolute';


  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroesService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => 
    this.service.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);  
  }

  back() {
    let heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }

}
