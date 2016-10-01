import {Component, OnInit} from "@angular/core";
import {Hero} from "./models/hero";
import {HeroService} from "./services/hero.service";

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title: string;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.title = 'Tour of Heroes';

    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
