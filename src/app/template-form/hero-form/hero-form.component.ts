import {Component, NgModule, OnInit} from '@angular/core';
import {SuperHero} from "../super-hero.model";
import {st} from "@angular/core/src/render3";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new SuperHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted: boolean = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  getNgClass(formControl: NgModule) {
    let el = formControl.valueAccessor._elementRef.nativeElement;
    let splited: string[] = el.className.split(' ');
    return splited.filter(str => str.startsWith('ng'))
  }

  newHero() {
    this.model = new SuperHero(42, '', '');
  }
}
