import {Component, OnInit} from "@angular/core";
import {Hero} from "./models/hero";

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.title = 'Tour of Heroes';

    this.heroes = [
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
