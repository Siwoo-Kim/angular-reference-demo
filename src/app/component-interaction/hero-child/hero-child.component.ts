import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../model/hero.model";

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {
  @Input() hero: Hero;
  @Input('master') masterName: string;

  constructor() { }

  ngOnInit() {
  }

}
