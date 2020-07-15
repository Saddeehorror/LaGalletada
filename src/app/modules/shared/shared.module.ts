import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

import { SharedComponent } from './shared.component';
import {GoogleMapsModule } from '@angular/google-maps'
//My components
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';
import { FormActionButtonsComponent } from './components/buttons/form-action-buttons/form-action-buttons.component';
import { HeaderComponent } from './header/header.component';
import { AddressComponent } from './components/address/address.component';
import { LoadingComponent } from './components/loading/loading.component';

// primeng
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {MenuModule} from 'primeng/menu';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';


import {BlockUIModule} from 'primeng/blockui';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { AcctionsComponent } from './components/acctions/acctions.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [SharedComponent,HeaderComponent,AddButtonComponent,FormActionButtonsComponent,AddressComponent,LoadingComponent,ConfirmComponent,AcctionsComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    TieredMenuModule,
    MenuModule,
    ScrollPanelModule,
    SelectButtonModule,
    TableModule,
    CardModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    GoogleMapsModule,
    BlockUIModule,
    DialogModule,
    LeafletModule,
    CheckboxModule
  ],
  exports:[
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    TieredMenuModule,
    MenuModule,
    HeaderComponent,
    ScrollPanelModule,
    AddButtonComponent,
    SelectButtonModule,
    TableModule,
    CardModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    FormActionButtonsComponent,
    GoogleMapsModule,
    AddressComponent,
    LoadingComponent,
    BlockUIModule,
    DialogModule,
    ConfirmComponent,
    AcctionsComponent,
    LeafletModule,
    CheckboxModule
  ]
})
export class SharedModule { }
