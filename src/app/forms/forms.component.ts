import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  clickMessage: string = '';

  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
