import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  txt_start = "Start";
  stopwatch = false;
  Time_stopwatch = '00 : 00 : 00.00';
  time_function:any;
  first_date: any = '';
  pause_date = 0;
  diff_date = 0;

  tab_laps = [];


  onStart() {
    if (!this.stopwatch) {
      this.stopwatch = true;
      this.txt_start = 'Pause';
      this.calculDate('on');
    } else {
      this.calculDate('off');
      this.stopwatch = false;
      this.txt_start = 'Start';
    }
  }

  calculDate(param) {
    if (param == 'on') {
      this.first_date = new Date().getTime();
      this.time_function = setInterval(() => {
      let now = new Date().getTime();
      let diff = now - this.first_date + this.pause_date;

      this.diff_date = diff;
      let date = new Date(diff);
      this.displayDate(date);
      }, 20);
    }

    if (param == 'off') {
      clearInterval(this.time_function);
      this.pause_date = this.diff_date;
    }

  }

  displayDate(date) {
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let milliSeconds = date.getMilliseconds();
    this.Time_stopwatch = `${hour} : ${minutes} : ${seconds}.${milliSeconds}`;
  }

  saveLap() {
    this.tab_laps.push(this.Time_stopwatch);
  }

  onReset() {
    this.Time_stopwatch = '00 : 00 : 00.00';
    this.pause_date = 0;
    this.tab_laps = [];
  }
}
