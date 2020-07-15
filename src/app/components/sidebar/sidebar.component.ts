import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  display="true";
  sidebarvalue: boolean;
  @Output() sidebarchange: EventEmitter<boolean> =  new EventEmitter();
  @Input() visible = false;
  items:MenuItem[];
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  //   this.items = [
  //     {
  //         label: 'File',
  //         items: [{
  //                 label: 'New', 
  //                 icon: 'pi pi-fw pi-plus',
  //                 items: [
  //                     {label: 'Project'},
  //                     {label: 'Other'},
  //                 ]
  //             },
  //             {label: 'Open'},
  //             {label: 'Quit'}
  //         ]
  //     },
  //     {
  //         label: 'Edit',
  //         icon: 'pi pi-fw pi-pencil',
  //         items: [
  //             {label: 'Delete', icon: 'pi pi-fw pi-trash'},
  //             {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
  //         ]
  //     },
  //     {
  //       label: 'test',
  //       icon: 'pi pi-fw pi-pencil',
  //     }
  // ];


    this.items = [
      {
        label: 'Inicio',
        icon: 'fas fa-cookie-bite',
        routerLink:'/home'
      },
      {
        label: 'Clientes',
        icon: 'fas fa-user-tag',
        routerLink:'clients'
      },
      {
        label: 'Settings',
        icon: 'fas fa-cog'
      }
    ]

  }

  hide(event){
    this.sidebarchange.emit(true);
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }


}
