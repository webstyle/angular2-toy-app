import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  heroes:Hero[] = [{
      id: 1,
      name:'Tester'
    }, {
      id: 2,
      name: 'Nice one'
    }];
  selectedHero: Hero;
  openHero(hero: Hero) {
    selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
