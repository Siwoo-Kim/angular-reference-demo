import {Directive, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[spy]'
})
export class SpyDirective implements OnInit, OnDestroy, OnChanges{

  constructor() { }


  ngOnInit() {
    this.logIt('OnInit');
  }

  ngOnChanges() {

  }
  ngOnDestroy() { this.logIt(`onDestroy`); }

  private logIt(msg: string) {
    console.log(`${msg}`);
  }

}
