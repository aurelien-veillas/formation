import { Component } from '@angular/core';

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

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.progress+=1;
      if (this.progress % 2 == 0 ) {
        this.tache1 += ".";
      }

    }, 1000);
  }

  ngOnDestroy(): void {
    this.intervalId.clear();
  }
}
