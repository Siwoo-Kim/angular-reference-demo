import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../../model/hero.model";

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  @Input() hero: Hero;
  @Output() deleteRequest: EventEmitter<Hero> = new EventEmitter<Hero>();

  delete() {
    this.deleteRequest.emit(this.hero);
  }


  constructor() { }

  ngOnInit() {
  }

}
