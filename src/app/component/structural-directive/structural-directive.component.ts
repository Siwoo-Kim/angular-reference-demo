import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../service/hero.service";
import {Hero} from "../../model/hero.model";

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  isActive: boolean = true;
  emotion: string = 'despress';

  constructor(public heroService: HeroService) { }

  ngOnInit() {
  }

  trackByHero(index: number,hero: Hero): number {
    return hero.id;
  }
}
