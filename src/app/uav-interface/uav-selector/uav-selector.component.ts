import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { uav } from '../../shared/uav.model';

@Component({
  selector: 'app-uav-selector',
  templateUrl: './uav-selector.component.html',
  styleUrls: ['./uav-selector.component.css']
})
export class UavSelectorComponent implements OnInit {
  @Output() UAVSelected= new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

  uavList: any = ['Plane A', 'Plane B', 'Plane C']
   
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }
}
