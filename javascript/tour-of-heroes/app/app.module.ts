import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HeroService} from "./services/hero.service";
import {HeroesComponent} from "./hero/heroes.component";
import {HeroDetailsComponent} from "./hero/hero-details.component";
import {routing} from "./app.routing";
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailsComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
