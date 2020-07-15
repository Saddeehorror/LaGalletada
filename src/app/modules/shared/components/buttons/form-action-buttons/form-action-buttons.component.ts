import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-form-action-buttons',
  templateUrl: './form-action-buttons.component.html',
  styleUrls: ['./form-action-buttons.component.css']
})
export class FormActionButtonsComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  
  back(){
    this._location.back();

  }

}
