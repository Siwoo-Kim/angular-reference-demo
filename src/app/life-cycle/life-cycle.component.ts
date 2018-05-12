import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HeroService} from "../service/hero.service";
import {Hero} from "../model/hero.model";
import {HEROES} from "../heroes/mock-heroes";
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, AfterViewInit {
  heroes: Hero[] = HEROES.slice();
  constructor(public heroService: HeroService) { }
  newHero: Hero;
  power: string;
  private prevHero = '';

  @ViewChild(ChildComponent) viewChild: ChildComponent;

  ngOnInit() {
  }

  addHero(value: string) {
    console.log(value);
    this.heroes.push({id: this.heroes.length + 11,name: value});
  }
  reset() {
    this.heroes = HEROES.slice();
  }

  createNewHero(name: string, power: string) {
    this.newHero = null;
    this.newHero = {name: name};
    this.power = power;
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
    this.doSomething();
  }

  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';

  }
}
