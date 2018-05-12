import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../service/hero.service";
import {Hero} from "../../model/hero.model";

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent implements OnInit {
  currentHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  private getHero() {
    this.heroService.getHero(11)
      .subscribe(hero => this.currentHero = hero);
  }
}
