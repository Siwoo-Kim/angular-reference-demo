import { Component, OnInit } from '@angular/core';
import {Hero} from "../model/hero.model";
import {HeroService} from "../service/hero.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  currentHero: Hero;
  isUnchanged: boolean = true;
  heroes: any;

  dangerousUrl;
  trustedUrl;
  myFontSize: number = 10;
  currentClasses: any;
  currentStyle: any;



  constructor(private heroService: HeroService,
              private sanitizer: DomSanitizer) {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);

    this.currentClasses = {
      'saveable': true,
      'special': false,
      'modified': true,
    }
    this.currentStyle = {
      'color': 'orange',
      backgroundColor: 'wheat',
      fontSize: '20px'
    }
  }

  ngOnInit() {
    this.heroService.getHero(11).subscribe(hero => this.currentHero = hero);
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  listen(hero: Hero) {
    console.log(hero);
  }
  getImg() {
    return 'assets/img.svg';
  }

  deleteHero() {
    console.log('triggered');
  }

  onSave($event) {
    console.log($event)
  }

  getClasses() {
    return 'custom-class';
  }
}
