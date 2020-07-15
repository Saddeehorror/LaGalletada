import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidebar = false;
  sidebarwidth =  'width:15%'

  constructor() { }
  ngOnInit(): void {
  }

  setsidebar(value){
    this.sidebar = !this.sidebar;
    console.log(value);

  }

}
