import {Component, NgZone} from '@angular/core';
import {TacheService} from "./tache.service";
import {concatMap, map} from "rxjs";

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent {
  progress: number = 0;
  intervalId: any;
  tache1: string = "1st task to do";
  tableauDeTaches: any [] = [];


  constructor(private zone: NgZone, private tacheService: TacheService) {
  }

  ngOnInit(): void {

    this.tacheService.getList().subscribe(t => {
      console.log(t.title)
      this.tableauDeTaches.push(t)
    });

    this.tacheService.addTache({title: "titre " + this.progress, description: "desc " + this.progress}).subscribe();

    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        if (this.progress % 2 == 0 ) {
          this.zone.run(()=> {
               this.progress++
          });
        } else {
          this.progress++;
        }


        if (this.progress == 10) this.progress = 0;
      }, 1000);
    });

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
