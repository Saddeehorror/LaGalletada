import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acctions',
  templateUrl: './acctions.component.html',
  styleUrls: ['./acctions.component.css']
})
export class AcctionsComponent implements OnInit {
  items;

  constructor() { 

    this.items = [
      {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
    },
      
      {separator:true},
      {
          label: 'Quit', icon: 'pi pi-fw pi-times'
      }
  ];
  }

  ngOnInit() {
  }

}
