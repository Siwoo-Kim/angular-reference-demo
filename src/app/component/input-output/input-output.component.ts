import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../service/hero.service";
import {Hero} from "../../model/hero.model";
import {tap} from "rxjs/internal/operators";


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  currentHero: Hero;
  today: Date = new Date();
  constructor(public heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  private getHero() {
    this.heroService.getHero(11)
      .pipe(
        tap(hero => console.log(hero))
      )
      .subscribe(hero => {
        this.currentHero = hero;
        this.currentHero.feel = 'good';
      });
  }

  deleteHero(hero) {
    console.log(hero + ' delete request')
  }
}
