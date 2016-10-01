import {Component, Input} from "@angular/core";
import {Hero} from "../models/hero";

@Component({
  selector: 'hero-details',
  templateUrl: './app/hero/hero-details.component.html'
})
export class HeroDetailsComponent {
  @Input()
  hero: Hero;
}
