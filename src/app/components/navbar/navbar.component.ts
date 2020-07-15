import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input() visible;
@Output() sidebarchange:EventEmitter<boolean> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  showsidebar(event){
    console.log(event);
    this.sidebarchange.emit(false);
  }

}
