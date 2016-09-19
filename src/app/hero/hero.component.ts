import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  heroes:Hero[] = [{
      id: 1,
      name:'Tester'
    }, {
      id: 2,
      name: 'Nice one'
    }];

  selectedHero: Hero;

  openHero(param: Hero): void {
    this.selectedHero = param;
    console.log('selectedHero', this.selectedHero);
  }


}
