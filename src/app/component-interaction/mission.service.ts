import {Injectable} from "@angular/core";
import {Subject} from "rxjs/index";

@Injectable()
export class MissionService {
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  announceMission(mission: string) {
    this.missionAnnouncedSource.next(misson);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(mission);
  }

}
