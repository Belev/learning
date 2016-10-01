import {Component, OnInit} from "@angular/core";
import {HeroService} from "../services/hero.service";
import {Hero} from "../models/hero";

@Component({
  selector: 'heroes',
  templateUrl: './app/hero/heroes.component.html',
  styleUrls: ['./app/hero/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
