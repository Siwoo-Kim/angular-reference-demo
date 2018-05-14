import { Component, OnInit } from '@angular/core';
import {MissionService} from "../mission.service";

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css'],
  providers: [MissionService]
})
export class MissionControlComponent implements OnInit {
  astronauts = ['Levell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly t o Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    this.missionService
      .missionConfirmed$
      .subscribe(astronaut => this.history.push(`${astronaut} confirmed the mission`));
  }

  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission ${mission} announced`);
    if(this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
  ngOnInit() {
  }

}
