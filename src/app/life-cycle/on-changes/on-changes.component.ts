import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Hero} from "../../model/hero.model";

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit, OnChanges {
  @Input() hero: Hero;
  @Input() power: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for(let propName in changes) {
      let change = changes[propName];
      let cur = JSON.stringify(change.currentValue);
      let prev = JSON.stringify(change.previousValue);
      this.logIt(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  private logIt(msg: string) {
    console.log(`${msg}`);
  }
}
