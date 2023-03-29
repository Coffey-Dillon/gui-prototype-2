import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { uav } from '../shared/uav.model';

@Component({
  selector: 'app-uav-interface',
  templateUrl: './uav-interface.component.html',
  styleUrls: ['./uav-interface.component.css']
})
export class UavInterfaceComponent implements OnInit {
  @Output() uavWasSelected = new EventEmitter<uav>();
  uavs: uav[] = [
    new uav('a', 100, 'video path would go here'), 
    new uav('b', 100, ''), 
    new uav('c', 100, '')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onUavSelected(uav: uav) {
    this.uavWasSelected.emit(uav);
  }

}
