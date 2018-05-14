import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {
  values = '';
  values2 = '';

  constructor() { }

  ngOnInit() {
  }

  onKey($event) {
    console.log($event);

    this.values += $event.key + ' | ';
  }

  onEnter(value: string) {
    this.values2 = value;
  }
}
