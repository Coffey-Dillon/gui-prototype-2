import { Component, OnInit } from '@angular/core';
import { uav } from 'src/app/shared/uav.model';

@Component({
  selector: 'app-uav-status',
  templateUrl: './uav-status.component.html',
  styleUrls: ['./uav-status.component.css']
})
export class UavStatusComponent implements OnInit {

  uavs: uav[] = [new uav('a', 100, 'video path would go here'), new uav('b', 80, ''), new uav('c', 100, '')];
  selectedUav: uav = this.uavs[0];

  constructor() { }

  ngOnInit(): void {
  }



}
