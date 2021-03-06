import { Injectable } from '@angular/core';
import {Hero} from "../model/hero.model";
import {HEROES} from "../heroes/mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService){}

  getHeroes() {
    this.messageService.add('HeroService: fectehd heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id == id));
  }
}
