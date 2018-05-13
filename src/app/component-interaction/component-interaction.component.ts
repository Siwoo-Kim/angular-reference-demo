import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HEROES} from "../heroes/mock-heroes";
import {CountdownTimerComponent} from "./countdown-timer/countdown-timer.component";
import {MissionService} from "./mission.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css'],
  providers: [MissionService]
})
export class ComponentInteractionComponent implements OnInit, AfterViewInit, OnDestroy {
  heroes = HEROES;
  master = 'Master';
  names = ['Mr. IQ', '   ', '  Bombasto '];
  major = 1;
  minor = 23;
  agreed: number = 0;
  disagreed: number = 0;
  voters: string[] = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
  @ViewChild(CountdownTimerComponent)
  private timer: CountdownTimerComponent;
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;

  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timer.seconds, 0);
  }

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++ ;
  }

  newMinor() {
    this.minor ++;
  }

  newMajor() {
    this.major ++;
    this.minor = 0;
  }

  ngOnInit() {
  }

}
