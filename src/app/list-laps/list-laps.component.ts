import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-laps',
  templateUrl: './list-laps.component.html',
  styleUrls: ['./list-laps.component.scss']
})
export class ListLapsComponent implements OnInit {

  @Input()
  tab_laps = [];

  constructor() { }

  ngOnInit() {
  }

}
