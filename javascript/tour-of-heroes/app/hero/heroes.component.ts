import {Component, OnInit} from "@angular/core";
import {HeroService} from "../services/hero.service";
import {Hero} from "../models/hero";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  viewDetails(): void {
    this.router.navigate(['/heroes', this.selectedHero.id]);
  }
}
