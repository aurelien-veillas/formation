import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_todo_list';

  progress: number = 0;
  intervalId: any;
  tache1: string = "1st task to do";

  constructor(private zone: NgZone) {
  }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        if (this.progress % 2 == 0 ) {
          this.zone.run(()=> this.progress++);
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
